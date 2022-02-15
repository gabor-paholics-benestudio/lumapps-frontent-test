import React, { useState } from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';
import PropTypes from 'prop-types';

const SearchField = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const keyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(e.target.value);
    }
  };

  return (
	<TextField theme={Theme.dark} placeholder="Search ..." icon={mdiMagnify} value={value} onChange={setValue} onKeyPress={keyPress} />
  );
};

SearchField.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchField;
