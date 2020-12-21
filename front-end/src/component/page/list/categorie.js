import axios from "axios"; 

const  categorieList=(props)=>{

    const categorie = props.categorie;

    const handledelete = (e,i)=>{

        document.getElementById('btn-'+i).style.display='none';
        document.getElementById('img-'+i).style.display='block';

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
            <ul class="list-group" >
                {categorie.map(Element=>{
                 return   <li class="list-group-item" id={Element._id} data-aos='fade-up' key={Element._id}>
                        <div className='row'>
                            <div className='col-10'><h3>{Element.name}</h3></div>
                            <div className='col-2'>
                                <button to='/categorie-add' id={'btn-'+Element._id} className='btn btn-danger'  onClick={()=>{handledelete(this,Element._id)}}>Suprimmer</button>
                                <img src='/IMG/loader.gif'  id={'img-'+Element._id} alt='loader' className='btn-loader' />
                            
                            </div>
                        </div>
                    </li>})
                }
            </ul>

        );
    
  }

export default categorieList;
