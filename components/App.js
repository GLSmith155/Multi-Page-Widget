import React from 'react';
import Accordion from './Accordion';
import Search from './Search';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end thing'
    },
    {
        title: 'gfdgfdg',
        content: 'gfdgfdgd'
    }
];

class App extends React.Component {


    render() {
        return(
            <div>
            <Search /> 
            </div>
            
        );
    }
}

export default App;