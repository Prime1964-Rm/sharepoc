import React, { useState } from "react";
import { RWebShare } from "react-web-share";

function App() {
  const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org',
  }

  const newClick= async(e)=>{
    console.log(e)
    console.log("I WAS CLICKED")
   if(navigator.share!==undefined){
    try {
      await navigator.share(shareData)
       console.log('MDN shared successfully')
    } catch(err) {
      console.log(err)
    }
   }
  }

  return (
    <div>
      <RWebShare
        data={{
          text: "Like humans, flamingos make friends for life",
          url: "https://on.natgeo.com/2zHaNup",
          title: "Flamingos",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button >Share 🔗</button>
      </RWebShare>
      <button id="btn" onClick={newClick}>
        Share me
      </button>
    </div>
  );
}

export default App;
