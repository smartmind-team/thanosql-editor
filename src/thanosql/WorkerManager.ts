import * as monaco from "monaco-editor-core";

import Uri = monaco.Uri;
import { ThanosWorker } from "./ThanosWorker";
import { languageID } from "./config";

export class WorkerManager {
  private worker: monaco.editor.MonacoWebWorker<ThanosWorker>;
  private workerClientProxy: Promise<ThanosWorker>;

  constructor() {
    this.worker = null;
  }

  private getClientProxy(): Promise<ThanosWorker> {
    if (!this.workerClientProxy) {
      this.worker = monaco.editor.createWebWorker<ThanosWorker>({
        // module that exports the create() method and returns a `JSONWorker` instance
        moduleId: "thanosWorker",
        label: languageID,
        // passed in to the create() method
        createData: {
          languageId: languageID,
        },
      });

      this.workerClientProxy = <Promise<ThanosWorker>>(
        (<any>this.worker.getProxy())
      );
    }

    return this.workerClientProxy;
  }

  async getLanguageServiceWorker(...resources: Uri[]): Promise<ThanosWorker> {
    const _client: ThanosWorker = await this.getClientProxy();
    await this.worker.withSyncedResources(resources);
    return _client;
  }
}
