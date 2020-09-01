import React from 'react';
import './App.scss';
import './App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import {increaseCounter, decreaseCounter} from './redux/Counter/counter.actions';
import Routes from '../src/routes/routes';

function App(props) {
				return (
								<Router>
												<div className='App'>
																<Header/>
																<Routes/>
												</div>
								</Router>
				);
}

const mapStateToProps = (state) => {
				return {count: state.counter.count};
};

const mapDispatchToProps = (dispatch) => {
				return {
								increaseCounter: () => dispatch(increaseCounter()),
								decreaseCounter: () => dispatch(decreaseCounter())
				};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
