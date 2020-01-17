import React, {useState} from 'react';
import {useDogImages} from "./utlis/api"
import {useLocalStorge} from "./utlis/input"
 
   const App = () => {
     const [breed , setBreed] = useLocalStorge("breed" , "husky")
     const [count , setCount] = useLocalStorge("count" , 6)

     const [images ] = useDogImages(breed,count)
     console.log("rwfww", images)


       return (
         <div>
           <h1>hello world </h1>
<input  value={count} onChange={e => setCount(e.target.value)} />
           <div>{
             images.map(image => <img src={image} alt="dog" />)
           }</div>
         </div>
       );
   }

   export default App