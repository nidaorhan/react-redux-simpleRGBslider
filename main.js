import React  					from 'react';
import ReactDOM 				from 'react-dom';
import App 						from './App';
import {createStore} 			from 'redux'; 
import reducer 					from './reducer'


const store = createStore(reducer);

const render = () => {
	ReactDOM.render(<App colorState={store.getState()} dispatch={store.dispatch} />, document.getElementById('app'));	
}

render();

store.subscribe(render);

