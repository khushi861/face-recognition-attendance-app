const mongoose =require('mongoose');
const studentSchema = new mongoose.Schema({
    student_id: {
        type:Number,
        required:true
       
    },
    Name:{
        type:String,
        required:true
       
    },
    email:{
        type:String,
        required:true
      
    },
    password:{
        type:String,
        required:true
    },
    profile:{
        name:String,
        desc:String,
        img:{
            data:Buffer,
            contentType:String
        }
    }

})
const Student = mongoose.model('STUDENT' ,studentSchema);

const teacherSchema = new mongoose.Schema({
    teacher_id: {
        type:Number,
        required:true
       
    },
    Name:{
        type:String,
        required:true
       
    },
    course:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
      
    },
    password:{
        type:String,
        required:true
    },
    profile:{
        name:String,
        desc:String,
        img:{
            data:Buffer,
            contentType:String
        }
    }

})
const Teacher = mongoose.model('TEACHER' ,teacherSchema);
module.exports = {Student , Teacher};
