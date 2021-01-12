import React, { useState } from 'react'

function Edit(props) {

    const [editVal, setEditVal] = useState(props.todo)

    const handleSubmit = () => {
        // e.preventDeafult();
        // setEditVal(editVal)

        console.log('editval', editVal)
        props.comEdit(false, editVal)
    }

    return (
        <div>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Edit Todo</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <form>
                                <div className="input-group mb-3 input-group-lg">
                                    <input type="text" value={editVal} onChange={(e) => setEditVal(e.target.value)} className="form-control" />

                                    <div className="input-group-append">
                                        <button type="submit" onClick={handleSubmit} className="btn btn-warning" data-dismiss="modal">Edit</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit
