import './App.css'
import Products from './Home/Products/Products';


function App() {

  return (

    <div className='max-w-[1400px] mx-auto'>
         <div className='grid grid-cols-2'>
      <div>
      <h3>card sections</h3>
      </div>
      <div className='border'>
      <Products></Products>
      </div>
    </div>

    </div>
 
  );
};

export default App;
