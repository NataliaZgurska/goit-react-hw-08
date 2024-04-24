import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const onChangeFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.filterContainer}>
      <p>Search contacts by name</p>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={onChangeFilter}
        className={css.searchBoxInput}
      />
    </div>
  );
};

export default SearchBox;
