const log = (request, response, next) => {
    console.log(new Date().toLocaleDateString(), '=>', request.method, request.originalUrl);
    next();
}

module.exports = log;


// const log = (req, res, next) => {
//     console.log(new Date ().toLocaleDateString(), '=>', req.method, req.originalUrl);
//     next();
// }

// module.exports = log;