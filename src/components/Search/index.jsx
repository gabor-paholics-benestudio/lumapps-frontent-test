import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, Size } from '@lumx/react';
import ReactPaginate from 'react-paginate';
import { get } from '../../api';
import './index.scss';
import CharacterCard from '../CharacterCard';

const itemsPerPage = 4;

const initialFetchState = {
  offset: 0,
  total: 0,
  results: [],
};

const Search = ({ search }) => {
  const [apiResult, setApiResult] = useState(initialFetchState);

  useEffect(() => { fetchResults(search); }, [search]);

  const fetchResults = async (nameStartsWith, offset = 0) => {
    const query = {
      ...(nameStartsWith ? { nameStartsWith } : {}),
      offset,
      limit: itemsPerPage,
    };
    const response = await get('characters', query);
    setApiResult(response.data.data);
  };

  const handlePageClick = (event) => {
    fetchResults(search, event.selected * itemsPerPage);
  };

  return (
	<section className="lumx-spacing-padding-horizontal-huge">
		<List itemPadding={Size.huge}>
			{apiResult.results.map((character) => (<CharacterCard key={character.id} character={character} />))}
		</List>
		<ReactPaginate
			breakLabel=" ... "
			nextLabel=" >"
			onPageChange={handlePageClick}
			pageCount={Math.floor(apiResult.total / itemsPerPage)}
			forcePage={apiResult.offset / itemsPerPage}
			previousLabel="< "
			renderOnZeroPageCount={null}
			containerClassName="pagination__container"
			pageClassName="pagination__page"
			activeClassName="pagination__active"
		/>
	</section>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
};

export default Search;
