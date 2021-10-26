const router = require('express').Router()
// Starting

const Todo = require("../models/Todo")


//Ending
router.post("/add/todo",(req,res)=>{
    const {todo} = req.body;
    //start
    const newTodo = new Todo({todo})

    newTodo
    .save()
    .then(()=>{
        console.log("Success")
        res.redirect("/")
    })
    .catch(err => console.log(err));
    //end

})

.get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Deleted");
        res.redirect("/");
    })
    .catch((err) => console.log(err));
})
module.exports = router;