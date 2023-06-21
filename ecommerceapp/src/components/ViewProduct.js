import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ViewProduct() {
  const {id} = useParams();
  console.log(id,"This is the id of product");

  useEffect(() => {
    try {
      const fetchdata = async() => {
        let response = await axios.get(`https://dummyjson.com/product/${id}`);
        console.log(response.data);
      }
      fetchdata();
    } catch (error) {
      console.log(error);
    }
  })

  return (    
    <div>ViewProduct</div>
  )
}
