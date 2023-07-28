import { useState , useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from 'react-router-dom'


import data from '../data/products.json'
import { ItemList } from '../components/ItemList'

export const ItemListContainer = (props) => {
  
    const { id } = useParams()

  const [products, setProducts] = useState([])

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        },2000)
    })
        promesa.then(result => {
            if(id) {
                setProducts(
                    result.filter(product => product.category === id)
                )
            } else {
                setProducts(result)
            }
        })
  }, [id])
  
    return (
    <Container className="mt-4">
      <h1>{props.greeting}</h1>
      {products.length === 0 ? (
      <div>Loading...</div>
      ) : (
      
     <ItemList products={products}/>
        
      )}
    </Container>
  );
};
