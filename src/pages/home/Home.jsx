import React, { useState } from 'react'
import "./Home.css"
function Home() {

  const[product,setProduct]=useState([
    {
      id:0,
      name:"Italian Costa green",
      rate: 4.6,
      price:350,
      info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iste minus perferendis, laboriosam quis culpa, consectetur qui nemo, asperiores perspiciatis illum enim reiciendis quasi fuga voluptatibus eos sed sit doloremque quod ex.",
      mainImg:"https://www.milandesignagenda.com/wp-content/uploads/2019/03/Step-Inside-the-Magical-World-of-High-End-Italian-Furniture-Design-1.jpg",
      img:[
        "https://www.milandesignagenda.com/wp-content/uploads/2019/03/Step-Inside-the-Magical-World-of-High-End-Italian-Furniture-Design-2.jpg",
        "https://miro.medium.com/v2/resize:fit:1400/0*w9dValphW-VjnTa6",
        "https://www.italyweloveyou.com/wp-content/uploads/2022/05/Opera-Contemporary.jpg",
        "https://www.milandesignagenda.com/wp-content/uploads/2018/12/We-have-the-Best-Italian-Small-Living-Room-Ideas-of-the-Year-13.jpeg"
      ]
    },
    {
      id:1,
      name:"Yellowstown Wolves",
      rate: 5.1,
      price:4900,
      info:". Animi iste minus perferendis, laboriosam quis culpa,  asperiores perspiciatis illum enim reiciendis quasi fuga voluptatibus eos sed sit doloremque quod ex Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur qui nemo,",
      mainImg:"https://shopps.in/wp-content/uploads/2023/10/1200x1200-38.jpg",
      img:[
        "https://lavertonfurniture.com.au/wp-content/uploads/2023/05/1-297.webp",

        "https://image.made-in-china.com/44f3j00DPnWlrCHEyoV/Living-Room-Furniture-Metal-Frame-Sofa-Fabric-Leisure-Sofa-for-Hotel-Building-Usage-One-Seat.webp",

        "https://image.made-in-china.com/2f0j00WgvkEUzPYJol/Italian-Luxury-Living-Room-Furniture-Modern-L-Shape-Couch-1-2-3-Seater-Fabric-Leather-Sofa.webp",

        "https://s.alicdn.com/@sc04/kf/H353a1f5e9432497d91993dd2b6f2f760e.jpg_300x300.jpg"
      ]
    },
    {
      id:2,
      name:"Clear Waterloo UCW",
      rate: 4.0,
      price:549,
      info:" sit amet consectetur adipisicing elit. Animi iste minus perferendis, laboriosam quis culpa, consectetur qui nemo,Lorem ipsum dolor asperiores perspiciatis illum  fuga voluptatibus eos sed sit doloremque enim reiciendis quasi quod ex.",
      mainImg:"https://m.media-amazon.com/images/I/81x51AX8RCL.jpg",
      img:[
        "https://5.imimg.com/data5/HI/FD/KF/SELLER-98260522/modern-style-wooden-bookcase.jpg",
        "https://ik.imagekit.io/go4qpoimmdz/image/tr:e-sharpen-01,h-1500,w-1500,cm-pad_resize/data/Furnmill/27feb2024/HOCBN00062_1.jpg",
        "https://www.progressive-furnishings.co.uk/wp-content/uploads/2019/12/bookcase-700x700.jpg.webp",
        "https://assets.wfcdn.com/im/55730033/compr-r85/1266/126669597/bookcase.jpg"
      ]
    },
    {
      id:3,
      name:"Stallion Spirit 2001",
      rate: 4.9,
      price:8900,
      info:" asperiores   consectetur adipisicing elit  Lorem ipsum. Animi iste minus perferendis, laboriosam quis culpa, consectetur qui nemo, perspiciatis illum enim reiciendis  dolor sit amet quasi fuga voluptatibus eos sed sit doloremque quod ex.",
      mainImg:"https://i.pinimg.com/736x/39/e8/09/39e809c469a517d41d52cce8ba356956.jpg",
      img:[
        "https://i.pinimg.com/736x/72/58/7a/72587a2ae6bd7ef1961baf1c80d2218c.jpg",
        "https://logfurnitureplace.com/media/catalog/product/cache/1044726d93dd0fc5b52ac7ed430bb624/2/0/2016-05-26-09.17_3.jpg",
        "https://logfurnitureplace.com/media/catalog/product/cache/1044726d93dd0fc5b52ac7ed430bb624/2/0/2016-05-26-09.16_3.jpg",
        "https://i.pinimg.com/736x/f2/0c/2a/f20c2af36d9f40593b4952a623febefd.jpg"
      ]
    },
    {
      id:4,
      name:"Monte Cristo chair Russo",
      rate: 4.4,
      price:455 ,
      info:" doloremque quod ex. dolor ipsum  sitLorem amet consectetur adipisicing elit. Animi iste minus perferendis, laboriosam quis culpa,  asperiores perspiciatis consectetur qui nemo, illum enim reiciendis quasi fuga voluptatibus eos sed sit ",
      mainImg:"https://joyfurniture.co.za/wp-content/uploads/2022/06/JJ8862-2.jpg",
      img:[
        "https://assets.wfcdn.com/im/92092951/resize-h755-w755%5Ecompr-r85/2521/252134652/Coffee+Table.jpg",
        "https://res.litfad.com/site/img/item/2022/11/12/6620128/600x600.jpg",
        "https://comfy.sg/cdn/shop/files/circular-coffee-table-golden-rosalie.jpg?v=1695657011&width=320",
        "https://assets.wfcdn.com/im/51189553/resize-h755-w755%5Ecompr-r85/2492/249289255/Coffee+Table.jpg"
      ]
    },
  ])

  const[index,setIndex]=useState(0)
  const[number,setNumber]=useState(1)
  const [color, setColor] = useState("blue");
  const[pages,setPages]=useState(1)
  return (
    <div className='hero'>
<div className="container">
<div className='first'>
  <img src="./public/back.svg" alt="" />
  <div>
   <h2>
   0{pages}<span>/05</span>
   </h2>
  </div>
</div>

<div className="second">
  <div className='info'><p>Chair <span> /Meryl Lounge Chair</span></p></div>
  <div className='arrows'>
    <img onClick={()=>{
      setIndex(index-1)
      setPages(pages-1)
    }} src="./public/left.svg" alt="" />
    <img onClick={()=>{
      setIndex(index+1)
      setPages(pages+1)
    }} src="./public/right.svg" alt="" />
  </div>
</div>

<div className="twoSides">
  <div className="leftSide">
    <h1>{product[index].name}</h1>
    <div className='stars'>
      <h3>${product[index].price}</h3>
      <div className='star'>
        <img src="public/stars.svg" alt="" />
        <p>{product[index].rate}/5.0 <span>(556)</span></p>
      </div>
    </div>



    <p className='data'>{product[index].info}</p>
    <div className='colors'>
     
    <span style={{background:"red"}} className={color == "red" ? "dark" : ""}
    onClick={()=>{
      setColor("red")
    }}
    ></span>

      <span style={{background:"blue"}}  className={color == "blue" ? "dark" : ""}
    onClick={()=>{
      setColor("blue")
    }}></span>
      <span style={{background:"gold"}}  className={color == "gold" ? "dark" : ""}
    onClick={()=>{
      setColor("gold")
    }}></span>
      <span style={{background:"orange"}}  className={color == "orange" ? "dark" : ""}
    onClick={()=>{
      setColor("orange")
    }}></span>
    </div>

<div className="buttons">
<div className='add'>
  <p onClick={()=>{
    setNumber(number-1)
  }}>-</p>
  
   <p>{number}</p> 
  <p  onClick={() => {
                      setNumber(number + 1);
                    }}>+</p>
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
      <img className='heroImg' src={product[index].mainImg} alt="" />
      <div className='options'>
      <img  src={product[index].img[0]} alt="" />
      <img src={product[index].img[1]} alt="" />
      <img src={product[index].img[2]} alt="" />
      <img src={product[index].img[3]} alt="" />
    </div>
    </div>
    
  </div>
</div>


</div>
    </div>
  )
}

export default Home