const express = require('express');
const router = express.Router();
// const { find } = require('../db/userschema');
require("../db/conn");
const Student= require('../db/userschema');
const Teacher= require('../db/userschema');




//teacher login route 
router.post('/Teacherlogin', async (req,res)=>{
    const {email,password}=req.body ;
    if (!email || !password) {
        return res.status(422).json({error:"please fill email and password"}) ;
    }
    try {
     const teacherLogin =  await Teacher.findOne({email:email}); 

     if (teacherLogin ){
          if (teacherLogin.password !== password){
            return res.status(400).json({error:"invalid credentials"});
            }
          else  {
                 return res.status(201).json({message:"teacher login successfully"})
                }
    }
    else {
     return res.status(400).json({error:"invalid credentials"})}
     
    } catch (error) { 
        console.log(error);
        
    }})

//student login route
router.post('/Studentlogin', async (req,res)=>{
    const {email,password}=req.body ;
    if (!email || !password) {
        return res.status(422).json({error:"please fill email and password"}) ;
    }
    try {
     const studentLogin =  await Student.findOne({email:email}); 

     if (studentLogin ){
          if (studentLogin.password !== password){
            return res.status(400).json({error:"invalid credentials"});
            }
          else  {
                 return res.status(201).json({message:"student login successfully"})
                }
    }
    else {
     return res.status(400).json({error:"invalid credentials"})}
     
    } catch (error) { 
        console.log(error);
        
    }})

//add teacher
router.post('/Addteacher',async (req,res)=>{
 
    const {teacher_id,name,course,email,password}=req.body;
     if (teacher_id || name || course || email || password){
         return res.status(422).json({error:"please fill all details"});
    }
    try {
       const teacherExist= await Teacher.findOne({email:email});
       if(teacherExist){
           return res.status(422).json({error:"Teacher already existed"});
       }
       const user = new Teacher({name ,email,phone ,profession,password});
       
      await user.save();
      res.status(201).json({message:"Teacher added sucessfully"});
   } catch (error) {
       res.status(500).send(error);
        
    }   
   })

//add teacher
router.post('/Addstudent',async (req,res)=>{
 
    const {student_id,name,course,email,password}=req.body;
     if (student_id || name || course || email || password){
         return res.status(422).json({error:"please fill all details"});
    }
    try {
       const teacherExist= await Student.findOne({email:email});
       if(teacherExist){
           return res.status(422).json({error:"Student already existed"});
       }
       const user = new Student({name ,email,phone ,profession,password});
       
      await user.save();
      res.status(201).json({message:"Student added sucessfully"});
   } catch (error) {
       res.status(500).send(error);
        
    }   
   })