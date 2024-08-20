import React from 'react'

const DeleteModal = ({ id, handleCLick }) => {
    return (
        <>
            <i className="fa-solid fa-trash-can mx-2" data-bs-toggle="modal" data-bs-target={`#${id}`} />

            <div
                className="modal fade"
                id={id}
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Estas seguro de borrar este contacto?
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">Recuerda que este contacto sera irrecuperable</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                No,perdon babygirl!
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleCLick} data-bs-dismiss="modal">
                                Si claro que yes!
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DeleteModal
