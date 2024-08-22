import { parseAndGetSyntaxErrors } from "./parser";
import { IThanosError } from "./ThanosErrorListener";

export default class ThanosLanguageService {
  validate(code: string): IThanosError[] {
    const syntaxErrors: IThanosError[] = parseAndGetSyntaxErrors(code);
    //Later we will append semantic errors
    return syntaxErrors;
  }
}
