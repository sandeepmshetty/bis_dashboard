import React from 'react';
import './App.scss'; 
import './App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { connect } from 'react-redux';

import Header from './components/Header/Header.jsx';
import Body from './components/Body/Body.jsx';

import {
	increaseCounter,
	decreaseCounter,
} from './redux/Counter/counter.actions';

function App(props) {
	return (
		<div className='App'>
			<Header/>
			<Body/>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		count: state.counter.count,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increaseCounter: () => dispatch(increaseCounter()),
		decreaseCounter: () => dispatch(decreaseCounter()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
