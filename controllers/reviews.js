const Review = require('../models/review')

module.exports = {
    getAllPosts,
    getOnePost,
    createPost,
    deletePost,
    edit
}

function createPost(req, res) {
    Review.create(req.body).then(post=> {
      res.status(201).json(post);
    }).catch(error => res.status(500).json(error.message));
}

function getAllPosts(req, res) {
    Review.find({}).then(posts => {
        res.status(200).json(posts);
    }).catch(error => res.status(500).json(error.message));
}

function getOnePost(req, res) {
    Review.findById(req.params.id).then(post=>{
        res.status(200).json(post);
    }).catch(error => res.status(500).json(error.message));
}

function edit(req, res){
    // console.log(req.body, req.params.id)
    Review.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(post =>{
        res.status(200).json(post)
    }).catch(error => res.status(500).json(error.message))
}

function deletePost(req, res) {
    Review.findByIdAndRemove(req.params.id).then(blog=>{
        res.status(200).json(blog);
    }).catch(error => res.status(500).json(error.message))
}