var express = require('express')
var router = express.Router()
var reviewCtrl = require('../../controllers/reviews')

router.get('/posts', reviewCtrl.getAllPosts)
router.get('/posts/id', reviewCtrl.getOnePost)
router.put('/post/:id', reviewCtrl.edit)
router.post('/posts', reviewCtrl.createPost)
router.delete('/post/:id', reviewCtrl.deletePost)

module.exports = router