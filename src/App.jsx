import './App.css'
import ProductsPage from './Home/ProductsPage/ProductsPage';


function App() {

  return (

    <div className='max-w-[1400px] mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
          <div>
          <h3>card sections</h3>
          </div>
          <div className='border'>
          <ProductsPage></ProductsPage>
          </div>
    </div>

    </div>
 
  );
};

export default App;
