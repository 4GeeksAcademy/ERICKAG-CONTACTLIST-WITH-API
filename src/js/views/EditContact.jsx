import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../store/appContext'

const EditContact = () => {
    const navigate=useNavigate()
    const { store, actions } = useContext(Context)
    const [values, setValues] = useState({
        name: store.currentContact.name,
        email: store.currentContact.email,
        phone: store.currentContact.phone,
        address: store.currentContact.address
    })
    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        console.log(values)
    }

    const handleChange = () => {
        actions.updateContac(store.currentContact.id, values)
        setValues({
            name:"",
            email: "",
            phone: 0,
            address: ""
        })
        navigate("/")

    }

    return (

        <form className='w-75 mx-auto mt-lg-5 mt-3' onSubmit={((event) => event.preventDefault())}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bolder">
                    Full Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    name='name'
                    value={values.name}
                    placeholder={store.currentContact.name}
                    onInput={handleInput}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bolder">
                    Email
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name='email'
                    value={values.email}
                    placeholder={store.currentContact.email}
                    aria-describedby="emailHelp"
                    onInput={handleInput}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bolder">
                    Phone
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="phone"
                    name='phone'
                    value={values.phone}
                    placeholder={store.currentContact.phone}
                    aria-describedby="emailHelp"
                    onInput={handleInput}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bolder">
                    Address
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="address"
                    name='address'
                    value={values.address}
                    placeholder={store.currentContact.address}
                    aria-describedby="emailHelp"
                    onInput={handleInput}
                />
            </div>

            <button type="submit" className="btn btn-primary form-control" onClick={handleChange}>
                Save
            </button>

            <Link to="/">or get back to contacts</Link>


        </form>

    )
}

export default EditContact
