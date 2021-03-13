import React from 'react';
import styles from './Filter.module.css'
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
    return (
        <label className={styles.filter}>
            Filter
            <input type='text' value={value}  onChange={onChange}></input>
        </label>
    );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
 
export default Filter;
