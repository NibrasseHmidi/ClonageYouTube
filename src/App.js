import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Component/Nav';
import Video from './Component/Video';
import Commentaire from './Component/Commentaire';
import Left from './Component/Left';
import { Component } from 'react';
class App extends Component {
  state = {
    lefts : [
{
  video: "https://www.youtube.com/embed/f54g9F05ld8",
  nomSon: "حسين الجسمي - حته من قلبي (حصرياً) | 2021 | Hussain Al Jassmi - Piece Of My Heart",
  nom:"Hussain Al Jassmi | الجسمي ...",
  vu:"27 M de vues . il y a 4 semaines",
},
{
  video: "https://www.youtube.com/embed/HpCzRzWayaE",
  nomSon: "حماقي - لو هتسيب | Hamaki - Law Hatsib",
  nom:"Mohamed Hamaki",
  vu:"3,8 M de vues . il y a 2 jours",
},
{
  video: "https://www.youtube.com/embed/QqiqISFT15w",
  nomSon: "Wael Kfoury - El Bint El Awiye ( Music Video - 2021) وائل كفوري - البنت القوية",
  nom:" Wael Kfoury | وائل كفوري",
  vu:"39 M de vues . il y  1 mois",
},
{
  video: "https://www.youtube.com/embed/Dn4kubLjiBg",
  nomSon: "Moustafa Hagag - Khatwa (Music Video) | (مصطفى حجاج - خطوة (فيديو كليب",
  nom:" Nj Music Prouductions",
  vu:"135 M de vues . il y  2 ans",
},
{
  video: "https://www.youtube.com/embed/Lex4NKotiw4",
  nomSon: "Saif Nabeel & Balqees - Momken [Official Music Video] (2021) / سيف نبيل وبلقيس - ممكن",
  nom:" Saif Nabeel | سيف نبيل ",
  vu:" 83 M de vues . il y  3 mois",
},
{
  video: "https://www.youtube.com/embed/u4fUO48PL4g",
  nomSon: "  أصيل هميم - انت كل شي (حصرياً) | 2020 | Aseel Hameem - Enta Kolshay",
  nom:" JDED Music | جديد ميوزك  ",
  vu:" 47 M de vues . il y  1 ans",
},
{
  video: "https://www.youtube.com/embed/bUUBdcUGgA8",
  nomSon: "  Adham Nabulsi - Han AlAn (Official Music Video) | أدهم نابلسي - حان الآن",
  nom:" Adham Nabulsi ",
  vu:" 36 M de vues . il y  6 ans",
},
{
  video: "https://www.youtube.com/embed/w5NqAZxuMtM",
  nomSon: " Hamaki - Wahda Wahda - New Years Concert | حماقي - واحدة واحدة - حفل رأس السنة",
  nom:" Mouhamed Hamaki ",
  vu:" 5,5 M de vues . il y  7 mois",
},
    ],
    commentaires:[
      {
imagCom:"https://yt3.ggpht.com/ytc/AKedOLSFUKdNoa0cJA5ixNVl6b9ETmZu5JN9iAd0VeEaVw=s48-c-k-c0x00ffffff-no-rj",
nomCom:"Ana Beeko",
dateCom:" il y a 1 semaine",
comm:"الله اخيراً عندي اغنية جديدة اسمعها في السيارة طول المشاوير💃🏾🔥🤣",
like:"2,7 k",
repond:"Afficher les 219 réponses",
      },
          {
imagCom:"https://yt3.ggpht.com/ytc/AKedOLS_rpJMORZsqdmLq_4IXBubgZg6spVwu_qWO5rDdg=s48-c-k-c0x00ffffff-no-rj",
nomCom:"Secretofnet",
dateCom:" il y a 4 jours",
comm:"روعة يا حماقي الأغنية بالستايل القديم إلي عرفناك به😍",
like:"245",
repond:"Afficher les 12 réponses ",
      },
          {
imagCom:"https://yt3.ggpht.com/ytc/AKedOLTdQw5QyS_1uap7dIbXra0I0LW5NhgzQn6nYzvN=s48-c-k-c0x00ffffff-no-rj",
nomCom:" الكتريك ميكس electric mix",
dateCom:" il y a 5 jours",
comm:"للعبد ربٌ هو ملاقيه، وبيت هو ساكنه؛ فينبغي له أن يسترضي ربه قبل لقائه، ويعمر بيته قبل أنتقاله إليه.إبن القيم",
like:"132",
repond:"Afficher les 3 réponses",
      },
          {
imagCom:"https://yt3.ggpht.com/ytc/AKedOLT_EvMaDcXjPeS3i9W0YDjgYNkCK8tE_Iv39u36CQ=s48-c-k-c0x00ffffff-no-rj",
nomCom:"chicastorm52",
dateCom:" il y a 1 jour",
comm:"me encanta esta canción,  busqué la traducción y es muy linda",
like:"10",
repond:"Afficher la réponse ",
      },
          {
imagCom:"https://yt3.ggpht.com/qTaW4i9W3BCvfvEnxvtBMuxEEqH-Lyc2iXmKsfkkzGlUWZTiRr8iSXCmpbBORKKAfEigZt845Q=s48-c-k-c0x00ffffff-no-rj",
nomCom:"ORTEGA",
dateCom:"il y a 1 jour",
comm:"عاش يا قلبى ❤",
like:"16",
repond:"Afficher la réponse",
      },
    ]
  }
  render(){

     return (
  
     

        <div>
       
          < Nav />
        
            <div className="body" >
                  
                <div className="row1">   
                < Video />
                  < Commentaire commentaires={this.state.commentaires} />
                   </div>
                      <div className="row2">
                        < Left lefts={this.state.lefts}/>
                      </div>
                </div>
       
        </div>
     

      



     
  
  );
  }
 
}

export default App;
