const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//This indicates the shape of the documents that will be entering the database
  const roomSchema = new Schema({
   
    title:
    {
      type:String,
      required:true
    },
    
    price:
    {
      type:Number,
      required:true
    },

    description: 
    {
        type:String,
        required:true
    },

    location:
    {
      type:String,
      required:true
    },

    isFeatured:

    {
        type:Boolean,
        required:true
    },

    pic:

    {
       type:String

    },

    dateCreated:
    {
        type:Date,
        default:Date.now()
    }
  });

  /*
    For every Schema you create(Create a schema per collection), you must also create a model object. 
    The model will allow you to perform CRUD operations on a given collection!!! 
  */

 const roomsMongo = mongoose.model('room', roomSchema);

 module.exports = roomsMongo;