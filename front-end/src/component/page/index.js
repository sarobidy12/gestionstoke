import React , { useState ,useEffect}from 'react';
import axios from "axios"; 

const Index=()=>{

  const [categorie,setCategorie]= useState([]);
  const [marchandise,setMarchandise]= useState([]);
  const [stop,setstop]= useState(2);
  const [stop1,setstop1]= useState(0);

  useEffect(()=>{

    if(stop === 2 && stop1===0 ){
    axios({
        url: '/marchandise',
        method:'GET'  
    })
    .then((res)=>{

        setMarchandise(res.data);

    }).catch((error)=>{
        alert('erreur est survenue');
    });

        axios({
          url: '/categorie',
          method:'GET'  
        })

      .then((res)=>{
          setstop(0);
          setstop1(1);
          setCategorie(res.data);
      }).catch((error)=>{
          alert('erreur est survenue');
      });

    }
    
  });
  
  const Find_marchandise=(e)=>{
    
    e.preventDefault();
    setstop(2);

    axios({
        url: '/find/marchandise',
        method:'POST' ,
        data:{data:document.getElementById('search').value}
    })
    .then((res)=>{
      setMarchandise(res.data)

        if(res.data.length===0 ){
          setstop(3);
        }else{
          setstop(4);
        }
    }).catch((error)=>{
        alert('erreur est survenue');
    });
  }

 
 

const viewAll=()=>{
  

  return <div data-aos='fade-up'>
              {
              categorie.map(Element=>{
                return <div>

                  
                        <h1>{Element.name}</h1>
                        <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Quantite en KG</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            marchandise.filter(name => name.categorie === Element._id).map(ElementS=>{
                                return  <tr  key={ElementS._id} >
                                              <th scope="row">{ElementS._id}</th>
                                              <td>{ElementS.type }</td>
                                              <td>{ElementS.quantite*1} Kg</td>
                                        </tr> 
                                    })
                            }
                    </tbody>
                  </table>
                       </div>
                })
              }
         </div>


}

  const loader=()=>{
    if(stop === 0){
      return  <div>
                  {viewAll()}
              </div>
    }else if(stop === 1){
      return <h3 className='text-center'>Entre le nom du Marchandise .</h3>
    }else if(stop === 2){
      return <img src='/IMG/loader.gif' alt='loader' className='loader_content' />
    }else if(stop === 3){
      return <h3 className='text-center'> Aucun resultat .</h3>
    }if(stop === 4){
      return  <div>
                  {
                     <table className="table">
                     <thead className="thead-dark">
                       <tr>
                         <th scope="col">id</th>
                         <th scope="col">Nom</th>
                         <th scope="col">Quantite en KG</th>
                       </tr>
                     </thead>
                     <tbody>
                         {
                             marchandise.map(ElementS=>{
                                 return  <tr  key={ElementS._id} >
                                               <th scope="row">{ElementS._id}</th>
                                               <td>{ElementS.type }</td>
                                               <td>{ElementS.quantite*1} Kg</td>
                                         </tr> 
                                     })
                             }
                     </tbody>
                   </table>
                  }
              </div>
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

export default Index;
