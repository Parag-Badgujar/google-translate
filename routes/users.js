var express = require('express');
var router = express.Router();
const googleController = require('../controller/googleController')

//
/** 
 * @swagger 
 * definitions:
 *   googleTranslateModel:
 *     properties:
 *       sourceText:
 *         type: string
 *         required: true
 *         description: Enter sourceText.
 *       sourceLanguage:
 *         type: string
 *         required: true
 *         description: Enter sourceText.
 *       targetLanguage:
 *         type: string
 *         required: true
 *         description: Enter targetLanguage
 */
/** 
 * @swagger
/google/translate: 
*   post: 
*     description: Google translate.
*     tags:
*     - google
*     parameters: 
*     - name: Model 
*       description: Google translate.
*       in: body 
*       required: true
*       schema: 
*          $ref: '#/definitions/googleTranslateModel'
*     produces:
*       - application/json
*     responses:  
*       201: 
*         description: Registration done successfully.
*       400: 
*         description: Something went wrong.
*       402: 
*         description: Invalid credentials.
*       403: 
*         description: Email or Phone Number already exist.
*       500:
*         description: Internal server error. 
*/
router.post('/translate', function (request, response) {
    googleController.translateText(request, response);
});

module.exports = router;
