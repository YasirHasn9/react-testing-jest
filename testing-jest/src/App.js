import React, { useState } from 'react';

   const App = () => {
     const [message, setMessage] = useState('');

     const fakeApiCall = () => new Promise.resolve('Success!')

     const onClickHandler = () => {
       fakeApiCall().then(res => setMessage(res));
     }

       return (
         <div>
           <span>{message}</span>
           <button onClick={onClickHandler}>
             Get message!
           </button>
         </div>
       );
   }