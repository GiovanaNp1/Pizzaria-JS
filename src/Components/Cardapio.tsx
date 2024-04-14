import pizzaImage from '../icons/pizzaImage.png'
import drinksImage from '../icons/drinksImage.png'
import snacksImage from '../icons/snacksImage.png'
import dessertImage from '../icons/dessertImage.png'

const products = [
  {name: 'Pizza', images: pizzaImage},
  {name: 'Drinks', images: drinksImage},
  {name: 'Snacks', images: snacksImage},
  {name: 'Dessert', images: dessertImage},
]

function FilterFood() {
  return (
    <div className='flex justify-center m-5'>
          { products.map(product => { 
            return(
              <div className="p-5 m-5 rounded-lg flex-col items-center flex">
                <img className="w-14" src={product.images} alt='pizza-logo'></img>
                 <p className='m-3'>{ product.name }</p>
                 <div className='bg-amber-500 w-10 h-10 rounded-full text-center flex items-center justify-center text-white'>
                    <p>&gt;</p>
                 </div>
              </div>
            )
          })}
   </div>
  );
}

export default FilterFood;