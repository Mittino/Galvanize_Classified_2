
'use strict';

const express = require('express');

const router = express.Router();

const knex = require('../knex');

const bodyParser = require('body-parser');


router.get('/', function(req,res,next){
  knex('classifieds').select('id', 'title', 'description', 'price', 'item_image')
  .then((results) => {
    console.log(results);
    res.send(results);
  }) .catch((err) =>{
    res.send('error getting classifieds');
  });
});

router.get('/:id', function(req,res,next){
  knex('classifieds').where('id', req.params.id).first().select('id', 'title', 'description', 'price', 'item_image')
  .then((results) => {
    console.log(results);
    res.send(results);
  }) .catch((err) =>{
    res.send('error getting classifieds');
  });
});

router.post('/', function(req,res,next){
  console.log('body',  req.body);
  knex('classifieds')
    .insert({
      title:req.body.title,
      description:req.body.description,
      price:req.body.price,
      item_image:req.body.item_image,
    }).returning(['id', 'title', 'description', 'price', 'item_image'])
    .then((result) => {
      console.log('result', result[0]);
      res.send(result[0]);
    }).catch((err) =>{
      res.send('error posting classified');
    });
});

router.patch('/:id', function(req,res,next){
  knex('classifieds')
    .where({
      id:req.params.id
    }).first().update({
      title:req.body.title,
      description: req.body.description,
      price:req.body.price,
      item_image:req.body.item_image,
    }).returning(['id', 'title', 'description', 'price', 'item_image'])
    .then((result) => {
      console.log('patchresult', result[0]);
      res.send(result[0]);
    }).catch((err) =>{
      res.send('error patching');
    });
});

router.delete('/:id', function(req,res,next){
  knex('classifieds')
    .where({
      id:req.params.id
    }).first().del().returning(['id', 'title', 'description', 'price', 'item_image'])
    .then((result) => {
      res.send(result[0]);
    }).catch((err) =>{
      res.send('error patching');
    });
});


module.exports = router;
