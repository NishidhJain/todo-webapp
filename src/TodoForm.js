import React, { useState } from 'react'

function TodoForm(props) {

    const [inpt, setInpt] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inpt)
        const todo = { id: new Date().getTime().toString(), todo: inpt, isCompleted: false }
        props.appendTodo(todo)
        setInpt('')
    }

    const handleChange = e => {
        setInpt(e.target.value)
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit} className="">

                <div className="input-group mb-3 input-group-lg">
                    <input type="text" value={inpt} onChange={handleChange} placeholder="Add Task" className="form-control" />

                    <div className="input-group-append">
                        <button type="submit" disabled={!inpt} className="btn btn-primary" >Add Todo</button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default TodoForm