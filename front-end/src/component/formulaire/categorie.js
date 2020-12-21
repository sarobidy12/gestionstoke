import React  from 'react';
import axios from "axios"; 

const AddCategorie=()=>{
   
    const handleSubmit=(e)=>{

        e.preventDefault();

        document.getElementById('btn').style.display='none';
        document.getElementById('img').style.display='block';

        var data= document.getElementById('categorie').value;

        axios({
            url: '/add/categorie',
            method:'POST',
            data:{data:data}
        })
        .then((res)=>{
      
            document.getElementById('btn').style.display='block';
             document.getElementById('img').style.display='none';

             alert('Categorie ajouter');
    
            }).catch((error)=>{
             alert('erreur est survenue');
         });
    }

  return (
     <div data-aos='fade-up'>
          <h1>
              Ajouter un Categorie
          </h1>

          <form method='POST' onSubmit={(e)=>{
              handleSubmit(e);
          }}>
              <div className='form-group'>
                  <input type='text' className='form-control' name='categorie' id='categorie' />
              </div>
                <input type='submit'  id={'btn'} className='btn btn-primary'  value='Ajouter une categorie' />
                <img src='/IMG/loader.gif'  id={'img'} alt='loader' style={{width:'10%'}} className='btn-loader' />
          </form>
     </div>
  );

}

export default AddCategorie;
