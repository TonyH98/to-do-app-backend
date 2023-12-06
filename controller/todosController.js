const express = require("express")

const {getToDos,
    createToDos,
    editToDos,
    deleteToDos} = require("../queries/todos")

const dos = express.Router()

dos.get("/", async (req , res) => {
    try{
        const allDos = await getToDos()
        res.json(allDos)
    }
    catch(error){
        return error
    }
})


dos.post("/", async (req , res) => {
    
    try{
        const create = await createToDos(req.body)
    
        res.json(create)
    }
    
    catch(error){
        console.log(error)
        res.status(400).json({ error: error });
    }
    
    })

    dos.delete("/:id", async (req , res) => {
   
        const {id} = req.params
    
        const deleteItem = await deleteToDos(id)
    
        if(deleteItem){
            res.status(200).json(deleteItem)
        }
    
    
    })

    dos.put("/:id", async (req, res) => {
        const { id } = req.params;
        
        const editList = await editToDos(req.body , id);
    
        res.status(200).json(editList);
    });



    module.exports = dos