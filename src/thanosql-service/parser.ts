import { ThanosParser, ThanosLanguageContext } from "../ANTLR/ThanosParser";
import { ThanosLexer } from "../ANTLR/ThanosLexer";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import ThanosErrorListener, { IThanosError } from "./ThanosErrorListener";

export default function parse(code: string): {
  ast: ThanosLanguageContext;
  errors: IThanosError[];
} {
  const inputStream = CharStreams.fromString(code);
  const lexer = new ThanosLexer(inputStream);
  lexer.removeErrorListeners();
  const thanosErrorsListener = new ThanosErrorListener();
  lexer.addErrorListener(thanosErrorsListener);

  const tokenStream = new CommonTokenStream(lexer);
  const parser = new ThanosParser(tokenStream);
  parser.removeErrorListeners();
  parser.addErrorListener(thanosErrorsListener);

  const ast = parser.thanosLanguage();
  const errors: IThanosError[] = thanosErrorsListener.getErrors();

  return { ast, errors };
}

export function parseAndGetASTRoot(code: string): ThanosLanguageContext {
  const { ast } = parse(code);
  return ast;
}

export function parseAndGetSyntaxErrors(code: string): IThanosError[] {
  const { errors } = parse(code);
  return errors;
}
