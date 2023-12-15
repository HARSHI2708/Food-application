import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import Banner from "../Images/yellow.jpg";

const Cards = () => {

  const [data, setData] = useState(Cardsdata);
  // console.log(data);


  const dispatch = useDispatch();


  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }

  return (
    
    <div className='container'>
    
      <div className="home" >
      <div className="headerContainer">
          <h1 > Experience the Falvors <p>of Tava Kitchen's</p></h1>
          <h3>Delicious Food,unforgettable moments</h3>
          <button>Order Now</button>
          
        </div>
      </div>
      <div class="container1" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div class="text">
          <h2 style={{ fontSize: "20px", paddingLeft: "60px" }}>At Tava's Kitchen, we believe in the power of good food,
            great company, and unforgettable experiences.Our café was founded by four passionate friends who share a love
            for culinary delights and a desire to create a warm and
            welcoming space for our community.</h2>
        </div>
        <div style={{ margin: '100px' }}>
          <img src="https://t4.ftcdn.net/jpg/05/90/00/73/240_F_590007302_sxiyopxVM8rAuqGF9yv7VCYc4lWHAZRZ.jpg" style={{ display: "block", marginLeft: "30px", width: '400px', }} />
        </div>
      </div>

      <br />
    
      <h2 className='text-center'>Explore Our Menu</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'>Add to Cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards