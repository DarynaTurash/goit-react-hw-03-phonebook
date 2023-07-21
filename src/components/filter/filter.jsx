import { FilterInput, FilterLabel } from "./filter.styled";
import PropTypes from 'prop-types';

export const Filter = ( {onChange, value} ) => {
    return (
        <FilterLabel>
            Find contact by name
            <FilterInput type='text' onChange={onChange} value={value} />
        </FilterLabel>
      
    )
};

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};