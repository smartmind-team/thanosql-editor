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

import { Lexer } from "antlr4";
import PostgreSQLLexer from "./PostgreSQLLexer";
export default class PostgreSQLLexerBase extends Lexer {
  tags = [];

  constructor(input) {
    super(input);
  }

  pushTag() {
    tags.push(this.text);
  }

  isTag() {
    return this.text === tags?.[0];
  }

  popTag() {
    tags.pop();
  }

  checkLA(c) {
    return this.inputStream.LA(1) != c;
  }

  charIsLetter() {
    return this.inputStream.LA(-1).toLowerCase() != this.inputStream.LA(-1).toUpperCase();
  }

  HandleNumericFail() {
    if (this.constructor === PostgreSQLLexerBase) {
      throw new Error("Class is of abstract type and can't be instantiated");
    }
    this.inputStream.seek(this.inputStream.index - 2);
    type = PostgreSQLLexer.Integral;
  }

  HandleLessLessGreaterGreater() {
    if (this.inputStream.getText() == "<<") type = PostgreSQLLexer.LESS_LESS;
    if (this.inputStream.getText() == ">>") type = PostgreSQLLexer.GREATER_GREATER;
  }

  // UnterminatedBlockCommentDebugAssert() {
  //     //Debug.Assert(InputStream.LA(1) == -1 /*EOF*/);
  // }

  CheckIfUtf32Letter() {
    codePoint = this.inputStream.LA(-2) << (8 + this.inputStream.LA(-1));
    let c = [];
    if (codePoint < 0x10000) {
      c = [codePoint];
    } else {
      codePoint -= 0x10000;
      c = [codePoint / 0x400 + 0xd800, (codePoint % 0x400) + 0xdc00];
    }
    return this.charIsLetter(c[0]);
  }
}
