import React , {  useEffect,useState }from 'react';
import axios from "axios"; 

const AddCategorie=()=>{
   
    const handleSubmit=(e)=>{

        e.preventDefault();

        var data= document.getElementById('categorie').value;

        axios({
            url: '/add/categorie',
            method:'POST',
            data:{data:data}
        })
        .then((res)=>{
             console.log(res.data);
             alert('Categorie ajouter');
         }).catch((error)=>{
             alert('erreur est survenue');
         });
    }

  return (
     <div   data-aos='fade-up'>
          <h1>
              Ajouter un Categorie
          </h1>

          <form method='POST' onSubmit={(e)=>{
              handleSubmit(e);
          }}>
              <div className='form-group'>
                  <input type='text' className='form-control' name='categorie' id='categorie' />
              </div>
                <input type='submit' className='btn btn-primary'  value='Ajouter une categorie' />
          </form>
     </div>
  );

}

export default AddCategorie;
