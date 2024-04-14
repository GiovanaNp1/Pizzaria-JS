import './App.css';
import Search from './Components/Search'
import FilterFood from './Components/FilterFood'
import Cardapio from './Components/Cardapio'

function App() {
  return (
    <div className='flex w-full flex flex-col'>
      <section className='w-full flex'>
        <h1 className='w-1/3 text-center mt-11 font-kanitThin text-xl'>Pizzaria da Gigi Menu do dia &#128523;</h1>
        <div className='w-1/3' />
        <div className='w-1/3'>
          <Search />
        </div>
      </section>
      <section>
          <FilterFood />
          <Cardapio />
      </section>
    </div>
  );
}

export default App;
