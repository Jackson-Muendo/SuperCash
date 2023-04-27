const express = require("express");
const router = express.Router();
const User = require("../models/send");

router.post("/send-money", (req,res,next)=>{
  const send = new Send({
        recipientAccount : req.body.recipientAccount,
        amount : req.body.amount,
        tax : req.body.tax
        //balance : req.body.balance
        
      });

      send.save()
        .then(result =>{
          res.status(201).json({
            message : 'Transaction done!',
            result: result
          });
        })

        .catch(err =>{
          res.status(500).json({
            error :err
          });
        });
    })



router.get("/getSendData",(req,res,next)=>{
  User.find().then(documents=>{
    res.status(200).json({
      message : 'Transaction added sucessfully',
      users :documents
    });
  });
});


router.get("/:id",(req,res,next)=>{
  Send.findById(req.params.id).then(send =>{
    if(send){
      res.status(200).json(user);
    }else{
      res.status(200).json({message:'transaction not found'});
    }
  });
});

router.put("/:id",(req,res,next)=>{
     const send = new Send({
      _id: req.body.id,
      recipientAccount : req.body.recipientAccount,
      amount : req.body.amount,
      tax : req.body.tax
      //balance : req.body.balance
    });

    Send.updateOne({_id: req.params.id}, send)
  .then(result => {
    console.log(result);
    res.status(200).json({message : "Update Transaction Successful !"});
  })
  .catch(err =>{
    res.status(500).json({
    error :err
   });
});

})


router.delete("/:id",(req, res, next) => {
  Send.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: 'Transaction deleted!' });
  });
});





module.exports = router;