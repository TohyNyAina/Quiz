/* get */

exports.accueil = (req, res) => {
  res.render("accueil");
};

exports.quiz = (req,res)=>{
    res.render('question1')
}


exports.quiz2 = (req,res)=>{

    res.render('question2')
}

exports.quiz3 = (req,res)=>{
   res.render('question3')
    
}

exports.quiz4 = (req,res)=>{
  res.render('question4')
    
}

exports.quiz5 = (req,res)=>{
  res.render('question5')
      
}

exports.finish = (req,res) =>{
  res.render('fin')
} 

/* post */



exports.post1 = (req,res)=>{
   if(req.body.options == 'carlo'){
     res.redirect('/qest2')
   }else{
      res.redirect('/qest1')
   }
  console.log(req.body)
       res.end()
}

exports.post2 = (req,res)=>{


  if(req.body.options == 'neil'){
    res.redirect('/qest3')
  }else{
     res.redirect('/qest2')
  }
 console.log(req.body)
      res.end()
}


exports.post3 = (req,res)=>{


  if(req.body.options == '26'){
    res.redirect('/qest4')
  }else{
     res.redirect('/qest3')
  }
 console.log(req.body)
      res.end()
}


exports.post4 = (req,res)=>{


  if(req.body.options == 'symfony'){
    res.redirect('/qest5')
  }else{
     res.redirect('/qest4')
  }
 console.log(req.body)
      res.end()
}


exports.post5 = (req,res)=>{


  if(req.body.options == 'jobs'){
    res.redirect('/finish')
  }else{
     res.redirect('/qest5')
  }
 console.log(req.body)
      res.end()
}

/* render rend une vue lesy/
/* contrairemnt a render  redirect premet de rediriger  vers un autre lien */