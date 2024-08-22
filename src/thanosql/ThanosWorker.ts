import * as monaco from "monaco-editor-core";

import IWorkerContext = monaco.worker.IWorkerContext;
import ThanosLanguageService from "@/thanosql-service/ThanosLanguageService";
import { IThanosError } from "@/thanosql-service/ThanosErrorListener";

export class ThanosWorker {
  private _ctx: IWorkerContext;
  private languageService: ThanosLanguageService;

  constructor(ctx: IWorkerContext) {
    this._ctx = ctx;
    this.languageService = new ThanosLanguageService();
  }

  doValidation(uri: string): Promise<IThanosError[]> {
    const code = this.getTextDocuments(uri);
    return Promise.resolve(this.languageService.validate(code));
  }

  private getTextDocuments(uri: string): string {
    const model = this._ctx.getMirrorModels().find(model => model.uri.toString() === uri); // When there are multiple files open, this will be an array
    return model.getValue();
  }
}

export default ThanosWorker;
