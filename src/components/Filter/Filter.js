import { useDispatch, useSelector } from 'react-redux';
import { onChangeFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/selectors';
import { LabelFilter, InputFilter } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  function handleInputChange(e) {
    dispatch(onChangeFilter(e.target.value));
  }

  return (
    <LabelFilter>
      <InputFilter
        type="text"
        name="filter"
        value={filter}
        onChange={handleInputChange}
      />
      <span>Find contacts by name</span>
    </LabelFilter>
  );
};

export default Filter;
