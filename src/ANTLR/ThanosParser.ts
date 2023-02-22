// Generated from ./.antlr/thanosParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { thanosParserListener } from "./thanosParserListener";

export class thanosParser extends Parser {
	public static readonly MODEL = 1;
	public static readonly BUILD = 2;
	public static readonly FIT = 3;
	public static readonly UPLOAD = 4;
	public static readonly DELETE = 5;
	public static readonly TRANSFORM = 6;
	public static readonly PREDICT = 7;
	public static readonly EVALUATE = 8;
	public static readonly CONVERT = 9;
	public static readonly SEARCH = 10;
	public static readonly FUNCTION = 11;
	public static readonly PRINT = 12;
	public static readonly COPY = 13;
	public static readonly LIST = 14;
	public static readonly TABLE = 15;
	public static readonly THANOSQL = 16;
	public static readonly DATASET = 17;
	public static readonly GET = 18;
	public static readonly USING = 19;
	public static readonly OPTIONS = 20;
	public static readonly AS = 21;
	public static readonly BY = 22;
	public static readonly IMAGE = 23;
	public static readonly AUDIO = 24;
	public static readonly VIDEO = 25;
	public static readonly KEYWORD = 26;
	public static readonly TEXT = 27;
	public static readonly JOIN = 28;
	public static readonly FROM = 29;
	public static readonly IDENTIFIER = 30;
	public static readonly NAME = 31;
	public static readonly OPERATOR_SPECIAL = 32;
	public static readonly COLON = 33;
	public static readonly SEMI_COLON = 34;
	public static readonly COMMA = 35;
	public static readonly EQUAL = 36;
	public static readonly LEFT_PAREN = 37;
	public static readonly RIGHT_PAREN = 38;
	public static readonly LEFT_SQURE = 39;
	public static readonly RIGHT_SQURE = 40;
	public static readonly DIVIDE = 41;
	public static readonly MULTIPLY = 42;
	public static readonly DOT = 43;
	public static readonly LT = 44;
	public static readonly GT = 45;
	public static readonly MINUS = 46;
	public static readonly SIMPLE_COMMENT = 47;
	public static readonly BRACKETED_COMMENT = 48;
	public static readonly WS = 49;
	public static readonly RULE_thanosLanguage = 0;
	public static readonly RULE_thanosQuery = 1;
	public static readonly RULE_thanosStmt = 2;
	public static readonly RULE_thanosNoSubqueryStmt = 3;
	public static readonly RULE_thanosSubqueryStmt = 4;
	public static readonly RULE_thanosSubquery = 5;
	public static readonly RULE_thanosBuildModelStmt = 6;
	public static readonly RULE_thanosFitModelStmt = 7;
	public static readonly RULE_thanosUploadModelStmt = 8;
	public static readonly RULE_thanosDeleteModelStmt = 9;
	public static readonly RULE_thanosPredictStmt = 10;
	public static readonly RULE_thanosEvaluateStmt = 11;
	public static readonly RULE_thanosConvertStmt = 12;
	public static readonly RULE_thanosSearchStmt = 13;
	public static readonly RULE_thanosSearchImageStmt = 14;
	public static readonly RULE_thanosSearchAudioStmt = 15;
	public static readonly RULE_thanosSearchVideoStmt = 16;
	public static readonly RULE_thanosSearchKeywordStmt = 17;
	public static readonly RULE_thanosSearchTextStmt = 18;
	public static readonly RULE_thanosFunctionStmt = 19;
	public static readonly RULE_thanosPrintStmt = 20;
	public static readonly RULE_thanosPrintImageStmt = 21;
	public static readonly RULE_thanosPrintAudioStmt = 22;
	public static readonly RULE_thanosPrintVideoStmt = 23;
	public static readonly RULE_thanosCopyStmt = 24;
	public static readonly RULE_thanosListStmt = 25;
	public static readonly RULE_thanosListTableStmt = 26;
	public static readonly RULE_thanosListModelStmt = 27;
	public static readonly RULE_thanosListThanoSQLModelStmt = 28;
	public static readonly RULE_thanosListThanoSQLDatasetStmt = 29;
	public static readonly RULE_thanosGetStmt = 30;
	public static readonly RULE_thanosGetThanoSQLModelStmt = 31;
	public static readonly RULE_thanosGetThanoSQLDatasetStmt = 32;
	public static readonly RULE_thanosUsingStmt = 33;
	public static readonly RULE_thanosOptionStmt = 34;
	public static readonly RULE_normalSubquery = 35;
	public static readonly RULE_normalStmt = 36;
	public static readonly RULE_remaining = 37;
	public static readonly RULE_normalParenException = 38;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"thanosLanguage", "thanosQuery", "thanosStmt", "thanosNoSubqueryStmt", 
		"thanosSubqueryStmt", "thanosSubquery", "thanosBuildModelStmt", "thanosFitModelStmt", 
		"thanosUploadModelStmt", "thanosDeleteModelStmt", "thanosPredictStmt", 
		"thanosEvaluateStmt", "thanosConvertStmt", "thanosSearchStmt", "thanosSearchImageStmt", 
		"thanosSearchAudioStmt", "thanosSearchVideoStmt", "thanosSearchKeywordStmt", 
		"thanosSearchTextStmt", "thanosFunctionStmt", "thanosPrintStmt", "thanosPrintImageStmt", 
		"thanosPrintAudioStmt", "thanosPrintVideoStmt", "thanosCopyStmt", "thanosListStmt", 
		"thanosListTableStmt", "thanosListModelStmt", "thanosListThanoSQLModelStmt", 
		"thanosListThanoSQLDatasetStmt", "thanosGetStmt", "thanosGetThanoSQLModelStmt", 
		"thanosGetThanoSQLDatasetStmt", "thanosUsingStmt", "thanosOptionStmt", 
		"normalSubquery", "normalStmt", "remaining", "normalParenException",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "':'", "';'", "','", 
		"'='", "'('", "')'", "'['", "']'", "'/'", "'*'", "'.'", "'<'", "'>'", 
		"'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "MODEL", "BUILD", "FIT", "UPLOAD", "DELETE", "TRANSFORM", "PREDICT", 
		"EVALUATE", "CONVERT", "SEARCH", "FUNCTION", "PRINT", "COPY", "LIST", 
		"TABLE", "THANOSQL", "DATASET", "GET", "USING", "OPTIONS", "AS", "BY", 
		"IMAGE", "AUDIO", "VIDEO", "KEYWORD", "TEXT", "JOIN", "FROM", "IDENTIFIER", 
		"NAME", "OPERATOR_SPECIAL", "COLON", "SEMI_COLON", "COMMA", "EQUAL", "LEFT_PAREN", 
		"RIGHT_PAREN", "LEFT_SQURE", "RIGHT_SQURE", "DIVIDE", "MULTIPLY", "DOT", 
		"LT", "GT", "MINUS", "SIMPLE_COMMENT", "BRACKETED_COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(thanosParser._LITERAL_NAMES, thanosParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return thanosParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "thanosParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return thanosParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return thanosParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(thanosParser._ATN, this);
	}
	// @RuleVersion(0)
	public thanosLanguage(): ThanosLanguageContext {
		let _localctx: ThanosLanguageContext = new ThanosLanguageContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, thanosParser.RULE_thanosLanguage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.thanosQuery();
			this.state = 79;
			this.match(thanosParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosQuery(): ThanosQueryContext {
		let _localctx: ThanosQueryContext = new ThanosQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, thanosParser.RULE_thanosQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this.normalStmt();
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << thanosParser.BUILD) | (1 << thanosParser.FIT) | (1 << thanosParser.UPLOAD) | (1 << thanosParser.DELETE) | (1 << thanosParser.PREDICT) | (1 << thanosParser.EVALUATE) | (1 << thanosParser.CONVERT) | (1 << thanosParser.SEARCH) | (1 << thanosParser.FUNCTION) | (1 << thanosParser.PRINT) | (1 << thanosParser.COPY) | (1 << thanosParser.LIST) | (1 << thanosParser.GET) | (1 << thanosParser.JOIN) | (1 << thanosParser.FROM))) !== 0) || _la === thanosParser.LEFT_PAREN) {
				{
				{
				this.state = 82;
				this.thanosStmt();
				this.state = 83;
				this.normalStmt();
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosStmt(): ThanosStmtContext {
		let _localctx: ThanosStmtContext = new ThanosStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, thanosParser.RULE_thanosStmt);
		try {
			this.state = 92;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case thanosParser.BUILD:
			case thanosParser.FIT:
			case thanosParser.UPLOAD:
			case thanosParser.DELETE:
			case thanosParser.PRINT:
			case thanosParser.COPY:
			case thanosParser.GET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 90;
				this.thanosNoSubqueryStmt();
				}
				break;
			case thanosParser.PREDICT:
			case thanosParser.EVALUATE:
			case thanosParser.CONVERT:
			case thanosParser.SEARCH:
			case thanosParser.FUNCTION:
			case thanosParser.LIST:
			case thanosParser.JOIN:
			case thanosParser.FROM:
			case thanosParser.LEFT_PAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 91;
				this.thanosSubqueryStmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosNoSubqueryStmt(): ThanosNoSubqueryStmtContext {
		let _localctx: ThanosNoSubqueryStmtContext = new ThanosNoSubqueryStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, thanosParser.RULE_thanosNoSubqueryStmt);
		try {
			this.state = 101;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case thanosParser.BUILD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 94;
				this.thanosBuildModelStmt();
				}
				break;
			case thanosParser.FIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 95;
				this.thanosFitModelStmt();
				}
				break;
			case thanosParser.UPLOAD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 96;
				this.thanosUploadModelStmt();
				}
				break;
			case thanosParser.DELETE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 97;
				this.thanosDeleteModelStmt();
				}
				break;
			case thanosParser.PRINT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 98;
				this.thanosPrintStmt();
				}
				break;
			case thanosParser.COPY:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 99;
				this.thanosCopyStmt();
				}
				break;
			case thanosParser.GET:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 100;
				this.thanosGetStmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosSubqueryStmt(): ThanosSubqueryStmtContext {
		let _localctx: ThanosSubqueryStmtContext = new ThanosSubqueryStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, thanosParser.RULE_thanosSubqueryStmt);
		try {
			this.state = 111;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case thanosParser.PREDICT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 103;
				this.thanosPredictStmt();
				}
				break;
			case thanosParser.EVALUATE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 104;
				this.thanosEvaluateStmt();
				}
				break;
			case thanosParser.CONVERT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 105;
				this.thanosConvertStmt();
				}
				break;
			case thanosParser.SEARCH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 106;
				this.thanosSearchStmt();
				}
				break;
			case thanosParser.FUNCTION:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 107;
				this.thanosFunctionStmt();
				}
				break;
			case thanosParser.LIST:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 108;
				this.thanosListStmt();
				}
				break;
			case thanosParser.JOIN:
			case thanosParser.FROM:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 109;
				this.normalSubquery();
				}
				break;
			case thanosParser.LEFT_PAREN:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 110;
				this.normalParenException();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosSubquery(): ThanosSubqueryContext {
		let _localctx: ThanosSubqueryContext = new ThanosSubqueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, thanosParser.RULE_thanosSubquery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(thanosParser.LEFT_PAREN);
			this.state = 114;
			this.normalStmt();
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (thanosParser.PREDICT - 7)) | (1 << (thanosParser.EVALUATE - 7)) | (1 << (thanosParser.CONVERT - 7)) | (1 << (thanosParser.SEARCH - 7)) | (1 << (thanosParser.FUNCTION - 7)) | (1 << (thanosParser.LIST - 7)) | (1 << (thanosParser.JOIN - 7)) | (1 << (thanosParser.FROM - 7)) | (1 << (thanosParser.LEFT_PAREN - 7)))) !== 0)) {
				{
				{
				this.state = 115;
				this.thanosSubqueryStmt();
				this.state = 116;
				this.normalStmt();
				}
				}
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 123;
			this.match(thanosParser.RIGHT_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosBuildModelStmt(): ThanosBuildModelStmtContext {
		let _localctx: ThanosBuildModelStmtContext = new ThanosBuildModelStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, thanosParser.RULE_thanosBuildModelStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(thanosParser.BUILD);
			this.state = 126;
			this.match(thanosParser.MODEL);
			this.state = 127;
			_localctx._user_model_name = this.match(thanosParser.IDENTIFIER);
			this.state = 128;
			this.thanosUsingStmt();
			this.state = 129;
			this.match(thanosParser.AS);
			this.state = 131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 130;
				this.thanosSubquery();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosFitModelStmt(): ThanosFitModelStmtContext {
		let _localctx: ThanosFitModelStmtContext = new ThanosFitModelStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, thanosParser.RULE_thanosFitModelStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(thanosParser.FIT);
			this.state = 134;
			this.match(thanosParser.MODEL);
			this.state = 135;
			_localctx._user_model_name = this.match(thanosParser.IDENTIFIER);
			this.state = 136;
			this.thanosUsingStmt();
			this.state = 137;
			this.match(thanosParser.AS);
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 138;
				this.thanosSubquery();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosUploadModelStmt(): ThanosUploadModelStmtContext {
		let _localctx: ThanosUploadModelStmtContext = new ThanosUploadModelStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, thanosParser.RULE_thanosUploadModelStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(thanosParser.UPLOAD);
			this.state = 142;
			this.match(thanosParser.MODEL);
			this.state = 143;
			_localctx._user_model_name = this.match(thanosParser.IDENTIFIER);
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === thanosParser.OPTIONS) {
				{
				this.state = 144;
				this.thanosOptionStmt();
				}
			}

			this.state = 147;
			this.match(thanosParser.FROM);
			this.state = 148;
			_localctx._path = this.match(thanosParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosDeleteModelStmt(): ThanosDeleteModelStmtContext {
		let _localctx: ThanosDeleteModelStmtContext = new ThanosDeleteModelStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, thanosParser.RULE_thanosDeleteModelStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this.match(thanosParser.DELETE);
			this.state = 151;
			this.match(thanosParser.MODEL);
			this.state = 152;
			_localctx._built_model_name = this.match(thanosParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosPredictStmt(): ThanosPredictStmtContext {
		let _localctx: ThanosPredictStmtContext = new ThanosPredictStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, thanosParser.RULE_thanosPredictStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(thanosParser.PREDICT);
			this.state = 155;
			this.thanosUsingStmt();
			this.state = 156;
			this.match(thanosParser.AS);
			this.state = 158;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 157;
				this.thanosSubquery();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosEvaluateStmt(): ThanosEvaluateStmtContext {
		let _localctx: ThanosEvaluateStmtContext = new ThanosEvaluateStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, thanosParser.RULE_thanosEvaluateStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(thanosParser.EVALUATE);
			this.state = 161;
			this.thanosUsingStmt();
			this.state = 162;
			this.match(thanosParser.AS);
			this.state = 164;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 163;
				this.thanosSubquery();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosConvertStmt(): ThanosConvertStmtContext {
		let _localctx: ThanosConvertStmtContext = new ThanosConvertStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, thanosParser.RULE_thanosConvertStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(thanosParser.CONVERT);
			this.state = 167;
			this.thanosUsingStmt();
			this.state = 168;
			this.match(thanosParser.AS);
			this.state = 170;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 169;
				this.thanosSubquery();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosSearchStmt(): ThanosSearchStmtContext {
		let _localctx: ThanosSearchStmtContext = new ThanosSearchStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, thanosParser.RULE_thanosSearchStmt);
		try {
			this.state = 182;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 172;
				this.match(thanosParser.SEARCH);
				this.state = 173;
				this.thanosSearchImageStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 174;
				this.match(thanosParser.SEARCH);
				this.state = 175;
				this.thanosSearchAudioStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 176;
				this.match(thanosParser.SEARCH);
				this.state = 177;
				this.thanosSearchVideoStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 178;
				this.match(thanosParser.SEARCH);
				this.state = 179;
				this.thanosSearchKeywordStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 180;
				this.match(thanosParser.SEARCH);
				this.state = 181;
				this.thanosSearchTextStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosSearchImageStmt(): ThanosSearchImageStmtContext {
		let _localctx: ThanosSearchImageStmtContext = new ThanosSearchImageStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, thanosParser.RULE_thanosSearchImageStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(thanosParser.IMAGE);
			this.state = 185;
			this.thanosUsingStmt();
			this.state = 186;
			this.match(thanosParser.AS);
			this.state = 188;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 187;
				this.thanosSubquery();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosSearchAudioStmt(): ThanosSearchAudioStmtContext {
		let _localctx: ThanosSearchAudioStmtContext = new ThanosSearchAudioStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, thanosParser.RULE_thanosSearchAudioStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.match(thanosParser.AUDIO);
			this.state = 191;
			this.thanosUsingStmt();
			this.state = 192;
			this.match(thanosParser.AS);
			this.state = 194;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 193;
				this.thanosSubquery();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosSearchVideoStmt(): ThanosSearchVideoStmtContext {
		let _localctx: ThanosSearchVideoStmtContext = new ThanosSearchVideoStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, thanosParser.RULE_thanosSearchVideoStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(thanosParser.VIDEO);
			this.state = 197;
			this.thanosUsingStmt();
			this.state = 198;
			this.match(thanosParser.AS);
			this.state = 200;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 199;
				this.thanosSubquery();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosSearchKeywordStmt(): ThanosSearchKeywordStmtContext {
		let _localctx: ThanosSearchKeywordStmtContext = new ThanosSearchKeywordStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, thanosParser.RULE_thanosSearchKeywordStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.match(thanosParser.KEYWORD);
			this.state = 203;
			this.thanosUsingStmt();
			this.state = 204;
			this.match(thanosParser.AS);
			this.state = 206;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 205;
				this.thanosSubquery();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosSearchTextStmt(): ThanosSearchTextStmtContext {
		let _localctx: ThanosSearchTextStmtContext = new ThanosSearchTextStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, thanosParser.RULE_thanosSearchTextStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(thanosParser.TEXT);
			this.state = 209;
			this.thanosUsingStmt();
			this.state = 210;
			this.match(thanosParser.AS);
			this.state = 212;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 211;
				this.thanosSubquery();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosFunctionStmt(): ThanosFunctionStmtContext {
		let _localctx: ThanosFunctionStmtContext = new ThanosFunctionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, thanosParser.RULE_thanosFunctionStmt);
		let _la: number;
		try {
			this.state = 230;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 214;
				this.match(thanosParser.FUNCTION);
				this.state = 215;
				_localctx._built_function_name = this.match(thanosParser.IDENTIFIER);
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === thanosParser.OPTIONS) {
					{
					this.state = 216;
					this.thanosOptionStmt();
					}
				}

				this.state = 219;
				this.match(thanosParser.AS);
				this.state = 221;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 220;
					this.thanosSubquery();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 223;
				this.match(thanosParser.FUNCTION);
				this.state = 224;
				_localctx._built_function_name = this.match(thanosParser.IDENTIFIER);
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === thanosParser.OPTIONS) {
					{
					this.state = 225;
					this.thanosOptionStmt();
					}
				}

				this.state = 228;
				this.match(thanosParser.FROM);
				this.state = 229;
				_localctx._input_data = this.match(thanosParser.IDENTIFIER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosPrintStmt(): ThanosPrintStmtContext {
		let _localctx: ThanosPrintStmtContext = new ThanosPrintStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, thanosParser.RULE_thanosPrintStmt);
		try {
			this.state = 238;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 232;
				this.match(thanosParser.PRINT);
				this.state = 233;
				this.thanosPrintImageStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 234;
				this.match(thanosParser.PRINT);
				this.state = 235;
				this.thanosPrintAudioStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 236;
				this.match(thanosParser.PRINT);
				this.state = 237;
				this.thanosPrintVideoStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosPrintImageStmt(): ThanosPrintImageStmtContext {
		let _localctx: ThanosPrintImageStmtContext = new ThanosPrintImageStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, thanosParser.RULE_thanosPrintImageStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.match(thanosParser.IMAGE);
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === thanosParser.OPTIONS) {
				{
				this.state = 241;
				this.thanosOptionStmt();
				}
			}

			this.state = 244;
			this.match(thanosParser.AS);
			this.state = 246;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 245;
				this.thanosSubquery();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosPrintAudioStmt(): ThanosPrintAudioStmtContext {
		let _localctx: ThanosPrintAudioStmtContext = new ThanosPrintAudioStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, thanosParser.RULE_thanosPrintAudioStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this.match(thanosParser.AUDIO);
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === thanosParser.OPTIONS) {
				{
				this.state = 249;
				this.thanosOptionStmt();
				}
			}

			this.state = 252;
			this.match(thanosParser.AS);
			this.state = 254;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 253;
				this.thanosSubquery();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosPrintVideoStmt(): ThanosPrintVideoStmtContext {
		let _localctx: ThanosPrintVideoStmtContext = new ThanosPrintVideoStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, thanosParser.RULE_thanosPrintVideoStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.match(thanosParser.VIDEO);
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === thanosParser.OPTIONS) {
				{
				this.state = 257;
				this.thanosOptionStmt();
				}
			}

			this.state = 260;
			this.match(thanosParser.AS);
			this.state = 262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 261;
				this.thanosSubquery();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosCopyStmt(): ThanosCopyStmtContext {
		let _localctx: ThanosCopyStmtContext = new ThanosCopyStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, thanosParser.RULE_thanosCopyStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.match(thanosParser.COPY);
			this.state = 265;
			_localctx._user_table_name = this.match(thanosParser.IDENTIFIER);
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === thanosParser.OPTIONS) {
				{
				this.state = 266;
				this.thanosOptionStmt();
				}
			}

			this.state = 269;
			this.match(thanosParser.FROM);
			this.state = 270;
			_localctx._input_data = this.match(thanosParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosListStmt(): ThanosListStmtContext {
		let _localctx: ThanosListStmtContext = new ThanosListStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, thanosParser.RULE_thanosListStmt);
		try {
			this.state = 280;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 272;
				this.match(thanosParser.LIST);
				this.state = 273;
				this.thanosListTableStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 274;
				this.match(thanosParser.LIST);
				this.state = 275;
				this.thanosListModelStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 276;
				this.match(thanosParser.LIST);
				this.state = 277;
				this.thanosListThanoSQLModelStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 278;
				this.match(thanosParser.LIST);
				this.state = 279;
				this.thanosListThanoSQLDatasetStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosListTableStmt(): ThanosListTableStmtContext {
		let _localctx: ThanosListTableStmtContext = new ThanosListTableStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, thanosParser.RULE_thanosListTableStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.match(thanosParser.TABLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosListModelStmt(): ThanosListModelStmtContext {
		let _localctx: ThanosListModelStmtContext = new ThanosListModelStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, thanosParser.RULE_thanosListModelStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.match(thanosParser.MODEL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosListThanoSQLModelStmt(): ThanosListThanoSQLModelStmtContext {
		let _localctx: ThanosListThanoSQLModelStmtContext = new ThanosListThanoSQLModelStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, thanosParser.RULE_thanosListThanoSQLModelStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 286;
			this.match(thanosParser.THANOSQL);
			this.state = 287;
			this.match(thanosParser.MODEL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosListThanoSQLDatasetStmt(): ThanosListThanoSQLDatasetStmtContext {
		let _localctx: ThanosListThanoSQLDatasetStmtContext = new ThanosListThanoSQLDatasetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, thanosParser.RULE_thanosListThanoSQLDatasetStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.match(thanosParser.THANOSQL);
			this.state = 290;
			this.match(thanosParser.DATASET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosGetStmt(): ThanosGetStmtContext {
		let _localctx: ThanosGetStmtContext = new ThanosGetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, thanosParser.RULE_thanosGetStmt);
		try {
			this.state = 296;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 292;
				this.match(thanosParser.GET);
				this.state = 293;
				this.thanosGetThanoSQLModelStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 294;
				this.match(thanosParser.GET);
				this.state = 295;
				this.thanosGetThanoSQLDatasetStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosGetThanoSQLModelStmt(): ThanosGetThanoSQLModelStmtContext {
		let _localctx: ThanosGetThanoSQLModelStmtContext = new ThanosGetThanoSQLModelStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, thanosParser.RULE_thanosGetThanoSQLModelStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this.match(thanosParser.THANOSQL);
			this.state = 299;
			this.match(thanosParser.MODEL);
			this.state = 300;
			_localctx._built_model_name = this.match(thanosParser.IDENTIFIER);
			this.state = 302;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 301;
				this.thanosOptionStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosGetThanoSQLDatasetStmt(): ThanosGetThanoSQLDatasetStmtContext {
		let _localctx: ThanosGetThanoSQLDatasetStmtContext = new ThanosGetThanoSQLDatasetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, thanosParser.RULE_thanosGetThanoSQLDatasetStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this.match(thanosParser.THANOSQL);
			this.state = 305;
			this.match(thanosParser.DATASET);
			this.state = 306;
			_localctx._dataset_name = this.match(thanosParser.IDENTIFIER);
			this.state = 308;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 307;
				this.thanosOptionStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosUsingStmt(): ThanosUsingStmtContext {
		let _localctx: ThanosUsingStmtContext = new ThanosUsingStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, thanosParser.RULE_thanosUsingStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this.match(thanosParser.USING);
			this.state = 311;
			_localctx._built_model_name = this.match(thanosParser.IDENTIFIER);
			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === thanosParser.OPTIONS) {
				{
				this.state = 312;
				this.thanosOptionStmt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thanosOptionStmt(): ThanosOptionStmtContext {
		let _localctx: ThanosOptionStmtContext = new ThanosOptionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, thanosParser.RULE_thanosOptionStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.match(thanosParser.OPTIONS);
			this.state = 316;
			this.match(thanosParser.LEFT_PAREN);
			this.state = 317;
			_localctx._IDENTIFIER = this.match(thanosParser.IDENTIFIER);
			_localctx._paramsKey.push(_localctx._IDENTIFIER);
			this.state = 318;
			this.match(thanosParser.EQUAL);
			this.state = 319;
			_localctx._IDENTIFIER = this.match(thanosParser.IDENTIFIER);
			_localctx._paramsValue.push(_localctx._IDENTIFIER);
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === thanosParser.COMMA) {
				{
				{
				this.state = 320;
				this.match(thanosParser.COMMA);
				this.state = 321;
				_localctx._IDENTIFIER = this.match(thanosParser.IDENTIFIER);
				_localctx._paramsKey.push(_localctx._IDENTIFIER);
				this.state = 322;
				this.match(thanosParser.EQUAL);
				this.state = 323;
				_localctx._IDENTIFIER = this.match(thanosParser.IDENTIFIER);
				_localctx._paramsValue.push(_localctx._IDENTIFIER);
				}
				}
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 329;
			this.match(thanosParser.RIGHT_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalSubquery(): NormalSubqueryContext {
		let _localctx: NormalSubqueryContext = new NormalSubqueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, thanosParser.RULE_normalSubquery);
		try {
			this.state = 335;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case thanosParser.FROM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 331;
				this.match(thanosParser.FROM);
				this.state = 332;
				this.thanosSubquery();
				}
				break;
			case thanosParser.JOIN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 333;
				this.match(thanosParser.JOIN);
				this.state = 334;
				this.thanosSubquery();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalStmt(): NormalStmtContext {
		let _localctx: NormalStmtContext = new NormalStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, thanosParser.RULE_normalStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.remaining();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public remaining(): RemainingContext {
		let _localctx: RemainingContext = new RemainingContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, thanosParser.RULE_remaining);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 339;
					this.matchWildcard();
					}
					}
				}
				this.state = 344;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalParenException(): NormalParenExceptionContext {
		let _localctx: NormalParenExceptionContext = new NormalParenExceptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, thanosParser.RULE_normalParenException);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.match(thanosParser.LEFT_PAREN);
			this.state = 346;
			this.remaining();
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === thanosParser.LEFT_PAREN) {
				{
				this.state = 347;
				this.normalParenException();
				}
			}

			this.state = 350;
			this.match(thanosParser.RIGHT_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x033\u0163\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03X\n\x03\f\x03\x0E\x03[\v\x03\x03" +
		"\x04\x03\x04\x05\x04_\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05h\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06r\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x07\x07y\n\x07\f\x07\x0E\x07|\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x05\b\x86\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x05\t\x8E\n\t\x03\n\x03\n\x03\n\x03\n\x05\n\x94\n\n\x03\n\x03\n\x03\n" +
		"\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x05\f\xA1\n\f\x03\r\x03" +
		"\r\x03\r\x03\r\x05\r\xA7\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xAD" +
		"\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\xB9\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\xBF\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xC5\n\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x05\x12\xCB\n\x12\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x05\x13\xD1\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xD7\n\x14" +
		"\x03\x15\x03\x15\x03\x15\x05\x15\xDC\n\x15\x03\x15\x03\x15\x05\x15\xE0" +
		"\n\x15\x03\x15\x03\x15\x03\x15\x05\x15\xE5\n\x15\x03\x15\x03\x15\x05\x15" +
		"\xE9\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\xF1" +
		"\n\x16\x03\x17\x03\x17\x05\x17\xF5\n\x17\x03\x17\x03\x17\x05\x17\xF9\n" +
		"\x17\x03\x18\x03\x18\x05\x18\xFD\n\x18\x03\x18\x03\x18\x05\x18\u0101\n" +
		"\x18\x03\x19\x03\x19\x05\x19\u0105\n\x19\x03\x19\x03\x19\x05\x19\u0109" +
		"\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u010E\n\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05" +
		"\x1B\u011B\n\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x05 \u012B\n \x03!\x03!\x03" +
		"!\x03!\x05!\u0131\n!\x03\"\x03\"\x03\"\x03\"\x05\"\u0137\n\"\x03#\x03" +
		"#\x03#\x05#\u013C\n#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x07" +
		"$\u0147\n$\f$\x0E$\u014A\v$\x03$\x03$\x03%\x03%\x03%\x03%\x05%\u0152\n" +
		"%\x03&\x03&\x03\'\x07\'\u0157\n\'\f\'\x0E\'\u015A\v\'\x03(\x03(\x03(\x05" +
		"(\u015F\n(\x03(\x03(\x03(\x03\u0158\x02\x02)\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
		"6\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02\x02" +
		"\x02\x02\u0172\x02P\x03\x02\x02\x02\x04S\x03\x02\x02\x02\x06^\x03\x02" +
		"\x02\x02\bg\x03\x02\x02\x02\nq\x03\x02\x02\x02\fs\x03\x02\x02\x02\x0E" +
		"\x7F\x03\x02\x02\x02\x10\x87\x03\x02\x02\x02\x12\x8F\x03\x02\x02\x02\x14" +
		"\x98\x03\x02\x02\x02\x16\x9C\x03\x02\x02\x02\x18\xA2\x03\x02\x02\x02\x1A" +
		"\xA8\x03\x02\x02\x02\x1C\xB8\x03\x02\x02\x02\x1E\xBA\x03\x02\x02\x02 " +
		"\xC0\x03\x02\x02\x02\"\xC6\x03\x02\x02\x02$\xCC\x03\x02\x02\x02&\xD2\x03" +
		"\x02\x02\x02(\xE8\x03\x02\x02\x02*\xF0\x03\x02\x02\x02,\xF2\x03\x02\x02" +
		"\x02.\xFA\x03\x02\x02\x020\u0102\x03\x02\x02\x022\u010A\x03\x02\x02\x02" +
		"4\u011A\x03\x02\x02\x026\u011C\x03\x02\x02\x028\u011E\x03\x02\x02\x02" +
		":\u0120\x03\x02\x02\x02<\u0123\x03\x02\x02\x02>\u012A\x03\x02\x02\x02" +
		"@\u012C\x03\x02\x02\x02B\u0132\x03\x02\x02\x02D\u0138\x03\x02\x02\x02" +
		"F\u013D\x03\x02\x02\x02H\u0151\x03\x02\x02\x02J\u0153\x03\x02\x02\x02" +
		"L\u0158\x03\x02\x02\x02N\u015B\x03\x02\x02\x02PQ\x05\x04\x03\x02QR\x07" +
		"\x02\x02\x03R\x03\x03\x02\x02\x02SY\x05J&\x02TU\x05\x06\x04\x02UV\x05" +
		"J&\x02VX\x03\x02\x02\x02WT\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02" +
		"\x02\x02YZ\x03\x02\x02\x02Z\x05\x03\x02\x02\x02[Y\x03\x02\x02\x02\\_\x05" +
		"\b\x05\x02]_\x05\n\x06\x02^\\\x03\x02\x02\x02^]\x03\x02\x02\x02_\x07\x03" +
		"\x02\x02\x02`h\x05\x0E\b\x02ah\x05\x10\t\x02bh\x05\x12\n\x02ch\x05\x14" +
		"\v\x02dh\x05*\x16\x02eh\x052\x1A\x02fh\x05> \x02g`\x03\x02\x02\x02ga\x03" +
		"\x02\x02\x02gb\x03\x02\x02\x02gc\x03\x02\x02\x02gd\x03\x02\x02\x02ge\x03" +
		"\x02\x02\x02gf\x03\x02\x02\x02h\t\x03\x02\x02\x02ir\x05\x16\f\x02jr\x05" +
		"\x18\r\x02kr\x05\x1A\x0E\x02lr\x05\x1C\x0F\x02mr\x05(\x15\x02nr\x054\x1B" +
		"\x02or\x05H%\x02pr\x05N(\x02qi\x03\x02\x02\x02qj\x03\x02\x02\x02qk\x03" +
		"\x02\x02\x02ql\x03\x02\x02\x02qm\x03\x02\x02\x02qn\x03\x02\x02\x02qo\x03" +
		"\x02\x02\x02qp\x03\x02\x02\x02r\v\x03\x02\x02\x02st\x07\'\x02\x02tz\x05" +
		"J&\x02uv\x05\n\x06\x02vw\x05J&\x02wy\x03\x02\x02\x02xu\x03\x02\x02\x02" +
		"y|\x03\x02\x02\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02{}\x03\x02\x02\x02" +
		"|z\x03\x02\x02\x02}~\x07(\x02\x02~\r\x03\x02\x02\x02\x7F\x80\x07\x04\x02" +
		"\x02\x80\x81\x07\x03\x02\x02\x81\x82\x07 \x02\x02\x82\x83\x05D#\x02\x83" +
		"\x85\x07\x17\x02\x02\x84\x86\x05\f\x07\x02\x85\x84\x03\x02\x02\x02\x85" +
		"\x86\x03\x02\x02\x02\x86\x0F\x03\x02\x02\x02\x87\x88\x07\x05\x02\x02\x88" +
		"\x89\x07\x03\x02\x02\x89\x8A\x07 \x02\x02\x8A\x8B\x05D#\x02\x8B\x8D\x07" +
		"\x17\x02\x02\x8C\x8E\x05\f\x07\x02\x8D\x8C\x03\x02\x02\x02\x8D\x8E\x03" +
		"\x02\x02\x02\x8E\x11\x03\x02\x02\x02\x8F\x90\x07\x06\x02\x02\x90\x91\x07" +
		"\x03\x02\x02\x91\x93\x07 \x02\x02\x92\x94\x05F$\x02\x93\x92\x03\x02\x02" +
		"\x02\x93\x94\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\x07\x1F\x02" +
		"\x02\x96\x97\x07 \x02\x02\x97\x13\x03\x02\x02\x02\x98\x99\x07\x07\x02" +
		"\x02\x99\x9A\x07\x03\x02\x02\x9A\x9B\x07 \x02\x02\x9B\x15\x03\x02\x02" +
		"\x02\x9C\x9D\x07\t\x02\x02\x9D\x9E\x05D#\x02\x9E\xA0\x07\x17\x02\x02\x9F" +
		"\xA1\x05\f\x07\x02\xA0\x9F\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1" +
		"\x17\x03\x02\x02\x02\xA2\xA3\x07\n\x02\x02\xA3\xA4\x05D#\x02\xA4\xA6\x07" +
		"\x17\x02\x02\xA5\xA7\x05\f\x07\x02\xA6\xA5\x03\x02\x02\x02\xA6\xA7\x03" +
		"\x02\x02\x02\xA7\x19\x03\x02\x02\x02\xA8\xA9\x07\v\x02\x02\xA9\xAA\x05" +
		"D#\x02\xAA\xAC\x07\x17\x02\x02\xAB\xAD\x05\f\x07\x02\xAC\xAB\x03\x02\x02" +
		"\x02\xAC\xAD\x03\x02\x02\x02\xAD\x1B\x03\x02\x02\x02\xAE\xAF\x07\f\x02" +
		"\x02\xAF\xB9\x05\x1E\x10\x02\xB0\xB1\x07\f\x02\x02\xB1\xB9\x05 \x11\x02" +
		"\xB2\xB3\x07\f\x02\x02\xB3\xB9\x05\"\x12\x02\xB4\xB5\x07\f\x02\x02\xB5" +
		"\xB9\x05$\x13\x02\xB6\xB7\x07\f\x02\x02\xB7\xB9\x05&\x14\x02\xB8\xAE\x03" +
		"\x02\x02\x02\xB8\xB0\x03\x02\x02\x02\xB8\xB2\x03\x02\x02\x02\xB8\xB4\x03" +
		"\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\x1D\x03\x02\x02\x02\xBA\xBB\x07" +
		"\x19\x02\x02\xBB\xBC\x05D#\x02\xBC\xBE\x07\x17\x02\x02\xBD\xBF\x05\f\x07" +
		"\x02\xBE\xBD\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\x1F\x03\x02\x02" +
		"\x02\xC0\xC1\x07\x1A\x02\x02\xC1\xC2\x05D#\x02\xC2\xC4\x07\x17\x02\x02" +
		"\xC3\xC5\x05\f\x07\x02\xC4\xC3\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02" +
		"\xC5!\x03\x02\x02\x02\xC6\xC7\x07\x1B\x02\x02\xC7\xC8\x05D#\x02\xC8\xCA" +
		"\x07\x17\x02\x02\xC9\xCB\x05\f\x07\x02\xCA\xC9\x03\x02\x02\x02\xCA\xCB" +
		"\x03\x02\x02\x02\xCB#\x03\x02\x02\x02\xCC\xCD\x07\x1C\x02\x02\xCD\xCE" +
		"\x05D#\x02\xCE\xD0\x07\x17\x02\x02\xCF\xD1\x05\f\x07\x02\xD0\xCF\x03\x02" +
		"\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1%\x03\x02\x02\x02\xD2\xD3\x07\x1D" +
		"\x02\x02\xD3\xD4\x05D#\x02\xD4\xD6\x07\x17\x02\x02\xD5\xD7\x05\f\x07\x02" +
		"\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\'\x03\x02\x02\x02" +
		"\xD8\xD9\x07\r\x02\x02\xD9\xDB\x07 \x02\x02\xDA\xDC\x05F$\x02\xDB\xDA" +
		"\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDF" +
		"\x07\x17\x02\x02\xDE\xE0\x05\f\x07\x02\xDF\xDE\x03\x02\x02\x02\xDF\xE0" +
		"\x03\x02\x02\x02\xE0\xE9\x03\x02\x02\x02\xE1\xE2\x07\r\x02\x02\xE2\xE4" +
		"\x07 \x02\x02\xE3\xE5\x05F$\x02\xE4\xE3\x03\x02\x02\x02\xE4\xE5\x03\x02" +
		"\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x07\x1F\x02\x02\xE7\xE9\x07 " +
		"\x02\x02\xE8\xD8\x03\x02\x02\x02\xE8\xE1\x03\x02\x02\x02\xE9)\x03\x02" +
		"\x02\x02\xEA\xEB\x07\x0E\x02\x02\xEB\xF1\x05,\x17\x02\xEC\xED\x07\x0E" +
		"\x02\x02\xED\xF1\x05.\x18\x02\xEE\xEF\x07\x0E\x02\x02\xEF\xF1\x050\x19" +
		"\x02\xF0\xEA\x03\x02\x02\x02\xF0\xEC\x03\x02\x02\x02\xF0\xEE\x03\x02\x02" +
		"\x02\xF1+\x03\x02\x02\x02\xF2\xF4\x07\x19\x02\x02\xF3\xF5\x05F$\x02\xF4" +
		"\xF3\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6" +
		"\xF8\x07\x17\x02\x02\xF7\xF9\x05\f\x07\x02\xF8\xF7\x03\x02\x02\x02\xF8" +
		"\xF9\x03\x02\x02\x02\xF9-\x03\x02\x02\x02\xFA\xFC\x07\x1A\x02\x02\xFB" +
		"\xFD\x05F$\x02\xFC\xFB\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE" +
		"\x03\x02\x02\x02\xFE\u0100\x07\x17\x02\x02\xFF\u0101\x05\f\x07\x02\u0100" +
		"\xFF\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101/\x03\x02\x02\x02" +
		"\u0102\u0104\x07\x1B\x02\x02\u0103\u0105\x05F$\x02\u0104\u0103\x03\x02" +
		"\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106" +
		"\u0108\x07\x17\x02\x02\u0107\u0109\x05\f\x07\x02\u0108\u0107\x03\x02\x02" +
		"\x02\u0108\u0109\x03\x02\x02\x02\u01091\x03\x02\x02\x02\u010A\u010B\x07" +
		"\x0F\x02\x02\u010B\u010D\x07 \x02\x02\u010C\u010E\x05F$\x02\u010D\u010C" +
		"\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02" +
		"\u010F\u0110\x07\x1F\x02\x02\u0110\u0111\x07 \x02\x02\u01113\x03\x02\x02" +
		"\x02\u0112\u0113\x07\x10\x02\x02\u0113\u011B\x056\x1C\x02\u0114\u0115" +
		"\x07\x10\x02\x02\u0115\u011B\x058\x1D\x02\u0116\u0117\x07\x10\x02\x02" +
		"\u0117\u011B\x05:\x1E\x02\u0118\u0119\x07\x10\x02\x02\u0119\u011B\x05" +
		"<\x1F\x02\u011A\u0112\x03\x02\x02\x02\u011A\u0114\x03\x02\x02\x02\u011A" +
		"\u0116\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011B5\x03\x02\x02" +
		"\x02\u011C\u011D\x07\x11\x02\x02\u011D7\x03\x02\x02\x02\u011E\u011F\x07" +
		"\x03\x02\x02\u011F9\x03\x02\x02\x02\u0120\u0121\x07\x12\x02\x02\u0121" +
		"\u0122\x07\x03\x02\x02\u0122;\x03\x02\x02\x02\u0123\u0124\x07\x12\x02" +
		"\x02\u0124\u0125\x07\x13\x02\x02\u0125=\x03\x02\x02\x02\u0126\u0127\x07" +
		"\x14\x02\x02\u0127\u012B\x05@!\x02\u0128\u0129\x07\x14\x02\x02\u0129\u012B" +
		"\x05B\"\x02\u012A\u0126\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B" +
		"?\x03\x02\x02\x02\u012C\u012D\x07\x12\x02\x02\u012D\u012E\x07\x03\x02" +
		"\x02\u012E\u0130\x07 \x02\x02\u012F\u0131\x05F$\x02\u0130\u012F\x03\x02" +
		"\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131A\x03\x02\x02\x02\u0132\u0133" +
		"\x07\x12\x02\x02\u0133\u0134\x07\x13\x02\x02\u0134\u0136\x07 \x02\x02" +
		"\u0135\u0137\x05F$\x02\u0136\u0135\x03\x02\x02\x02\u0136\u0137\x03\x02" +
		"\x02\x02\u0137C\x03\x02\x02\x02\u0138\u0139\x07\x15\x02\x02\u0139\u013B" +
		"\x07 \x02\x02\u013A\u013C\x05F$\x02\u013B\u013A\x03\x02\x02\x02\u013B" +
		"\u013C\x03\x02\x02\x02\u013CE\x03\x02\x02\x02\u013D\u013E\x07\x16\x02" +
		"\x02\u013E\u013F\x07\'\x02\x02\u013F\u0140\x07 \x02\x02\u0140\u0141\x07" +
		"&\x02\x02\u0141\u0148\x07 \x02\x02\u0142\u0143\x07%\x02\x02\u0143\u0144" +
		"\x07 \x02\x02\u0144\u0145\x07&\x02\x02\u0145\u0147\x07 \x02\x02\u0146" +
		"\u0142\x03\x02\x02\x02\u0147\u014A\x03\x02\x02\x02\u0148\u0146\x03\x02" +
		"\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014B\x03\x02\x02\x02\u014A" +
		"\u0148\x03\x02\x02\x02\u014B\u014C\x07(\x02\x02\u014CG\x03\x02\x02\x02" +
		"\u014D\u014E\x07\x1F\x02\x02\u014E\u0152\x05\f\x07\x02\u014F\u0150\x07" +
		"\x1E\x02\x02\u0150\u0152\x05\f\x07\x02\u0151\u014D\x03\x02\x02\x02\u0151" +
		"\u014F\x03\x02\x02\x02\u0152I\x03\x02\x02\x02\u0153\u0154\x05L\'\x02\u0154" +
		"K\x03\x02\x02\x02\u0155\u0157\v\x02\x02\x02\u0156\u0155\x03\x02\x02\x02" +
		"\u0157\u015A\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0158\u0156\x03" +
		"\x02\x02\x02\u0159M\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015B" +
		"\u015C\x07\'\x02\x02\u015C\u015E\x05L\'\x02\u015D\u015F\x05N(\x02\u015E" +
		"\u015D\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x03\x02" +
		"\x02\x02\u0160\u0161\x07(\x02\x02\u0161O\x03\x02\x02\x02(Y^gqz\x85\x8D" +
		"\x93\xA0\xA6\xAC\xB8\xBE\xC4\xCA\xD0\xD6\xDB\xDF\xE4\xE8\xF0\xF4\xF8\xFC" +
		"\u0100\u0104\u0108\u010D\u011A\u012A\u0130\u0136\u013B\u0148\u0151\u0158" +
		"\u015E";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!thanosParser.__ATN) {
			thanosParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(thanosParser._serializedATN));
		}

		return thanosParser.__ATN;
	}

}

export class ThanosLanguageContext extends ParserRuleContext {
	public thanosQuery(): ThanosQueryContext {
		return this.getRuleContext(0, ThanosQueryContext);
	}
	public EOF(): TerminalNode { return this.getToken(thanosParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosLanguage; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosLanguage) {
			listener.enterThanosLanguage(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
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
	public get ruleIndex(): number { return thanosParser.RULE_thanosQuery; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosQuery) {
			listener.enterThanosQuery(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosQuery) {
			listener.exitThanosQuery(this);
		}
	}
}


export class ThanosStmtContext extends ParserRuleContext {
	public thanosNoSubqueryStmt(): ThanosNoSubqueryStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosNoSubqueryStmtContext);
	}
	public thanosSubqueryStmt(): ThanosSubqueryStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosSubqueryStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosStmt) {
			listener.enterThanosStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosStmt) {
			listener.exitThanosStmt(this);
		}
	}
}


export class ThanosNoSubqueryStmtContext extends ParserRuleContext {
	public thanosBuildModelStmt(): ThanosBuildModelStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosBuildModelStmtContext);
	}
	public thanosFitModelStmt(): ThanosFitModelStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosFitModelStmtContext);
	}
	public thanosUploadModelStmt(): ThanosUploadModelStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosUploadModelStmtContext);
	}
	public thanosDeleteModelStmt(): ThanosDeleteModelStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosDeleteModelStmtContext);
	}
	public thanosPrintStmt(): ThanosPrintStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosPrintStmtContext);
	}
	public thanosCopyStmt(): ThanosCopyStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosCopyStmtContext);
	}
	public thanosGetStmt(): ThanosGetStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosGetStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosNoSubqueryStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosNoSubqueryStmt) {
			listener.enterThanosNoSubqueryStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosNoSubqueryStmt) {
			listener.exitThanosNoSubqueryStmt(this);
		}
	}
}


export class ThanosSubqueryStmtContext extends ParserRuleContext {
	public thanosPredictStmt(): ThanosPredictStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosPredictStmtContext);
	}
	public thanosEvaluateStmt(): ThanosEvaluateStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosEvaluateStmtContext);
	}
	public thanosConvertStmt(): ThanosConvertStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosConvertStmtContext);
	}
	public thanosSearchStmt(): ThanosSearchStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosSearchStmtContext);
	}
	public thanosFunctionStmt(): ThanosFunctionStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosFunctionStmtContext);
	}
	public thanosListStmt(): ThanosListStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosListStmtContext);
	}
	public normalSubquery(): NormalSubqueryContext | undefined {
		return this.tryGetRuleContext(0, NormalSubqueryContext);
	}
	public normalParenException(): NormalParenExceptionContext | undefined {
		return this.tryGetRuleContext(0, NormalParenExceptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosSubqueryStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosSubqueryStmt) {
			listener.enterThanosSubqueryStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosSubqueryStmt) {
			listener.exitThanosSubqueryStmt(this);
		}
	}
}


export class ThanosSubqueryContext extends ParserRuleContext {
	public LEFT_PAREN(): TerminalNode { return this.getToken(thanosParser.LEFT_PAREN, 0); }
	public normalStmt(): NormalStmtContext[];
	public normalStmt(i: number): NormalStmtContext;
	public normalStmt(i?: number): NormalStmtContext | NormalStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NormalStmtContext);
		} else {
			return this.getRuleContext(i, NormalStmtContext);
		}
	}
	public RIGHT_PAREN(): TerminalNode { return this.getToken(thanosParser.RIGHT_PAREN, 0); }
	public thanosSubqueryStmt(): ThanosSubqueryStmtContext[];
	public thanosSubqueryStmt(i: number): ThanosSubqueryStmtContext;
	public thanosSubqueryStmt(i?: number): ThanosSubqueryStmtContext | ThanosSubqueryStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ThanosSubqueryStmtContext);
		} else {
			return this.getRuleContext(i, ThanosSubqueryStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosSubquery; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosSubquery) {
			listener.enterThanosSubquery(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosSubquery) {
			listener.exitThanosSubquery(this);
		}
	}
}


export class ThanosBuildModelStmtContext extends ParserRuleContext {
	public _user_model_name!: Token;
	public BUILD(): TerminalNode { return this.getToken(thanosParser.BUILD, 0); }
	public MODEL(): TerminalNode { return this.getToken(thanosParser.MODEL, 0); }
	public thanosUsingStmt(): ThanosUsingStmtContext {
		return this.getRuleContext(0, ThanosUsingStmtContext);
	}
	public AS(): TerminalNode { return this.getToken(thanosParser.AS, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(thanosParser.IDENTIFIER, 0); }
	public thanosSubquery(): ThanosSubqueryContext | undefined {
		return this.tryGetRuleContext(0, ThanosSubqueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosBuildModelStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosBuildModelStmt) {
			listener.enterThanosBuildModelStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosBuildModelStmt) {
			listener.exitThanosBuildModelStmt(this);
		}
	}
}


export class ThanosFitModelStmtContext extends ParserRuleContext {
	public _user_model_name!: Token;
	public FIT(): TerminalNode { return this.getToken(thanosParser.FIT, 0); }
	public MODEL(): TerminalNode { return this.getToken(thanosParser.MODEL, 0); }
	public thanosUsingStmt(): ThanosUsingStmtContext {
		return this.getRuleContext(0, ThanosUsingStmtContext);
	}
	public AS(): TerminalNode { return this.getToken(thanosParser.AS, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(thanosParser.IDENTIFIER, 0); }
	public thanosSubquery(): ThanosSubqueryContext | undefined {
		return this.tryGetRuleContext(0, ThanosSubqueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosFitModelStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosFitModelStmt) {
			listener.enterThanosFitModelStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosFitModelStmt) {
			listener.exitThanosFitModelStmt(this);
		}
	}
}


export class ThanosUploadModelStmtContext extends ParserRuleContext {
	public _user_model_name!: Token;
	public _path!: Token;
	public UPLOAD(): TerminalNode { return this.getToken(thanosParser.UPLOAD, 0); }
	public MODEL(): TerminalNode { return this.getToken(thanosParser.MODEL, 0); }
	public FROM(): TerminalNode { return this.getToken(thanosParser.FROM, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(thanosParser.IDENTIFIER);
		} else {
			return this.getToken(thanosParser.IDENTIFIER, i);
		}
	}
	public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosOptionStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosUploadModelStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosUploadModelStmt) {
			listener.enterThanosUploadModelStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosUploadModelStmt) {
			listener.exitThanosUploadModelStmt(this);
		}
	}
}


export class ThanosDeleteModelStmtContext extends ParserRuleContext {
	public _built_model_name!: Token;
	public DELETE(): TerminalNode { return this.getToken(thanosParser.DELETE, 0); }
	public MODEL(): TerminalNode { return this.getToken(thanosParser.MODEL, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(thanosParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosDeleteModelStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosDeleteModelStmt) {
			listener.enterThanosDeleteModelStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosDeleteModelStmt) {
			listener.exitThanosDeleteModelStmt(this);
		}
	}
}


export class ThanosPredictStmtContext extends ParserRuleContext {
	public PREDICT(): TerminalNode { return this.getToken(thanosParser.PREDICT, 0); }
	public thanosUsingStmt(): ThanosUsingStmtContext {
		return this.getRuleContext(0, ThanosUsingStmtContext);
	}
	public AS(): TerminalNode { return this.getToken(thanosParser.AS, 0); }
	public thanosSubquery(): ThanosSubqueryContext | undefined {
		return this.tryGetRuleContext(0, ThanosSubqueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosPredictStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosPredictStmt) {
			listener.enterThanosPredictStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosPredictStmt) {
			listener.exitThanosPredictStmt(this);
		}
	}
}


export class ThanosEvaluateStmtContext extends ParserRuleContext {
	public EVALUATE(): TerminalNode { return this.getToken(thanosParser.EVALUATE, 0); }
	public thanosUsingStmt(): ThanosUsingStmtContext {
		return this.getRuleContext(0, ThanosUsingStmtContext);
	}
	public AS(): TerminalNode { return this.getToken(thanosParser.AS, 0); }
	public thanosSubquery(): ThanosSubqueryContext | undefined {
		return this.tryGetRuleContext(0, ThanosSubqueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosEvaluateStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosEvaluateStmt) {
			listener.enterThanosEvaluateStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosEvaluateStmt) {
			listener.exitThanosEvaluateStmt(this);
		}
	}
}


export class ThanosConvertStmtContext extends ParserRuleContext {
	public CONVERT(): TerminalNode { return this.getToken(thanosParser.CONVERT, 0); }
	public thanosUsingStmt(): ThanosUsingStmtContext {
		return this.getRuleContext(0, ThanosUsingStmtContext);
	}
	public AS(): TerminalNode { return this.getToken(thanosParser.AS, 0); }
	public thanosSubquery(): ThanosSubqueryContext | undefined {
		return this.tryGetRuleContext(0, ThanosSubqueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosConvertStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosConvertStmt) {
			listener.enterThanosConvertStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosConvertStmt) {
			listener.exitThanosConvertStmt(this);
		}
	}
}


export class ThanosSearchStmtContext extends ParserRuleContext {
	public SEARCH(): TerminalNode { return this.getToken(thanosParser.SEARCH, 0); }
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
	public get ruleIndex(): number { return thanosParser.RULE_thanosSearchStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosSearchStmt) {
			listener.enterThanosSearchStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosSearchStmt) {
			listener.exitThanosSearchStmt(this);
		}
	}
}


export class ThanosSearchImageStmtContext extends ParserRuleContext {
	public IMAGE(): TerminalNode { return this.getToken(thanosParser.IMAGE, 0); }
	public thanosUsingStmt(): ThanosUsingStmtContext {
		return this.getRuleContext(0, ThanosUsingStmtContext);
	}
	public AS(): TerminalNode { return this.getToken(thanosParser.AS, 0); }
	public thanosSubquery(): ThanosSubqueryContext | undefined {
		return this.tryGetRuleContext(0, ThanosSubqueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosSearchImageStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosSearchImageStmt) {
			listener.enterThanosSearchImageStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosSearchImageStmt) {
			listener.exitThanosSearchImageStmt(this);
		}
	}
}


export class ThanosSearchAudioStmtContext extends ParserRuleContext {
	public AUDIO(): TerminalNode { return this.getToken(thanosParser.AUDIO, 0); }
	public thanosUsingStmt(): ThanosUsingStmtContext {
		return this.getRuleContext(0, ThanosUsingStmtContext);
	}
	public AS(): TerminalNode { return this.getToken(thanosParser.AS, 0); }
	public thanosSubquery(): ThanosSubqueryContext | undefined {
		return this.tryGetRuleContext(0, ThanosSubqueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosSearchAudioStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosSearchAudioStmt) {
			listener.enterThanosSearchAudioStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosSearchAudioStmt) {
			listener.exitThanosSearchAudioStmt(this);
		}
	}
}


export class ThanosSearchVideoStmtContext extends ParserRuleContext {
	public VIDEO(): TerminalNode { return this.getToken(thanosParser.VIDEO, 0); }
	public thanosUsingStmt(): ThanosUsingStmtContext {
		return this.getRuleContext(0, ThanosUsingStmtContext);
	}
	public AS(): TerminalNode { return this.getToken(thanosParser.AS, 0); }
	public thanosSubquery(): ThanosSubqueryContext | undefined {
		return this.tryGetRuleContext(0, ThanosSubqueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosSearchVideoStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosSearchVideoStmt) {
			listener.enterThanosSearchVideoStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosSearchVideoStmt) {
			listener.exitThanosSearchVideoStmt(this);
		}
	}
}


export class ThanosSearchKeywordStmtContext extends ParserRuleContext {
	public KEYWORD(): TerminalNode { return this.getToken(thanosParser.KEYWORD, 0); }
	public thanosUsingStmt(): ThanosUsingStmtContext {
		return this.getRuleContext(0, ThanosUsingStmtContext);
	}
	public AS(): TerminalNode { return this.getToken(thanosParser.AS, 0); }
	public thanosSubquery(): ThanosSubqueryContext | undefined {
		return this.tryGetRuleContext(0, ThanosSubqueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosSearchKeywordStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosSearchKeywordStmt) {
			listener.enterThanosSearchKeywordStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosSearchKeywordStmt) {
			listener.exitThanosSearchKeywordStmt(this);
		}
	}
}


export class ThanosSearchTextStmtContext extends ParserRuleContext {
	public TEXT(): TerminalNode { return this.getToken(thanosParser.TEXT, 0); }
	public thanosUsingStmt(): ThanosUsingStmtContext {
		return this.getRuleContext(0, ThanosUsingStmtContext);
	}
	public AS(): TerminalNode { return this.getToken(thanosParser.AS, 0); }
	public thanosSubquery(): ThanosSubqueryContext | undefined {
		return this.tryGetRuleContext(0, ThanosSubqueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosSearchTextStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosSearchTextStmt) {
			listener.enterThanosSearchTextStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosSearchTextStmt) {
			listener.exitThanosSearchTextStmt(this);
		}
	}
}


export class ThanosFunctionStmtContext extends ParserRuleContext {
	public _built_function_name!: Token;
	public _input_data!: Token;
	public FUNCTION(): TerminalNode { return this.getToken(thanosParser.FUNCTION, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(thanosParser.AS, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(thanosParser.IDENTIFIER);
		} else {
			return this.getToken(thanosParser.IDENTIFIER, i);
		}
	}
	public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosOptionStmtContext);
	}
	public thanosSubquery(): ThanosSubqueryContext | undefined {
		return this.tryGetRuleContext(0, ThanosSubqueryContext);
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(thanosParser.FROM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosFunctionStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosFunctionStmt) {
			listener.enterThanosFunctionStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosFunctionStmt) {
			listener.exitThanosFunctionStmt(this);
		}
	}
}


export class ThanosPrintStmtContext extends ParserRuleContext {
	public PRINT(): TerminalNode { return this.getToken(thanosParser.PRINT, 0); }
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
	public get ruleIndex(): number { return thanosParser.RULE_thanosPrintStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosPrintStmt) {
			listener.enterThanosPrintStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosPrintStmt) {
			listener.exitThanosPrintStmt(this);
		}
	}
}


export class ThanosPrintImageStmtContext extends ParserRuleContext {
	public IMAGE(): TerminalNode { return this.getToken(thanosParser.IMAGE, 0); }
	public AS(): TerminalNode { return this.getToken(thanosParser.AS, 0); }
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
	public get ruleIndex(): number { return thanosParser.RULE_thanosPrintImageStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosPrintImageStmt) {
			listener.enterThanosPrintImageStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosPrintImageStmt) {
			listener.exitThanosPrintImageStmt(this);
		}
	}
}


export class ThanosPrintAudioStmtContext extends ParserRuleContext {
	public AUDIO(): TerminalNode { return this.getToken(thanosParser.AUDIO, 0); }
	public AS(): TerminalNode { return this.getToken(thanosParser.AS, 0); }
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
	public get ruleIndex(): number { return thanosParser.RULE_thanosPrintAudioStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosPrintAudioStmt) {
			listener.enterThanosPrintAudioStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosPrintAudioStmt) {
			listener.exitThanosPrintAudioStmt(this);
		}
	}
}


export class ThanosPrintVideoStmtContext extends ParserRuleContext {
	public VIDEO(): TerminalNode { return this.getToken(thanosParser.VIDEO, 0); }
	public AS(): TerminalNode { return this.getToken(thanosParser.AS, 0); }
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
	public get ruleIndex(): number { return thanosParser.RULE_thanosPrintVideoStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosPrintVideoStmt) {
			listener.enterThanosPrintVideoStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosPrintVideoStmt) {
			listener.exitThanosPrintVideoStmt(this);
		}
	}
}


export class ThanosCopyStmtContext extends ParserRuleContext {
	public _user_table_name!: Token;
	public _input_data!: Token;
	public COPY(): TerminalNode { return this.getToken(thanosParser.COPY, 0); }
	public FROM(): TerminalNode { return this.getToken(thanosParser.FROM, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(thanosParser.IDENTIFIER);
		} else {
			return this.getToken(thanosParser.IDENTIFIER, i);
		}
	}
	public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosOptionStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosCopyStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosCopyStmt) {
			listener.enterThanosCopyStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosCopyStmt) {
			listener.exitThanosCopyStmt(this);
		}
	}
}


export class ThanosListStmtContext extends ParserRuleContext {
	public LIST(): TerminalNode { return this.getToken(thanosParser.LIST, 0); }
	public thanosListTableStmt(): ThanosListTableStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosListTableStmtContext);
	}
	public thanosListModelStmt(): ThanosListModelStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosListModelStmtContext);
	}
	public thanosListThanoSQLModelStmt(): ThanosListThanoSQLModelStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosListThanoSQLModelStmtContext);
	}
	public thanosListThanoSQLDatasetStmt(): ThanosListThanoSQLDatasetStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosListThanoSQLDatasetStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosListStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosListStmt) {
			listener.enterThanosListStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosListStmt) {
			listener.exitThanosListStmt(this);
		}
	}
}


export class ThanosListTableStmtContext extends ParserRuleContext {
	public TABLE(): TerminalNode { return this.getToken(thanosParser.TABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosListTableStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosListTableStmt) {
			listener.enterThanosListTableStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosListTableStmt) {
			listener.exitThanosListTableStmt(this);
		}
	}
}


export class ThanosListModelStmtContext extends ParserRuleContext {
	public MODEL(): TerminalNode { return this.getToken(thanosParser.MODEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosListModelStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosListModelStmt) {
			listener.enterThanosListModelStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosListModelStmt) {
			listener.exitThanosListModelStmt(this);
		}
	}
}


export class ThanosListThanoSQLModelStmtContext extends ParserRuleContext {
	public THANOSQL(): TerminalNode { return this.getToken(thanosParser.THANOSQL, 0); }
	public MODEL(): TerminalNode { return this.getToken(thanosParser.MODEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosListThanoSQLModelStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosListThanoSQLModelStmt) {
			listener.enterThanosListThanoSQLModelStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosListThanoSQLModelStmt) {
			listener.exitThanosListThanoSQLModelStmt(this);
		}
	}
}


export class ThanosListThanoSQLDatasetStmtContext extends ParserRuleContext {
	public THANOSQL(): TerminalNode { return this.getToken(thanosParser.THANOSQL, 0); }
	public DATASET(): TerminalNode { return this.getToken(thanosParser.DATASET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosListThanoSQLDatasetStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosListThanoSQLDatasetStmt) {
			listener.enterThanosListThanoSQLDatasetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosListThanoSQLDatasetStmt) {
			listener.exitThanosListThanoSQLDatasetStmt(this);
		}
	}
}


export class ThanosGetStmtContext extends ParserRuleContext {
	public GET(): TerminalNode { return this.getToken(thanosParser.GET, 0); }
	public thanosGetThanoSQLModelStmt(): ThanosGetThanoSQLModelStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosGetThanoSQLModelStmtContext);
	}
	public thanosGetThanoSQLDatasetStmt(): ThanosGetThanoSQLDatasetStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosGetThanoSQLDatasetStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosGetStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosGetStmt) {
			listener.enterThanosGetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosGetStmt) {
			listener.exitThanosGetStmt(this);
		}
	}
}


export class ThanosGetThanoSQLModelStmtContext extends ParserRuleContext {
	public _built_model_name!: Token;
	public THANOSQL(): TerminalNode { return this.getToken(thanosParser.THANOSQL, 0); }
	public MODEL(): TerminalNode { return this.getToken(thanosParser.MODEL, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(thanosParser.IDENTIFIER, 0); }
	public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosOptionStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosGetThanoSQLModelStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosGetThanoSQLModelStmt) {
			listener.enterThanosGetThanoSQLModelStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosGetThanoSQLModelStmt) {
			listener.exitThanosGetThanoSQLModelStmt(this);
		}
	}
}


export class ThanosGetThanoSQLDatasetStmtContext extends ParserRuleContext {
	public _dataset_name!: Token;
	public THANOSQL(): TerminalNode { return this.getToken(thanosParser.THANOSQL, 0); }
	public DATASET(): TerminalNode { return this.getToken(thanosParser.DATASET, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(thanosParser.IDENTIFIER, 0); }
	public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosOptionStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosGetThanoSQLDatasetStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosGetThanoSQLDatasetStmt) {
			listener.enterThanosGetThanoSQLDatasetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosGetThanoSQLDatasetStmt) {
			listener.exitThanosGetThanoSQLDatasetStmt(this);
		}
	}
}


export class ThanosUsingStmtContext extends ParserRuleContext {
	public _built_model_name!: Token;
	public USING(): TerminalNode { return this.getToken(thanosParser.USING, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(thanosParser.IDENTIFIER, 0); }
	public thanosOptionStmt(): ThanosOptionStmtContext | undefined {
		return this.tryGetRuleContext(0, ThanosOptionStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosUsingStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosUsingStmt) {
			listener.enterThanosUsingStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosUsingStmt) {
			listener.exitThanosUsingStmt(this);
		}
	}
}


export class ThanosOptionStmtContext extends ParserRuleContext {
	public _IDENTIFIER!: Token;
	public _paramsKey: Token[] = [];
	public _paramsValue: Token[] = [];
	public OPTIONS(): TerminalNode { return this.getToken(thanosParser.OPTIONS, 0); }
	public LEFT_PAREN(): TerminalNode { return this.getToken(thanosParser.LEFT_PAREN, 0); }
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(thanosParser.EQUAL);
		} else {
			return this.getToken(thanosParser.EQUAL, i);
		}
	}
	public RIGHT_PAREN(): TerminalNode { return this.getToken(thanosParser.RIGHT_PAREN, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(thanosParser.IDENTIFIER);
		} else {
			return this.getToken(thanosParser.IDENTIFIER, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(thanosParser.COMMA);
		} else {
			return this.getToken(thanosParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_thanosOptionStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterThanosOptionStmt) {
			listener.enterThanosOptionStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitThanosOptionStmt) {
			listener.exitThanosOptionStmt(this);
		}
	}
}


export class NormalSubqueryContext extends ParserRuleContext {
	public FROM(): TerminalNode | undefined { return this.tryGetToken(thanosParser.FROM, 0); }
	public thanosSubquery(): ThanosSubqueryContext {
		return this.getRuleContext(0, ThanosSubqueryContext);
	}
	public JOIN(): TerminalNode | undefined { return this.tryGetToken(thanosParser.JOIN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_normalSubquery; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterNormalSubquery) {
			listener.enterNormalSubquery(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
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
	public get ruleIndex(): number { return thanosParser.RULE_normalStmt; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterNormalStmt) {
			listener.enterNormalStmt(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
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
	public get ruleIndex(): number { return thanosParser.RULE_remaining; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterRemaining) {
			listener.enterRemaining(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitRemaining) {
			listener.exitRemaining(this);
		}
	}
}


export class NormalParenExceptionContext extends ParserRuleContext {
	public LEFT_PAREN(): TerminalNode { return this.getToken(thanosParser.LEFT_PAREN, 0); }
	public remaining(): RemainingContext {
		return this.getRuleContext(0, RemainingContext);
	}
	public RIGHT_PAREN(): TerminalNode { return this.getToken(thanosParser.RIGHT_PAREN, 0); }
	public normalParenException(): NormalParenExceptionContext | undefined {
		return this.tryGetRuleContext(0, NormalParenExceptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return thanosParser.RULE_normalParenException; }
	// @Override
	public enterRule(listener: thanosParserListener): void {
		if (listener.enterNormalParenException) {
			listener.enterNormalParenException(this);
		}
	}
	// @Override
	public exitRule(listener: thanosParserListener): void {
		if (listener.exitNormalParenException) {
			listener.exitNormalParenException(this);
		}
	}
}


