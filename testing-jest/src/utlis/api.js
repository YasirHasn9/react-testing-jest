import { useState, useEffect } from "react";
import axios from "axios";
export function useDogImages(breed, count) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)
      .then(res => {
        console.log(res);
        setImages(res.data.message);
      })
      .catch(err => console.log(err));
  }, [breed, count]);

  return [images, setImages];
}
