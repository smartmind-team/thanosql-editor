// Generated from ./ANTLR/thanosParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ThanosLanguageContext } from "./thanosParser";
import { ThanosQueryContext } from "./thanosParser";
import { ThanosStmtContext } from "./thanosParser";
import { ThanosNoSubqueryStmtContext } from "./thanosParser";
import { ThanosSubqueryStmtContext } from "./thanosParser";
import { ThanosSubqueryContext } from "./thanosParser";
import { ThanosBuildModelStmtContext } from "./thanosParser";
import { ThanosFitModelStmtContext } from "./thanosParser";
import { ThanosUploadModelStmtContext } from "./thanosParser";
import { ThanosDeleteModelStmtContext } from "./thanosParser";
import { ThanosPredictStmtContext } from "./thanosParser";
import { ThanosEvaluateStmtContext } from "./thanosParser";
import { ThanosConvertStmtContext } from "./thanosParser";
import { ThanosSearchStmtContext } from "./thanosParser";
import { ThanosSearchImageStmtContext } from "./thanosParser";
import { ThanosSearchAudioStmtContext } from "./thanosParser";
import { ThanosSearchVideoStmtContext } from "./thanosParser";
import { ThanosSearchKeywordStmtContext } from "./thanosParser";
import { ThanosSearchTextStmtContext } from "./thanosParser";
import { ThanosFunctionStmtContext } from "./thanosParser";
import { ThanosPrintStmtContext } from "./thanosParser";
import { ThanosPrintImageStmtContext } from "./thanosParser";
import { ThanosPrintAudioStmtContext } from "./thanosParser";
import { ThanosPrintVideoStmtContext } from "./thanosParser";
import { ThanosCopyStmtContext } from "./thanosParser";
import { ThanosListStmtContext } from "./thanosParser";
import { ThanosListTableStmtContext } from "./thanosParser";
import { ThanosListModelStmtContext } from "./thanosParser";
import { ThanosListThanoSQLModelStmtContext } from "./thanosParser";
import { ThanosListThanoSQLDatasetStmtContext } from "./thanosParser";
import { ThanosGetStmtContext } from "./thanosParser";
import { ThanosGetThanoSQLModelStmtContext } from "./thanosParser";
import { ThanosGetThanoSQLDatasetStmtContext } from "./thanosParser";
import { ThanosUsingStmtContext } from "./thanosParser";
import { ThanosOptionStmtContext } from "./thanosParser";
import { NormalSubqueryContext } from "./thanosParser";
import { NormalStmtContext } from "./thanosParser";
import { RemainingContext } from "./thanosParser";
import { NormalParenExceptionContext } from "./thanosParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `thanosParser`.
 */
export interface thanosParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `thanosParser.thanosLanguage`.
	 * @param ctx the parse tree
	 */
	enterThanosLanguage?: (ctx: ThanosLanguageContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosLanguage`.
	 * @param ctx the parse tree
	 */
	exitThanosLanguage?: (ctx: ThanosLanguageContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosQuery`.
	 * @param ctx the parse tree
	 */
	enterThanosQuery?: (ctx: ThanosQueryContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosQuery`.
	 * @param ctx the parse tree
	 */
	exitThanosQuery?: (ctx: ThanosQueryContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosStmt?: (ctx: ThanosStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosStmt?: (ctx: ThanosStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosNoSubqueryStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosNoSubqueryStmt?: (ctx: ThanosNoSubqueryStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosNoSubqueryStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosNoSubqueryStmt?: (ctx: ThanosNoSubqueryStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosSubqueryStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosSubqueryStmt?: (ctx: ThanosSubqueryStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosSubqueryStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosSubqueryStmt?: (ctx: ThanosSubqueryStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosSubquery`.
	 * @param ctx the parse tree
	 */
	enterThanosSubquery?: (ctx: ThanosSubqueryContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosSubquery`.
	 * @param ctx the parse tree
	 */
	exitThanosSubquery?: (ctx: ThanosSubqueryContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosBuildModelStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosBuildModelStmt?: (ctx: ThanosBuildModelStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosBuildModelStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosBuildModelStmt?: (ctx: ThanosBuildModelStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosFitModelStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosFitModelStmt?: (ctx: ThanosFitModelStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosFitModelStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosFitModelStmt?: (ctx: ThanosFitModelStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosUploadModelStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosUploadModelStmt?: (ctx: ThanosUploadModelStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosUploadModelStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosUploadModelStmt?: (ctx: ThanosUploadModelStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosDeleteModelStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosDeleteModelStmt?: (ctx: ThanosDeleteModelStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosDeleteModelStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosDeleteModelStmt?: (ctx: ThanosDeleteModelStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosPredictStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosPredictStmt?: (ctx: ThanosPredictStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosPredictStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosPredictStmt?: (ctx: ThanosPredictStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosEvaluateStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosEvaluateStmt?: (ctx: ThanosEvaluateStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosEvaluateStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosEvaluateStmt?: (ctx: ThanosEvaluateStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosConvertStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosConvertStmt?: (ctx: ThanosConvertStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosConvertStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosConvertStmt?: (ctx: ThanosConvertStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosSearchStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosSearchStmt?: (ctx: ThanosSearchStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosSearchStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosSearchStmt?: (ctx: ThanosSearchStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosSearchImageStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosSearchImageStmt?: (ctx: ThanosSearchImageStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosSearchImageStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosSearchImageStmt?: (ctx: ThanosSearchImageStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosSearchAudioStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosSearchAudioStmt?: (ctx: ThanosSearchAudioStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosSearchAudioStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosSearchAudioStmt?: (ctx: ThanosSearchAudioStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosSearchVideoStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosSearchVideoStmt?: (ctx: ThanosSearchVideoStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosSearchVideoStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosSearchVideoStmt?: (ctx: ThanosSearchVideoStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosSearchKeywordStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosSearchKeywordStmt?: (ctx: ThanosSearchKeywordStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosSearchKeywordStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosSearchKeywordStmt?: (ctx: ThanosSearchKeywordStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosSearchTextStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosSearchTextStmt?: (ctx: ThanosSearchTextStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosSearchTextStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosSearchTextStmt?: (ctx: ThanosSearchTextStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosFunctionStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosFunctionStmt?: (ctx: ThanosFunctionStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosFunctionStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosFunctionStmt?: (ctx: ThanosFunctionStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosPrintStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosPrintStmt?: (ctx: ThanosPrintStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosPrintStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosPrintStmt?: (ctx: ThanosPrintStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosPrintImageStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosPrintImageStmt?: (ctx: ThanosPrintImageStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosPrintImageStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosPrintImageStmt?: (ctx: ThanosPrintImageStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosPrintAudioStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosPrintAudioStmt?: (ctx: ThanosPrintAudioStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosPrintAudioStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosPrintAudioStmt?: (ctx: ThanosPrintAudioStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosPrintVideoStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosPrintVideoStmt?: (ctx: ThanosPrintVideoStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosPrintVideoStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosPrintVideoStmt?: (ctx: ThanosPrintVideoStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosCopyStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosCopyStmt?: (ctx: ThanosCopyStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosCopyStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosCopyStmt?: (ctx: ThanosCopyStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosListStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosListStmt?: (ctx: ThanosListStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosListStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosListStmt?: (ctx: ThanosListStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosListTableStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosListTableStmt?: (ctx: ThanosListTableStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosListTableStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosListTableStmt?: (ctx: ThanosListTableStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosListModelStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosListModelStmt?: (ctx: ThanosListModelStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosListModelStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosListModelStmt?: (ctx: ThanosListModelStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosListThanoSQLModelStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosListThanoSQLModelStmt?: (ctx: ThanosListThanoSQLModelStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosListThanoSQLModelStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosListThanoSQLModelStmt?: (ctx: ThanosListThanoSQLModelStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosListThanoSQLDatasetStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosListThanoSQLDatasetStmt?: (ctx: ThanosListThanoSQLDatasetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosListThanoSQLDatasetStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosListThanoSQLDatasetStmt?: (ctx: ThanosListThanoSQLDatasetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosGetStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosGetStmt?: (ctx: ThanosGetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosGetStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosGetStmt?: (ctx: ThanosGetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosGetThanoSQLModelStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosGetThanoSQLModelStmt?: (ctx: ThanosGetThanoSQLModelStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosGetThanoSQLModelStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosGetThanoSQLModelStmt?: (ctx: ThanosGetThanoSQLModelStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosGetThanoSQLDatasetStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosGetThanoSQLDatasetStmt?: (ctx: ThanosGetThanoSQLDatasetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosGetThanoSQLDatasetStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosGetThanoSQLDatasetStmt?: (ctx: ThanosGetThanoSQLDatasetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosUsingStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosUsingStmt?: (ctx: ThanosUsingStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosUsingStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosUsingStmt?: (ctx: ThanosUsingStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.thanosOptionStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosOptionStmt?: (ctx: ThanosOptionStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.thanosOptionStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosOptionStmt?: (ctx: ThanosOptionStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.normalSubquery`.
	 * @param ctx the parse tree
	 */
	enterNormalSubquery?: (ctx: NormalSubqueryContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.normalSubquery`.
	 * @param ctx the parse tree
	 */
	exitNormalSubquery?: (ctx: NormalSubqueryContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.normalStmt`.
	 * @param ctx the parse tree
	 */
	enterNormalStmt?: (ctx: NormalStmtContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.normalStmt`.
	 * @param ctx the parse tree
	 */
	exitNormalStmt?: (ctx: NormalStmtContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.remaining`.
	 * @param ctx the parse tree
	 */
	enterRemaining?: (ctx: RemainingContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.remaining`.
	 * @param ctx the parse tree
	 */
	exitRemaining?: (ctx: RemainingContext) => void;

	/**
	 * Enter a parse tree produced by `thanosParser.normalParenException`.
	 * @param ctx the parse tree
	 */
	enterNormalParenException?: (ctx: NormalParenExceptionContext) => void;
	/**
	 * Exit a parse tree produced by `thanosParser.normalParenException`.
	 * @param ctx the parse tree
	 */
	exitNormalParenException?: (ctx: NormalParenExceptionContext) => void;
}

