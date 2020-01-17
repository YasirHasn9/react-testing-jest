import  { useState, useEffect } from "react";
import axios from "axios";
export function useDogImages(breed, count) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/${breed}/images/random/${count}`)
      .then(res => setImages(res.data.messages))
      .catch(err => console.log(err));
  }, [breed, count]);

  return [images, setImages];
}
