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
  }, [brands]);
  // The handleChange function is memoized using useCallback, which means it will only be recreated if the brands state changes. This prevents unnecessary re-renders of the Search component when the parent component re-renders.
  

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

// here we are using useCallback to memoize the handleChange function, which is passed as a prop to the Search component. This prevents unnecessary re-renders of the Search component when the parent component re-renders. The handleSort function is also defined in the same way, but it is not memoized because it does not depend on any props or state. The brands state is updated based on the input value and the sort button click.
// The Search component is a simple input field that calls the handleChange function when the value changes. The brands state is updated based on the input value, and the sorted brands are displayed in a list. The useCallback hook is used to optimize the performance of the component by preventing unnecessary re-renders.