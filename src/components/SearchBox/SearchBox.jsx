
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilters } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css"

const SearchBox = ({value}) => {
  const dispatch = useDispatch();
  
  const filterName = useSelector(selectFilters)
  console.log(filterName);
  

const handleInputChange = (event) => {
  const newValue = event.target.value;
  console.log(newValue);
  
  dispatch(changeFilter(newValue));

  };

  return (
    <div className={css.contact}>
      <label>Find contacts by name</label>
      <input className={css.input} type="text" value={filterName} onChange={handleInputChange}/>
    </div>
  );
};

export default SearchBox;