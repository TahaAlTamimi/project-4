const express=require('express');
const app=express();
app.get('/home/materials',(req,res)=>{
    const materials=
       [
            {id:1,name:"HTML",m1:"Basic",m2:"intermediate",m3:"advance"},
            {id:1,name:"CSS",m1:"Basic",m2:"intermediate",m3:"advance"},
            {id:1,name:"javaScript",m1:"Basic",m2:"intermediate",m3:"advance"},
         ]
 
              
              res.json(materials)
 
})

const PORT=7777;
app.listen(PORT,()=>console.log(`server started on port ${PORT}`))