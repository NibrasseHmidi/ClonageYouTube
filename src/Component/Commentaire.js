import React, { Component } from 'react';
import './Commentaire.css';
import {FaAlignLeft } from "react-icons/fa";
import {FaCheck } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

class Commentaire extends Component{

  render(){
      const {commentaires} = this.props;
  const theCommentaire = commentaires.map(commentaire =>{
    return(
 <div className="commentaire-pub">


         <img src={commentaire.imagCom} />
         <div className="commentaire-pub-info">
         <h6> {commentaire.nomCom}<span><FaCheck />{commentaire.dateCom}</span> </h6>
          <p>{commentaire.comm}</p>
         
           <div className="repondre">   <span><FaThumbsUp />{commentaire.like}</span> 
         <span><FaThumbsDown /> RÉPONDRE</span> 
          <h5> <FaCaretDown /> {commentaire.repond} </h5>

         </div>
        
           
         </div>
      
         </div>
    )
  } )
    return(
 <>
        <div className="commentaire">
        <h1>6 383 commentaires</h1>
            <h1><FaAlignLeft/> TRIER PAR</h1>
        </div>
        <div className="commentaire-moi">
        <img src="https://yt3.ggpht.com/yti/APfAmoE4xPeWNb-W8_zqNgIx8UgUeogdVsaAmca9Cu4E=s48-c-k-c0x00ffffff-no-rj" />

        <p>
Ajouter un commentaire public en tant que   <span>nibrasse hmidi</span></p>
        </div>

        {theCommentaire}

          </>
    )
  }
}


export default Commentaire;