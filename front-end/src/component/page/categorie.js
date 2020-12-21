import React , {  useEffect,useState }from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"; 
import ListCategorie from './list/categorie';

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

  const loader=()=>{
    if(stop === 1){
      return <ListCategorie categorie={categorie}/>
    }else{
      return <img src='/IMG/loader.gif' alt='loader' className='loader_content' />
    }
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
          {loader()}
        </div>
     </div>
  );

}

export default Categorie;
