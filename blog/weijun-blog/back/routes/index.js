var express = require('express');
var api = require('../config/api');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/user', function(req, res, next){
  res.send("ok")
})
router.get('/getArticles', function(req, res, next){
  api.getAllArticles(req, res);
})
router.get('/getArticlesPage/:pid', function(req, res, next){
  api.getArticlesPage(req, res);
})
router.get('/getOneArticle/:id', function(req, res, next){
  api.getOneArticle(req, res);
})
router.post('/addArticle', function(req, res, next){
  api.addArticle(req, res);
})
router.post('/updateArticle/:id', function(req, res, next){
  api.updateArticle(req, res);
})
router.post('/deleteArticle', function(req, res, next){
  api.deleteArticle(req, res);
})
router.get('/getComment/:id', function(req, res, next){
  api.getComment(req, res);
})
router.post('/addComment', function(req, res, next){
  api.addComment(req, res);
})
router.get('/likeArticle/:id', function(req, res, next){
  api.likeArticle(req, res);
})
router.get('/addCommentArticle/:id', function(req, res, next){
  api.addCommentArticle(req, res);
})
router.get('/addLook/:id', function(req, res, next){
  api.addLook(req, res);
})

module.exports = router;
