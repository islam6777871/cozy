import React from 'react'
import "./Cart.css"
function Cart() {
  return (
    <div className='cart'>
      <div className="container">
        <div className="twoParts">
          <div className="leftPart">
          <div className="headline">
          <h2>Cart</h2>
          <h4>2 ITEMS</h4>
        </div>

<div className="shop">
  <img src="./public/shop0.png" alt="" />
  <div>
    <div className='title'>
   <div> <h5>Osmond Armchair</h5> </div>
   <div>
   <p>$149.99</p>
   </div>
    </div>
    <div className="color">
    <span>Color</span> <p>Gunnared biege</p>
    </div>
    <div className='btn'>
    <div className='add'>
  <p>-</p> <p>1</p> <p>+</p>
</div>
<span>Remove</span>
    </div>
  </div>
</div>


<div className="shop">
  <img src="./public/shop1.png" alt="" />
  <div>
    <div className='title'>
   <div> <h5>Meryl Lounge Chair</h5> </div>
   <div>
   <p>$169.99</p>
   </div>
    </div>
    <div className="color">
    <span>Color</span> <p>Lysed bright green</p>
    </div>
    <div className='btn'>
    <div className='add'>
  <p>-</p> <p>1</p> <p>+</p>
</div>
<span>Remove</span>
    </div>
   
  </div>
  
</div>
<div className='discount'>
      <img src="./public/percent.svg" alt="" />
      <p>10% Instant Discount with Federal Bank Debit Cards on a min spend of $150. TCA</p>
    </div>
          </div>


          <div className="rightPart">
            <div className="cheque">
              <h2>Order Summary</h2>
              <div><span>Price</span> <p>$319.98</p></div>
              <div><span>Discount</span> <p>$31.9</p></div>
              <div><span>Shipping</span> <p>Free</p></div>
              <div><span>Coupon Applied</span> <p>$0.00</p></div>
              <hr />
              <div><span>TOTAL</span> <p>$288.08</p></div>
              <div><span>Estimated Delivery by</span> <p>01 Feb, 2023</p></div>
              <form action="">
                <input type="text" placeholder='Coupon Code' />
                <img className='code' src="./public/coupon.svg" alt="" />
              </form>
              <button className='check'>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart