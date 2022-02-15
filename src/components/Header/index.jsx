import React from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import PropTypes from 'prop-types';
import SearchField from '../SearchField';
import './index.scss';

const Header = ({ onSearch }) => (
	<header className="lumx-spacing-padding-big header">
		<FlexBox vAlign={Alignment.right}>
			<SearchField onSearch={onSearch} />
		</FlexBox>
	</header>
);

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
