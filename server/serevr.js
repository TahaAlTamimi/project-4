const express=require('express');
const app=express();

app.get('/material',(req,res)=>{
    const material=
   
      [
         {id:1,name:"HTML",m1:"Basic",m2:"intermediate",m3:"advance"},
         {id:2,name:"CSS",m1:"Basic",m2:"intermediate",m3:"advance"},
         {id:3,name:"javaScript",m1:"Basic",m2:"intermediate",m3:"advance"},
      ];
    
       
 
              
     res.json(material);
 
});

const PORT=7777;
app.listen(PORT,()=>console.log(`server started on port ${PORT}`))