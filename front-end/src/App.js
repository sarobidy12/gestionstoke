import React , {  useEffect }from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import './App.css';

//Body
import Index from './component/page/index';
import Header from './component/body/haeder';
import Menu from './component/body/menu';

//page
import Categorie from './component/page/categorie';
import CategorieAdd from './component/formulaire/categorie';
import MarchandiseAdd from './component/formulaire/add_marchandise';
import MarchandiseUpdate from './component/formulaire/update_marchandise';

function App() {
  
  useEffect(()=>{
    Aos.init({
      duration : 1500
    })
  })

  return (
    <div>
        <BrowserRouter>

<Header/>
      <div className='row'>
  
        
        <div className='col-md-2'>
           <Menu/>
        </div>

        <div className='col-md-10'>
          <Route path="/" component={Index} exact />
          <Route path="/categorie" component={Categorie} />
          <Route path="/categorie-add" component={CategorieAdd} />
          <Route path="/marchandise/ajouter" component={MarchandiseAdd} />
          <Route path="/marchandise/update" component={MarchandiseUpdate} />
        </div>

      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
