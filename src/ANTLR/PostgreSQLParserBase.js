/*
PostgreSQL grammar.
The MIT License (MIT).
Copyright (c) 2021-2023, Oleksii Kovalov (Oleksii.Kovalov@outlook.com).
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

import { Parser, CharStreams, CommonTokenStream } from "antlr4";
import PostgreSQLParser from "./PostgreSQLParser";
import PostgreSQLLexer from "./PostgreSQLLexer";
import ThanoSQLErrorListener from "../thanosql-service/ThanosErrorListener";
export default class PostgreSQLParserBase extends Parser {
  constructor(input) {
    super(input);
    this.errorListener = new ThanoSQLErrorListener();
  }

  errorListener;
  GetParsedSqlTree(script, line) {
    const ph = this.getPostgreSQLParser(script);
    const result = ph.root();
    return result;
  }

  ParseRoutineBody(_localctx) {
    let lang = null;
    for (let coi of _localctx.createfunc_opt_item()) {
      if (coi.LANGUAGE() != null) {
        if (coi.nonreservedword_or_sconst() != null)
          if (coi.nonreservedword_or_sconst().nonreservedword() != null)
            if (coi.nonreservedword_or_sconst().nonreservedword().identifier() != null)
              if (coi.nonreservedword_or_sconst().nonreservedword().identifier().Identifier() != null) {
                lang = coi.nonreservedword_or_sconst().nonreservedword().identifier().Identifier().getText();
                break;
              }
      }
    }
    if (null == lang) return;
    let func_as = null;
    for (let a of _localctx.createfunc_opt_item()) {
      if (a.func_as() != null) {
        func_as = a;
        break;
      }
    }
    if (func_as != null) {
      let txt = GetRoutineBodyString(func_as.func_as().sconst(0));
      const ph = this.getPostgreSQLParser(txt);
      switch (lang) {
        case "plpgsql":
          func_as.func_as().Definition = ph.plsqlroot();
          break;
        case "sql":
          func_as.func_as().Definition = ph.root();
          break;
      }
    }
  }

  TrimQuotes(s) {
    return s == null || s.length === 0 ? s : s.substring(1, s.length() - 1);
  }

  unquote(s) {
    let slength = s.length();
    let r = new Array(slength);
    let i = 0;
    while (i < slength) {
      let c = s?.[i];
      r.push(c);
      if (c == "'" && i < slength - 1 && s?.[i + 1] == "'") i++;
      i++;
    }
    return r.join("");
  }

  GetRoutineBodyString(rule) {
    const anysconst = rule.anysconst();
    const StringConstant = anysconst.StringConstant();
    if (null != StringConstant) return this.unquote(this.TrimQuotes(StringConstant.getText()));
    const UnicodeEscapeStringConstant = anysconst.UnicodeEscapeStringConstant();
    if (null != UnicodeEscapeStringConstant) return this.TrimQuotes(UnicodeEscapeStringConstant.getText());
    const EscapeStringConstant = anysconst.EscapeStringConstant();
    if (null != EscapeStringConstant) return this.TrimQuotes(EscapeStringConstant.getText());
    let result = "";
    const dollartext = anysconst.DollarText();
    for (let s of dollartext) {
      result += s.getText();
    }
    return result;
  }

  getPostgreSQLParser(script) {
    const charStream = CharStreams.fromString(script);
    const lexer = new PostgreSQLLexer(charStream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new PostgreSQLParser(tokens);
    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    lexer.addErrorListener(this.errorListener);
    parser.addErrorListener(this.errorListener);
    return parser;
  }
}
