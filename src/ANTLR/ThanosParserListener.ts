// Generated from ./.antlr/ThanosParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ThanosLanguageContext } from "./ThanosParser";
import { ThanosQueryContext } from "./ThanosParser";
import { ThanosStmtContext } from "./ThanosParser";
import { ThanosSubqueryContext } from "./ThanosParser";
import { ThanosBuildStmtContext } from "./ThanosParser";
import { ThanosBuildModelStmtContext } from "./ThanosParser";
import { ThanosFitStmtContext } from "./ThanosParser";
import { ThanosModelStmtContext } from "./ThanosParser";
import { ThanosUploadStmtContext } from "./ThanosParser";
import { ThanosUploadModelStmtContext } from "./ThanosParser";
import { ThanosDeleteStmtContext } from "./ThanosParser";
import { ThanosTransformStmtContext } from "./ThanosParser";
import { ThanosPredictStmtContext } from "./ThanosParser";
import { ThanosEvaluateStmtContext } from "./ThanosParser";
import { ThanosCreateStmtContext } from "./ThanosParser";
import { ThanosConvertStmtContext } from "./ThanosParser";
import { ThanosSearchStmtContext } from "./ThanosParser";
import { ThanosSearchImageStmtContext } from "./ThanosParser";
import { ThanosSearchAudioStmtContext } from "./ThanosParser";
import { ThanosSearchVideoStmtContext } from "./ThanosParser";
import { ThanosSearchKeywordStmtContext } from "./ThanosParser";
import { ThanosSearchTextStmtContext } from "./ThanosParser";
import { ThanosPreprocessStmtContext } from "./ThanosParser";
import { ThanosPreprocessTextStmtContext } from "./ThanosParser";
import { ThanosPreprocessImageStmtContext } from "./ThanosParser";
import { ThanosPreprocessAudioStmtContext } from "./ThanosParser";
import { ThanosPreprocessVideoStmtContext } from "./ThanosParser";
import { ThanosPrintStmtContext } from "./ThanosParser";
import { ThanosPrintImageStmtContext } from "./ThanosParser";
import { ThanosPrintAudioStmtContext } from "./ThanosParser";
import { ThanosPrintVideoStmtContext } from "./ThanosParser";
import { ThanosCopyStmtContext } from "./ThanosParser";
import { ThanosListStmtContext } from "./ThanosParser";
import { ThanosListTableStmtContext } from "./ThanosParser";
import { ThanosListModelStmtContext } from "./ThanosParser";
import { ThanosListThanoSQLModelStmtContext } from "./ThanosParser";
import { ThanosListThanoSQLTutorialStmtContext } from "./ThanosParser";
import { ThanosListThanoSQLDatasetStmtContext } from "./ThanosParser";
import { ThanosGetStmtContext } from "./ThanosParser";
import { ThanosGetThanoSQLModelStmtContext } from "./ThanosParser";
import { ThanosGetThanoSQLDatasetStmtContext } from "./ThanosParser";
import { ThanosUsingModelStmtContext } from "./ThanosParser";
import { ThanosUsingMethodStmtContext } from "./ThanosParser";
import { ThanosOptionStmtContext } from "./ThanosParser";
import { NormalSubqueryContext } from "./ThanosParser";
import { NormalStmtContext } from "./ThanosParser";
import { RemainingContext } from "./ThanosParser";
import { NormalParenExceptionContext } from "./ThanosParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ThanosParser`.
 */
export interface ThanosParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ThanosParser.thanosLanguage`.
	 * @param ctx the parse tree
	 */
	enterThanosLanguage?: (ctx: ThanosLanguageContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosLanguage`.
	 * @param ctx the parse tree
	 */
	exitThanosLanguage?: (ctx: ThanosLanguageContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosQuery`.
	 * @param ctx the parse tree
	 */
	enterThanosQuery?: (ctx: ThanosQueryContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosQuery`.
	 * @param ctx the parse tree
	 */
	exitThanosQuery?: (ctx: ThanosQueryContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosStmt?: (ctx: ThanosStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosStmt?: (ctx: ThanosStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosSubquery`.
	 * @param ctx the parse tree
	 */
	enterThanosSubquery?: (ctx: ThanosSubqueryContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosSubquery`.
	 * @param ctx the parse tree
	 */
	exitThanosSubquery?: (ctx: ThanosSubqueryContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosBuildStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosBuildStmt?: (ctx: ThanosBuildStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosBuildStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosBuildStmt?: (ctx: ThanosBuildStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosBuildModelStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosBuildModelStmt?: (ctx: ThanosBuildModelStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosBuildModelStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosBuildModelStmt?: (ctx: ThanosBuildModelStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosFitStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosFitStmt?: (ctx: ThanosFitStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosFitStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosFitStmt?: (ctx: ThanosFitStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosModelStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosModelStmt?: (ctx: ThanosModelStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosModelStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosModelStmt?: (ctx: ThanosModelStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosUploadStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosUploadStmt?: (ctx: ThanosUploadStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosUploadStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosUploadStmt?: (ctx: ThanosUploadStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosUploadModelStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosUploadModelStmt?: (ctx: ThanosUploadModelStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosUploadModelStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosUploadModelStmt?: (ctx: ThanosUploadModelStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosDeleteStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosDeleteStmt?: (ctx: ThanosDeleteStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosDeleteStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosDeleteStmt?: (ctx: ThanosDeleteStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosTransformStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosTransformStmt?: (ctx: ThanosTransformStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosTransformStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosTransformStmt?: (ctx: ThanosTransformStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosPredictStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosPredictStmt?: (ctx: ThanosPredictStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosPredictStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosPredictStmt?: (ctx: ThanosPredictStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosEvaluateStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosEvaluateStmt?: (ctx: ThanosEvaluateStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosEvaluateStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosEvaluateStmt?: (ctx: ThanosEvaluateStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosCreateStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosCreateStmt?: (ctx: ThanosCreateStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosCreateStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosCreateStmt?: (ctx: ThanosCreateStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosConvertStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosConvertStmt?: (ctx: ThanosConvertStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosConvertStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosConvertStmt?: (ctx: ThanosConvertStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosSearchStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosSearchStmt?: (ctx: ThanosSearchStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosSearchStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosSearchStmt?: (ctx: ThanosSearchStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosSearchImageStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosSearchImageStmt?: (ctx: ThanosSearchImageStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosSearchImageStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosSearchImageStmt?: (ctx: ThanosSearchImageStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosSearchAudioStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosSearchAudioStmt?: (ctx: ThanosSearchAudioStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosSearchAudioStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosSearchAudioStmt?: (ctx: ThanosSearchAudioStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosSearchVideoStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosSearchVideoStmt?: (ctx: ThanosSearchVideoStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosSearchVideoStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosSearchVideoStmt?: (ctx: ThanosSearchVideoStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosSearchKeywordStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosSearchKeywordStmt?: (ctx: ThanosSearchKeywordStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosSearchKeywordStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosSearchKeywordStmt?: (ctx: ThanosSearchKeywordStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosSearchTextStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosSearchTextStmt?: (ctx: ThanosSearchTextStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosSearchTextStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosSearchTextStmt?: (ctx: ThanosSearchTextStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosPreprocessStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosPreprocessStmt?: (ctx: ThanosPreprocessStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosPreprocessStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosPreprocessStmt?: (ctx: ThanosPreprocessStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosPreprocessTextStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosPreprocessTextStmt?: (ctx: ThanosPreprocessTextStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosPreprocessTextStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosPreprocessTextStmt?: (ctx: ThanosPreprocessTextStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosPreprocessImageStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosPreprocessImageStmt?: (ctx: ThanosPreprocessImageStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosPreprocessImageStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosPreprocessImageStmt?: (ctx: ThanosPreprocessImageStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosPreprocessAudioStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosPreprocessAudioStmt?: (ctx: ThanosPreprocessAudioStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosPreprocessAudioStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosPreprocessAudioStmt?: (ctx: ThanosPreprocessAudioStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosPreprocessVideoStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosPreprocessVideoStmt?: (ctx: ThanosPreprocessVideoStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosPreprocessVideoStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosPreprocessVideoStmt?: (ctx: ThanosPreprocessVideoStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosPrintStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosPrintStmt?: (ctx: ThanosPrintStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosPrintStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosPrintStmt?: (ctx: ThanosPrintStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosPrintImageStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosPrintImageStmt?: (ctx: ThanosPrintImageStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosPrintImageStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosPrintImageStmt?: (ctx: ThanosPrintImageStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosPrintAudioStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosPrintAudioStmt?: (ctx: ThanosPrintAudioStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosPrintAudioStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosPrintAudioStmt?: (ctx: ThanosPrintAudioStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosPrintVideoStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosPrintVideoStmt?: (ctx: ThanosPrintVideoStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosPrintVideoStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosPrintVideoStmt?: (ctx: ThanosPrintVideoStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosCopyStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosCopyStmt?: (ctx: ThanosCopyStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosCopyStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosCopyStmt?: (ctx: ThanosCopyStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosListStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosListStmt?: (ctx: ThanosListStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosListStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosListStmt?: (ctx: ThanosListStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosListTableStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosListTableStmt?: (ctx: ThanosListTableStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosListTableStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosListTableStmt?: (ctx: ThanosListTableStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosListModelStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosListModelStmt?: (ctx: ThanosListModelStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosListModelStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosListModelStmt?: (ctx: ThanosListModelStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosListThanoSQLModelStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosListThanoSQLModelStmt?: (ctx: ThanosListThanoSQLModelStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosListThanoSQLModelStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosListThanoSQLModelStmt?: (ctx: ThanosListThanoSQLModelStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosListThanoSQLTutorialStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosListThanoSQLTutorialStmt?: (ctx: ThanosListThanoSQLTutorialStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosListThanoSQLTutorialStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosListThanoSQLTutorialStmt?: (ctx: ThanosListThanoSQLTutorialStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosListThanoSQLDatasetStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosListThanoSQLDatasetStmt?: (ctx: ThanosListThanoSQLDatasetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosListThanoSQLDatasetStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosListThanoSQLDatasetStmt?: (ctx: ThanosListThanoSQLDatasetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosGetStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosGetStmt?: (ctx: ThanosGetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosGetStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosGetStmt?: (ctx: ThanosGetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosGetThanoSQLModelStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosGetThanoSQLModelStmt?: (ctx: ThanosGetThanoSQLModelStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosGetThanoSQLModelStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosGetThanoSQLModelStmt?: (ctx: ThanosGetThanoSQLModelStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosGetThanoSQLDatasetStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosGetThanoSQLDatasetStmt?: (ctx: ThanosGetThanoSQLDatasetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosGetThanoSQLDatasetStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosGetThanoSQLDatasetStmt?: (ctx: ThanosGetThanoSQLDatasetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosUsingModelStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosUsingModelStmt?: (ctx: ThanosUsingModelStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosUsingModelStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosUsingModelStmt?: (ctx: ThanosUsingModelStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosUsingMethodStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosUsingMethodStmt?: (ctx: ThanosUsingMethodStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosUsingMethodStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosUsingMethodStmt?: (ctx: ThanosUsingMethodStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.thanosOptionStmt`.
	 * @param ctx the parse tree
	 */
	enterThanosOptionStmt?: (ctx: ThanosOptionStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.thanosOptionStmt`.
	 * @param ctx the parse tree
	 */
	exitThanosOptionStmt?: (ctx: ThanosOptionStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.normalSubquery`.
	 * @param ctx the parse tree
	 */
	enterNormalSubquery?: (ctx: NormalSubqueryContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.normalSubquery`.
	 * @param ctx the parse tree
	 */
	exitNormalSubquery?: (ctx: NormalSubqueryContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.normalStmt`.
	 * @param ctx the parse tree
	 */
	enterNormalStmt?: (ctx: NormalStmtContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.normalStmt`.
	 * @param ctx the parse tree
	 */
	exitNormalStmt?: (ctx: NormalStmtContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.remaining`.
	 * @param ctx the parse tree
	 */
	enterRemaining?: (ctx: RemainingContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.remaining`.
	 * @param ctx the parse tree
	 */
	exitRemaining?: (ctx: RemainingContext) => void;

	/**
	 * Enter a parse tree produced by `ThanosParser.normalParenException`.
	 * @param ctx the parse tree
	 */
	enterNormalParenException?: (ctx: NormalParenExceptionContext) => void;
	/**
	 * Exit a parse tree produced by `ThanosParser.normalParenException`.
	 * @param ctx the parse tree
	 */
	exitNormalParenException?: (ctx: NormalParenExceptionContext) => void;
}

