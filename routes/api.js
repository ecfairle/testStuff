var express = require('express');
var router = express.Router();

router.route('/messages')

	.get(function(req,res){
		res.send({message: 'return all messages'});
	})

	.post(function(req,res){
		res.send({message: 'send new message'});
	});

router.route('/messages/:id')

	.get(function(req,res){
		res.send({message: 'return post with id ' + req.params.id});
	})

	.put(function(req,res){
		res.send({message: 'modify post with id ' + req.params.id});
	})

	.delete(function(req,res){
		res.send({message: 'delete post with id ' + req.params.id});
	});

module.exports = router;