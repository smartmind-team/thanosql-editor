import { monaco } from "@/index";

import ThanosLanguageService from "@/thanosql-service/ThanosLanguageService";
import { IThanosError } from "@/thanosql-service/ThanosErrorListener";

export class ThanosWorker {
  private _ctx: monaco.worker.IWorkerContext;
  private languageService: ThanosLanguageService;

  constructor(ctx: monaco.worker.IWorkerContext) {
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
