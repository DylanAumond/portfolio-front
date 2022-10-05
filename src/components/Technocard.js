import React from "react";
import glamorous from "glamorous"

export default function Technocard({ technologie,size }) {
  console.log('fix',size)
  const Hexa = glamorous.div(
  {
    marginTop: `${size/4+5}px`,
    marginRight: '5px',
    width: `${size}px`,
    height: `${size/2}px`,
    position: 'relative',
    background: '#32557f',
    backgroundImage: `url(${process.env.REACT_APP_API_URL}/public/images/${technologie.logo})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    ":before":{
      content: `''`,
      position: 'absolute',
      top: '-50%',
      left: 0,
      width: 0,
      height: 0,
      borderLeft: `${size/2}px solid transparent`,
      borderRight: `${size/2}px solid transparent`,
      borderBottom: `${size/4}px solid #32557f`,
    },
    ":after":{
      content: `''`,
      position: 'absolute',
      bottom: '-50%',
      left: 0,
      width: 0,
      height: 0,
      borderLeft: `${size/2}px solid transparent`,
      borderRight: `${size/2}px solid transparent`,
      borderTop: `${size/4}px solid #32557f`,
    }
  },
)

  return (
    <Hexa
      key={technologie._id}
    />
  );
}
