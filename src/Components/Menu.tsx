import pizzaLogo from '../Pizzaria da Gigi.png'

function Menu() {
  return (
    <header className="max-md:w-1/2 lg:w-52	 max-lg:w-1/4  max-sm:w-full pl-6 pt-10 pr-6 pb-10 font-kanitThin text-amber-500 text-center text-xl text-lg bg-white">
       <ul className='flex-col flex items-center'>
            <li className="w-fit mb-10 max-md:w-3/4">
              <div>
                <img src={pizzaLogo} alt="Pizzaria da Gigi"></img>
              </div></li>
            <li>Home</li>
            <li>Menu</li>
            <li>Encomendas</li>
        </ul>
    </header>
  );
}

export default Menu;
