import React from 'react';;
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadCategories } from './store/Categories'
import App from './App';

// Redux Store
import { Provider } from 'react-redux'
import { configureStore } from './src/store'
import './index.css'

const store = configureStore();
store.dispatch(loadCategories());

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
), document.getElementById('root'))
registerServiceWorker()