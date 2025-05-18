import { useCallback, useState } from 'react'
import Search from './components/Search'

const allBrands = [
  { brandName: 'Nike' },
  { brandName: 'Adidas' },
  { brandName: 'Puma' },
  { brandName: 'Reebok' },
  { brandName: 'Under Armour' },
  { brandName: 'New Balance' }
]

function App () {

  const [brands, setBrands] = useState(allBrands)

   const handleChange = useCallback((value) => {
    const updatedBrands = value?.length > 0
      ? allBrands.filter(brand => brand.brandName.toLowerCase().includes(value.toLowerCase()))
      : allBrands;
    setBrands(updatedBrands);
  }, []);

  console.log('brands', brands);
  

  const handleSort = () => {
    const sortedBrands = [...allBrands].sort((a,b) => {
      const nameA = a.brandName.toLowerCase();
      const nameB = b.brandName.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setBrands(sortedBrands)
  }

  return (
    <div className="App">
      <h2> UseCallback Hook </h2>
      <div>
        <button onClick={ handleSort }>Sort By Name</button>
        <div>
        {
            brands.map( brand => <p key={brand.brandName}>{brand.brandName}</p> )
        }
        </div>
      </div>
      <div>
        < Search handleChange={handleChange} />
      </div>
    </div>
  )
}
export default App