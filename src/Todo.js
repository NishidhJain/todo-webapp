import React, { useState, useEffect } from 'react'
import Edit from './Edit'
import TodoForm from './TodoForm'

function Todo() {

    const [todos, setTodos] = useState([])
    const [edit, setEdit] = useState(false)
    const [editId, setEditId] = useState(0)
    const [editValue, setEditValue] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)

    const addTodo = (todo) => {
        setTodos([todo, ...todos])
    }

    const compEdit = (isEditing, val) => {
        console.log(isEditing, val)
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if (todo.id === editId) {
                return { id: editId, todo: val, isCompleted: isCompleted }
            }
            else {
                return todo
            }
        }))
        setEdit(isEditing);
    }

    const handleCheck = (id, value) => {
        console.log("Hello!!")
        // setIsCompleted(!isCompleted)

        // setTodos((prevTodos) => prevTodos.map((todo) => {
        //     if (todo.id === id) {
        //         return { id: editId, todo: value, isCompleted: !isCompleted }
        //     }
        //     else {
        //         return todo
        //     }
        // }))
    }

    const handleEdit = (id, value) => {
        setEdit(true)
        // editId = id;
        // editValue = value;
        setEditId(id)
        setEditValue(value)
        console.log(editId, editValue)
    }

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    useEffect(() => {
        console.log('todos', todos)
    }, [todos])

    return (
        <div className="">
            <TodoForm appendTodo={addTodo} />
            <div className="m-5"></div>
            {todos.map((todo) => {
                return (
                    <div key={todo.id} className="w-100 d-flex justify-content-between align-items-strech bg-light rounded-lg shadow-sm my-4 border border-light">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" style={{ marginLeft: 20, width: 20, height: 20 }} onClick={() => handleCheck(todo.id, todo.todo)} />
                            <h2 className="ml-4 text-info text-break py-3" style={{ fontFamily: 'Roboto Slab', letterSpacing: 1 }}> {todo.todo}</h2>
                        </div>

                        <div className="d-flex ml-4">
                            <button onClick={() => handleDelete(todo.id)} className="btn btn-lg bg-white"><i className="fa fa-trash-o text-danger" aria-hidden="true" style={{ 'transform': 'scale(1.5, 1.5)' }}></i></button>
                            <button onClick={() => handleEdit(todo.id, todo.todo)} className="btn btn-lg bg-white" data-toggle="modal" data-target="#myModal" ><i className="fa fa-pencil-square-o text-warning" aria-hidden="true" style={{ 'transform': 'scale(1.5, 1.5)' }}></i></button>
                        </div>
                    </div >
                )
            })}

            { edit && <Edit id={editId} todo={editValue} comEdit={compEdit} />}
        </div >
    )
}

export default Todo