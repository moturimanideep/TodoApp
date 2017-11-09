var Tasks = require('../models/tododetails');
const express = require("express");

const router = express.Router();



  router.get('/', (req, res)=>{
    res.send("Welcome to Todo App")
  })


  router.post('/addtask', function(req, res){
  		Tasks.create({name: req.body.name}, function(err, task){
  		
  			if(err){
  				res.send({'status': 0, 'data':  'Task already added to the list.'})
  			}else{
  				res.send({'status': 1, 'data': task, 'Result': 'Task inserted successfully.'})
  			}
  		})
	})
  router.get('/getAllTasks', function(req, res){
  		Tasks.find({ }, function(err, tasks){
  			if(err){
  				res.send({'status': 0, 'data':  'Failed in retrieving the tasks.'})
  			}else{
  				res.send({'status': 1, 'data': tasks});
  			}
  		})
	})

  router.post('/deletetask', function(req, res){
  		Tasks.remove({_id: req.body.id }, function(err, tasks){
  			if(err){
  				res.send({'status': 0, 'data':  'failed in retrieving the tasks.'})
  			}else{
  				res.send({'status': 1, 'data': 'Task deleted successfully.'});
  			}
  		})
	})
  router.post('/makeTaskCompleted', function(req, res){
  		Tasks.findOneAndUpdate({_id: req.body.id }, {$set: {completed: req.body.taskStatus}}, function(err, tasks){
  			if(err){
  				res.send({'status': 0, 'data':  'failed in move task to completed.'})
  			}else{
  				res.send({'status': 1, 'data': tasks});
  			}
  		})
	})
  router.post('/makeTaskInComplete', function(req, res){
  		Tasks.findOneAndUpdate({_id: req.body.id }, {$set: {completed: req.body.taskStatus}}, function(err, tasks){
  			if(err){
  				res.send({'status': 0, 'data':  'failed in move task to completed.'})
  			}else{
  				res.send({'status': 1, 'data': tasks});
  			}
  		})
	})
  router.post('/editTask', function(req, res){
  		Tasks.findOneAndUpdate({_id: req.body.id }, {$set: {completed: req.body.taskStatus, name: req.body.name}}, function(err, tasks){
  			if(err){
  				res.send({'status': 0, 'data':  'failed in move task to completed.'})
  			}else{
  				res.send({'status': 1, 'data': tasks});
  			}
  		})
	})
module.exports = router;