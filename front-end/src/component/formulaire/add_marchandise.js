import React , {  useEffect,useState }from 'react';
import axios from "axios"; 

const Add_marchandise=()=>{

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


  const Add_marchandise=(e)=>{
        e.preventDefault();

        var data={
            type: document.getElementById('type').value,
            categorie: document.getElementById('categorie').value,
            quantite: document.getElementById('quantite').value,
        }

        axios({
            url: '/add/marchandise',
            method:'POST',
            data:data
        })
        .then((res)=>{
      
            console.log(res.data);
            document.getElementById('btn').style.display='block';
            document.getElementById('img').style.display='none';
            alert('marchandise ajouter');
    
        })
        .catch((error)=>{
             alert('erreur est survenue');
        });
  }

  const loader=()=>{
    if(stop === 1){
      return  <div>
          
                <div className='container'>
                    <h1 data-aos='fade-up'>Ajouter une Marchandise</h1>
                        <form method="POST" onSubmit={(e)=>{
                            Add_marchandise(e);
                        }}>
                            <div className='form-group' data-aos='fade-up'>
                                <label>
                                    Entre un type marchandise 
                                </label>
                                <input type='text' id='type' className='form-control' />
                            </div>

                            <div className='form-group' data-aos='fade-up'>
                                    <label>
                                        Le categorie
                                    </label>
                                    <select id='categorie' className='form-control'>
                                    {categorie.map(Element=>{
                                        return   <option value={Element._id}  key={Element._id}>{Element.name}</option>})
                                    }
                                    </select>
                            </div>

                            <div className='form-group' data-aos='fade-up'>
                                <label>
                                    Quantite
                                </label>
                                <input type='number' placeholder='Kg ou 10,20' id='quantite' className='form-control' />
                            </div>
                            <br/>
                            <input type='submit' data-aos='fade-up'  id={'btn'} className='btn btn-primary'  value='Ajouter une marchandise' />
                            <img src='/IMG/loader.gif'  id={'img'} alt='loader' style={{width:'10%'}} className='btn-loader' />
         
                        </form>
                    </div>

      </div>
    }else{
      return <img src='/IMG/loader.gif' alt='loader' className='loader_content' />
    }
  }
   

  return (
     <div className='row'>
        <div className='col-12'>
          {loader()}
        </div>
     </div>
  );

}

export default Add_marchandise;
