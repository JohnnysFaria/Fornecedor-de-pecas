import React from 'react'
import style from './Card.module.css'


const Card = () => {
  return (
    <div className={style.card}>
            <p>{info.name}</p>
            <p>{info.endereco}</p>
          </div>
  )
}

export default Card