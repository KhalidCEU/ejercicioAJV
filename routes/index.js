var express = require('express');
const Ajv = require("ajv");

var router = express.Router();
const ajv = new Ajv();

function validate(schema) {
    try {
        ajv.validate(schema);
        return true;
    } catch (error) {
        return false;
    }
}

router.post('/', function(req, res) {
    const schema = req.body;

    try {
        if (!schema) {
            return res
                .status(400)
                .json({
                    message: "There is no schema in the request body"
            });
        }

        if (!validate(schema)){
            return res
                .status(400)
                .json({
                    message: "The schema is not valid"
                })
        }

        return res
            .status(200)
            .json({
                message: "The schema is valid"
        })

    } catch (error) {
        return res
            .status(500)
            .json({
                message: "An unexpected error occurred validating the schema :", error: error.message
        });
    }
});

module.exports = router;