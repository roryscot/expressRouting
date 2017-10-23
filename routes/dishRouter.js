const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req,res,next) => {
  res.end('Will send all dishes');
})
.post((req,res,next) => {
  res.end('Will add the dish: ' + req.body.name +
   ' with details: ' + req.body.description);
})
.put((req,res,next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
})
.delete((req,res,next) => { //restrict operation to priveledged users
  res.end('Will delete all dishes');
});


// .get('/dishes/:dishId', (req,res,next) => {
//   res.end('Will send details of ' + req.params.dishId);
// })
//
// .post('/dishes/:dishId', (req,res,next) => {
//   res.statusCode = 403;
//   res.end('Post operation not supported on /dishes/' + req.params.dishId);
// })
//
// .put('/dishes/:dishId', (req,res,next) => {
//   res.write('Updating the dish: '+req.params.dishId + '\n')
//   res.end('Will update the dish: ' + req.body.name + " with details: "+
//     req.body.description
//   );
// })
//
// .delete('/dishes/:dishId', (req,res,next) => {
//   res.end('Will delete ' +req.params.dishId);
// });
//
// .use(express.static(__dirname + '/public'));
//
// .use((req, res, next) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<html><body><h1>This is an Express Server</h1></body></html>');
//
// });

module.exports = dishRouter;
