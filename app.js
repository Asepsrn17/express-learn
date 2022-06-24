const express = require('express');
const router = require('./routes');
const app = express();
const log = require('./middlewares/logger');

app.use(log);
app.use(router);
app.use((request, response, next) => {
    response.status(404);
    response.send({
        status: 'failed',
        message: 'Resource' + request.originalUrl + ' Not Found'
    });
    
})

app.listen(3000, () => console.log('server berjalan pada http://localhost:3000'));


// const express = require('express');
// const app = express();
// const router = require('./routes');
// const log = require('./middlewares/logger');

// app.use(router);

// app.listen(3000, () => console.log('server: http://localhost:3000'));