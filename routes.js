const router = require('express').Router();

router.get('/', (request, response) => {
  const { page, total } = request.query;
  response.send({
    status: 'success',
    message: 'welcome to express learn',
    page,
    total,
  });
});

router.get('/product/:id', (request, response) => {
  console.log(request.query);
  response.json({
    id: request.params,
  });
});

router.get('/:category/:tags', (request, response) => {
  const { category, tags } = request.params;
  response.json({ category, tags });
});

module.exports = router;
// const router = require('express').Router();

// router.get('/', (req, res) => {
//     const {page, total} = req.query;
//   res.send({
//     status: 'success',
//     message: 'welcome to express',
//     page,
//   });
// });

// router.get('/product/:id', (req, res) => {
//   res.json({
//     id: req.params.id,
//   });
// });

// router.get('/:category/:tag', (req, res) => {
//   const { category, tag } = req.params;
//   res.json({
//     category: category,
//     tag: tag,
//   });
// });

// module.exports = router;