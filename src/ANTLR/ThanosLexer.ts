// Generated from ./src/language-thanosql/_antlr/ThanosLexer.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

export class ThanosLexer extends Lexer {
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

  // tslint:disable:no-trailing-whitespace
  public static readonly channelNames: string[] = [
    "DEFAULT_TOKEN_CHANNEL",
    "HIDDEN",
  ];

  // tslint:disable:no-trailing-whitespace
  public static readonly modeNames: string[] = ["DEFAULT_MODE"];

  public static readonly ruleNames: string[] = [
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
    "STRING",
    "LETTER",
    "DIGIT",
    "ID_START",
    "ID_CONTINUE",
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
    ThanosLexer._LITERAL_NAMES,
    ThanosLexer._SYMBOLIC_NAMES,
    []
  );

  private allUpperCase: boolean;

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return ThanosLexer.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  constructor(input: CharStream) {
    super(input);
    this._interp = new LexerATNSimulator(ThanosLexer._ATN, this);
    this.allUpperCase = /^[A-Z]{1,}$/.test(this._interp.getText(input));
  }

  // @Override
  public get grammarFileName(): string {
    return "ThanosLexer.g4";
  }

  // @Override
  public get ruleNames(): string[] {
    return ThanosLexer.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return ThanosLexer._serializedATN;
  }

  // @Override
  public get channelNames(): string[] {
    return ThanosLexer.channelNames;
  }

  // @Override
  public get modeNames(): string[] {
    return ThanosLexer.modeNames;
  }

  // @Override
  public sempred(
    _localctx: RuleContext,
    ruleIndex: number,
    predIndex: number
  ): boolean {
    switch (ruleIndex) {
      case 53:
        return this.LETTER_sempred(_localctx, predIndex);
    }
    return true;
  }
  private LETTER_sempred(_localctx: RuleContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return !this.allUpperCase;
    }
    return true;
  }

  public static readonly _serializedATN: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x026\u01C7\b\x01" +
    "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
    "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
    "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
    "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
    "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
    '\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t' +
    "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04" +
    "+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
    "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x03\x02\x03\x02\x03" +
    "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
    "\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
    "\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
    "\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
    "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
    "\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03" +
    "\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
    "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
    "\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
    "\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
    "\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03" +
    "\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03" +
    "\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
    "\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
    "\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03" +
    "\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
    "\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03" +
    "\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
    "\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
    "\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
    '!\x03!\x03!\x03!\x03!\x03!\x03"\x03"\x03"\x03#\x03#\x03#\x03$\x03$' +
    "\x03$\x06$\u015B\n$\r$\x0E$\u015C\x03$\x03$\x03$\x03$\x07$\u0163\n$\f" +
    "$\x0E$\u0166\v$\x03$\x07$\u0169\n$\f$\x0E$\u016C\v$\x03$\x07$\u016F\n" +
    "$\f$\x0E$\u0172\v$\x03$\x03$\x05$\u0176\n$\x03%\x03%\x07%\u017A\n%\f%" +
    "\x0E%\u017D\v%\x03&\x03&\x03'\x03'\x03(\x03(\x03)\x03)\x03*\x03*\x03" +
    "+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x030\x030\x031\x031\x03" +
    "2\x032\x033\x033\x034\x034\x035\x065\u019E\n5\r5\x0E5\u019F\x035\x035" +
    "\x036\x036\x036\x036\x076\u01A8\n6\f6\x0E6\u01AB\v6\x036\x036\x036\x03" +
    "6\x036\x076\u01B2\n6\f6\x0E6\u01B5\v6\x036\x056\u01B8\n6\x037\x037\x03" +
    "7\x057\u01BD\n7\x038\x038\x039\x059\u01C2\n9\x03:\x03:\x05:\u01C6\n:\x04" +
    "\u0164\u0170\x02\x02;\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v" +
    "\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19" +
    "\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14" +
    "'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02" +
    '\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02"C\x02#E\x02$G\x02%I' +
    "\x02&K\x02'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x02" +
    "1a\x022c\x023e\x024g\x025i\x026k\x02\x02m\x02\x02o\x02\x02q\x02\x02s\x02" +
    "\x02\x03\x02!\x04\x02KKkk\x04\x02PPpp\x04\x02UUuu\x04\x02GGgg\x04\x02" +
    "TTtt\x04\x02VVvv\x04\x02EEee\x04\x02CCcc\x04\x02ZZzz\x04\x02NNnn\x04\x02" +
    "QQqq\x04\x02RRrr\x04\x02[[{{\x04\x02FFff\x04\x02WWww\x04\x02DDdd\x04\x02" +
    "HHhh\x04\x02OOoo\x04\x02XXxx\x04\x02JJjj\x04\x02SSss\x04\x02IIii\n\x02" +
    '##%%\'(AB``bb~~\x80\x80\x05\x02\v\f\x0F\x0F""\x04\x02))^^\x04\x02$$' +
    "^^\x03\x02C\\\x03\x02c|\x03\x022;\u0129\x02C\\aac|\xAC\xAC\xB7\xB7\xBC" +
    "\xBC\xC2\xD8\xDA\xF8\xFA\u0243\u0252\u02C3\u02C8\u02D3\u02E2\u02E6\u02F0" +
    "\u02F0\u037C\u037C\u0388\u0388\u038A\u038C\u038E\u038E\u0390\u03A3\u03A5" +
    "\u03D0\u03D2\u03F7\u03F9\u0483\u048C\u04D0\u04D2\u04FB\u0502\u0511\u0533" +
    "\u0558\u055B\u055B\u0563\u0589\u05D2\u05EC\u05F2\u05F4\u0623\u063C\u0642" +
    "\u064C\u0670\u0671\u0673\u06D5\u06D7\u06D7\u06E7\u06E8\u06F0\u06F1\u06FC" +
    "\u06FE\u0701\u0701\u0712\u0712\u0714\u0731\u074F\u076F\u0782\u07A7\u07B3" +
    "\u07B3\u0906\u093B\u093F\u093F\u0952\u0952\u095A\u0963\u097F\u097F\u0987" +
    "\u098E\u0991\u0992\u0995\u09AA\u09AC\u09B2\u09B4\u09B4\u09B8\u09BB\u09BF" +
    "\u09BF\u09D0\u09D0\u09DE\u09DF\u09E1\u09E3\u09F2\u09F3\u0A07\u0A0C\u0A11" +
    "\u0A12\u0A15\u0A2A\u0A2C\u0A32\u0A34\u0A35\u0A37\u0A38\u0A3A\u0A3B\u0A5B" +
    "\u0A5E\u0A60\u0A60\u0A74\u0A76\u0A87\u0A8F\u0A91\u0A93\u0A95\u0AAA\u0AAC" +
    "\u0AB2\u0AB4\u0AB5\u0AB7\u0ABB\u0ABF\u0ABF\u0AD2\u0AD2\u0AE2\u0AE3\u0B07" +
    "\u0B0E\u0B11\u0B12\u0B15\u0B2A\u0B2C\u0B32\u0B34\u0B35\u0B37\u0B3B\u0B3F" +
    "\u0B3F\u0B5E\u0B5F\u0B61\u0B63\u0B73\u0B73\u0B85\u0B85\u0B87\u0B8C\u0B90" +
    "\u0B92\u0B94\u0B97\u0B9B\u0B9C\u0B9E\u0B9E\u0BA0\u0BA1\u0BA5\u0BA6\u0BAA" +
    "\u0BAC\u0BB0\u0BBB\u0C07\u0C0E\u0C10\u0C12\u0C14\u0C2A\u0C2C\u0C35\u0C37" +
    "\u0C3B\u0C62\u0C63\u0C87\u0C8E\u0C90\u0C92\u0C94\u0CAA\u0CAC\u0CB5\u0CB7" +
    "\u0CBB\u0CBF\u0CBF\u0CE0\u0CE0\u0CE2\u0CE3\u0D07\u0D0E\u0D10\u0D12\u0D14" +
    "\u0D2A\u0D2C\u0D3B\u0D62\u0D63\u0D87\u0D98\u0D9C\u0DB3\u0DB5\u0DBD\u0DBF" +
    "\u0DBF\u0DC2\u0DC8\u0E03\u0E32\u0E34\u0E35\u0E42\u0E48\u0E83\u0E84\u0E86" +
    "\u0E86\u0E89\u0E8A\u0E8C\u0E8C\u0E8F\u0E8F\u0E96\u0E99\u0E9B\u0EA1\u0EA3" +
    "\u0EA5\u0EA7\u0EA7\u0EA9\u0EA9\u0EAC\u0EAD\u0EAF\u0EB2\u0EB4\u0EB5\u0EBF" +
    "\u0EBF\u0EC2\u0EC6\u0EC8\u0EC8\u0EDE\u0EDF\u0F02\u0F02\u0F42\u0F49\u0F4B" +
    "\u0F6C\u0F8A\u0F8D\u1002\u1023\u1025\u1029\u102B\u102C\u1052\u1057\u10A2" +
    "\u10C7\u10D2\u10FC\u10FE\u10FE\u1102\u115B\u1161\u11A4\u11AA\u11FB\u1202" +
    "\u124A\u124C\u124F\u1252\u1258\u125A\u125A\u125C\u125F\u1262\u128A\u128C" +
    "\u128F\u1292\u12B2\u12B4\u12B7\u12BA\u12C0\u12C2\u12C2\u12C4\u12C7\u12CA" +
    "\u12D8\u12DA\u1312\u1314\u1317\u131A\u135C\u1382\u1391\u13A2\u13F6\u1403" +
    "\u166E\u1671\u1678\u1683\u169C\u16A2\u16EC\u16F0\u16F2\u1702\u170E\u1710" +
    "\u1713\u1722\u1733\u1742\u1753\u1762\u176E\u1770\u1772\u1782\u17B5\u17D9" +
    "\u17D9\u17DE\u17DE\u1822\u1879\u1882\u18AA\u1902\u191E\u1952\u196F\u1972" +
    "\u1976\u1982\u19AB\u19C3\u19C9\u1A02\u1A18\u1D02\u1DC1\u1E02\u1E9D\u1EA2" +
    "\u1EFB\u1F02\u1F17\u1F1A\u1F1F\u1F22\u1F47\u1F4A\u1F4F\u1F52\u1F59\u1F5B" +
    "\u1F5B\u1F5D\u1F5D\u1F5F\u1F5F\u1F61\u1F7F\u1F82\u1FB6\u1FB8\u1FBE\u1FC0" +
    "\u1FC0\u1FC4\u1FC6\u1FC8\u1FCE\u1FD2\u1FD5\u1FD8\u1FDD\u1FE2\u1FEE\u1FF4" +
    "\u1FF6\u1FF8\u1FFE\u2073\u2073\u2081\u2081\u2092\u2096\u2104\u2104\u2109" +
    "\u2109\u210C\u2115\u2117\u2117\u211A\u211F\u2126\u2126\u2128\u2128\u212A" +
    "\u212A\u212C\u2133\u2135\u213B\u213E\u2141\u2147\u214B\u2162\u2185\u2C02" +
    "\u2C30\u2C32\u2C60\u2C82\u2CE6\u2D02\u2D27\u2D32\u2D67\u2D71\u2D71\u2D82" +
    "\u2D98\u2DA2\u2DA8\u2DAA\u2DB0\u2DB2\u2DB8\u2DBA\u2DC0\u2DC2\u2DC8\u2DCA" +
    "\u2DD0\u2DD2\u2DD8\u2DDA\u2DE0\u3007\u3009\u3023\u302B\u3033\u3037\u303A" +
    "\u303E\u3043\u3098\u309D\u30A1\u30A3\u30FC\u30FE\u3101\u3107\u312E\u3133" +
    "\u3190\u31A2\u31B9\u31F2\u3201\u3402\u4DB7\u4E02\u9FBD\uA002\uA48E\uA802" +
    "\uA803\uA805\uA807\uA809\uA80C\uA80E\uA824\uAC02\uD7A5\uF902\uFA2F\uFA32" +
    "\uFA6C\uFA72\uFADB\uFB02\uFB08\uFB15\uFB19\uFB1F\uFB1F\uFB21\uFB2A\uFB2C" +
    "\uFB38\uFB3A\uFB3E\uFB40\uFB40\uFB42\uFB43\uFB45\uFB46\uFB48\uFBB3\uFBD5" +
    "\uFD3F\uFD52\uFD91\uFD94\uFDC9\uFDF2\uFDFD\uFE72\uFE76\uFE78\uFEFE\uFF23" +
    "\uFF3C\uFF43\uFF5C\uFF68\uFFC0\uFFC4\uFFC9\uFFCC\uFFD1\uFFD4\uFFD9\uFFDC" +
    "\uFFDE\x96\x022;\u0302\u0371\u0485\u0488\u0593\u05BB\u05BD\u05BF\u05C1" +
    "\u05C1\u05C3\u05C4\u05C6\u05C7\u05C9\u05C9\u0612\u0617\u064D\u0660\u0662" +
    "\u066B\u0672\u0672\u06D8\u06DE\u06E1\u06E6\u06E9\u06EA\u06EC\u06EF\u06F2" +
    "\u06FB\u0713\u0713\u0732\u074C\u07A8\u07B2\u0903\u0905\u093E\u093E\u0940" +
    "\u094F\u0953\u0956\u0964\u0965\u0968\u0971\u0983\u0985\u09BE\u09BE\u09C0" +
    "\u09C6\u09C9\u09CA\u09CD\u09CF\u09D9\u09D9\u09E4\u09E5\u09E8\u09F1\u0A03" +
    "\u0A05\u0A3E\u0A3E\u0A40\u0A44\u0A49\u0A4A\u0A4D\u0A4F\u0A68\u0A73\u0A83" +
    "\u0A85\u0ABE\u0ABE\u0AC0\u0AC7\u0AC9\u0ACB\u0ACD\u0ACF\u0AE4\u0AE5\u0AE8" +
    "\u0AF1\u0B03\u0B05\u0B3E\u0B3E\u0B40\u0B45\u0B49\u0B4A\u0B4D\u0B4F\u0B58" +
    "\u0B59\u0B68\u0B71\u0B84\u0B84\u0BC0\u0BC4\u0BC8\u0BCA\u0BCC\u0BCF\u0BD9" +
    "\u0BD9\u0BE8\u0BF1\u0C03\u0C05\u0C40\u0C46\u0C48\u0C4A\u0C4C\u0C4F\u0C57" +
    "\u0C58\u0C68\u0C71\u0C84\u0C85\u0CBE\u0CBE\u0CC0\u0CC6\u0CC8\u0CCA\u0CCC" +
    "\u0CCF\u0CD7\u0CD8\u0CE8\u0CF1\u0D04\u0D05\u0D40\u0D45\u0D48\u0D4A\u0D4C" +
    "\u0D4F\u0D59\u0D59\u0D68\u0D71\u0D84\u0D85\u0DCC\u0DCC\u0DD1\u0DD6\u0DD8" +
    "\u0DD8\u0DDA\u0DE1\u0DF4\u0DF5\u0E33\u0E33\u0E36\u0E3C\u0E49\u0E50\u0E52" +
    "\u0E5B\u0EB3\u0EB3\u0EB6\u0EBB\u0EBD\u0EBE\u0ECA\u0ECF\u0ED2\u0EDB\u0F1A" +
    "\u0F1B\u0F22\u0F2B\u0F37\u0F37\u0F39\u0F39\u0F3B\u0F3B\u0F40\u0F41\u0F73" +
    "\u0F86\u0F88\u0F89\u0F92\u0F99\u0F9B\u0FBE\u0FC8\u0FC8\u102E\u1034\u1038" +
    "\u103B\u1042\u104B\u1058\u105B\u1361\u1361\u136B\u1373\u1714\u1716\u1734" +
    "\u1736\u1754\u1755\u1774\u1775\u17B8\u17D5\u17DF\u17DF\u17E2\u17EB\u180D" +
    "\u180F\u1812\u181B\u18AB\u18AB\u1922\u192D\u1932\u193D\u1948\u1951\u19B2" +
    "\u19C2\u19CA\u19CB\u19D2\u19DB\u1A19\u1A1D\u1DC2\u1DC5\u2041\u2042\u2056" +
    "\u2056\u20D2\u20DE\u20E3\u20E3\u20E7\u20ED\u302C\u3031\u309B\u309C\uA804" +
    "\uA804\uA808\uA808\uA80D\uA80D\uA825\uA829\uFB20\uFB20\uFE02\uFE11\uFE22" +
    "\uFE25\uFE35\uFE36\uFE4F\uFE51\uFF12\uFF1B\uFF41\uFF41\x02\u01D1\x02\x03" +
    "\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t" +
    "\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03" +
    "\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03" +
    "\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03" +
    "\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03" +
    "\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02'\x03\x02\x02" +
    "\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02" +
    "/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02" +
    "\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02" +
    "\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03" +
    "\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02" +
    "\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02" +
    "Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02" +
    "\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02" +
    "\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03" +
    "\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x03u\x03\x02\x02" +
    "\x02\x05|\x03\x02\x02\x02\x07\x83\x03\x02\x02\x02\t\x8A\x03\x02\x02\x02" +
    "\v\x91\x03\x02\x02\x02\r\x96\x03\x02\x02\x02\x0F\x9E\x03\x02\x02\x02\x11" +
    "\xA7\x03\x02\x02\x02\x13\xB2\x03\x02\x02\x02\x15\xB9\x03\x02\x02\x02\x17" +
    "\xC0\x03\x02\x02\x02\x19\xC6\x03\x02\x02\x02\x1B\xCB\x03\x02\x02\x02\x1D" +
    "\xD1\x03\x02\x02\x02\x1F\xD7\x03\x02\x02\x02!\xDF\x03\x02\x02\x02#\xE8" +
    "\x03\x02\x02\x02%\xF2\x03\x02\x02\x02'\xF6\x03\x02\x02\x02)\xFD\x03\x02" +
    "\x02\x02+\u0104\x03\x02\x02\x02-\u010C\x03\x02\x02\x02/\u0112\x03\x02" +
    "\x02\x021\u0118\x03\x02\x02\x023\u011E\x03\x02\x02\x025\u0126\x03\x02" +
    "\x02\x027\u012B\x03\x02\x02\x029\u0130\x03\x02\x02\x02;\u0139\x03\x02" +
    "\x02\x02=\u013D\x03\x02\x02\x02?\u0143\x03\x02\x02\x02A\u014B\x03\x02" +
    "\x02\x02C\u0151\x03\x02\x02\x02E\u0154\x03\x02\x02\x02G\u0175\x03\x02" +
    "\x02\x02I\u0177\x03\x02\x02\x02K\u017E\x03\x02\x02\x02M\u0180\x03\x02" +
    "\x02\x02O\u0182\x03\x02\x02\x02Q\u0184\x03\x02\x02\x02S\u0186\x03\x02" +
    "\x02\x02U\u0188\x03\x02\x02\x02W\u018A\x03\x02\x02\x02Y\u018C\x03\x02" +
    "\x02\x02[\u018E\x03\x02\x02\x02]\u0190\x03\x02\x02\x02_\u0192\x03\x02" +
    "\x02\x02a\u0194\x03\x02\x02\x02c\u0196\x03\x02\x02\x02e\u0198\x03\x02" +
    "\x02\x02g\u019A\x03\x02\x02\x02i\u019D\x03\x02\x02\x02k\u01B7\x03\x02" +
    "\x02\x02m\u01BC\x03\x02\x02\x02o\u01BE\x03\x02\x02\x02q\u01C1\x03\x02" +
    "\x02\x02s\u01C5\x03\x02\x02\x02uv\t\x02\x02\x02vw\t\x03\x02\x02wx\t\x04" +
    "\x02\x02xy\t\x05\x02\x02yz\t\x06\x02\x02z{\t\x07\x02\x02{\x04\x03\x02" +
    "\x02\x02|}\t\b\x02\x02}~\t\x06\x02\x02~\x7F\t\x05\x02\x02\x7F\x80\t\t" +
    "\x02\x02\x80\x81\t\x07\x02\x02\x81\x82\t\x05\x02\x02\x82\x06\x03\x02\x02" +
    "\x02\x83\x84\t\x05\x02\x02\x84\x85\t\n\x02\x02\x85\x86\t\x02\x02\x02\x86" +
    "\x87\t\x04\x02\x02\x87\x88\t\x07\x02\x02\x88\x89\t\x04\x02\x02\x89\b\x03" +
    "\x02\x02\x02\x8A\x8B\t\x04\x02\x02\x8B\x8C\t\x05\x02\x02\x8C\x8D\t\v\x02" +
    "\x02\x8D\x8E\t\x05\x02\x02\x8E\x8F\t\b\x02\x02\x8F\x90\t\x07\x02\x02\x90" +
    "\n\x03\x02\x02\x02\x91\x92\t\b\x02\x02\x92\x93\t\f\x02\x02\x93\x94\t\r" +
    "\x02\x02\x94\x95\t\x0E\x02\x02\x95\f\x03\x02\x02\x02\x96\x97\t\x0F\x02" +
    "\x02\x97\x98\t\t\x02\x02\x98\x99\t\x07\x02\x02\x99\x9A\t\t\x02\x02\x9A" +
    "\x9B\t\x04\x02\x02\x9B\x9C\t\x05\x02\x02\x9C\x9D\t\x07\x02\x02\x9D\x0E" +
    "\x03\x02\x02\x02\x9E\x9F\t\x07\x02\x02\x9F\xA0\t\x10\x02\x02\xA0\xA1\t" +
    "\x07\x02\x02\xA1\xA2\t\f\x02\x02\xA2\xA3\t\x06\x02\x02\xA3\xA4\t\x02\x02" +
    "\x02\xA4\xA5\t\t\x02\x02\xA5\xA6\t\v\x02\x02\xA6\x10\x03\x02\x02\x02\xA7" +
    "\xA8\t\r\x02\x02\xA8\xA9\t\x06\x02\x02\xA9\xAA\t\x05\x02\x02\xAA\xAB\t" +
    "\r\x02\x02\xAB\xAC\t\x06\x02\x02\xAC\xAD\t\f\x02\x02\xAD\xAE\t\b\x02\x02" +
    "\xAE\xAF\t\x05\x02\x02\xAF\xB0\t\x04\x02\x02\xB0\xB1\t\x04\x02\x02\xB1" +
    "\x12\x03\x02\x02\x02\xB2\xB3\t\x10\x02\x02\xB3\xB4\t\r\x02\x02\xB4\xB5" +
    "\t\x0F\x02\x02\xB5\xB6\t\t\x02\x02\xB6\xB7\t\x07\x02\x02\xB7\xB8\t\x05" +
    "\x02\x02\xB8\x14\x03\x02\x02\x02\xB9\xBA\t\x0F\x02\x02\xBA\xBB\t\x05\x02" +
    "\x02\xBB\xBC\t\v\x02\x02\xBC\xBD\t\x05\x02\x02\xBD\xBE\t\x07\x02\x02\xBE" +
    "\xBF\t\x05\x02\x02\xBF\x16\x03\x02\x02\x02\xC0\xC1\t\x07\x02\x02\xC1\xC2" +
    "\t\t\x02\x02\xC2\xC3\t\x11\x02\x02\xC3\xC4\t\v\x02\x02\xC4\xC5\t\x05\x02" +
    "\x02\xC5\x18\x03\x02\x02\x02\xC6\xC7\t\x12\x02\x02\xC7\xC8\t\x06\x02\x02" +
    "\xC8\xC9\t\f\x02\x02\xC9\xCA\t\x13\x02\x02\xCA\x1A\x03\x02\x02\x02\xCB" +
    "\xCC\t\x11\x02\x02\xCC\xCD\t\x10\x02\x02\xCD\xCE\t\x02\x02\x02\xCE\xCF" +
    "\t\v\x02\x02\xCF\xD0\t\x0F\x02\x02\xD0\x1C\x03\x02\x02\x02\xD1\xD2\t\x13" +
    "\x02\x02\xD2\xD3\t\f\x02\x02\xD3\xD4\t\x0F\x02\x02\xD4\xD5\t\x05\x02\x02" +
    "\xD5\xD6\t\v\x02\x02\xD6\x1E\x03\x02\x02\x02\xD7\xD8\t\r\x02\x02\xD8\xD9" +
    "\t\x06\x02\x02\xD9\xDA\t\x05\x02\x02\xDA\xDB\t\x0F\x02\x02\xDB\xDC\t\x02" +
    "\x02\x02\xDC\xDD\t\b\x02\x02\xDD\xDE\t\x07\x02\x02\xDE \x03\x02\x02\x02" +
    "\xDF\xE0\t\x05\x02\x02\xE0\xE1\t\x14\x02\x02\xE1\xE2\t\t\x02\x02\xE2\xE3" +
    "\t\v\x02\x02\xE3\xE4\t\x10\x02\x02\xE4\xE5\t\t\x02\x02\xE5\xE6\t\x07\x02" +
    '\x02\xE6\xE7\t\x05\x02\x02\xE7"\x03\x02\x02\x02\xE8\xE9\t\x07\x02\x02' +
    "\xE9\xEA\t\x06\x02\x02\xEA\xEB\t\t\x02\x02\xEB\xEC\t\x03\x02\x02\xEC\xED" +
    "\t\x04\x02\x02\xED\xEE\t\x12\x02\x02\xEE\xEF\t\f\x02\x02\xEF\xF0\t\x06" +
    "\x02\x02\xF0\xF1\t\x13\x02\x02\xF1$\x03\x02\x02\x02\xF2\xF3\t\x12\x02" +
    "\x02\xF3\xF4\t\x02\x02\x02\xF4\xF5\t\x07\x02\x02\xF5&\x03\x02\x02\x02" +
    "\xF6\xF7\t\x10\x02\x02\xF7\xF8\t\r\x02\x02\xF8\xF9\t\v\x02\x02\xF9\xFA" +
    "\t\f\x02\x02\xFA\xFB\t\t\x02\x02\xFB\xFC\t\x0F\x02\x02\xFC(\x03\x02\x02" +
    "\x02\xFD\xFE\t\x04\x02\x02\xFE\xFF\t\x05\x02\x02\xFF\u0100\t\t\x02\x02" +
    "\u0100\u0101\t\x06\x02\x02\u0101\u0102\t\b\x02\x02\u0102\u0103\t\x15\x02" +
    "\x02\u0103*\x03\x02\x02\x02\u0104\u0105\t\b\x02\x02\u0105\u0106\t\f\x02" +
    "\x02\u0106\u0107\t\x03\x02\x02\u0107\u0108\t\x14\x02\x02\u0108\u0109\t" +
    "\x05\x02\x02\u0109\u010A\t\x06\x02\x02\u010A\u010B\t\x07\x02\x02\u010B" +
    ",\x03\x02\x02\x02\u010C\u010D\x07K\x02\x02\u010D\u010E\x07O\x02\x02\u010E" +
    "\u010F\x07C\x02\x02\u010F\u0110\x07I\x02\x02\u0110\u0111\x07G\x02\x02" +
    "\u0111.\x03\x02\x02\x02\u0112\u0113\x07C\x02\x02\u0113\u0114\x07W\x02" +
    "\x02\u0114\u0115\x07F\x02\x02\u0115\u0116\x07K\x02\x02\u0116\u0117\x07" +
    "Q\x02\x02\u01170\x03\x02\x02\x02\u0118\u0119\x07X\x02\x02\u0119\u011A" +
    "\x07K\x02\x02\u011A\u011B\x07F\x02\x02\u011B\u011C\x07G\x02\x02\u011C" +
    "\u011D\x07Q\x02\x02\u011D2\x03\x02\x02\x02\u011E\u011F\x07M\x02\x02\u011F" +
    "\u0120\x07G\x02\x02\u0120\u0121\x07[\x02\x02\u0121\u0122\x07Y\x02\x02" +
    "\u0122\u0123\x07Q\x02\x02\u0123\u0124\x07T\x02\x02\u0124\u0125\x07F\x02" +
    "\x02\u01254\x03\x02\x02\x02\u0126\u0127\x07V\x02\x02\u0127\u0128\x07G" +
    "\x02\x02\u0128\u0129\x07Z\x02\x02\u0129\u012A\x07V\x02\x02\u012A6\x03" +
    "\x02\x02\x02\u012B\u012C\t\v\x02\x02\u012C\u012D\t\x02\x02\x02\u012D\u012E" +
    "\t\x04\x02\x02\u012E\u012F\t\x07\x02\x02\u012F8\x03\x02\x02\x02\u0130" +
    "\u0131\t\x07\x02\x02\u0131\u0132\t\x15\x02\x02\u0132\u0133\t\t\x02\x02" +
    "\u0133\u0134\t\x03\x02\x02\u0134\u0135\t\f\x02\x02\u0135\u0136\t\x04\x02" +
    "\x02\u0136\u0137\t\x16\x02\x02\u0137\u0138\t\v\x02\x02\u0138:\x03\x02" +
    "\x02\x02\u0139\u013A\t\x17\x02\x02\u013A\u013B\t\x05\x02\x02\u013B\u013C" +
    "\t\x07\x02\x02\u013C<\x03\x02\x02\x02\u013D\u013E\t\x10\x02\x02\u013E" +
    "\u013F\t\x04\x02\x02\u013F\u0140\t\x02\x02\x02\u0140\u0141\t\x03\x02\x02" +
    "\u0141\u0142\t\x17\x02\x02\u0142>\x03\x02\x02\x02\u0143\u0144\t\f\x02" +
    "\x02\u0144\u0145\t\r\x02\x02\u0145\u0146\t\x07\x02\x02\u0146\u0147\t\x02" +
    "\x02\x02\u0147\u0148\t\f\x02\x02\u0148\u0149\t\x03\x02\x02\u0149\u014A" +
    "\t\x04\x02\x02\u014A@\x03\x02\x02\x02\u014B\u014C\t\r\x02\x02\u014C\u014D" +
    "\t\x06\x02\x02\u014D\u014E\t\x02\x02\x02\u014E\u014F\t\x03\x02\x02\u014F" +
    "\u0150\t\x07\x02\x02\u0150B\x03\x02\x02\x02\u0151\u0152\t\t\x02\x02\u0152" +
    "\u0153\t\x04\x02\x02\u0153D\x03\x02\x02\x02\u0154\u0155\t\x11\x02\x02" +
    "\u0155\u0156\t\x0E\x02\x02\u0156F\x03\x02\x02\x02\u0157\u015B\x05I%\x02" +
    "\u0158\u015B\x05o8\x02\u0159\u015B\x05k6\x02\u015A\u0157\x03\x02\x02\x02" +
    "\u015A\u0158\x03\x02\x02\x02\u015A\u0159\x03\x02\x02\x02\u015B\u015C\x03" +
    "\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D" +
    "\u0176\x03\x02\x02\x02\u015E\u015F\x07]\x02\x02\u015F\u016A\x05G$\x02" +
    "\u0160\u0164\x07.\x02\x02\u0161\u0163\x05i5\x02\u0162\u0161\x03\x02\x02" +
    "\x02\u0163\u0166\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0164\u0162" +
    "\x03\x02\x02\x02\u0165\u0167\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02" +
    "\u0167\u0169\x05G$\x02\u0168\u0160\x03\x02\x02\x02\u0169\u016C\x03\x02" +
    "\x02\x02\u016A\u0168\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B" +
    "\u0170\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016D\u016F\x05i5\x02" +
    "\u016E\u016D\x03\x02\x02\x02\u016F\u0172\x03\x02\x02\x02\u0170\u0171\x03" +
    "\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0173\x03\x02\x02\x02\u0172" +
    "\u0170\x03\x02\x02\x02\u0173\u0174\x07_\x02\x02\u0174\u0176\x03\x02\x02" +
    "\x02\u0175\u015A\x03\x02\x02\x02\u0175\u015E\x03\x02\x02\x02\u0176H\x03" +
    "\x02\x02\x02\u0177\u017B\x05q9\x02\u0178\u017A\x05s:\x02\u0179\u0178\x03" +
    "\x02\x02\x02\u017A\u017D\x03\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B" +
    "\u017C\x03\x02\x02\x02\u017CJ\x03\x02\x02\x02\u017D\u017B\x03\x02\x02" +
    "\x02\u017E\u017F\t\x18\x02\x02\u017FL\x03\x02\x02\x02\u0180\u0181\x07" +
    "<\x02\x02\u0181N\x03\x02\x02\x02\u0182\u0183\x07=\x02\x02\u0183P\x03\x02" +
    "\x02\x02\u0184\u0185\x07.\x02\x02\u0185R\x03\x02\x02\x02\u0186\u0187\x07" +
    "?\x02\x02\u0187T\x03\x02\x02\x02\u0188\u0189\x07*\x02\x02\u0189V\x03\x02" +
    "\x02\x02\u018A\u018B\x07+\x02\x02\u018BX\x03\x02\x02\x02\u018C\u018D\x07" +
    "]\x02\x02\u018DZ\x03\x02\x02\x02\u018E\u018F\x07_\x02\x02\u018F\\\x03" +
    "\x02\x02\x02\u0190\u0191\x071\x02\x02\u0191^\x03\x02\x02\x02\u0192\u0193" +
    "\x07,\x02\x02\u0193`\x03\x02\x02\x02\u0194\u0195\x070\x02\x02\u0195b\x03" +
    "\x02\x02\x02\u0196\u0197\x07>\x02\x02\u0197d\x03\x02\x02\x02\u0198\u0199" +
    "\x07@\x02\x02\u0199f\x03\x02\x02\x02\u019A\u019B\x07/\x02\x02\u019Bh\x03" +
    "\x02\x02\x02\u019C\u019E\t\x19\x02\x02\u019D\u019C\x03\x02\x02\x02\u019E" +
    "\u019F\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02" +
    "\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A2\b5\x02\x02\u01A2j\x03" +
    "\x02\x02\x02\u01A3\u01A9\x07)\x02\x02\u01A4\u01A8\n\x1A\x02\x02\u01A5" +
    "\u01A6\x07^\x02\x02\u01A6\u01A8\v\x02\x02\x02\u01A7\u01A4\x03\x02\x02" +
    "\x02\u01A7\u01A5\x03\x02\x02\x02\u01A8\u01AB\x03\x02\x02\x02\u01A9\u01A7" +
    "\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AC\x03\x02\x02\x02" +
    "\u01AB\u01A9\x03\x02\x02\x02\u01AC\u01B8\x07)\x02\x02\u01AD\u01B3\x07" +
    "$\x02\x02\u01AE\u01B2\n\x1B\x02\x02\u01AF\u01B0\x07^\x02\x02\u01B0\u01B2" +
    "\v\x02\x02\x02\u01B1\u01AE\x03\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02" +
    "\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B3\u01B4\x03" +
    "\x02\x02\x02\u01B4\u01B6\x03\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B6" +
    "\u01B8\x07$\x02\x02\u01B7\u01A3\x03\x02\x02\x02\u01B7\u01AD\x03\x02\x02" +
    "\x02\u01B8l\x03\x02\x02\x02\u01B9\u01BD\t\x1C\x02\x02\u01BA\u01BB\x06" +
    "7\x02\x02\u01BB\u01BD\t\x1D\x02\x02\u01BC\u01B9\x03\x02\x02\x02\u01BC" +
    "\u01BA\x03\x02\x02\x02\u01BDn\x03\x02\x02\x02\u01BE\u01BF\t\x1E\x02\x02" +
    "\u01BFp\x03\x02\x02\x02\u01C0\u01C2\t\x1F\x02\x02\u01C1\u01C0\x03\x02" +
    "\x02\x02\u01C2r\x03\x02\x02\x02\u01C3\u01C6\x05q9\x02\u01C4\u01C6\t \x02" +
    "\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5\u01C4\x03\x02\x02\x02\u01C6t\x03" +
    "\x02\x02\x02\x13\x02\u015A\u015C\u0164\u016A\u0170\u0175\u017B\u019F\u01A7" +
    "\u01A9\u01B1\u01B3\u01B7\u01BC\u01C1\u01C5\x03\b\x02\x02";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!ThanosLexer.__ATN) {
      ThanosLexer.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(ThanosLexer._serializedATN)
      );
    }

    return ThanosLexer.__ATN;
  }
}
