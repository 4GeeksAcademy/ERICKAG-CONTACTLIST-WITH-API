import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../store/appContext'

const CreateContactForm = () => {
    const navigate=useNavigate()
    const { actions } = useContext(Context)
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phone: 0,
        address: ""
    })

    const handleInput = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    const handleClick = () => {
        actions.makeContact(userInfo)
        setUserInfo({
            name: "",
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
                    value={userInfo.name}
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
                    value={userInfo.email}
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
                    value={userInfo.phone}
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
                    value={userInfo.address}
                    aria-describedby="emailHelp"
                    onInput={handleInput}
                />
            </div>

            <button type="submit" className="btn btn-primary form-control" onClick={handleClick}>
                Save
            </button>

            <Link to="/">or get back to contacts</Link>

        </form>

    )
}

export default CreateContactForm
