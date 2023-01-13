import * as monaco from "monaco-editor-core";

import IWorkerContext = monaco.worker.IWorkerContext;
import ThanosLanguageService from "../thanosql-service/ThanosLanguageService";
import { IThanosError } from "../thanosql-service/ThanosErrorListener";

export class ThanosWorker {
  private _ctx: IWorkerContext;
  private languageService: ThanosLanguageService;

  constructor(ctx: IWorkerContext) {
    this._ctx = ctx;
    this.languageService = new ThanosLanguageService();
  }

  doValidation(): Promise<IThanosError[]> {
    const code = this.getTextDocument();
    return Promise.resolve(this.languageService.validate(code));
  }

  private getTextDocument(): string {
    const model = this._ctx.getMirrorModels()[0]; // When there are multiple files open, this will be an array
    return model.getValue();
  }
}
