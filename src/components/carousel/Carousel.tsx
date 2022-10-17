import React from "react";
import { Link } from "react-router-dom";
import { Arrows, ProductCart } from "..";

import classes from './carousel.module.scss';


import product_4 from '../../assets/img-product/Product-4.png';
import product_5 from '../../assets/img-product/Product-5.png';
import product_6 from '../../assets/img-product/Product-6.png';
import product_7 from '../../assets/img-product/Product-7.png';

type titleProps = {
  title: string;
}

const Carousel = (props: titleProps) => {

  const carousel = React.useRef(null);
  const [items, setItems] = React.useState([
    {
      id: 1,
      img: product_4,
      text: 'Kogan W Pro Active Noise Cancellation Earphones with Wireless Charging Case (Black)',
    },
    {
      id: 2,
      img: product_5,
      text: 'Kogan W Pro Active Noise Cancellation Earphones with Wireless Charging Case (Black)',
    },
    {
      id: 3,
      img: product_6,
      text: 'Kogan W Pro Active Noise Cancellation Earphones with Wireless Charging Case (Black)',
    },
    {
      id: 4,
      img: product_7,
      text: 'Kogan W Pro Active Noise Cancellation Earphones with Wireless Charging Case (Black)',
    },
    {
      id: 5,
      img: product_4,
      text: 'Kogan W Pro Active Noise Cancellation Earphones with Wireless Charging Case (Black)',
    },
    {
      id: 6,
      img: product_5,
      text: 'Kogan W Pro Active Noise Cancellation Earphones with Wireless Charging Case (Black)',
    },
    {
      id: 7,
      img: product_6,
      text: 'Kogan W Pro Active Noise Cancellation Earphones with Wireless Charging Case (Black)',
    },
  ]);


  const prevArrow = () => {
    console.log(carousel);
    
  }

  const nextArrow = () => {
    console.log('next');
    
  }
  

    return (
      <div className={classes.carousel}>
        <div className={classes.navigator}>
          <h2 className={classes.navigator__title}>{props.title}</h2>
          <Link to='/' className={classes.navigator__text}>See All</Link>
          <div className={classes.navigator__navigate}>
            <Arrows prevArrow={prevArrow}
                    nextArrow={nextArrow}
            />
          </div>
        </div>
          <div className={classes.carousel__track} ref={carousel}>
            {
              items.map((item, index) => {
                return (
                  <div className={classes.carousel__item} key={index} >
                    <ProductCart {...item} key={index}/>
                  </div>
                )
              })
            }
          </div>
      </div>
    )
}

export {Carousel};