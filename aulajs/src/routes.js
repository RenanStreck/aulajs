const express = require('express');
const multer = require('multer');
const uploadConfig= require('./config/upload');

const PostControllers = require('./controllers/PostControllers');
const LikeControllers = require('./controllers/LikeControllers');


const routes = new express.Router(); 
const upload = multer(uploadConfig);

routes.get('/Post', PostControllers.index);
routes.post('/Post',upload.single('image'), PostControllers.store);
        
routes.post('/Post/:id/like', LikeControllers.store)
    
module.exports = routes;    