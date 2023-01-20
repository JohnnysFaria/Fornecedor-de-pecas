import React from 'react'
import Firebase from '../../Components/Firebase/Firebase'
// import Firebase from '../../Components/Firebase/Firebase'
import Header from '../../Components/Header/Header'
import Modal from '../../Components/Modal/Modal'
import style from './Home.module.css'

const baseUrl = 'https://pokeapi.co/api/v2/';

const api = {
  getPokemonList: async (offset, limit = 20) => {
    const response = await fetch(
      `${baseUrl}pokemon?limit=${limit}&offset=${offset}`,
    );
    const json = await response.json();
    return json;
  },
  getPokemonDetails: async (name) => {
    const response = await fetch(`${baseUrl}pokemon/${name}`);
    const json = await response.json();
    console.log(json)
    return json;
  },
};


const Home = () => {
  const [modal, setModal] = React.useState(true)
  const [shop, setShop] = React.useState(null)

  

  
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