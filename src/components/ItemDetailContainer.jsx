import { useState , useEffect } from "react";
import Container from "react-bootstrap/Container";


import data from '../data/products.json'
import { ItemDetail } from '../components/ItemDetail'
import { useParams } from 'react-router-dom'

import { getFirestore, collection , getDocs } from "firebase/firestore";

export const ItemDetailContainer = (props) => {

  const { id } = useParams()
  
  const [product, setProduct] = useState([])

  // useEffect(() => {
  //   const promesa = new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //           resolve(data)
  //       },2000)
  //   })
  //       promesa.then(result => {
         
  //           setProduct(result.find(item => item.id === id))
         
  //       })
  // }, [id])

//   useEffect(() => {
//     const promesa = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const product = data?.find(item => item.id === parseInt(id));
//         if (product) {
//           resolve(product);
//         } else {
//           reject(new Error("El producto no se encontró"));
//         }
//       }, 2000);
//     });
// promesa
// .then(result => {
//       setProduct(result);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   }, [id])

  // console.log(product)

    useEffect(() => {
    const db = getFirestore();

    const refCollection = collection( db, "items" );

    getDocs(refCollection).then((snapshot) => {
      if(snapshot.size === 0) console.log("no results");
      else
        console.log(
          snapshot.docs.map( (doc) => {
            return { id: doc.id , ...doc.data() };
          })
        );
    });
  }, []);

  
    return (
    <Container className="mt-4">
      <h1>Detalle</h1>
      {product === undefined ? (
      <div>Loading...</div>
      ) : (
      
     <ItemDetail car={product}/>
        
      )}
    </Container>
  );
};
