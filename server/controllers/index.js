import express from 'express';
import TodoModel from '../models/Todo.js';

const router = express.Router();

router.get('/getalltodos', async(req,res)=>{
    try {
        const todos = await TodoModel.find();
        res.status(200).json({todos});
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});

router.get('/gettodo/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const todo = await TodoModel.findById(id);
        res.status(200).json(todo);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
});


router.post('/addtodo', async (req,res)=>{
    try {
        let {title} = req.body;
        const newTodo = await TodoModel.create({title});
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.put('/updatetodo/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const {title, completed} = req.body;
        const updatedTodo = await TodoModel.findByIdAndUpdate(id, {title, completed}, {new: true});
        res.status(200).json(updatedTodo);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
})  
router.delete('/deletetodo/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        await TodoModel.findByIdAndDelete(id);
        res.status(200).json({message: "Todo deleted successfully"});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
})

router.delete('/deletetodos', async (req,res)=>{
    try {
        await TodoModel.deleteMany({});
        res.status(200).json({message: "All todos deleted successfully"});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
})

export default router;