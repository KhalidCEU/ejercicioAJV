const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const validationRouter = require('./routes/index.js');

const valid_schema = require('./schemas/valid_schema.json');
const invalid_schema = require('./schemas/invalid_schema.json');

const port = 8080;

app.use(bodyParser.json());
app.use('/validate', validationRouter);

const baseUrl = `http://localhost:${port}`

const testRequests = async () => {
    const requests = [
        axios.post(`${baseUrl}/validate`, valid_schema, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => console.log('Response from valid_schema:', response.data))
          .catch(error => console.error('Error with valid_schema:', error.message)),

        axios.post(`${baseUrl}/validate`, invalid_schema, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => console.log('Response from invalid_schema:', response.data))
          .catch(error => console.error('Error with invalid_schema:', error.message))
    ];

    await Promise.all(requests);
};

app.listen(port, async () => {
    console.log(`Server listening on port: ${port}`);
    await testRequests();
});
