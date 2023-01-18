import React from 'react'
import style from './Header.module.css'
import Logo from '../Img/Logo.png'

const Header = () => {
  return (
    <header className={style.container}>    
      <div className={style.header}>
       <img src={Logo} alt="Logo Fornecedor de auto pecas" />
       
       <div>
        <a href="#">Contato</a>
       </div>
    </div> 
    </header>
  )
}

export default Header