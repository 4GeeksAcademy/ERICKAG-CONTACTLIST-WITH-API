import React from 'react'
import { Link } from 'react-router-dom'


export const Button = () => {
  return (
    <div className='w-100 d-flex justify-content-end p-4'>
      <button type="button" className="btn btn-success"> <Link to="/register" className='text-white text-decoration-none'>Crear contacto</Link></button>
    </div>
  )
}

