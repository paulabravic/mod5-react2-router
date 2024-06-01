import React from 'react'

export const Contacto = () => {
    return (
        <>
            <div className='contacto'>
                <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>

                <label htmlFor="exampleFormControlInput1" className="form-label">Correo:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripción:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                <button type="submit" className="btn btn-danger">Enviar</button>
            </div>
        </>
    )
}
