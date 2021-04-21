import React from 'react';

import Articles from './components/Articles/Articles.component';
import User from './components/User/User.component';

import './App.styles.css';

function App() {
    return (
        <div className="App">
            <header>
                <h1>React Skeleton</h1>
            </header>
            <div className="content">
                <Articles />
                <User />
            </div>
        </div>
    );
}

export default App;
