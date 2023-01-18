import React from 'react'
import Firebase from '../../Components/Firebase/Firebase'
// import Firebase from '../../Components/Firebase/Firebase'
import Header from '../../Components/Header/Header'
import Modal from '../../Components/Modal/Modal'
import style from './Home.module.css'


const Home = () => {
  const [modal, setModal] = React.useState(true)

  
  return (
    <>
      <Modal modal={modal} setModal={setModal} />
      <Header />
        {/* <Firebase /> */}

    <Firebase/>
      <div className={style.a}>
      <div className={style.search}>
       <input type="text" placeholder='Pesquise por titulo, localização ou endereço'/>
       <button>Procurar</button>
      </div>
      </div>
    </>
  )
}

export default Home