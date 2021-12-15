const db = require('../config/dbConnection'); //reference of dbconnection.js

const googleModel = {
    validateText: function (sourceText,sourceLanguage, targetLanguage, callback) {
        db.query("select result_text from translate_data where source_text=$1 and source_language=$2 and target_language=$3", [sourceText,sourceLanguage, targetLanguage], callback);
    },

    registerTranslatedText: function (sourceText,sourceLanguage, targetLanguage,resultText, callback) {
        db.query("insert into translate_data(source_text,source_language,target_language,result_text) values($1,$2,$3,$4) returning result_text", [sourceText,sourceLanguage, targetLanguage,resultText], callback);
    },

};


module.exports = googleModel;