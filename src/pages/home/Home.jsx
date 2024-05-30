import React from 'react'
import "./Home.css"
function Home() {
  return (
    <div className='hero'>
<div className="container">
<div className='first'>
  <img src="./public/back.svg" alt="" />
  <div>
   <h2>
   01<span>/05</span>
   </h2>
  </div>
</div>

<div className="second">
  <div className='info'><p>Chair <span> /Meryl Lounge Chair</span></p></div>
  <div className='arrows'>
    <img src="./public/left.svg" alt="" />
    <img src="./public/right.svg" alt="" />
  </div>
</div>

<div className="twoSides">
  <div className="leftSide">
    <h1>Meryl Lounge Chair</h1>
    <div className='stars'>
      <h3>$149.99</h3>
      <div className='star'>
        <img src="public/stars.svg" alt="" />
        <p>4.6/5.0 <span>(556)</span></p>
      </div>
    </div>



    <p className='data'>The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.</p>
    <div className='colors'>
      <img src="./public/rounded0.svg" alt="" />
      <img src="./public/rounded1.svg" alt="" />
      <img src="./public/rounded2.svg" alt="" />
      <img src="./public/rounded3.svg" alt="" />
    </div>

<div className="buttons">
<div className='add'>
  <p>-</p> <p>1</p> <p>+</p>
</div>
<button>Add to cart</button>
</div>
<div>
  <p className='desc'>Free 3-5 day shipping  •  Tool-free assembly  •  30-day trial</p>
</div>



<div className="last">
<div className='heart'>
  <img src="./public/heart.svg" alt="" /> <p>Add to Wishlist</p>
</div>

<div className='socialMedia'>
<img src="./public/facebook.svg" alt="" />
<img src="./public/twitter.svg" alt="" />
<img src="./public/pinterest.svg" alt="" />
<img src="./public/instagram.svg" alt="" />
</div>


</div>

  </div>

  <div className="rightSide">
    <div>
      <img src="./public/hero.png " alt="" />
      <div className='options'>
      <img src="./public/option0.png" alt="" />
      <img src="./public/option1.png" alt="" />
      <img src="./public/option2.png" alt="" />
      <img src="./public/option3.png" alt="" />
      <img src="./public/option4.png" alt="" />
    </div>
    </div>
    
  </div>
</div>


</div>
    </div>
  )
}

export default Home