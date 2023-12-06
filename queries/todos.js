const db = require("../db/dbConfig")


const getToDos = async () => {
    try {
        const todos = await db.any(
            `SELECT * FROM to_dos`,
            
        );
        return todos;
    } catch (error) {
        console.log(error);
        return []
    }
};


const createToDos = async (todo) => {
    try {
      const create = await db.one(
        `INSERT INTO to_dos (item, complete) VALUES ($1, $2)`,
        [todo.item, false]
      );
      return create;
    } catch (error) {
      return error;
    }
  };
  

  const editToDos = async (todo , id) => {

    try{
        const edit = await db.one(
            `UPDATE to_dos SET complete = $1 WHERE id = $2 `,
            [todo.complete, id]
        )
        return edit
    }

    catch(error){
        return error
    }

  }


  const deleteToDos = async (id) => {
    try{
        const deleteItem = await db.one(
            `DELETE FROM to_dos WHERE id = $1`,
            id
        )
        return deleteItem
    }
    catch(error){
        return error
    }
  }

  module.exports = {
    getToDos,
    createToDos,
    editToDos,
    deleteToDos
  }