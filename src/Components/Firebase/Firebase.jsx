import React, { useState, useEffect } from 'react'
import {initializeApp} from "firebase/app"
import {collection, getDocs, getFirestore} from "firebase/firestore"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAHT5ARX5lTPKmQHWBeqaWlQINkS4s7Y8A",
  authDomain: "fornecedor-31fad.firebaseapp.com",
  projectId: "fornecedor-31fad",
});

const Firebase = () => {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  const [shops, setShops] = useState([])

    const db = getFirestore(firebaseApp)
    const shopsCollectionRef = collection(db, "Shops")


    useEffect(() => {
        const getShops = async () => {
            const data = await getDocs(shopsCollectionRef)
            setShops(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log(data.docs)
        }
        getShops();
    }, [])

  return (
    <div>
      <ul>
        {shops.map(shop => {
          return (
            <div>
              <li key={shop.id}>
                {shop.metal.name}
              </li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Firebase