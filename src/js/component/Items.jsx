import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import DeleteModal from './DeleteModal.jsx'
import {useNavigate } from 'react-router-dom'

const Items = ({ name, address, phone, email, id }) => {
    const { actions } = useContext(Context)
    const navigate = useNavigate()

    const userValues = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        id: id
    }


    const handleCLick = () => {
        actions.deleteContac(id)
        setConfirm(false)
        console.log(phone + " eliminado")
    }



    const handleEditing = () => {
        actions.setCurrentEdit(userValues)
        navigate("/editContact")

    }





    return (
        <div className="d-flex flex-column flex-md-row w-75 mx-auto justify-content-between border border-secondary-subtle p-3">
            <div className="d-flex flex-column flex-md-row flex-xl-nowrap flex-lg-wrap flex-md-wrap">
                <div className="d-flex justify-content-center justify-content-md-center flex-shrink-0 mb-3 mb-md-0">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/003/492/377/small/closeup-male-studio-portrait-of-happy-man-looking-at-the-camera-image-free-photo.jpg"
                        alt="" className="rounded-circle w-100 w-md-75 w-lg-100" />
                </div>


                <div className="d-flex flex-column justify-content-center ms-md-3 text-center text-md-start">
                    <h1 className="fs-4 mb-3">{name} </h1>
                    <p><i className="fa-solid fa-location-dot text-secondary"></i> <span>{address} </span></p>
                    <p><i className="fa-solid fa-phone-flip text-secondary"></i> <span>{phone} </span></p>
                    <p><i className="fa-solid fa-envelope text-secondary"></i> <span>{email} </span></p>
                </div>


            </div>

            <div className="d-flex justify-content-center mt-3 mt-md-0 w-100 w-md-auto flex-wrap">
                <i className="fa-solid fa-pencil text-dark mx-2" onClick={handleEditing}></i>
                <DeleteModal id={id} handleCLick={handleCLick} />
            </div>
        </div>


    )
}

export default Items
