import React, { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState(null)

  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then(resp => resp.json())
      .then(data => setImage(data.message))
  }, []);

  if (!image) {
   return <p>Loading...</p>
  }

  return(
    <img alt="A Random Dog" src={image} />
  )
}

export default App;