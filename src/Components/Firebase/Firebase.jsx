import React, { useState, useEffect } from 'react'
import {initializeApp} from "firebase/app"
import {collection, getDocs, getFirestore} from "firebase/firestore"
import Card from '../Card/Card';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAHT5ARX5lTPKmQHWBeqaWlQINkS4s7Y8A",
  authDomain: "fornecedor-31fad.firebaseapp.com",
  projectId: "fornecedor-31fad",
});

const Firebase = () => {
  const [shops, setShops] = useState([])
  // console.log(shops)

    const db = getFirestore(firebaseApp)
    const shopsCollectionRef = collection(db, "Shops")

    useEffect(() => {
        const getShops = async () => {
            const data = await getDocs(shopsCollectionRef)
            setShops(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getShops();
    }, [db])

    // function lojas(s) {
    //   shops.map(s => {
    //     const shop = Object.values(s)
    //     shop.map(l => {
    //       console.log(l)
    //       return (
    //         <div>
    //           <ul>
    //             <li>{l.name}</li>
    //           </ul>
    //         </div>
    //       )
    //     })
    //    })
    //   }
    // lojas()
    // console.log(lojas)

    function teste(nome) {
      shops.map(s => {
        const shop = Object.values(s)
          return (
            <div>
              <li key={s.id}>
                {shop[0].nome}
                {shop[1].nome}
              </li>
            </div>
          )
        })
        teste()


    }
    
    
    return (
      <>
      
      <div>
      <ul>
        {shops && shops.map(cards => {
          <Card/>
          
        })}
        
      </ul>
    </div>
      </>
  )
}

export default Firebase