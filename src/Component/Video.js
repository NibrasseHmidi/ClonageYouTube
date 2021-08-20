import React from 'react';
import './Video.css';
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaShare} from "react-icons/fa";
import { FaSlidersH} from "react-icons/fa";
import { BsMusicNote } from "react-icons/bs";

const Video = () =>{
return (
    <>
      <div className="video">
   <iframe width="805" height="453" src="https://www.youtube.com/embed/PS-uywnnzWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>
      <div className="info">
       <p>#10 DES TENDANCES MUSIQUE </p>
        <h1>حماقي - زيها مين | Hamaki - Zayaha Meen</h1>
       </div>
       <div className="vues">
       <p>9 542 265 vues . Sortie le 5 août 2021</p>
       <div className="like-span"> 
       <div className="like">  <FaThumbsUp/> <span>165 K</span></div>
        <div className="like">  <FaThumbsDown/> <span>4,3 K</span></div>
 </div>

 <div className="partage">  <FaShare/> <span>
PARTAGER</span> </div>
         <div className="telecharger">  <     FaSlidersH/> <span>ENREGISTRER</span></div>
        <div className="point"> <sup>...</sup></div>
       </div>
       <div className="info-auto">
       <div className="info-ha">
        <img src=" https://yt3.ggpht.com/24k1neSBNPvz5jSUfEfprlfFAbvEeGtf0KsY7X-FCCdc0qZ-v3wzXTAiFf1LtnZ4MKMPYUpy=s48-c-k-c0x00ffffff-no-nd-rj"/>


 <div>  
 <h1>Mouhamed Hamaki <span> <BsMusicNote/></span>  </h1>
         <p>2,59 M d’abonnés</p>
           <h6> كلمات وألحان: عزيز الشافعي
         </h6>
         <h6>  توزيع: تميم</h6>
      <h6>جيتار: مصطفى أصلان</h6>
      <p>PLUS</p>
         </div>

       
        </div>
      
        <button> S{"'"}ABONNER </button>
       </div>
    </>
)
} 
export default Video;