const express = require('express');
const controller = require('../controllers/mainController');

const router = express.Router();
/**
 * Example Translation JSON object
 * @typedef {object} TranslateSchema
 * @property {string} text.required - Text to be translated.
 * @property {string} to.required - Translating to language.
 * @property {string} from - Translating from language. Will auto detect the language if left empty.
 */

/**
 * POST /translate
 * @tags Translate
 * @summary Translates texts.
 * @param {TranslateSchema} request.body.required - Translation JSON Object - application/json
 * @return 200 - success response - application/json
 */
router.post('/', controller.translate);

/**
 * GET /translate/languages
 * @tags Translate
 * @summary Returns all available languages that can be translated to/from.
 * @return 200 - success response - application/json
 */
router.get('/languages', controller.getAllLanguages);

module.exports = router;