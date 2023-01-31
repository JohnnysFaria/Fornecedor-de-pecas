import React from 'react'
import style from './Card.module.css'


const Card = (props) => {


  return (

    <div className={style.card}>
            <p>{props.nome}</p>
            <p>aqui sera o endereco</p>
          </div>
  )
}

export default Card