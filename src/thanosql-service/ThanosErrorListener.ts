import { ErrorListener, RecognitionException, Recognizer } from "antlr4";

export interface IThanosError {
  startLineNumber: number;
  startColumn: number;
  endLineNumber: number;
  endColumn: number;
  message: string;
  code: string;
}

export default class ThanosErrorListener implements ErrorListener<any> {
  private errors: IThanosError[] = [];

  syntaxError(
    recognizer: Recognizer<any>,
    offendingSymbol: any,
    line: number,
    charPositionInLine: number,
    message: string,
    e: RecognitionException | undefined,
  ): void {
    this.errors.push({
      startLineNumber: line,
      endLineNumber: line,
      startColumn: charPositionInLine,
      endColumn: charPositionInLine + 1, //Let's suppose the length of the error is only 1 char for simplicity
      message,
      code: "1", // This the error code you can customize them as you want
    });
  }

  reportAmbiguity() {}
  reportAttemptingFullContext() {}
  reportContextSensitivity() {}
  getErrors(): IThanosError[] {
    return this.errors;
  }
}
