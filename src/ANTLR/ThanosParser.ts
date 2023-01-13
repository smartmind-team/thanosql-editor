// Generated from ./.antlr/ThanosParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ThanosParserListener } from "./ThanosParserListener";

export class ThanosParser extends Parser {
  public static readonly INSERT = 1;
  public static readonly CREATE = 2;
  public static readonly EXISTS = 3;
  public static readonly SELECT = 4;
  public static readonly COPY = 5;
  public static readonly DATASET = 6;
  public static readonly TUTORIAL = 7;
  public static readonly PREPROCESS = 8;
  public static readonly UPDATE = 9;
  public static readonly DELETE = 10;
  public static readonly TABLE = 11;
  public static readonly FROM = 12;
  public static readonly BUILD = 13;
  public static readonly MODEL = 14;
  public static readonly PREDICT = 15;
  public static readonly EVALUATE = 16;
  public static readonly TRANSFORM = 17;
  public static readonly FIT = 18;
  public static readonly UPLOAD = 19;
  public static readonly SEARCH = 20;
  public static readonly CONVERT = 21;
  public static readonly IMAGE = 22;
  public static readonly AUDIO = 23;
  public static readonly VIDEO = 24;
  public static readonly KEYWORD = 25;
  public static readonly TEXT = 26;
  public static readonly LIST = 27;
  public static readonly THANOSQL = 28;
  public static readonly GET = 29;
  public static readonly USING = 30;
  public static readonly OPTIONS = 31;
  public static readonly PRINT = 32;
  public static readonly AS = 33;
  public static readonly BY = 34;
  public static readonly IDENTIFIER = 35;
  public static readonly NAME = 36;
  public static readonly OPERATOR_SPECIAL = 37;
  public static readonly COLON = 38;
  public static readonly SEMI_COLON = 39;
  public static readonly COMMA = 40;
  public static readonly EQUAL = 41;
  public static readonly LEFT_PAREN = 42;
  public static readonly RIGHT_PAREN = 43;
  public static readonly LEFT_SQURE = 44;
  public static readonly RIGHT_SQURE = 45;
  public static readonly DIVIDE = 46;
  public static readonly MULTIPLY = 47;
  public static readonly DOT = 48;
  public static readonly LT = 49;
  public static readonly GT = 50;
  public static readonly MINUS = 51;
  public static readonly WS = 52;
  public static readonly RULE_thanosLanguage = 0;
  public static readonly RULE_thanosQuery = 1;
  public static readonly RULE_thanosStmt = 2;
  public static readonly RULE_thanosSubquery = 3;
  public static readonly RULE_thanosBuildStmt = 4;
  public static readonly RULE_thanosBuildModelStmt = 5;
  public static readonly RULE_thanosFitStmt = 6;
  public static readonly RULE_thanosModelStmt = 7;
  public static readonly RULE_thanosUploadStmt = 8;
  public static readonly RULE_thanosUploadModelStmt = 9;
  public static readonly RULE_thanosDeleteStmt = 10;
  public static readonly RULE_thanosTransformStmt = 11;
  public static readonly RULE_thanosPredictStmt = 12;
  public static readonly RULE_thanosEvaluateStmt = 13;
  public static readonly RULE_thanosCreateStmt = 14;
  public static readonly RULE_thanosConvertStmt = 15;
  public static readonly RULE_thanosSearchStmt = 16;
  public static readonly RULE_thanosSearchImageStmt = 17;
  public static readonly RULE_thanosSearchAudioStmt = 18;
  public static readonly RULE_thanosSearchVideoStmt = 19;
  public static readonly RULE_thanosSearchKeywordStmt = 20;
  public static readonly RULE_thanosSearchTextStmt = 21;
  public static readonly RULE_thanosPreprocessStmt = 22;
  public static readonly RULE_thanosPreprocessTextStmt = 23;
  public static readonly RULE_thanosPreprocessImageStmt = 24;
  public static readonly RULE_thanosPreprocessAudioStmt = 25;
  public static readonly RULE_thanosPreprocessVideoStmt = 26;
  public static readonly RULE_thanosPrintStmt = 27;
  public static readonly RULE_thanosPrintImageStmt = 28;
  public static readonly RULE_thanosPrintAudioStmt = 29;
  public static readonly RULE_thanosPrintVideoStmt = 30;
  public static readonly RULE_thanosCopyStmt = 31;
  public static readonly RULE_thanosListStmt = 32;
  public static readonly RULE_thanosListTableStmt = 33;
  public static readonly RULE_thanosListModelStmt = 34;
  public static readonly RULE_thanosListThanoSQLModelStmt = 35;
  public static readonly RULE_thanosListThanoSQLTutorialStmt = 36;
  public static readonly RULE_thanosListThanoSQLDatasetStmt = 37;
  public static readonly RULE_thanosGetStmt = 38;
  public static readonly RULE_thanosGetThanoSQLModelStmt = 39;
  public static readonly RULE_thanosGetThanoSQLDatasetStmt = 40;
  public static readonly RULE_thanosUsingModelStmt = 41;
  public static readonly RULE_thanosUsingMethodStmt = 42;
  public static readonly RULE_thanosOptionStmt = 43;
  public static readonly RULE_normalSubquery = 44;
  public static readonly RULE_normalStmt = 45;
  public static readonly RULE_remaining = 46;
  public static readonly RULE_normalParenException = 47;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    "thanosLanguage",
    "thanosQuery",
    "thanosStmt",
    "thanosSubquery",
    "thanosBuildStmt",
    "thanosBuildModelStmt",
    "thanosFitStmt",
    "thanosModelStmt",
    "thanosUploadStmt",
    "thanosUploadModelStmt",
    "thanosDeleteStmt",
    "thanosTransformStmt",
    "thanosPredictStmt",
    "thanosEvaluateStmt",
    "thanosCreateStmt",
    "thanosConvertStmt",
    "thanosSearchStmt",
    "thanosSearchImageStmt",
    "thanosSearchAudioStmt",
    "thanosSearchVideoStmt",
    "thanosSearchKeywordStmt",
    "thanosSearchTextStmt",
    "thanosPreprocessStmt",
    "thanosPreprocessTextStmt",
    "thanosPreprocessImageStmt",
    "thanosPreprocessAudioStmt",
    "thanosPreprocessVideoStmt",
    "thanosPrintStmt",
    "thanosPrintImageStmt",
    "thanosPrintAudioStmt",
    "thanosPrintVideoStmt",
    "thanosCopyStmt",
    "thanosListStmt",
    "thanosListTableStmt",
    "thanosListModelStmt",
    "thanosListThanoSQLModelStmt",
    "thanosListThanoSQLTutorialStmt",
    "thanosListThanoSQLDatasetStmt",
    "thanosGetStmt",
    "thanosGetThanoSQLModelStmt",
    "thanosGetThanoSQLDatasetStmt",
    "thanosUsingModelStmt",
    "thanosUsingMethodStmt",
    "thanosOptionStmt",
    "normalSubquery",
    "normalStmt",
    "remaining",
    "normalParenException",
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "'IMAGE'",
    "'AUDIO'",
    "'VIDEO'",
    "'KEYWORD'",
    "'TEXT'",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "':'",
    "';'",
    "','",
    "'='",
    "'('",
    "')'",
    "'['",
    "']'",
    "'/'",
    "'*'",
    "'.'",
    "'<'",
    "'>'",
    "'-'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    "INSERT",
    "CREATE",
    "EXISTS",
    "SELECT",
    "COPY",
    "DATASET",
    "TUTORIAL",
    "PREPROCESS",
    "UPDATE",
    "DELETE",
    "TABLE",
    "FROM",
    "BUILD",
    "MODEL",
    "PREDICT",
    "EVALUATE",
    "TRANSFORM",
    "FIT",
    "UPLOAD",
    "SEARCH",
    "CONVERT",
    "IMAGE",
    "AUDIO",
    "VIDEO",
    "KEYWORD",
    "TEXT",
    "LIST",
    "THANOSQL",
    "GET",
    "USING",
    "OPTIONS",
    "PRINT",
    "AS",
    "BY",
    "IDENTIFIER",
    "NAME",
    "OPERATOR_SPECIAL",
    "COLON",
    "SEMI_COLON",
    "COMMA",
    "EQUAL",
    "LEFT_PAREN",
    "RIGHT_PAREN",
    "LEFT_SQURE",
    "RIGHT_SQURE",
    "DIVIDE",
    "MULTIPLY",
    "DOT",
    "LT",
    "GT",
    "MINUS",
    "WS",
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    ThanosParser._LITERAL_NAMES,
    ThanosParser._SYMBOLIC_NAMES,
    []
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return ThanosParser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return "ThanosParser.g4";
  }

  // @Override
  public get ruleNames(): string[] {
    return ThanosParser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return ThanosParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(ThanosParser._ATN, this);
  }
  // @RuleVersion(0)
  public thanosLanguage(): ThanosLanguageContext {
    let _localctx: ThanosLanguageContext = new ThanosLanguageContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 0, ThanosParser.RULE_thanosLanguage);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 96;
        this.thanosQuery();
        this.state = 97;
        this.match(ThanosParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosQuery(): ThanosQueryContext {
    let _localctx: ThanosQueryContext = new ThanosQueryContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 2, ThanosParser.RULE_thanosQuery);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 99;
        this.normalStmt();
        this.state = 105;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ThanosParser.CREATE) |
                (1 << ThanosParser.COPY) |
                (1 << ThanosParser.PREPROCESS) |
                (1 << ThanosParser.DELETE) |
                (1 << ThanosParser.FROM) |
                (1 << ThanosParser.BUILD) |
                (1 << ThanosParser.PREDICT) |
                (1 << ThanosParser.EVALUATE) |
                (1 << ThanosParser.TRANSFORM) |
                (1 << ThanosParser.FIT) |
                (1 << ThanosParser.UPLOAD) |
                (1 << ThanosParser.SEARCH) |
                (1 << ThanosParser.CONVERT) |
                (1 << ThanosParser.LIST) |
                (1 << ThanosParser.GET))) !==
              0) ||
          _la === ThanosParser.PRINT ||
          _la === ThanosParser.LEFT_PAREN
        ) {
          {
            {
              this.state = 100;
              this.thanosStmt();
              this.state = 101;
              this.normalStmt();
            }
          }
          this.state = 107;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosStmt(): ThanosStmtContext {
    let _localctx: ThanosStmtContext = new ThanosStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 4, ThanosParser.RULE_thanosStmt);
    try {
      this.state = 125;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ThanosParser.BUILD:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 108;
            this.thanosBuildStmt();
          }
          break;
        case ThanosParser.FIT:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 109;
            this.thanosFitStmt();
          }
          break;
        case ThanosParser.UPLOAD:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 110;
            this.thanosUploadStmt();
          }
          break;
        case ThanosParser.DELETE:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 111;
            this.thanosDeleteStmt();
          }
          break;
        case ThanosParser.TRANSFORM:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 112;
            this.thanosTransformStmt();
          }
          break;
        case ThanosParser.PREDICT:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 113;
            this.thanosPredictStmt();
          }
          break;
        case ThanosParser.EVALUATE:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 114;
            this.thanosEvaluateStmt();
          }
          break;
        case ThanosParser.CREATE:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 115;
            this.thanosCreateStmt();
          }
          break;
        case ThanosParser.CONVERT:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 116;
            this.thanosConvertStmt();
          }
          break;
        case ThanosParser.SEARCH:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 117;
            this.thanosSearchStmt();
          }
          break;
        case ThanosParser.PREPROCESS:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 118;
            this.thanosPreprocessStmt();
          }
          break;
        case ThanosParser.PRINT:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 119;
            this.thanosPrintStmt();
          }
          break;
        case ThanosParser.COPY:
          this.enterOuterAlt(_localctx, 13);
          {
            this.state = 120;
            this.thanosCopyStmt();
          }
          break;
        case ThanosParser.LIST:
          this.enterOuterAlt(_localctx, 14);
          {
            this.state = 121;
            this.thanosListStmt();
          }
          break;
        case ThanosParser.GET:
          this.enterOuterAlt(_localctx, 15);
          {
            this.state = 122;
            this.thanosGetStmt();
          }
          break;
        case ThanosParser.LEFT_PAREN:
          this.enterOuterAlt(_localctx, 16);
          {
            this.state = 123;
            this.normalParenException();
          }
          break;
        case ThanosParser.FROM:
          this.enterOuterAlt(_localctx, 17);
          {
            this.state = 124;
            this.normalSubquery();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosSubquery(): ThanosSubqueryContext {
    let _localctx: ThanosSubqueryContext = new ThanosSubqueryContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 6, ThanosParser.RULE_thanosSubquery);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 127;
        this.match(ThanosParser.LEFT_PAREN);
        this.state = 128;
        this.thanosQuery();
        this.state = 129;
        this.match(ThanosParser.RIGHT_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosBuildStmt(): ThanosBuildStmtContext {
    let _localctx: ThanosBuildStmtContext = new ThanosBuildStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 8, ThanosParser.RULE_thanosBuildStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 131;
        this.match(ThanosParser.BUILD);
        this.state = 132;
        this.thanosBuildModelStmt();
        this.state = 133;
        this.match(ThanosParser.AS);
        this.state = 135;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
          case 1:
            {
              this.state = 134;
              this.thanosSubquery();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosBuildModelStmt(): ThanosBuildModelStmtContext {
    let _localctx: ThanosBuildModelStmtContext =
      new ThanosBuildModelStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, ThanosParser.RULE_thanosBuildModelStmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 137;
        this.match(ThanosParser.MODEL);
        this.state = 138;
        _localctx._user_model_name = this.match(ThanosParser.IDENTIFIER);
        this.state = 139;
        this.match(ThanosParser.USING);
        this.state = 140;
        _localctx._model_class = this.match(ThanosParser.IDENTIFIER);
        this.state = 142;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ThanosParser.OPTIONS) {
          {
            this.state = 141;
            this.thanosOptionStmt();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosFitStmt(): ThanosFitStmtContext {
    let _localctx: ThanosFitStmtContext = new ThanosFitStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 12, ThanosParser.RULE_thanosFitStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 144;
        this.match(ThanosParser.FIT);
        this.state = 145;
        this.thanosModelStmt();
        this.state = 146;
        this.match(ThanosParser.AS);
        this.state = 148;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
          case 1:
            {
              this.state = 147;
              this.thanosSubquery();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosModelStmt(): ThanosModelStmtContext {
    let _localctx: ThanosModelStmtContext = new ThanosModelStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 14, ThanosParser.RULE_thanosModelStmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 150;
        this.match(ThanosParser.MODEL);
        this.state = 151;
        _localctx._user_model_name = this.match(ThanosParser.IDENTIFIER);
        this.state = 153;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ThanosParser.USING) {
          {
            this.state = 152;
            this.thanosUsingModelStmt();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosUploadStmt(): ThanosUploadStmtContext {
    let _localctx: ThanosUploadStmtContext = new ThanosUploadStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 16, ThanosParser.RULE_thanosUploadStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 155;
        this.match(ThanosParser.UPLOAD);
        this.state = 156;
        this.thanosUploadModelStmt();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosUploadModelStmt(): ThanosUploadModelStmtContext {
    let _localctx: ThanosUploadModelStmtContext =
      new ThanosUploadModelStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 18, ThanosParser.RULE_thanosUploadModelStmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 158;
        this.match(ThanosParser.MODEL);
        this.state = 159;
        _localctx._user_model_name = this.match(ThanosParser.IDENTIFIER);
        this.state = 161;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ThanosParser.OPTIONS) {
          {
            this.state = 160;
            this.thanosOptionStmt();
          }
        }

        this.state = 163;
        this.match(ThanosParser.FROM);
        this.state = 164;
        _localctx._path = this.match(ThanosParser.IDENTIFIER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosDeleteStmt(): ThanosDeleteStmtContext {
    let _localctx: ThanosDeleteStmtContext = new ThanosDeleteStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 20, ThanosParser.RULE_thanosDeleteStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 166;
        this.match(ThanosParser.DELETE);
        this.state = 167;
        this.match(ThanosParser.MODEL);
        this.state = 168;
        _localctx._built_model_name = this.match(ThanosParser.IDENTIFIER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosTransformStmt(): ThanosTransformStmtContext {
    let _localctx: ThanosTransformStmtContext = new ThanosTransformStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 22, ThanosParser.RULE_thanosTransformStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 170;
        this.match(ThanosParser.TRANSFORM);
        this.state = 171;
        this.thanosUsingModelStmt();
        this.state = 172;
        this.match(ThanosParser.AS);
        this.state = 174;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
          case 1:
            {
              this.state = 173;
              this.thanosSubquery();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosPredictStmt(): ThanosPredictStmtContext {
    let _localctx: ThanosPredictStmtContext = new ThanosPredictStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 24, ThanosParser.RULE_thanosPredictStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 176;
        this.match(ThanosParser.PREDICT);
        this.state = 177;
        this.thanosUsingModelStmt();
        this.state = 178;
        this.match(ThanosParser.AS);
        this.state = 180;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
          case 1:
            {
              this.state = 179;
              this.thanosSubquery();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosEvaluateStmt(): ThanosEvaluateStmtContext {
    let _localctx: ThanosEvaluateStmtContext = new ThanosEvaluateStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 26, ThanosParser.RULE_thanosEvaluateStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 182;
        this.match(ThanosParser.EVALUATE);
        this.state = 183;
        this.thanosUsingModelStmt();
        this.state = 184;
        this.match(ThanosParser.AS);
        this.state = 186;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
          case 1:
            {
              this.state = 185;
              this.thanosSubquery();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosCreateStmt(): ThanosCreateStmtContext {
    let _localctx: ThanosCreateStmtContext = new ThanosCreateStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 28, ThanosParser.RULE_thanosCreateStmt);
    try {
      this.state = 201;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 188;
            this.match(ThanosParser.CREATE);
            this.state = 189;
            this.match(ThanosParser.TABLE);
            this.state = 190;
            _localctx._user_table_name = this.match(ThanosParser.IDENTIFIER);
            this.state = 191;
            this.thanosUsingModelStmt();
            this.state = 192;
            this.match(ThanosParser.FROM);
            this.state = 193;
            _localctx._path = this.match(ThanosParser.IDENTIFIER);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 195;
            this.match(ThanosParser.CREATE);
            this.state = 196;
            this.match(ThanosParser.TABLE);
            this.state = 197;
            _localctx._user_table_name = this.match(ThanosParser.IDENTIFIER);
            this.state = 198;
            this.thanosUsingModelStmt();
            this.state = 199;
            this.match(ThanosParser.AS);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosConvertStmt(): ThanosConvertStmtContext {
    let _localctx: ThanosConvertStmtContext = new ThanosConvertStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 30, ThanosParser.RULE_thanosConvertStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 203;
        this.match(ThanosParser.CONVERT);
        this.state = 204;
        this.thanosUsingModelStmt();
        this.state = 205;
        this.match(ThanosParser.AS);
        this.state = 207;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
          case 1:
            {
              this.state = 206;
              this.thanosSubquery();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosSearchStmt(): ThanosSearchStmtContext {
    let _localctx: ThanosSearchStmtContext = new ThanosSearchStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 32, ThanosParser.RULE_thanosSearchStmt);
    try {
      this.state = 219;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 209;
            this.match(ThanosParser.SEARCH);
            this.state = 210;
            this.thanosSearchImageStmt();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 211;
            this.match(ThanosParser.SEARCH);
            this.state = 212;
            this.thanosSearchAudioStmt();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 213;
            this.match(ThanosParser.SEARCH);
            this.state = 214;
            this.thanosSearchVideoStmt();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 215;
            this.match(ThanosParser.SEARCH);
            this.state = 216;
            this.thanosSearchKeywordStmt();
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 217;
            this.match(ThanosParser.SEARCH);
            this.state = 218;
            this.thanosSearchTextStmt();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosSearchImageStmt(): ThanosSearchImageStmtContext {
    let _localctx: ThanosSearchImageStmtContext =
      new ThanosSearchImageStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 34, ThanosParser.RULE_thanosSearchImageStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 221;
        this.match(ThanosParser.IMAGE);
        this.state = 222;
        _localctx._variable_type = this.match(ThanosParser.IDENTIFIER);
        this.state = 223;
        this.match(ThanosParser.EQUAL);
        this.state = 224;
        _localctx._variable = this.match(ThanosParser.IDENTIFIER);
        this.state = 227;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case ThanosParser.USING:
            {
              this.state = 225;
              this.thanosUsingModelStmt();
            }
            break;
          case ThanosParser.OPTIONS:
            {
              this.state = 226;
              this.thanosOptionStmt();
            }
            break;
          case ThanosParser.AS:
            break;
          default:
            break;
        }
        this.state = 229;
        this.match(ThanosParser.AS);
        this.state = 231;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
          case 1:
            {
              this.state = 230;
              this.thanosSubquery();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosSearchAudioStmt(): ThanosSearchAudioStmtContext {
    let _localctx: ThanosSearchAudioStmtContext =
      new ThanosSearchAudioStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 36, ThanosParser.RULE_thanosSearchAudioStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 233;
        this.match(ThanosParser.AUDIO);
        this.state = 234;
        _localctx._variable_type = this.match(ThanosParser.IDENTIFIER);
        this.state = 235;
        this.match(ThanosParser.EQUAL);
        this.state = 236;
        _localctx._variable = this.match(ThanosParser.IDENTIFIER);
        this.state = 239;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case ThanosParser.USING:
            {
              this.state = 237;
              this.thanosUsingModelStmt();
            }
            break;
          case ThanosParser.OPTIONS:
            {
              this.state = 238;
              this.thanosOptionStmt();
            }
            break;
          case ThanosParser.AS:
            break;
          default:
            break;
        }
        this.state = 241;
        this.match(ThanosParser.AS);
        this.state = 243;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
          case 1:
            {
              this.state = 242;
              this.thanosSubquery();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosSearchVideoStmt(): ThanosSearchVideoStmtContext {
    let _localctx: ThanosSearchVideoStmtContext =
      new ThanosSearchVideoStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 38, ThanosParser.RULE_thanosSearchVideoStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 245;
        this.match(ThanosParser.VIDEO);
        this.state = 246;
        _localctx._variable_type = this.match(ThanosParser.IDENTIFIER);
        this.state = 247;
        this.match(ThanosParser.EQUAL);
        this.state = 248;
        _localctx._variable = this.match(ThanosParser.IDENTIFIER);
        this.state = 251;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case ThanosParser.USING:
            {
              this.state = 249;
              this.thanosUsingModelStmt();
            }
            break;
          case ThanosParser.OPTIONS:
            {
              this.state = 250;
              this.thanosOptionStmt();
            }
            break;
          case ThanosParser.AS:
            break;
          default:
            break;
        }
        this.state = 253;
        this.match(ThanosParser.AS);
        this.state = 255;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
          case 1:
            {
              this.state = 254;
              this.thanosSubquery();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosSearchKeywordStmt(): ThanosSearchKeywordStmtContext {
    let _localctx: ThanosSearchKeywordStmtContext =
      new ThanosSearchKeywordStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 40, ThanosParser.RULE_thanosSearchKeywordStmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 257;
        this.match(ThanosParser.KEYWORD);
        this.state = 261;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ThanosParser.IDENTIFIER) {
          {
            this.state = 258;
            _localctx._variable_type = this.match(ThanosParser.IDENTIFIER);
            this.state = 259;
            this.match(ThanosParser.EQUAL);
            this.state = 260;
            _localctx._variable = this.match(ThanosParser.IDENTIFIER);
          }
        }

        this.state = 265;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case ThanosParser.USING:
            {
              this.state = 263;
              this.thanosUsingModelStmt();
            }
            break;
          case ThanosParser.OPTIONS:
            {
              this.state = 264;
              this.thanosOptionStmt();
            }
            break;
          case ThanosParser.AS:
            break;
          default:
            break;
        }
        this.state = 267;
        this.match(ThanosParser.AS);
        this.state = 269;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
          case 1:
            {
              this.state = 268;
              this.thanosSubquery();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosSearchTextStmt(): ThanosSearchTextStmtContext {
    let _localctx: ThanosSearchTextStmtContext =
      new ThanosSearchTextStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 42, ThanosParser.RULE_thanosSearchTextStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 271;
        this.match(ThanosParser.TEXT);
        this.state = 272;
        _localctx._variable_type = this.match(ThanosParser.IDENTIFIER);
        this.state = 273;
        this.match(ThanosParser.EQUAL);
        this.state = 274;
        _localctx._variable = this.match(ThanosParser.IDENTIFIER);
        this.state = 277;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case ThanosParser.USING:
            {
              this.state = 275;
              this.thanosUsingModelStmt();
            }
            break;
          case ThanosParser.OPTIONS:
            {
              this.state = 276;
              this.thanosOptionStmt();
            }
            break;
          case ThanosParser.AS:
            break;
          default:
            break;
        }
        this.state = 279;
        this.match(ThanosParser.AS);
        this.state = 281;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
          case 1:
            {
              this.state = 280;
              this.thanosSubquery();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosPreprocessStmt(): ThanosPreprocessStmtContext {
    let _localctx: ThanosPreprocessStmtContext =
      new ThanosPreprocessStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 44, ThanosParser.RULE_thanosPreprocessStmt);
    try {
      this.state = 291;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 283;
            this.match(ThanosParser.PREPROCESS);
            this.state = 284;
            this.thanosPreprocessTextStmt();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 285;
            this.match(ThanosParser.PREPROCESS);
            this.state = 286;
            this.thanosPreprocessImageStmt();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 287;
            this.match(ThanosParser.PREPROCESS);
            this.state = 288;
            this.thanosPreprocessAudioStmt();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 289;
            this.match(ThanosParser.PREPROCESS);
            this.state = 290;
            this.thanosPreprocessVideoStmt();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosPreprocessTextStmt(): ThanosPreprocessTextStmtContext {
    let _localctx: ThanosPreprocessTextStmtContext =
      new ThanosPreprocessTextStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 46, ThanosParser.RULE_thanosPreprocessTextStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 293;
        this.match(ThanosParser.TEXT);
        this.state = 294;
        this.thanosUsingMethodStmt();
        this.state = 295;
        this.match(ThanosParser.FROM);
        this.state = 296;
        _localctx._path = this.match(ThanosParser.IDENTIFIER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosPreprocessImageStmt(): ThanosPreprocessImageStmtContext {
    let _localctx: ThanosPreprocessImageStmtContext =
      new ThanosPreprocessImageStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 48, ThanosParser.RULE_thanosPreprocessImageStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 298;
        this.match(ThanosParser.IMAGE);
        this.state = 299;
        this.thanosUsingMethodStmt();
        this.state = 300;
        this.match(ThanosParser.FROM);
        this.state = 301;
        _localctx._path = this.match(ThanosParser.IDENTIFIER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosPreprocessAudioStmt(): ThanosPreprocessAudioStmtContext {
    let _localctx: ThanosPreprocessAudioStmtContext =
      new ThanosPreprocessAudioStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 50, ThanosParser.RULE_thanosPreprocessAudioStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 303;
        this.match(ThanosParser.AUDIO);
        this.state = 304;
        this.thanosUsingMethodStmt();
        this.state = 305;
        this.match(ThanosParser.FROM);
        this.state = 306;
        _localctx._path = this.match(ThanosParser.IDENTIFIER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosPreprocessVideoStmt(): ThanosPreprocessVideoStmtContext {
    let _localctx: ThanosPreprocessVideoStmtContext =
      new ThanosPreprocessVideoStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 52, ThanosParser.RULE_thanosPreprocessVideoStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 308;
        this.match(ThanosParser.VIDEO);
        this.state = 309;
        this.thanosUsingMethodStmt();
        this.state = 310;
        this.match(ThanosParser.FROM);
        this.state = 311;
        _localctx._path = this.match(ThanosParser.IDENTIFIER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosPrintStmt(): ThanosPrintStmtContext {
    let _localctx: ThanosPrintStmtContext = new ThanosPrintStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 54, ThanosParser.RULE_thanosPrintStmt);
    try {
      this.state = 319;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 313;
            this.match(ThanosParser.PRINT);
            this.state = 314;
            this.thanosPrintImageStmt();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 315;
            this.match(ThanosParser.PRINT);
            this.state = 316;
            this.thanosPrintAudioStmt();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 317;
            this.match(ThanosParser.PRINT);
            this.state = 318;
            this.thanosPrintVideoStmt();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosPrintImageStmt(): ThanosPrintImageStmtContext {
    let _localctx: ThanosPrintImageStmtContext =
      new ThanosPrintImageStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 56, ThanosParser.RULE_thanosPrintImageStmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 321;
        this.match(ThanosParser.IMAGE);
        this.state = 323;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ThanosParser.OPTIONS) {
          {
            this.state = 322;
            this.thanosOptionStmt();
          }
        }

        this.state = 325;
        this.match(ThanosParser.AS);
        this.state = 327;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
          case 1:
            {
              this.state = 326;
              this.thanosSubquery();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosPrintAudioStmt(): ThanosPrintAudioStmtContext {
    let _localctx: ThanosPrintAudioStmtContext =
      new ThanosPrintAudioStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 58, ThanosParser.RULE_thanosPrintAudioStmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 329;
        this.match(ThanosParser.AUDIO);
        this.state = 331;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ThanosParser.OPTIONS) {
          {
            this.state = 330;
            this.thanosOptionStmt();
          }
        }

        this.state = 333;
        this.match(ThanosParser.AS);
        this.state = 335;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
          case 1:
            {
              this.state = 334;
              this.thanosSubquery();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosPrintVideoStmt(): ThanosPrintVideoStmtContext {
    let _localctx: ThanosPrintVideoStmtContext =
      new ThanosPrintVideoStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 60, ThanosParser.RULE_thanosPrintVideoStmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 337;
        this.match(ThanosParser.VIDEO);
        this.state = 339;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ThanosParser.OPTIONS) {
          {
            this.state = 338;
            this.thanosOptionStmt();
          }
        }

        this.state = 341;
        this.match(ThanosParser.AS);
        this.state = 343;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
          case 1:
            {
              this.state = 342;
              this.thanosSubquery();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosCopyStmt(): ThanosCopyStmtContext {
    let _localctx: ThanosCopyStmtContext = new ThanosCopyStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 62, ThanosParser.RULE_thanosCopyStmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 345;
        this.match(ThanosParser.COPY);
        this.state = 346;
        _localctx._user_table_name = this.match(ThanosParser.IDENTIFIER);
        this.state = 348;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ThanosParser.OPTIONS) {
          {
            this.state = 347;
            this.thanosOptionStmt();
          }
        }

        this.state = 350;
        this.match(ThanosParser.FROM);
        this.state = 351;
        _localctx._path = this.match(ThanosParser.IDENTIFIER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosListStmt(): ThanosListStmtContext {
    let _localctx: ThanosListStmtContext = new ThanosListStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 64, ThanosParser.RULE_thanosListStmt);
    try {
      this.state = 363;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 353;
            this.match(ThanosParser.LIST);
            this.state = 354;
            this.thanosListTableStmt();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 355;
            this.match(ThanosParser.LIST);
            this.state = 356;
            this.thanosListModelStmt();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 357;
            this.match(ThanosParser.LIST);
            this.state = 358;
            this.thanosListThanoSQLModelStmt();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 359;
            this.match(ThanosParser.LIST);
            this.state = 360;
            this.thanosListThanoSQLTutorialStmt();
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 361;
            this.match(ThanosParser.LIST);
            this.state = 362;
            this.thanosListThanoSQLDatasetStmt();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosListTableStmt(): ThanosListTableStmtContext {
    let _localctx: ThanosListTableStmtContext = new ThanosListTableStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 66, ThanosParser.RULE_thanosListTableStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 365;
        this.match(ThanosParser.TABLE);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosListModelStmt(): ThanosListModelStmtContext {
    let _localctx: ThanosListModelStmtContext = new ThanosListModelStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 68, ThanosParser.RULE_thanosListModelStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 367;
        this.match(ThanosParser.MODEL);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosListThanoSQLModelStmt(): ThanosListThanoSQLModelStmtContext {
    let _localctx: ThanosListThanoSQLModelStmtContext =
      new ThanosListThanoSQLModelStmtContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      70,
      ThanosParser.RULE_thanosListThanoSQLModelStmt
    );
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 369;
        this.match(ThanosParser.THANOSQL);
        this.state = 370;
        this.match(ThanosParser.MODEL);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosListThanoSQLTutorialStmt(): ThanosListThanoSQLTutorialStmtContext {
    let _localctx: ThanosListThanoSQLTutorialStmtContext =
      new ThanosListThanoSQLTutorialStmtContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      72,
      ThanosParser.RULE_thanosListThanoSQLTutorialStmt
    );
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 372;
        this.match(ThanosParser.THANOSQL);
        this.state = 373;
        this.match(ThanosParser.TUTORIAL);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosListThanoSQLDatasetStmt(): ThanosListThanoSQLDatasetStmtContext {
    let _localctx: ThanosListThanoSQLDatasetStmtContext =
      new ThanosListThanoSQLDatasetStmtContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      74,
      ThanosParser.RULE_thanosListThanoSQLDatasetStmt
    );
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 375;
        this.match(ThanosParser.THANOSQL);
        this.state = 376;
        this.match(ThanosParser.DATASET);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosGetStmt(): ThanosGetStmtContext {
    let _localctx: ThanosGetStmtContext = new ThanosGetStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 76, ThanosParser.RULE_thanosGetStmt);
    try {
      this.state = 382;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 378;
            this.match(ThanosParser.GET);
            this.state = 379;
            this.thanosGetThanoSQLModelStmt();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 380;
            this.match(ThanosParser.GET);
            this.state = 381;
            this.thanosGetThanoSQLDatasetStmt();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosGetThanoSQLModelStmt(): ThanosGetThanoSQLModelStmtContext {
    let _localctx: ThanosGetThanoSQLModelStmtContext =
      new ThanosGetThanoSQLModelStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 78, ThanosParser.RULE_thanosGetThanoSQLModelStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 384;
        this.match(ThanosParser.THANOSQL);
        this.state = 385;
        this.match(ThanosParser.MODEL);
        this.state = 386;
        _localctx._built_model_name = this.match(ThanosParser.IDENTIFIER);
        this.state = 388;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
          case 1:
            {
              this.state = 387;
              this.thanosOptionStmt();
            }
            break;
        }
        this.state = 391;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
          case 1:
            {
              this.state = 390;
              this.match(ThanosParser.AS);
            }
            break;
        }
        this.state = 394;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
          case 1:
            {
              this.state = 393;
              _localctx._user_model_name = this.match(ThanosParser.IDENTIFIER);
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosGetThanoSQLDatasetStmt(): ThanosGetThanoSQLDatasetStmtContext {
    let _localctx: ThanosGetThanoSQLDatasetStmtContext =
      new ThanosGetThanoSQLDatasetStmtContext(this._ctx, this.state);
    this.enterRule(
      _localctx,
      80,
      ThanosParser.RULE_thanosGetThanoSQLDatasetStmt
    );
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 396;
        this.match(ThanosParser.THANOSQL);
        this.state = 397;
        this.match(ThanosParser.DATASET);
        this.state = 398;
        _localctx._dataset_name = this.match(ThanosParser.IDENTIFIER);
        this.state = 400;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
          case 1:
            {
              this.state = 399;
              this.thanosOptionStmt();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosUsingModelStmt(): ThanosUsingModelStmtContext {
    let _localctx: ThanosUsingModelStmtContext =
      new ThanosUsingModelStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 82, ThanosParser.RULE_thanosUsingModelStmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 402;
        this.match(ThanosParser.USING);
        this.state = 403;
        _localctx._built_model_name = this.match(ThanosParser.IDENTIFIER);
        this.state = 405;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ThanosParser.OPTIONS) {
          {
            this.state = 404;
            this.thanosOptionStmt();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosUsingMethodStmt(): ThanosUsingMethodStmtContext {
    let _localctx: ThanosUsingMethodStmtContext =
      new ThanosUsingMethodStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 84, ThanosParser.RULE_thanosUsingMethodStmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 407;
        this.match(ThanosParser.USING);
        this.state = 408;
        _localctx._method_name = this.match(ThanosParser.IDENTIFIER);
        this.state = 410;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ThanosParser.OPTIONS) {
          {
            this.state = 409;
            this.thanosOptionStmt();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public thanosOptionStmt(): ThanosOptionStmtContext {
    let _localctx: ThanosOptionStmtContext = new ThanosOptionStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 86, ThanosParser.RULE_thanosOptionStmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 412;
        this.match(ThanosParser.OPTIONS);
        this.state = 413;
        this.match(ThanosParser.LEFT_PAREN);
        this.state = 414;
        _localctx._IDENTIFIER = this.match(ThanosParser.IDENTIFIER);
        _localctx._paramsKey.push(_localctx._IDENTIFIER);
        this.state = 415;
        this.match(ThanosParser.EQUAL);
        this.state = 416;
        _localctx._IDENTIFIER = this.match(ThanosParser.IDENTIFIER);
        _localctx._paramsValue.push(_localctx._IDENTIFIER);
        this.state = 423;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === ThanosParser.COMMA) {
          {
            {
              this.state = 417;
              this.match(ThanosParser.COMMA);
              this.state = 418;
              _localctx._IDENTIFIER = this.match(ThanosParser.IDENTIFIER);
              _localctx._paramsKey.push(_localctx._IDENTIFIER);
              this.state = 419;
              this.match(ThanosParser.EQUAL);
              this.state = 420;
              _localctx._IDENTIFIER = this.match(ThanosParser.IDENTIFIER);
              _localctx._paramsValue.push(_localctx._IDENTIFIER);
            }
          }
          this.state = 425;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 426;
        this.match(ThanosParser.RIGHT_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public normalSubquery(): NormalSubqueryContext {
    let _localctx: NormalSubqueryContext = new NormalSubqueryContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 88, ThanosParser.RULE_normalSubquery);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 428;
        this.match(ThanosParser.FROM);
        this.state = 429;
        this.thanosSubquery();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public normalStmt(): NormalStmtContext {
    let _localctx: NormalStmtContext = new NormalStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 90, ThanosParser.RULE_normalStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 431;
        this.remaining();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public remaining(): RemainingContext {
    let _localctx: RemainingContext = new RemainingContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 92, ThanosParser.RULE_remaining);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 436;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
        while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1 + 1) {
            {
              {
                this.state = 433;
                this.matchWildcard();
              }
            }
          }
          this.state = 438;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public normalParenException(): NormalParenExceptionContext {
    let _localctx: NormalParenExceptionContext =
      new NormalParenExceptionContext(this._ctx, this.state);
    this.enterRule(_localctx, 94, ThanosParser.RULE_normalParenException);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 439;
        this.match(ThanosParser.LEFT_PAREN);
        this.state = 440;
        this.remaining();
        this.state = 442;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === ThanosParser.LEFT_PAREN) {
          {
            this.state = 441;
            this.normalParenException();
          }
        }

        this.state = 444;
        this.match(ThanosParser.RIGHT_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public static readonly _serializedATN: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x036\u01C1\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x03\x02\x03\x02\x03\x02" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03j\n\x03\f\x03\x0E\x03m\v\x03\x03" +
    "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
    "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x80" +
    "\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x05\x06\x8A\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x91" +
    "\n\x07\x03\b\x03\b\x03\b\x03\b\x05\b\x97\n\b\x03\t\x03\t\x03\t\x05\t\x9C" +
    "\n\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x05\v\xA4\n\v\x03\v\x03\v\x03" +
    "\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x05\r\xB1\n\r\x03\x0E" +
    "\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xB7\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
    "\x0F\x05\x0F\xBD\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
    "\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xCC\n" +
    "\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xD2\n\x11\x03\x12\x03\x12" +
    "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12" +
    "\xDE\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xE6" +
    "\n\x13\x03\x13\x03\x13\x05\x13\xEA\n\x13\x03\x14\x03\x14\x03\x14\x03\x14" +
    "\x03\x14\x03\x14\x05\x14\xF2\n\x14\x03\x14\x03\x14\x05\x14\xF6\n\x14\x03" +
    "\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\xFE\n\x15\x03\x15" +
    "\x03\x15\x05\x15\u0102\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0108" +
    "\n\x16\x03\x16\x03\x16\x05\x16\u010C\n\x16\x03\x16\x03\x16\x05\x16\u0110" +
    "\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0118\n" +
    "\x17\x03\x17\x03\x17\x05\x17\u011C\n\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
    "\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0126\n\x18\x03\x19\x03\x19\x03" +
    "\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03" +
    "\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
    "\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0142\n\x1D\x03\x1E" +
    "\x03\x1E\x05\x1E\u0146\n\x1E\x03\x1E\x03\x1E\x05\x1E\u014A\n\x1E\x03\x1F" +
    "\x03\x1F\x05\x1F\u014E\n\x1F\x03\x1F\x03\x1F\x05\x1F\u0152\n\x1F\x03 " +
    "\x03 \x05 \u0156\n \x03 \x03 \x05 \u015A\n \x03!\x03!\x03!\x05!\u015F" +
    '\n!\x03!\x03!\x03!\x03"\x03"\x03"\x03"\x03"\x03"\x03"\x03"\x03' +
    '"\x03"\x05"\u016E\n"\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x03&\x03&' +
    "\x03&\x03'\x03'\x03'\x03(\x03(\x03(\x03(\x05(\u0181\n(\x03)\x03)\x03" +
    ")\x03)\x05)\u0187\n)\x03)\x05)\u018A\n)\x03)\x05)\u018D\n)\x03*\x03*\x03" +
    "*\x03*\x05*\u0193\n*\x03+\x03+\x03+\x05+\u0198\n+\x03,\x03,\x03,\x05," +
    "\u019D\n,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x07-\u01A8\n-\f" +
    "-\x0E-\u01AB\v-\x03-\x03-\x03.\x03.\x03.\x03/\x03/\x030\x070\u01B5\n0" +
    "\f0\x0E0\u01B8\v0\x031\x031\x031\x051\u01BD\n1\x031\x031\x031\x03\u01B6" +
    "\x02\x022\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
    '\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&' +
    "\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
    "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
    "^\x02`\x02\x02\x02\x02\u01D9\x02b\x03\x02\x02\x02\x04e\x03\x02\x02\x02" +
    "\x06\x7F\x03\x02\x02\x02\b\x81\x03\x02\x02\x02\n\x85\x03\x02\x02\x02\f" +
    "\x8B\x03\x02\x02\x02\x0E\x92\x03\x02\x02\x02\x10\x98\x03\x02\x02\x02\x12" +
    "\x9D\x03\x02\x02\x02\x14\xA0\x03\x02\x02\x02\x16\xA8\x03\x02\x02\x02\x18" +
    "\xAC\x03\x02\x02\x02\x1A\xB2\x03\x02\x02\x02\x1C\xB8\x03\x02\x02\x02\x1E" +
    '\xCB\x03\x02\x02\x02 \xCD\x03\x02\x02\x02"\xDD\x03\x02\x02\x02$\xDF\x03' +
    "\x02\x02\x02&\xEB\x03\x02\x02\x02(\xF7\x03\x02\x02\x02*\u0103\x03\x02" +
    "\x02\x02,\u0111\x03\x02\x02\x02.\u0125\x03\x02\x02\x020\u0127\x03\x02" +
    "\x02\x022\u012C\x03\x02\x02\x024\u0131\x03\x02\x02\x026\u0136\x03\x02" +
    "\x02\x028\u0141\x03\x02\x02\x02:\u0143\x03\x02\x02\x02<\u014B\x03\x02" +
    "\x02\x02>\u0153\x03\x02\x02\x02@\u015B\x03\x02\x02\x02B\u016D\x03\x02" +
    "\x02\x02D\u016F\x03\x02\x02\x02F\u0171\x03\x02\x02\x02H\u0173\x03\x02" +
    "\x02\x02J\u0176\x03\x02\x02\x02L\u0179\x03\x02\x02\x02N\u0180\x03\x02" +
    "\x02\x02P\u0182\x03\x02\x02\x02R\u018E\x03\x02\x02\x02T\u0194\x03\x02" +
    "\x02\x02V\u0199\x03\x02\x02\x02X\u019E\x03\x02\x02\x02Z\u01AE\x03\x02" +
    "\x02\x02\\\u01B1\x03\x02\x02\x02^\u01B6\x03\x02\x02\x02`\u01B9\x03\x02" +
    "\x02\x02bc\x05\x04\x03\x02cd\x07\x02\x02\x03d\x03\x03\x02\x02\x02ek\x05" +
    "\\/\x02fg\x05\x06\x04\x02gh\x05\\/\x02hj\x03\x02\x02\x02if\x03\x02\x02" +
    "\x02jm\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02l\x05\x03\x02" +
    "\x02\x02mk\x03\x02\x02\x02n\x80\x05\n\x06\x02o\x80\x05\x0E\b\x02p\x80" +
    "\x05\x12\n\x02q\x80\x05\x16\f\x02r\x80\x05\x18\r\x02s\x80\x05\x1A\x0E" +
    "\x02t\x80\x05\x1C\x0F\x02u\x80\x05\x1E\x10\x02v\x80\x05 \x11\x02w\x80" +
    '\x05"\x12\x02x\x80\x05.\x18\x02y\x80\x058\x1D\x02z\x80\x05@!\x02{\x80' +
    '\x05B"\x02|\x80\x05N(\x02}\x80\x05`1\x02~\x80\x05Z.\x02\x7Fn\x03\x02' +
    "\x02\x02\x7Fo\x03\x02\x02\x02\x7Fp\x03\x02\x02\x02\x7Fq\x03\x02\x02\x02" +
    "\x7Fr\x03\x02\x02\x02\x7Fs\x03\x02\x02\x02\x7Ft\x03\x02\x02\x02\x7Fu\x03" +
    "\x02\x02\x02\x7Fv\x03\x02\x02\x02\x7Fw\x03\x02\x02\x02\x7Fx\x03\x02\x02" +
    "\x02\x7Fy\x03\x02\x02\x02\x7Fz\x03\x02\x02\x02\x7F{\x03\x02\x02\x02\x7F" +
    "|\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x7F~\x03\x02\x02\x02\x80\x07\x03" +
    "\x02\x02\x02\x81\x82\x07,\x02\x02\x82\x83\x05\x04\x03\x02\x83\x84\x07" +
    "-\x02\x02\x84\t\x03\x02\x02\x02\x85\x86\x07\x0F\x02\x02\x86\x87\x05\f" +
    "\x07\x02\x87\x89\x07#\x02\x02\x88\x8A\x05\b\x05\x02\x89\x88\x03\x02\x02" +
    "\x02\x89\x8A\x03\x02\x02\x02\x8A\v\x03\x02\x02\x02\x8B\x8C\x07\x10\x02" +
    "\x02\x8C\x8D\x07%\x02\x02\x8D\x8E\x07 \x02\x02\x8E\x90\x07%\x02\x02\x8F" +
    "\x91\x05X-\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\r\x03" +
    "\x02\x02\x02\x92\x93\x07\x14\x02\x02\x93\x94\x05\x10\t\x02\x94\x96\x07" +
    "#\x02\x02\x95\x97\x05\b\x05\x02\x96\x95\x03\x02\x02\x02\x96\x97\x03\x02" +
    "\x02\x02\x97\x0F\x03\x02\x02\x02\x98\x99\x07\x10\x02\x02\x99\x9B\x07%" +
    "\x02\x02\x9A\x9C\x05T+\x02\x9B\x9A\x03\x02\x02\x02\x9B\x9C\x03\x02\x02" +
    "\x02\x9C\x11\x03\x02\x02\x02\x9D\x9E\x07\x15\x02\x02\x9E\x9F\x05\x14\v" +
    "\x02\x9F\x13\x03\x02\x02\x02\xA0\xA1\x07\x10\x02\x02\xA1\xA3\x07%\x02" +
    "\x02\xA2\xA4\x05X-\x02\xA3\xA2\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02" +
    "\xA4\xA5\x03\x02\x02\x02\xA5\xA6\x07\x0E\x02\x02\xA6\xA7\x07%\x02\x02" +
    "\xA7\x15\x03\x02\x02\x02\xA8\xA9\x07\f\x02\x02\xA9\xAA\x07\x10\x02\x02" +
    "\xAA\xAB\x07%\x02\x02\xAB\x17\x03\x02\x02\x02\xAC\xAD\x07\x13\x02\x02" +
    "\xAD\xAE\x05T+\x02\xAE\xB0\x07#\x02\x02\xAF\xB1\x05\b\x05\x02\xB0\xAF" +
    "\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\x19\x03\x02\x02\x02\xB2\xB3" +
    "\x07\x11\x02\x02\xB3\xB4\x05T+\x02\xB4\xB6\x07#\x02\x02\xB5\xB7\x05\b" +
    "\x05\x02\xB6\xB5\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\x1B\x03\x02" +
    "\x02\x02\xB8\xB9\x07\x12\x02\x02\xB9\xBA\x05T+\x02\xBA\xBC\x07#\x02\x02" +
    "\xBB\xBD\x05\b\x05\x02\xBC\xBB\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02" +
    "\xBD\x1D\x03\x02\x02\x02\xBE\xBF\x07\x04\x02\x02\xBF\xC0\x07\r\x02\x02" +
    "\xC0\xC1\x07%\x02\x02\xC1\xC2\x05T+\x02\xC2\xC3\x07\x0E\x02\x02\xC3\xC4" +
    "\x07%\x02\x02\xC4\xCC\x03\x02\x02\x02\xC5\xC6\x07\x04\x02\x02\xC6\xC7" +
    "\x07\r\x02\x02\xC7\xC8\x07%\x02\x02\xC8\xC9\x05T+\x02\xC9\xCA\x07#\x02" +
    "\x02\xCA\xCC\x03\x02\x02\x02\xCB\xBE\x03\x02\x02\x02\xCB\xC5\x03\x02\x02" +
    "\x02\xCC\x1F\x03\x02\x02\x02\xCD\xCE\x07\x17\x02\x02\xCE\xCF\x05T+\x02" +
    "\xCF\xD1\x07#\x02\x02\xD0\xD2\x05\b\x05\x02\xD1\xD0\x03\x02\x02\x02\xD1" +
    "\xD2\x03\x02\x02\x02\xD2!\x03\x02\x02\x02\xD3\xD4\x07\x16\x02\x02\xD4" +
    "\xDE\x05$\x13\x02\xD5\xD6\x07\x16\x02\x02\xD6\xDE\x05&\x14\x02\xD7\xD8" +
    "\x07\x16\x02\x02\xD8\xDE\x05(\x15\x02\xD9\xDA\x07\x16\x02\x02\xDA\xDE" +
    "\x05*\x16\x02\xDB\xDC\x07\x16\x02\x02\xDC\xDE\x05,\x17\x02\xDD\xD3\x03" +
    "\x02\x02\x02\xDD\xD5\x03\x02\x02\x02\xDD\xD7\x03\x02\x02\x02\xDD\xD9\x03" +
    "\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE#\x03\x02\x02\x02\xDF\xE0\x07" +
    "\x18\x02\x02\xE0\xE1\x07%\x02\x02\xE1\xE2\x07+\x02\x02\xE2\xE5\x07%\x02" +
    "\x02\xE3\xE6\x05T+\x02\xE4\xE6\x05X-\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE4" +
    "\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE9" +
    "\x07#\x02\x02\xE8\xEA\x05\b\x05\x02\xE9\xE8\x03\x02\x02\x02\xE9\xEA\x03" +
    "\x02\x02\x02\xEA%\x03\x02\x02\x02\xEB\xEC\x07\x19\x02\x02\xEC\xED\x07" +
    "%\x02\x02\xED\xEE\x07+\x02\x02\xEE\xF1\x07%\x02\x02\xEF\xF2\x05T+\x02" +
    "\xF0\xF2\x05X-\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF0\x03\x02\x02\x02\xF1" +
    "\xF2\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF5\x07#\x02\x02\xF4" +
    "\xF6\x05\b\x05\x02\xF5\xF4\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6" +
    "'\x03\x02\x02\x02\xF7\xF8\x07\x1A\x02\x02\xF8\xF9\x07%\x02\x02\xF9\xFA" +
    "\x07+\x02\x02\xFA\xFD\x07%\x02\x02\xFB\xFE\x05T+\x02\xFC\xFE\x05X-\x02" +
    "\xFD\xFB\x03\x02\x02\x02\xFD\xFC\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02" +
    "\xFE\xFF\x03\x02\x02\x02\xFF\u0101\x07#\x02\x02\u0100\u0102\x05\b\x05" +
    "\x02\u0101\u0100\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102)\x03" +
    "\x02\x02\x02\u0103\u0107\x07\x1B\x02\x02\u0104\u0105\x07%\x02\x02\u0105" +
    "\u0106\x07+\x02\x02\u0106\u0108\x07%\x02\x02\u0107\u0104\x03\x02\x02\x02" +
    "\u0107\u0108\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02\u0109\u010C\x05" +
    "T+\x02\u010A\u010C\x05X-\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010A\x03" +
    "\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D" +
    "\u010F\x07#\x02\x02\u010E\u0110\x05\b\x05\x02\u010F\u010E\x03\x02\x02" +
    "\x02\u010F\u0110\x03\x02\x02\x02\u0110+\x03\x02\x02\x02\u0111\u0112\x07" +
    "\x1C\x02\x02\u0112\u0113\x07%\x02\x02\u0113\u0114\x07+\x02\x02\u0114\u0117" +
    "\x07%\x02\x02\u0115\u0118\x05T+\x02\u0116\u0118\x05X-\x02\u0117\u0115" +
    "\x03\x02\x02\x02\u0117\u0116\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02" +
    "\u0118\u0119\x03\x02\x02\x02\u0119\u011B\x07#\x02\x02\u011A\u011C\x05" +
    "\b\x05\x02\u011B\u011A\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C" +
    "-\x03\x02\x02\x02\u011D\u011E\x07\n\x02\x02\u011E\u0126\x050\x19\x02\u011F" +
    "\u0120\x07\n\x02\x02\u0120\u0126\x052\x1A\x02\u0121\u0122\x07\n\x02\x02" +
    "\u0122\u0126\x054\x1B\x02\u0123\u0124\x07\n\x02\x02\u0124\u0126\x056\x1C" +
    "\x02\u0125\u011D\x03\x02\x02\x02\u0125\u011F\x03\x02\x02\x02\u0125\u0121" +
    "\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0126/\x03\x02\x02\x02\u0127" +
    "\u0128\x07\x1C\x02\x02\u0128\u0129\x05V,\x02\u0129\u012A\x07\x0E\x02\x02" +
    "\u012A\u012B\x07%\x02\x02\u012B1\x03\x02\x02\x02\u012C\u012D\x07\x18\x02" +
    "\x02\u012D\u012E\x05V,\x02\u012E\u012F\x07\x0E\x02\x02\u012F\u0130\x07" +
    "%\x02\x02\u01303\x03\x02\x02\x02\u0131\u0132\x07\x19\x02\x02\u0132\u0133" +
    "\x05V,\x02\u0133\u0134\x07\x0E\x02\x02\u0134\u0135\x07%\x02\x02\u0135" +
    "5\x03\x02\x02\x02\u0136\u0137\x07\x1A\x02\x02\u0137\u0138\x05V,\x02\u0138" +
    "\u0139\x07\x0E\x02\x02\u0139\u013A\x07%\x02\x02\u013A7\x03\x02\x02\x02" +
    '\u013B\u013C\x07"\x02\x02\u013C\u0142\x05:\x1E\x02\u013D\u013E\x07"' +
    '\x02\x02\u013E\u0142\x05<\x1F\x02\u013F\u0140\x07"\x02\x02\u0140\u0142' +
    "\x05> \x02\u0141\u013B\x03\x02\x02\x02\u0141\u013D\x03\x02\x02\x02\u0141" +
    "\u013F\x03\x02\x02\x02\u01429\x03\x02\x02\x02\u0143\u0145\x07\x18\x02" +
    "\x02\u0144\u0146\x05X-\x02\u0145\u0144\x03\x02\x02\x02\u0145\u0146\x03" +
    "\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0149\x07#\x02\x02\u0148" +
    "\u014A\x05\b\x05\x02\u0149\u0148\x03\x02\x02\x02\u0149\u014A\x03\x02\x02" +
    "\x02\u014A;\x03\x02\x02\x02\u014B\u014D\x07\x19\x02\x02\u014C\u014E\x05" +
    "X-\x02\u014D\u014C\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u014F" +
    "\x03\x02\x02\x02\u014F\u0151\x07#\x02\x02\u0150\u0152\x05\b\x05\x02\u0151" +
    "\u0150\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152=\x03\x02\x02" +
    "\x02\u0153\u0155\x07\x1A\x02\x02\u0154\u0156\x05X-\x02\u0155\u0154\x03" +
    "\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157" +
    "\u0159\x07#\x02\x02\u0158\u015A\x05\b\x05\x02\u0159\u0158\x03\x02\x02" +
    "\x02\u0159\u015A\x03\x02\x02\x02\u015A?\x03\x02\x02\x02\u015B\u015C\x07" +
    "\x07\x02\x02\u015C\u015E\x07%\x02\x02\u015D\u015F\x05X-\x02\u015E\u015D" +
    "\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02" +
    "\u0160\u0161\x07\x0E\x02\x02\u0161\u0162\x07%\x02\x02\u0162A\x03\x02\x02" +
    "\x02\u0163\u0164\x07\x1D\x02\x02\u0164\u016E\x05D#\x02\u0165\u0166\x07" +
    "\x1D\x02\x02\u0166\u016E\x05F$\x02\u0167\u0168\x07\x1D\x02\x02\u0168\u016E" +
    "\x05H%\x02\u0169\u016A\x07\x1D\x02\x02\u016A\u016E\x05J&\x02\u016B\u016C" +
    "\x07\x1D\x02\x02\u016C\u016E\x05L'\x02\u016D\u0163\x03\x02\x02\x02\u016D" +
    "\u0165\x03\x02\x02\x02\u016D\u0167\x03\x02\x02\x02\u016D\u0169\x03\x02" +
    "\x02\x02\u016D\u016B\x03\x02\x02\x02\u016EC\x03\x02\x02\x02\u016F\u0170" +
    "\x07\r\x02\x02\u0170E\x03\x02\x02\x02\u0171\u0172\x07\x10\x02\x02\u0172" +
    "G\x03\x02\x02\x02\u0173\u0174\x07\x1E\x02\x02\u0174\u0175\x07\x10\x02" +
    "\x02\u0175I\x03\x02\x02\x02\u0176\u0177\x07\x1E\x02\x02\u0177\u0178\x07" +
    "\t\x02\x02\u0178K\x03\x02\x02\x02\u0179\u017A\x07\x1E\x02\x02\u017A\u017B" +
    "\x07\b\x02\x02\u017BM\x03\x02\x02\x02\u017C\u017D\x07\x1F\x02\x02\u017D" +
    "\u0181\x05P)\x02\u017E\u017F\x07\x1F\x02\x02\u017F\u0181\x05R*\x02\u0180" +
    "\u017C\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0181O\x03\x02\x02" +
    "\x02\u0182\u0183\x07\x1E\x02\x02\u0183\u0184\x07\x10\x02\x02\u0184\u0186" +
    "\x07%\x02\x02\u0185\u0187\x05X-\x02\u0186\u0185\x03\x02\x02\x02\u0186" +
    "\u0187\x03\x02\x02\x02\u0187\u0189\x03\x02\x02\x02\u0188\u018A\x07#\x02" +
    "\x02\u0189\u0188\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018C" +
    "\x03\x02\x02\x02\u018B\u018D\x07%\x02\x02\u018C\u018B\x03\x02\x02\x02" +
    "\u018C\u018D\x03\x02\x02\x02\u018DQ\x03\x02\x02\x02\u018E\u018F\x07\x1E" +
    "\x02\x02\u018F\u0190\x07\b\x02\x02\u0190\u0192\x07%\x02\x02\u0191\u0193" +
    "\x05X-\x02\u0192\u0191\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193" +
    "S\x03\x02\x02\x02\u0194\u0195\x07 \x02\x02\u0195\u0197\x07%\x02\x02\u0196" +
    "\u0198\x05X-\x02\u0197\u0196\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02" +
    "\u0198U\x03\x02\x02\x02\u0199\u019A\x07 \x02\x02\u019A\u019C\x07%\x02" +
    "\x02\u019B\u019D\x05X-\x02\u019C\u019B\x03\x02\x02\x02\u019C\u019D\x03" +
    "\x02\x02\x02\u019DW\x03\x02\x02\x02\u019E\u019F\x07!\x02\x02\u019F\u01A0" +
    "\x07,\x02\x02\u01A0\u01A1\x07%\x02\x02\u01A1\u01A2\x07+\x02\x02\u01A2" +
    "\u01A9\x07%\x02\x02\u01A3\u01A4\x07*\x02\x02\u01A4\u01A5\x07%\x02\x02" +
    "\u01A5\u01A6\x07+\x02\x02\u01A6\u01A8\x07%\x02\x02\u01A7\u01A3\x03\x02" +
    "\x02\x02\u01A8\u01AB\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01A9" +
    "\u01AA\x03\x02\x02\x02\u01AA\u01AC\x03\x02\x02\x02\u01AB\u01A9\x03\x02" +
    "\x02\x02\u01AC\u01AD\x07-\x02\x02\u01ADY\x03\x02\x02\x02\u01AE\u01AF\x07" +
    "\x0E\x02\x02\u01AF\u01B0\x05\b\x05\x02\u01B0[\x03\x02\x02\x02\u01B1\u01B2" +
    "\x05^0\x02\u01B2]\x03\x02\x02\x02\u01B3\u01B5\v\x02\x02\x02\u01B4\u01B3" +
    "\x03\x02\x02\x02\u01B5\u01B8\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02" +
    "\u01B6\u01B4\x03\x02\x02\x02\u01B7_\x03\x02\x02\x02\u01B8\u01B6\x03\x02" +
    "\x02\x02\u01B9\u01BA\x07,\x02\x02\u01BA\u01BC\x05^0\x02\u01BB\u01BD\x05" +
    "`1\x02\u01BC\u01BB\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE" +
    "\x03\x02\x02\x02\u01BE\u01BF\x07-\x02\x02\u01BFa\x03\x02\x02\x02.k\x7F" +
    "\x89\x90\x96\x9B\xA3\xB0\xB6\xBC\xCB\xD1\xDD\xE5\xE9\xF1\xF5\xFD\u0101" +
    "\u0107\u010B\u010F\u0117\u011B\u0125\u0141\u0145\u0149\u014D\u0151\u0155" +
    "\u0159\u015E\u016D\u0180\u0186\u0189\u018C\u0192\u0197\u019C\u01A9\u01B6" +
    "\u01BC";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!ThanosParser.__ATN) {
      ThanosParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(ThanosParser._serializedATN)
      );
    }

    return ThanosParser.__ATN;
  }
}

export class ThanosLanguageContext extends ParserRuleContext {
  public thanosQuery(): ThanosQueryContext {
    return this.getRuleContext(0, ThanosQueryContext);
  }
  public EOF(): TerminalNode {
    return this.getToken(ThanosParser.EOF, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosLanguage;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosLanguage) {
      listener.enterThanosLanguage(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosLanguage) {
      listener.exitThanosLanguage(this);
    }
  }
}

export class ThanosQueryContext extends ParserRuleContext {
  public normalStmt(): NormalStmtContext[];
  public normalStmt(i: number): NormalStmtContext;
  public normalStmt(i?: number): NormalStmtContext | NormalStmtContext[] {
    if (i === undefined) {
      return this.getRuleContexts(NormalStmtContext);
    } else {
      return this.getRuleContext(i, NormalStmtContext);
    }
  }
  public thanosStmt(): ThanosStmtContext[];
  public thanosStmt(i: number): ThanosStmtContext;
  public thanosStmt(i?: number): ThanosStmtContext | ThanosStmtContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ThanosStmtContext);
    } else {
      return this.getRuleContext(i, ThanosStmtContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosQuery;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosQuery) {
      listener.enterThanosQuery(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosQuery) {
      listener.exitThanosQuery(this);
    }
  }
}

export class ThanosStmtContext extends ParserRuleContext {
  public thanosBuildStmt(): ThanosBuildStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosBuildStmtContext);
  }
  public thanosFitStmt(): ThanosFitStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosFitStmtContext);
  }
  public thanosUploadStmt(): ThanosUploadStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosUploadStmtContext);
  }
  public thanosDeleteStmt(): ThanosDeleteStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosDeleteStmtContext);
  }
  public thanosTransformStmt(): ThanosTransformStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosTransformStmtContext);
  }
  public thanosPredictStmt(): ThanosPredictStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosPredictStmtContext);
  }
  public thanosEvaluateStmt(): ThanosEvaluateStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosEvaluateStmtContext);
  }
  public thanosCreateStmt(): ThanosCreateStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosCreateStmtContext);
  }
  public thanosConvertStmt(): ThanosConvertStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosConvertStmtContext);
  }
  public thanosSearchStmt(): ThanosSearchStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosSearchStmtContext);
  }
  public thanosPreprocessStmt(): ThanosPreprocessStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosPreprocessStmtContext);
  }
  public thanosPrintStmt(): ThanosPrintStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosPrintStmtContext);
  }
  public thanosCopyStmt(): ThanosCopyStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosCopyStmtContext);
  }
  public thanosListStmt(): ThanosListStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosListStmtContext);
  }
  public thanosGetStmt(): ThanosGetStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosGetStmtContext);
  }
  public normalParenException(): NormalParenExceptionContext | undefined {
    return this.tryGetRuleContext(0, NormalParenExceptionContext);
  }
  public normalSubquery(): NormalSubqueryContext | undefined {
    return this.tryGetRuleContext(0, NormalSubqueryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosStmt) {
      listener.enterThanosStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosStmt) {
      listener.exitThanosStmt(this);
    }
  }
}

export class ThanosSubqueryContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(ThanosParser.LEFT_PAREN, 0);
  }
  public thanosQuery(): ThanosQueryContext {
    return this.getRuleContext(0, ThanosQueryContext);
  }
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(ThanosParser.RIGHT_PAREN, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosSubquery;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosSubquery) {
      listener.enterThanosSubquery(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosSubquery) {
      listener.exitThanosSubquery(this);
    }
  }
}

export class ThanosBuildStmtContext extends ParserRuleContext {
  public BUILD(): TerminalNode {
    return this.getToken(ThanosParser.BUILD, 0);
  }
  public thanosBuildModelStmt(): ThanosBuildModelStmtContext {
    return this.getRuleContext(0, ThanosBuildModelStmtContext);
  }
  public AS(): TerminalNode {
    return this.getToken(ThanosParser.AS, 0);
  }
  public thanosSubquery(): ThanosSubqueryContext | undefined {
    return this.tryGetRuleContext(0, ThanosSubqueryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosBuildStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosBuildStmt) {
      listener.enterThanosBuildStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosBuildStmt) {
      listener.exitThanosBuildStmt(this);
    }
  }
}

export class ThanosBuildModelStmtContext extends ParserRuleContext {
  public _user_model_name!: Token;
  public _model_class!: Token;
  public MODEL(): TerminalNode {
    return this.getToken(ThanosParser.MODEL, 0);
  }
  public USING(): TerminalNode {
    return this.getToken(ThanosParser.USING, 0);
  }
  public IDENTIFIER(): TerminalNode[];
  public IDENTIFIER(i: number): TerminalNode;
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ThanosParser.IDENTIFIER);
    } else {
      return this.getToken(ThanosParser.IDENTIFIER, i);
    }
  }
  public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosOptionStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosBuildModelStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosBuildModelStmt) {
      listener.enterThanosBuildModelStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosBuildModelStmt) {
      listener.exitThanosBuildModelStmt(this);
    }
  }
}

export class ThanosFitStmtContext extends ParserRuleContext {
  public FIT(): TerminalNode {
    return this.getToken(ThanosParser.FIT, 0);
  }
  public thanosModelStmt(): ThanosModelStmtContext {
    return this.getRuleContext(0, ThanosModelStmtContext);
  }
  public AS(): TerminalNode {
    return this.getToken(ThanosParser.AS, 0);
  }
  public thanosSubquery(): ThanosSubqueryContext | undefined {
    return this.tryGetRuleContext(0, ThanosSubqueryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosFitStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosFitStmt) {
      listener.enterThanosFitStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosFitStmt) {
      listener.exitThanosFitStmt(this);
    }
  }
}

export class ThanosModelStmtContext extends ParserRuleContext {
  public _user_model_name!: Token;
  public MODEL(): TerminalNode {
    return this.getToken(ThanosParser.MODEL, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ThanosParser.IDENTIFIER, 0);
  }
  public thanosUsingModelStmt(): ThanosUsingModelStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosUsingModelStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosModelStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosModelStmt) {
      listener.enterThanosModelStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosModelStmt) {
      listener.exitThanosModelStmt(this);
    }
  }
}

export class ThanosUploadStmtContext extends ParserRuleContext {
  public UPLOAD(): TerminalNode {
    return this.getToken(ThanosParser.UPLOAD, 0);
  }
  public thanosUploadModelStmt(): ThanosUploadModelStmtContext {
    return this.getRuleContext(0, ThanosUploadModelStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosUploadStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosUploadStmt) {
      listener.enterThanosUploadStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosUploadStmt) {
      listener.exitThanosUploadStmt(this);
    }
  }
}

export class ThanosUploadModelStmtContext extends ParserRuleContext {
  public _user_model_name!: Token;
  public _path!: Token;
  public MODEL(): TerminalNode {
    return this.getToken(ThanosParser.MODEL, 0);
  }
  public FROM(): TerminalNode {
    return this.getToken(ThanosParser.FROM, 0);
  }
  public IDENTIFIER(): TerminalNode[];
  public IDENTIFIER(i: number): TerminalNode;
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ThanosParser.IDENTIFIER);
    } else {
      return this.getToken(ThanosParser.IDENTIFIER, i);
    }
  }
  public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosOptionStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosUploadModelStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosUploadModelStmt) {
      listener.enterThanosUploadModelStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosUploadModelStmt) {
      listener.exitThanosUploadModelStmt(this);
    }
  }
}

export class ThanosDeleteStmtContext extends ParserRuleContext {
  public _built_model_name!: Token;
  public DELETE(): TerminalNode {
    return this.getToken(ThanosParser.DELETE, 0);
  }
  public MODEL(): TerminalNode {
    return this.getToken(ThanosParser.MODEL, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ThanosParser.IDENTIFIER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosDeleteStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosDeleteStmt) {
      listener.enterThanosDeleteStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosDeleteStmt) {
      listener.exitThanosDeleteStmt(this);
    }
  }
}

export class ThanosTransformStmtContext extends ParserRuleContext {
  public TRANSFORM(): TerminalNode {
    return this.getToken(ThanosParser.TRANSFORM, 0);
  }
  public thanosUsingModelStmt(): ThanosUsingModelStmtContext {
    return this.getRuleContext(0, ThanosUsingModelStmtContext);
  }
  public AS(): TerminalNode {
    return this.getToken(ThanosParser.AS, 0);
  }
  public thanosSubquery(): ThanosSubqueryContext | undefined {
    return this.tryGetRuleContext(0, ThanosSubqueryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosTransformStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosTransformStmt) {
      listener.enterThanosTransformStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosTransformStmt) {
      listener.exitThanosTransformStmt(this);
    }
  }
}

export class ThanosPredictStmtContext extends ParserRuleContext {
  public PREDICT(): TerminalNode {
    return this.getToken(ThanosParser.PREDICT, 0);
  }
  public thanosUsingModelStmt(): ThanosUsingModelStmtContext {
    return this.getRuleContext(0, ThanosUsingModelStmtContext);
  }
  public AS(): TerminalNode {
    return this.getToken(ThanosParser.AS, 0);
  }
  public thanosSubquery(): ThanosSubqueryContext | undefined {
    return this.tryGetRuleContext(0, ThanosSubqueryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosPredictStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosPredictStmt) {
      listener.enterThanosPredictStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosPredictStmt) {
      listener.exitThanosPredictStmt(this);
    }
  }
}

export class ThanosEvaluateStmtContext extends ParserRuleContext {
  public EVALUATE(): TerminalNode {
    return this.getToken(ThanosParser.EVALUATE, 0);
  }
  public thanosUsingModelStmt(): ThanosUsingModelStmtContext {
    return this.getRuleContext(0, ThanosUsingModelStmtContext);
  }
  public AS(): TerminalNode {
    return this.getToken(ThanosParser.AS, 0);
  }
  public thanosSubquery(): ThanosSubqueryContext | undefined {
    return this.tryGetRuleContext(0, ThanosSubqueryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosEvaluateStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosEvaluateStmt) {
      listener.enterThanosEvaluateStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosEvaluateStmt) {
      listener.exitThanosEvaluateStmt(this);
    }
  }
}

export class ThanosCreateStmtContext extends ParserRuleContext {
  public _user_table_name!: Token;
  public _path!: Token;
  public CREATE(): TerminalNode {
    return this.getToken(ThanosParser.CREATE, 0);
  }
  public TABLE(): TerminalNode {
    return this.getToken(ThanosParser.TABLE, 0);
  }
  public thanosUsingModelStmt(): ThanosUsingModelStmtContext {
    return this.getRuleContext(0, ThanosUsingModelStmtContext);
  }
  public FROM(): TerminalNode | undefined {
    return this.tryGetToken(ThanosParser.FROM, 0);
  }
  public IDENTIFIER(): TerminalNode[];
  public IDENTIFIER(i: number): TerminalNode;
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ThanosParser.IDENTIFIER);
    } else {
      return this.getToken(ThanosParser.IDENTIFIER, i);
    }
  }
  public AS(): TerminalNode | undefined {
    return this.tryGetToken(ThanosParser.AS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosCreateStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosCreateStmt) {
      listener.enterThanosCreateStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosCreateStmt) {
      listener.exitThanosCreateStmt(this);
    }
  }
}

export class ThanosConvertStmtContext extends ParserRuleContext {
  public CONVERT(): TerminalNode {
    return this.getToken(ThanosParser.CONVERT, 0);
  }
  public thanosUsingModelStmt(): ThanosUsingModelStmtContext {
    return this.getRuleContext(0, ThanosUsingModelStmtContext);
  }
  public AS(): TerminalNode {
    return this.getToken(ThanosParser.AS, 0);
  }
  public thanosSubquery(): ThanosSubqueryContext | undefined {
    return this.tryGetRuleContext(0, ThanosSubqueryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosConvertStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosConvertStmt) {
      listener.enterThanosConvertStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosConvertStmt) {
      listener.exitThanosConvertStmt(this);
    }
  }
}

export class ThanosSearchStmtContext extends ParserRuleContext {
  public SEARCH(): TerminalNode {
    return this.getToken(ThanosParser.SEARCH, 0);
  }
  public thanosSearchImageStmt(): ThanosSearchImageStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosSearchImageStmtContext);
  }
  public thanosSearchAudioStmt(): ThanosSearchAudioStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosSearchAudioStmtContext);
  }
  public thanosSearchVideoStmt(): ThanosSearchVideoStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosSearchVideoStmtContext);
  }
  public thanosSearchKeywordStmt(): ThanosSearchKeywordStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosSearchKeywordStmtContext);
  }
  public thanosSearchTextStmt(): ThanosSearchTextStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosSearchTextStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosSearchStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosSearchStmt) {
      listener.enterThanosSearchStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosSearchStmt) {
      listener.exitThanosSearchStmt(this);
    }
  }
}

export class ThanosSearchImageStmtContext extends ParserRuleContext {
  public _variable_type!: Token;
  public _variable!: Token;
  public IMAGE(): TerminalNode {
    return this.getToken(ThanosParser.IMAGE, 0);
  }
  public EQUAL(): TerminalNode {
    return this.getToken(ThanosParser.EQUAL, 0);
  }
  public AS(): TerminalNode {
    return this.getToken(ThanosParser.AS, 0);
  }
  public IDENTIFIER(): TerminalNode[];
  public IDENTIFIER(i: number): TerminalNode;
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ThanosParser.IDENTIFIER);
    } else {
      return this.getToken(ThanosParser.IDENTIFIER, i);
    }
  }
  public thanosUsingModelStmt(): ThanosUsingModelStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosUsingModelStmtContext);
  }
  public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosOptionStmtContext);
  }
  public thanosSubquery(): ThanosSubqueryContext | undefined {
    return this.tryGetRuleContext(0, ThanosSubqueryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosSearchImageStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosSearchImageStmt) {
      listener.enterThanosSearchImageStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosSearchImageStmt) {
      listener.exitThanosSearchImageStmt(this);
    }
  }
}

export class ThanosSearchAudioStmtContext extends ParserRuleContext {
  public _variable_type!: Token;
  public _variable!: Token;
  public AUDIO(): TerminalNode {
    return this.getToken(ThanosParser.AUDIO, 0);
  }
  public EQUAL(): TerminalNode {
    return this.getToken(ThanosParser.EQUAL, 0);
  }
  public AS(): TerminalNode {
    return this.getToken(ThanosParser.AS, 0);
  }
  public IDENTIFIER(): TerminalNode[];
  public IDENTIFIER(i: number): TerminalNode;
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ThanosParser.IDENTIFIER);
    } else {
      return this.getToken(ThanosParser.IDENTIFIER, i);
    }
  }
  public thanosUsingModelStmt(): ThanosUsingModelStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosUsingModelStmtContext);
  }
  public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosOptionStmtContext);
  }
  public thanosSubquery(): ThanosSubqueryContext | undefined {
    return this.tryGetRuleContext(0, ThanosSubqueryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosSearchAudioStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosSearchAudioStmt) {
      listener.enterThanosSearchAudioStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosSearchAudioStmt) {
      listener.exitThanosSearchAudioStmt(this);
    }
  }
}

export class ThanosSearchVideoStmtContext extends ParserRuleContext {
  public _variable_type!: Token;
  public _variable!: Token;
  public VIDEO(): TerminalNode {
    return this.getToken(ThanosParser.VIDEO, 0);
  }
  public EQUAL(): TerminalNode {
    return this.getToken(ThanosParser.EQUAL, 0);
  }
  public AS(): TerminalNode {
    return this.getToken(ThanosParser.AS, 0);
  }
  public IDENTIFIER(): TerminalNode[];
  public IDENTIFIER(i: number): TerminalNode;
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ThanosParser.IDENTIFIER);
    } else {
      return this.getToken(ThanosParser.IDENTIFIER, i);
    }
  }
  public thanosUsingModelStmt(): ThanosUsingModelStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosUsingModelStmtContext);
  }
  public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosOptionStmtContext);
  }
  public thanosSubquery(): ThanosSubqueryContext | undefined {
    return this.tryGetRuleContext(0, ThanosSubqueryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosSearchVideoStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosSearchVideoStmt) {
      listener.enterThanosSearchVideoStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosSearchVideoStmt) {
      listener.exitThanosSearchVideoStmt(this);
    }
  }
}

export class ThanosSearchKeywordStmtContext extends ParserRuleContext {
  public _variable_type!: Token;
  public _variable!: Token;
  public KEYWORD(): TerminalNode {
    return this.getToken(ThanosParser.KEYWORD, 0);
  }
  public AS(): TerminalNode {
    return this.getToken(ThanosParser.AS, 0);
  }
  public EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(ThanosParser.EQUAL, 0);
  }
  public thanosUsingModelStmt(): ThanosUsingModelStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosUsingModelStmtContext);
  }
  public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosOptionStmtContext);
  }
  public thanosSubquery(): ThanosSubqueryContext | undefined {
    return this.tryGetRuleContext(0, ThanosSubqueryContext);
  }
  public IDENTIFIER(): TerminalNode[];
  public IDENTIFIER(i: number): TerminalNode;
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ThanosParser.IDENTIFIER);
    } else {
      return this.getToken(ThanosParser.IDENTIFIER, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosSearchKeywordStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosSearchKeywordStmt) {
      listener.enterThanosSearchKeywordStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosSearchKeywordStmt) {
      listener.exitThanosSearchKeywordStmt(this);
    }
  }
}

export class ThanosSearchTextStmtContext extends ParserRuleContext {
  public _variable_type!: Token;
  public _variable!: Token;
  public TEXT(): TerminalNode {
    return this.getToken(ThanosParser.TEXT, 0);
  }
  public EQUAL(): TerminalNode {
    return this.getToken(ThanosParser.EQUAL, 0);
  }
  public AS(): TerminalNode {
    return this.getToken(ThanosParser.AS, 0);
  }
  public IDENTIFIER(): TerminalNode[];
  public IDENTIFIER(i: number): TerminalNode;
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ThanosParser.IDENTIFIER);
    } else {
      return this.getToken(ThanosParser.IDENTIFIER, i);
    }
  }
  public thanosUsingModelStmt(): ThanosUsingModelStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosUsingModelStmtContext);
  }
  public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosOptionStmtContext);
  }
  public thanosSubquery(): ThanosSubqueryContext | undefined {
    return this.tryGetRuleContext(0, ThanosSubqueryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosSearchTextStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosSearchTextStmt) {
      listener.enterThanosSearchTextStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosSearchTextStmt) {
      listener.exitThanosSearchTextStmt(this);
    }
  }
}

export class ThanosPreprocessStmtContext extends ParserRuleContext {
  public PREPROCESS(): TerminalNode {
    return this.getToken(ThanosParser.PREPROCESS, 0);
  }
  public thanosPreprocessTextStmt():
    | ThanosPreprocessTextStmtContext
    | undefined {
    return this.tryGetRuleContext(0, ThanosPreprocessTextStmtContext);
  }
  public thanosPreprocessImageStmt():
    | ThanosPreprocessImageStmtContext
    | undefined {
    return this.tryGetRuleContext(0, ThanosPreprocessImageStmtContext);
  }
  public thanosPreprocessAudioStmt():
    | ThanosPreprocessAudioStmtContext
    | undefined {
    return this.tryGetRuleContext(0, ThanosPreprocessAudioStmtContext);
  }
  public thanosPreprocessVideoStmt():
    | ThanosPreprocessVideoStmtContext
    | undefined {
    return this.tryGetRuleContext(0, ThanosPreprocessVideoStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosPreprocessStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosPreprocessStmt) {
      listener.enterThanosPreprocessStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosPreprocessStmt) {
      listener.exitThanosPreprocessStmt(this);
    }
  }
}

export class ThanosPreprocessTextStmtContext extends ParserRuleContext {
  public _path!: Token;
  public TEXT(): TerminalNode {
    return this.getToken(ThanosParser.TEXT, 0);
  }
  public thanosUsingMethodStmt(): ThanosUsingMethodStmtContext {
    return this.getRuleContext(0, ThanosUsingMethodStmtContext);
  }
  public FROM(): TerminalNode {
    return this.getToken(ThanosParser.FROM, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ThanosParser.IDENTIFIER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosPreprocessTextStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosPreprocessTextStmt) {
      listener.enterThanosPreprocessTextStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosPreprocessTextStmt) {
      listener.exitThanosPreprocessTextStmt(this);
    }
  }
}

export class ThanosPreprocessImageStmtContext extends ParserRuleContext {
  public _path!: Token;
  public IMAGE(): TerminalNode {
    return this.getToken(ThanosParser.IMAGE, 0);
  }
  public thanosUsingMethodStmt(): ThanosUsingMethodStmtContext {
    return this.getRuleContext(0, ThanosUsingMethodStmtContext);
  }
  public FROM(): TerminalNode {
    return this.getToken(ThanosParser.FROM, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ThanosParser.IDENTIFIER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosPreprocessImageStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosPreprocessImageStmt) {
      listener.enterThanosPreprocessImageStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosPreprocessImageStmt) {
      listener.exitThanosPreprocessImageStmt(this);
    }
  }
}

export class ThanosPreprocessAudioStmtContext extends ParserRuleContext {
  public _path!: Token;
  public AUDIO(): TerminalNode {
    return this.getToken(ThanosParser.AUDIO, 0);
  }
  public thanosUsingMethodStmt(): ThanosUsingMethodStmtContext {
    return this.getRuleContext(0, ThanosUsingMethodStmtContext);
  }
  public FROM(): TerminalNode {
    return this.getToken(ThanosParser.FROM, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ThanosParser.IDENTIFIER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosPreprocessAudioStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosPreprocessAudioStmt) {
      listener.enterThanosPreprocessAudioStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosPreprocessAudioStmt) {
      listener.exitThanosPreprocessAudioStmt(this);
    }
  }
}

export class ThanosPreprocessVideoStmtContext extends ParserRuleContext {
  public _path!: Token;
  public VIDEO(): TerminalNode {
    return this.getToken(ThanosParser.VIDEO, 0);
  }
  public thanosUsingMethodStmt(): ThanosUsingMethodStmtContext {
    return this.getRuleContext(0, ThanosUsingMethodStmtContext);
  }
  public FROM(): TerminalNode {
    return this.getToken(ThanosParser.FROM, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ThanosParser.IDENTIFIER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosPreprocessVideoStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosPreprocessVideoStmt) {
      listener.enterThanosPreprocessVideoStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosPreprocessVideoStmt) {
      listener.exitThanosPreprocessVideoStmt(this);
    }
  }
}

export class ThanosPrintStmtContext extends ParserRuleContext {
  public PRINT(): TerminalNode {
    return this.getToken(ThanosParser.PRINT, 0);
  }
  public thanosPrintImageStmt(): ThanosPrintImageStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosPrintImageStmtContext);
  }
  public thanosPrintAudioStmt(): ThanosPrintAudioStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosPrintAudioStmtContext);
  }
  public thanosPrintVideoStmt(): ThanosPrintVideoStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosPrintVideoStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosPrintStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosPrintStmt) {
      listener.enterThanosPrintStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosPrintStmt) {
      listener.exitThanosPrintStmt(this);
    }
  }
}

export class ThanosPrintImageStmtContext extends ParserRuleContext {
  public IMAGE(): TerminalNode {
    return this.getToken(ThanosParser.IMAGE, 0);
  }
  public AS(): TerminalNode {
    return this.getToken(ThanosParser.AS, 0);
  }
  public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosOptionStmtContext);
  }
  public thanosSubquery(): ThanosSubqueryContext | undefined {
    return this.tryGetRuleContext(0, ThanosSubqueryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosPrintImageStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosPrintImageStmt) {
      listener.enterThanosPrintImageStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosPrintImageStmt) {
      listener.exitThanosPrintImageStmt(this);
    }
  }
}

export class ThanosPrintAudioStmtContext extends ParserRuleContext {
  public AUDIO(): TerminalNode {
    return this.getToken(ThanosParser.AUDIO, 0);
  }
  public AS(): TerminalNode {
    return this.getToken(ThanosParser.AS, 0);
  }
  public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosOptionStmtContext);
  }
  public thanosSubquery(): ThanosSubqueryContext | undefined {
    return this.tryGetRuleContext(0, ThanosSubqueryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosPrintAudioStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosPrintAudioStmt) {
      listener.enterThanosPrintAudioStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosPrintAudioStmt) {
      listener.exitThanosPrintAudioStmt(this);
    }
  }
}

export class ThanosPrintVideoStmtContext extends ParserRuleContext {
  public VIDEO(): TerminalNode {
    return this.getToken(ThanosParser.VIDEO, 0);
  }
  public AS(): TerminalNode {
    return this.getToken(ThanosParser.AS, 0);
  }
  public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosOptionStmtContext);
  }
  public thanosSubquery(): ThanosSubqueryContext | undefined {
    return this.tryGetRuleContext(0, ThanosSubqueryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosPrintVideoStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosPrintVideoStmt) {
      listener.enterThanosPrintVideoStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosPrintVideoStmt) {
      listener.exitThanosPrintVideoStmt(this);
    }
  }
}

export class ThanosCopyStmtContext extends ParserRuleContext {
  public _user_table_name!: Token;
  public _path!: Token;
  public COPY(): TerminalNode {
    return this.getToken(ThanosParser.COPY, 0);
  }
  public FROM(): TerminalNode {
    return this.getToken(ThanosParser.FROM, 0);
  }
  public IDENTIFIER(): TerminalNode[];
  public IDENTIFIER(i: number): TerminalNode;
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ThanosParser.IDENTIFIER);
    } else {
      return this.getToken(ThanosParser.IDENTIFIER, i);
    }
  }
  public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosOptionStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosCopyStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosCopyStmt) {
      listener.enterThanosCopyStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosCopyStmt) {
      listener.exitThanosCopyStmt(this);
    }
  }
}

export class ThanosListStmtContext extends ParserRuleContext {
  public LIST(): TerminalNode {
    return this.getToken(ThanosParser.LIST, 0);
  }
  public thanosListTableStmt(): ThanosListTableStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosListTableStmtContext);
  }
  public thanosListModelStmt(): ThanosListModelStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosListModelStmtContext);
  }
  public thanosListThanoSQLModelStmt():
    | ThanosListThanoSQLModelStmtContext
    | undefined {
    return this.tryGetRuleContext(0, ThanosListThanoSQLModelStmtContext);
  }
  public thanosListThanoSQLTutorialStmt():
    | ThanosListThanoSQLTutorialStmtContext
    | undefined {
    return this.tryGetRuleContext(0, ThanosListThanoSQLTutorialStmtContext);
  }
  public thanosListThanoSQLDatasetStmt():
    | ThanosListThanoSQLDatasetStmtContext
    | undefined {
    return this.tryGetRuleContext(0, ThanosListThanoSQLDatasetStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosListStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosListStmt) {
      listener.enterThanosListStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosListStmt) {
      listener.exitThanosListStmt(this);
    }
  }
}

export class ThanosListTableStmtContext extends ParserRuleContext {
  public TABLE(): TerminalNode {
    return this.getToken(ThanosParser.TABLE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosListTableStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosListTableStmt) {
      listener.enterThanosListTableStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosListTableStmt) {
      listener.exitThanosListTableStmt(this);
    }
  }
}

export class ThanosListModelStmtContext extends ParserRuleContext {
  public MODEL(): TerminalNode {
    return this.getToken(ThanosParser.MODEL, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosListModelStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosListModelStmt) {
      listener.enterThanosListModelStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosListModelStmt) {
      listener.exitThanosListModelStmt(this);
    }
  }
}

export class ThanosListThanoSQLModelStmtContext extends ParserRuleContext {
  public THANOSQL(): TerminalNode {
    return this.getToken(ThanosParser.THANOSQL, 0);
  }
  public MODEL(): TerminalNode {
    return this.getToken(ThanosParser.MODEL, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosListThanoSQLModelStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosListThanoSQLModelStmt) {
      listener.enterThanosListThanoSQLModelStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosListThanoSQLModelStmt) {
      listener.exitThanosListThanoSQLModelStmt(this);
    }
  }
}

export class ThanosListThanoSQLTutorialStmtContext extends ParserRuleContext {
  public THANOSQL(): TerminalNode {
    return this.getToken(ThanosParser.THANOSQL, 0);
  }
  public TUTORIAL(): TerminalNode {
    return this.getToken(ThanosParser.TUTORIAL, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosListThanoSQLTutorialStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosListThanoSQLTutorialStmt) {
      listener.enterThanosListThanoSQLTutorialStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosListThanoSQLTutorialStmt) {
      listener.exitThanosListThanoSQLTutorialStmt(this);
    }
  }
}

export class ThanosListThanoSQLDatasetStmtContext extends ParserRuleContext {
  public THANOSQL(): TerminalNode {
    return this.getToken(ThanosParser.THANOSQL, 0);
  }
  public DATASET(): TerminalNode {
    return this.getToken(ThanosParser.DATASET, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosListThanoSQLDatasetStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosListThanoSQLDatasetStmt) {
      listener.enterThanosListThanoSQLDatasetStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosListThanoSQLDatasetStmt) {
      listener.exitThanosListThanoSQLDatasetStmt(this);
    }
  }
}

export class ThanosGetStmtContext extends ParserRuleContext {
  public GET(): TerminalNode {
    return this.getToken(ThanosParser.GET, 0);
  }
  public thanosGetThanoSQLModelStmt():
    | ThanosGetThanoSQLModelStmtContext
    | undefined {
    return this.tryGetRuleContext(0, ThanosGetThanoSQLModelStmtContext);
  }
  public thanosGetThanoSQLDatasetStmt():
    | ThanosGetThanoSQLDatasetStmtContext
    | undefined {
    return this.tryGetRuleContext(0, ThanosGetThanoSQLDatasetStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosGetStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosGetStmt) {
      listener.enterThanosGetStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosGetStmt) {
      listener.exitThanosGetStmt(this);
    }
  }
}

export class ThanosGetThanoSQLModelStmtContext extends ParserRuleContext {
  public _built_model_name!: Token;
  public _user_model_name!: Token;
  public THANOSQL(): TerminalNode {
    return this.getToken(ThanosParser.THANOSQL, 0);
  }
  public MODEL(): TerminalNode {
    return this.getToken(ThanosParser.MODEL, 0);
  }
  public IDENTIFIER(): TerminalNode[];
  public IDENTIFIER(i: number): TerminalNode;
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ThanosParser.IDENTIFIER);
    } else {
      return this.getToken(ThanosParser.IDENTIFIER, i);
    }
  }
  public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosOptionStmtContext);
  }
  public AS(): TerminalNode | undefined {
    return this.tryGetToken(ThanosParser.AS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosGetThanoSQLModelStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosGetThanoSQLModelStmt) {
      listener.enterThanosGetThanoSQLModelStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosGetThanoSQLModelStmt) {
      listener.exitThanosGetThanoSQLModelStmt(this);
    }
  }
}

export class ThanosGetThanoSQLDatasetStmtContext extends ParserRuleContext {
  public _dataset_name!: Token;
  public THANOSQL(): TerminalNode {
    return this.getToken(ThanosParser.THANOSQL, 0);
  }
  public DATASET(): TerminalNode {
    return this.getToken(ThanosParser.DATASET, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ThanosParser.IDENTIFIER, 0);
  }
  public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosOptionStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosGetThanoSQLDatasetStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosGetThanoSQLDatasetStmt) {
      listener.enterThanosGetThanoSQLDatasetStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosGetThanoSQLDatasetStmt) {
      listener.exitThanosGetThanoSQLDatasetStmt(this);
    }
  }
}

export class ThanosUsingModelStmtContext extends ParserRuleContext {
  public _built_model_name!: Token;
  public USING(): TerminalNode {
    return this.getToken(ThanosParser.USING, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ThanosParser.IDENTIFIER, 0);
  }
  public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosOptionStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosUsingModelStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosUsingModelStmt) {
      listener.enterThanosUsingModelStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosUsingModelStmt) {
      listener.exitThanosUsingModelStmt(this);
    }
  }
}

export class ThanosUsingMethodStmtContext extends ParserRuleContext {
  public _method_name!: Token;
  public USING(): TerminalNode {
    return this.getToken(ThanosParser.USING, 0);
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ThanosParser.IDENTIFIER, 0);
  }
  public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
    return this.tryGetRuleContext(0, ThanosOptionStmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosUsingMethodStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosUsingMethodStmt) {
      listener.enterThanosUsingMethodStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosUsingMethodStmt) {
      listener.exitThanosUsingMethodStmt(this);
    }
  }
}

export class ThanosOptionStmtContext extends ParserRuleContext {
  public _IDENTIFIER!: Token;
  public _paramsKey: Token[] = [];
  public _paramsValue: Token[] = [];
  public OPTIONS(): TerminalNode {
    return this.getToken(ThanosParser.OPTIONS, 0);
  }
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(ThanosParser.LEFT_PAREN, 0);
  }
  public EQUAL(): TerminalNode[];
  public EQUAL(i: number): TerminalNode;
  public EQUAL(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ThanosParser.EQUAL);
    } else {
      return this.getToken(ThanosParser.EQUAL, i);
    }
  }
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(ThanosParser.RIGHT_PAREN, 0);
  }
  public IDENTIFIER(): TerminalNode[];
  public IDENTIFIER(i: number): TerminalNode;
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ThanosParser.IDENTIFIER);
    } else {
      return this.getToken(ThanosParser.IDENTIFIER, i);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ThanosParser.COMMA);
    } else {
      return this.getToken(ThanosParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_thanosOptionStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterThanosOptionStmt) {
      listener.enterThanosOptionStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitThanosOptionStmt) {
      listener.exitThanosOptionStmt(this);
    }
  }
}

export class NormalSubqueryContext extends ParserRuleContext {
  public FROM(): TerminalNode {
    return this.getToken(ThanosParser.FROM, 0);
  }
  public thanosSubquery(): ThanosSubqueryContext {
    return this.getRuleContext(0, ThanosSubqueryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_normalSubquery;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterNormalSubquery) {
      listener.enterNormalSubquery(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitNormalSubquery) {
      listener.exitNormalSubquery(this);
    }
  }
}

export class NormalStmtContext extends ParserRuleContext {
  public remaining(): RemainingContext {
    return this.getRuleContext(0, RemainingContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_normalStmt;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterNormalStmt) {
      listener.enterNormalStmt(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitNormalStmt) {
      listener.exitNormalStmt(this);
    }
  }
}

export class RemainingContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_remaining;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterRemaining) {
      listener.enterRemaining(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitRemaining) {
      listener.exitRemaining(this);
    }
  }
}

export class NormalParenExceptionContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(ThanosParser.LEFT_PAREN, 0);
  }
  public remaining(): RemainingContext {
    return this.getRuleContext(0, RemainingContext);
  }
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(ThanosParser.RIGHT_PAREN, 0);
  }
  public normalParenException(): NormalParenExceptionContext | undefined {
    return this.tryGetRuleContext(0, NormalParenExceptionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return ThanosParser.RULE_normalParenException;
  }
  // @Override
  public enterRule(listener: ThanosParserListener): void {
    if (listener.enterNormalParenException) {
      listener.enterNormalParenException(this);
    }
  }
  // @Override
  public exitRule(listener: ThanosParserListener): void {
    if (listener.exitNormalParenException) {
      listener.exitNormalParenException(this);
    }
  }
}
