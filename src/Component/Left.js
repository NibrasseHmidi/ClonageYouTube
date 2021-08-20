import React, { Component } from 'react';
import './Left.css';
import { BsMusicNote } from "react-icons/bs";


class Left extends Component{
render(){
  const {lefts} = this.props;
  const theLefts = lefts.map( left => {
    return(
      
      <div className="row-video">
      <div className="row-iframe">
       <iframe width="160" height="115" src={left.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="row-des">
        <h1>{left.nomSon} </h1>
        <p> {left.nom}  <BsMusicNote/> </p>

         <p>{left.vu}</p>
    </div>
    
  </div>
 
  )
  })
  return(
<>
    <div className="row-left">  <p> AFFICHER LA REDIFFUSION DU CHAT </p>

    </div>
    <div className="row-button">
      <button className="active">Tout</button>
      <button>Mohamed Hamaki </button>
      <button>similaires</button>
      <button>Visionnées</button>
      
        {theLefts}

    </div>

  </>
  
  )
}  
}

export default Left;