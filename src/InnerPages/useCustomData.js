import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const useCustomData = (url) => {
     const [data, setData]= useState([])
      useEffect(() =>{
        axios
        .get(url)
        .then((res) =>{
          setData(res.data);
          
        })
        .catch((err) =>{
          alert('Error fetching services')
        })
      })
  return data;
}

export default useCustomData