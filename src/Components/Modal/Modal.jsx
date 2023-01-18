import React from 'react'
import style from './Modal.module.css'

const Modal = ({modal, setModal}) => {

if(modal) {
    return (
    <div className={style.modal}>
        <div className={style.infoModal}>
          <input type="text" placeholder='Digite a cidade de preferencia' />
          <button onClick={() => setModal(false)}>Enviar</button>
        </div>
    </div>
  )
 } return null;
}

export default Modal