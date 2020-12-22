import React , { useState }from 'react';
import axios from "axios"; 

const Update_marchandise=()=>{

  const [categorie,setCategorie]= useState([]);
  const [stop,setstop]= useState(1);

  const Find_marchandise=(e)=>{
    
    e.preventDefault();
    setstop(2);

    axios({
        url: '/find/marchandise',
        method:'POST' ,
        data:{data:document.getElementById('search').value}
    })
    .then((res)=>{
        setCategorie(res.data)

        if(res.data.length===0 ){
          setstop(3);

        }else{
          setstop(0);
          
        }
    }).catch((error)=>{
        alert('erreur est survenue');
    });
  }

  const handledelete = (e,i)=>{

    document.getElementById('btn-'+i).style.display='none';
    document.getElementById('img-'+i).style.display='block';

    axios({
        url: '/delete/marchandise',
        method:'POST',
        data:{data:i}
    })
    .then((res)=>{
         alert('Marchandise a bien ete supprimer');
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

 
 const handleUpdate = (e,i)=>{

  document.getElementById('btn-u-'+i).style.display='none';
  document.getElementById('img-u-'+i).style.display='block';

  axios({
      url: '/update/marchandise',
      method:'POST',
      data:{data:document.getElementById('input-'+i).value,id:i}
  })
  .then((res)=>{
      alert('Marchandise a bien ete modifie');
      document.getElementById('btn-u-'+i).style.display='block';
      document.getElementById('img-u-'+i).style.display='none';
   }).catch((error)=>{
       alert('erreur est survenue');
   });

}

  const loader=()=>{
    if(stop === 0){
      return  <div>
                    {categorie.map(Element=>{
                        return <div id={Element._id} className=' list-group-item ' key={Element._id} data-aos='fade-up'>
                                  <div className='row' >
                                      <div className='col-2'><h3>{Element.type }</h3></div>
                                      <div className='col-6'><h4>Quantite :
                                        <input
                                         className='form-control' 
                                         type='number' 
                                         defaultValue={Element.quantite*1} 
                                         style={{width:'60%',float:'right'}} 
                                         id={'input-'+Element._id} required
                                         
                                         />  </h4></div>
                                      <div className='col-2'>
                                        <button   id={'btn-u-'+Element._id} className='btn btn-primary'  onClick={()=>{handleUpdate(this,Element._id)}}>Modifier</button>
                                        <img src='/IMG/loader.gif'  id={'img-u-'+Element._id} alt='loader' style={{width:'20%'}} className='btn-loader' />
                                      </div>
                                      <div className='col-2'>
                                        <button   id={'btn-'+Element._id} className='btn btn-danger'  onClick={()=>{handledelete(this,Element._id)}}>Suprimmer</button>
                                        <img src='/IMG/loader.gif'  id={'img-'+Element._id} alt='loader' style={{width:'20%'}} className='btn-loader' />
                                      </div>

                                  </div>
                               </div>})
                    }
                </div>
    }else if(stop === 1){
      return <h3 className='text-center'>Entre le nom du Marchandise .</h3>
    }else if(stop === 2){
      return <img src='/IMG/loader.gif' alt='loader' className='loader_content' />
    }else if(stop === 3){
      return <h3 className='text-center'> Aucun resultat .</h3>
    }
  }
   

  return (
     <div className='row container'>
         <div className='col-10'>
             <div className='form-group'>
                 <input type='text' id='search' className='form-control' placeholder='entre le nom du marchandise' />
             </div>
         </div>
         <div className='col-2'>
             <button className='btn btn-primary' onClick={(e)=>{Find_marchandise(e);}}>
                 Chercher
             </button>
         </div>
        <div className='col-12'>
          {loader()}
        </div>
     </div>
  );

}

export default Update_marchandise;
