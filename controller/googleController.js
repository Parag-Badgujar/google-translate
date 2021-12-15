const express = require('express'),
    googleModel = require('../model/googleModel'),
    {
        translate
    } = require('bing-translate-api');

var googleController = {
    translateText: function(request, response) {
        var sourceText = request.body.sourceText;               // get input text 
        var sourceLanguage = request.body.sourceLanguage;       // get input language
        var targetLanguage = request.body.targetLanguage;       // get output language
        var resultText;                                         // store translated text
        googleModel.validateText(sourceText, sourceLanguage, targetLanguage, function(error, result) {  // check sourceText already searched previously if yes return result
            if (error) {    // check database error
                response.status(500).send({
                    status: false,
                    message: "Internal server error",
                })
            } else if (result.rows.length > 0) {    // return database response 
                response.status(200).send({
                    status: true,
                    message: "Translation done",
                    result: result.rows[0]['result_text']
                })
            } else {    // if no translate sourceText
                translate(sourceText, sourceLanguage, targetLanguage, true).then(res => { //bing translate api for translation
                    // console.log(res.translation);
                    resultText = res.translation;   // translated text
                    googleModel.registerTranslatedText(sourceText, sourceLanguage, targetLanguage, resultText, function(error, data) {      // store sourceText, sourceLanguage, targetLanguage, resultText in database
                        if (error) {    // check database error
                            response.status(500).send({
                                status: false,
                                message: "Internal server error",
                            })
                        } else if (data.rows.length > 0) {      // return translated text
                            response.status(200).send({
                                status: true,
                                message: "Translation done",
                                result: data.rows[0]['result_text']
                            })
                        } else {    // return error in case of database doesnot return response
                            response.status(400).send({
                                status: false,
                                message: "Something went wrong",
                            })
                        }
                    })
                }).catch(err => {
                    console.error(err);
                    response.status(500).send({
                        status: false,
                        message: "Internal server error",
                    })
                });
            }
        });
    }
}

module.exports = googleController;