/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';
import Search from '../components/Search';

function App() {
  const [search, setSearch] = useState('');

  return (
	<>
		<Router>
			<Header onSearch={setSearch} />
			<Switch>
				<Route
					exact
					path="/"
				>
					<Search search={search} />
				</Route>
			</Switch>
		</Router>

	</>
  );
}

export default App;
