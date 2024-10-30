import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div>
      <label htmlFor="find" className={css.label}>
        <span>Find contacts by name</span>
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={evt => {
            const action = changeFilter(evt.target.value);
            dispatch(action);
          }}
        />
      </label>
    </div>
  );
};

export default SearchBox;
