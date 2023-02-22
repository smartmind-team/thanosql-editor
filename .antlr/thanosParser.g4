parser grammar thanosParser;
options {
    language=Python3;
    tokenVocab=thanosLexer;
}

thanosLanguage
    : thanosQuery EOF
    ;

thanosQuery
    : normalStmt (thanosStmt normalStmt)*
    ;

thanosStmt
    : thanosNoSubqueryStmt
    | thanosSubqueryStmt
    ;

thanosNoSubqueryStmt
    : thanosBuildModelStmt
    | thanosFitModelStmt
    | thanosUploadModelStmt
    | thanosDeleteModelStmt
    | thanosPrintStmt
    | thanosCopyStmt
    | thanosGetStmt
    ;

thanosSubqueryStmt
    : thanosPredictStmt
    | thanosEvaluateStmt
    | thanosConvertStmt
    | thanosSearchStmt
    | thanosFunctionStmt
    | thanosListStmt
    | normalSubquery
    | normalParenException
    ;

thanosSubquery
    : LEFT_PAREN normalStmt (thanosSubqueryStmt normalStmt)* RIGHT_PAREN
    ;

thanosBuildModelStmt
    : BUILD MODEL user_model_name=IDENTIFIER thanosUsingStmt AS thanosSubquery?
    ;

thanosFitModelStmt
    : FIT MODEL user_model_name=IDENTIFIER thanosUsingStmt AS thanosSubquery?
    ;

thanosUploadModelStmt 
    : UPLOAD MODEL user_model_name=IDENTIFIER thanosOptionStmt? FROM path=IDENTIFIER  
    ;

thanosDeleteModelStmt
    : DELETE MODEL built_model_name=IDENTIFIER
    ;

thanosPredictStmt
    : PREDICT thanosUsingStmt AS thanosSubquery?
    ;

thanosEvaluateStmt
    : EVALUATE thanosUsingStmt AS thanosSubquery?
    ;

thanosConvertStmt
    : CONVERT thanosUsingStmt AS thanosSubquery?
    ;

thanosSearchStmt
    : SEARCH thanosSearchImageStmt
    | SEARCH thanosSearchAudioStmt
    | SEARCH thanosSearchVideoStmt
    | SEARCH thanosSearchKeywordStmt
    | SEARCH thanosSearchTextStmt
    ;

thanosSearchImageStmt
    : IMAGE thanosUsingStmt AS thanosSubquery?
    ;

thanosSearchAudioStmt
    : AUDIO thanosUsingStmt AS thanosSubquery?
    ;

thanosSearchVideoStmt
    : VIDEO thanosUsingStmt AS thanosSubquery?
    ;

thanosSearchKeywordStmt 
    : KEYWORD thanosUsingStmt AS thanosSubquery?
    ;

thanosSearchTextStmt 
    : TEXT thanosUsingStmt AS thanosSubquery?
    ;

thanosFunctionStmt
    : FUNCTION built_function_name=IDENTIFIER thanosOptionStmt? AS thanosSubquery?
    | FUNCTION built_function_name=IDENTIFIER thanosOptionStmt? FROM input_data=IDENTIFIER
    ;
    
thanosPrintStmt
    : PRINT thanosPrintImageStmt
    | PRINT thanosPrintAudioStmt
    | PRINT thanosPrintVideoStmt
    ;

thanosPrintImageStmt
    : IMAGE thanosOptionStmt? AS thanosSubquery?
    ;

thanosPrintAudioStmt
    : AUDIO thanosOptionStmt? AS thanosSubquery?
    ;

thanosPrintVideoStmt
    : VIDEO thanosOptionStmt? AS thanosSubquery?
    ;

thanosCopyStmt
    : COPY user_table_name=IDENTIFIER thanosOptionStmt? FROM input_data=IDENTIFIER 
    ;

thanosListStmt
    : LIST thanosListTableStmt
    | LIST thanosListModelStmt
    | LIST thanosListThanoSQLModelStmt
    | LIST thanosListThanoSQLDatasetStmt
    ;

thanosListTableStmt
    : TABLE
    ;

thanosListModelStmt
    : MODEL
    ;

thanosListThanoSQLModelStmt
    : THANOSQL MODEL
    ;

thanosListThanoSQLDatasetStmt
    : THANOSQL DATASET
    ;

thanosGetStmt
    : GET thanosGetThanoSQLModelStmt
    | GET thanosGetThanoSQLDatasetStmt
    ;

thanosGetThanoSQLModelStmt
    : THANOSQL MODEL built_model_name=IDENTIFIER thanosOptionStmt?
    ;

thanosGetThanoSQLDatasetStmt
    : THANOSQL DATASET dataset_name=IDENTIFIER thanosOptionStmt?
    ;

//#########################//
//  Supplimentary Clause   //
//#########################//

thanosUsingStmt
    : USING built_model_name=IDENTIFIER thanosOptionStmt?
    ;

thanosOptionStmt
    : OPTIONS LEFT_PAREN paramsKey+=IDENTIFIER EQUAL paramsValue+=IDENTIFIER (COMMA paramsKey+=IDENTIFIER EQUAL paramsValue+=IDENTIFIER)* RIGHT_PAREN
    ;

//#########################//
//  Postgre Comprehensive  //
//#########################//

normalSubquery
    : FROM thanosSubquery
    | JOIN thanosSubquery
    ;

normalStmt
    : remaining
    ;

remaining
    : .*?
    ;

normalParenException
    : LEFT_PAREN remaining normalParenException? RIGHT_PAREN
    ;