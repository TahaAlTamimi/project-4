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

app.get('/material/htmlbasic',(req,res)=>{
   const htmlb=
  
     [
        {id:1,name:"HTMLBasic",m1:"http://videodictionary.kwebpia.net/?m=Video_Player_Drive&state=%7B%22ids%22:%5B%221eZnuM-1eQVMjgqOuZf8KwZg3GWLAKeq3%22%5D,%22action%22:%22open%22,%22userId%22:%22111281667878931019356%22%7D",m2:"https://www.w3schools.com/html/html_intro.asp",m3:"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"},

      //   {id:2,name:"Article",m1:"https://www.w3schools.com/html/html_intro.asp",m2:"intermediate",},

      //   {id:3,name:"Article",m1:"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",m2:"intermediate",},
     ];
   
      

             
    res.json(htmlb);

});

const PORT=7777;
app.listen(PORT,()=>console.log(`server started on port ${PORT}`))