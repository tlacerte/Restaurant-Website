var express = require('express')
var router = express.Router()
var blogCtrl = require('../controllers/blog')

router.get('/posts', blogCtrl.getAllPosts)
router.get('/posts/id', blogCtrl.getOnePost)
router.put('/post/:id', blogCtrl.edit)
router.post('/post', blogCtrl.createPost)
router.delete('/post/:id', blogCtrl.deletePost)

module.exports = router