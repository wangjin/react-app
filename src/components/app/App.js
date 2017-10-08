import React, {Component} from 'react';
import './App.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default App;
