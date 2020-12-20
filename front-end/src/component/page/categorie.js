import React , {  useEffect,useState }from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"; 

const Categorie=()=>{

  const [categorie,setCategorie]= useState([]);
  const [stop,setstop]= useState(0);

  useEffect(()=>{

    if(stop ===0){
      axios({
          url: '/categorie',
          method:'GET' 
      })
      .then((res)=>{
          setCategorie(res.data)
          setstop(1);
      }).catch((error)=>{
          alert('erreur est survenue');
      });
      }
   
  })
   
  const handledelete = (e,i)=>{

        axios({
            url: '/delete/categorie',
            method:'POST',
            data:{data:i}
        })
        .then((res)=>{
             alert('Categorie a bien ete supprimer');
             document.getElementById(i).animate([
              { heigth: 'translateX(0px)' },
              { transform: 'translateX(-300px)' }
            ], {
              duration: 1000
            })
            document.getElementById(i).style.display='none';
            
         }).catch((error)=>{
             alert('erreur est survenue');
         });
  }


  return (
     <div className='row'>
         <div className='col-10'>
             
         </div>
         <div className='col-2'>
              <Link to='/categorie-add' className='btn btn-primary'>
                  Ajouter
              </Link>
        </div>

        <div className='col-12'>
        <ul class="list-group">
          {
            categorie.map(Element=>{
            return <li class="list-group-item" id={Element._id} data-aos='fade-up' key={Element._id}>
                    <div className='row'>

                      <div className='col-10'>
                        <h3>
                          {Element.name}
                        </h3>
                      </div>
                        <div className='col-2'>
                              <button to='/categorie-add' className='btn btn-danger'  onClick={
                                ()=>{
                                  handledelete(this,Element._id)
                                }
                              }>
                                  Suprimmer
                              </button>
                        </div>
                      </div>
              </li>
            })
          }
        </ul>

        </div>
     </div>
  );

}

export default Categorie;
