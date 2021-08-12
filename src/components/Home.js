import React from 'react'
const Home = (props) => {

  console.log('Home ===> ',props);
  return (
    <div>
      <h1>Home.js</h1>
      <button onClick={()=>props.addToCartHandler({
        price:1000,name:'IPHONE'
      })}>Add</button>
    </div>
  )
}
export default Home;
