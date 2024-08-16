import PostgreSQLParser from "@/ANTLR/PostgreSQLParser";

export function parse(code: string) {
  const parser = new PostgreSQLParser();
  const ast = parser.GetParsedSqlTree(code);
  const errors = parser.errorListener.getErrors();
  return { ast, errors };
}

export function parseAndGetASTRoot(code: string) {
  const { ast } = parse(code);
  return ast;
}

export function parseAndGetSyntaxErrors(code: string) {
  const { errors } = parse(code);
  return errors;
}
