parser grammar ThanosParser;
options {
    language=Python3;
    tokenVocab=ThanosLexer;
}

thanosLanguage
    : thanosQuery EOF
    ;

thanosQuery
    : normalStmt (thanosStmt normalStmt)*
    ;

thanosStmt
    : thanosBuildStmt
    | thanosFitStmt
    | thanosUploadStmt
    | thanosDeleteStmt
    | thanosTransformStmt
    | thanosPredictStmt
    | thanosEvaluateStmt
    | thanosCreateStmt
    | thanosConvertStmt
    | thanosSearchStmt
    | thanosPreprocessStmt
    | thanosPrintStmt
    | thanosCopyStmt
    | thanosListStmt
    | thanosGetStmt
    | normalParenException
    | normalSubquery
    ;

thanosSubquery
    : LEFT_PAREN thanosQuery RIGHT_PAREN
    ;

thanosBuildStmt
    : BUILD thanosBuildModelStmt AS thanosSubquery?
    ;

thanosBuildModelStmt
    : MODEL user_model_name=IDENTIFIER USING model_class=IDENTIFIER thanosOptionStmt?
    ; 

thanosFitStmt
    : FIT thanosModelStmt AS thanosSubquery?
    ;

thanosModelStmt
    : MODEL user_model_name=IDENTIFIER thanosUsingModelStmt? 
    ;

thanosUploadStmt 
    : UPLOAD thanosUploadModelStmt  
    ;

thanosUploadModelStmt
    : MODEL user_model_name=IDENTIFIER thanosOptionStmt? FROM path=IDENTIFIER
    ;

thanosDeleteStmt
    : DELETE MODEL built_model_name=IDENTIFIER
    ;

thanosTransformStmt
    : TRANSFORM thanosUsingModelStmt AS thanosSubquery?
    ;

thanosPredictStmt
    : PREDICT thanosUsingModelStmt AS thanosSubquery?
    ;

thanosEvaluateStmt
    : EVALUATE thanosUsingModelStmt AS thanosSubquery?
    ;

thanosCreateStmt
    : CREATE TABLE user_table_name=IDENTIFIER thanosUsingModelStmt FROM path=IDENTIFIER
    | CREATE TABLE user_table_name=IDENTIFIER thanosUsingModelStmt AS
    ;

thanosConvertStmt
    : CONVERT thanosUsingModelStmt AS thanosSubquery?
    ;

thanosSearchStmt
    : SEARCH thanosSearchImageStmt
    | SEARCH thanosSearchAudioStmt
    | SEARCH thanosSearchVideoStmt
    | SEARCH thanosSearchKeywordStmt
    | SEARCH thanosSearchTextStmt
    ;

thanosSearchImageStmt
    : IMAGE variable_type=IDENTIFIER EQUAL variable=IDENTIFIER (thanosUsingModelStmt | thanosOptionStmt)? AS thanosSubquery?
    ;

thanosSearchAudioStmt
    : AUDIO variable_type=IDENTIFIER EQUAL variable=IDENTIFIER (thanosUsingModelStmt | thanosOptionStmt)? AS thanosSubquery?
    ;

thanosSearchVideoStmt
    : VIDEO variable_type=IDENTIFIER EQUAL variable=IDENTIFIER (thanosUsingModelStmt | thanosOptionStmt)? AS thanosSubquery?
    ;

thanosSearchKeywordStmt 
    : KEYWORD (variable_type=IDENTIFIER EQUAL variable=IDENTIFIER)? (thanosUsingModelStmt | thanosOptionStmt)? AS thanosSubquery?  
    ;

thanosSearchTextStmt 
    : TEXT variable_type=IDENTIFIER EQUAL variable=IDENTIFIER (thanosUsingModelStmt | thanosOptionStmt)? AS thanosSubquery?
    ;

thanosPreprocessStmt
    : PREPROCESS thanosPreprocessTextStmt
    | PREPROCESS thanosPreprocessImageStmt
    | PREPROCESS thanosPreprocessAudioStmt
    | PREPROCESS thanosPreprocessVideoStmt
    ;

thanosPreprocessTextStmt
    : TEXT thanosUsingMethodStmt FROM path=IDENTIFIER 
    ;

thanosPreprocessImageStmt
    : IMAGE thanosUsingMethodStmt FROM path=IDENTIFIER 
    ;

thanosPreprocessAudioStmt
    : AUDIO thanosUsingMethodStmt FROM path=IDENTIFIER 
    ;

thanosPreprocessVideoStmt
    : VIDEO thanosUsingMethodStmt FROM path=IDENTIFIER 
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
    : COPY user_table_name=IDENTIFIER thanosOptionStmt? FROM path=IDENTIFIER 
    ;

thanosListStmt
    : LIST thanosListTableStmt
    | LIST thanosListModelStmt
    | LIST thanosListThanoSQLModelStmt
    | LIST thanosListThanoSQLTutorialStmt
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

thanosListThanoSQLTutorialStmt
    : THANOSQL TUTORIAL
    ;

thanosListThanoSQLDatasetStmt
    : THANOSQL DATASET
    ;

thanosGetStmt
    : GET thanosGetThanoSQLModelStmt
    | GET thanosGetThanoSQLDatasetStmt
    ;

thanosGetThanoSQLModelStmt
    : THANOSQL MODEL built_model_name=IDENTIFIER thanosOptionStmt? AS? user_model_name=IDENTIFIER? 
    ;

thanosGetThanoSQLDatasetStmt
    : THANOSQL DATASET dataset_name=IDENTIFIER thanosOptionStmt?
    ;

//#########################//
//  Supplimentary Clause   //
//#########################//

thanosUsingModelStmt
    : USING built_model_name=IDENTIFIER thanosOptionStmt?
    ;

thanosUsingMethodStmt
    : USING method_name=IDENTIFIER thanosOptionStmt?
    ;

thanosOptionStmt
    : OPTIONS LEFT_PAREN paramsKey+=IDENTIFIER EQUAL paramsValue+=IDENTIFIER (COMMA paramsKey+=IDENTIFIER EQUAL paramsValue+=IDENTIFIER)* RIGHT_PAREN
    ;

//#########################//
//  Postgre Comprehensive  //
//#########################//

normalSubquery
    : FROM thanosSubquery
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