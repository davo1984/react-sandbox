import React from 'react';
import logo from './logo.svg';
import Clock from './clock.js';
import Navbar from './Navbar';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { currentPage: 'Home' }
        this.updatePage = this.updatePage.bind(this)
    }

    updatePage(newPage) {
        //console.log("in the update page function", newPage)
        this.setState({ currentPage: newPage })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>

                    <div>
                        <Navbar />
                        {/* <Clock /> */}
                    </div>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React with Dave O.
                    </a>
                </header>
            </div>
        );
    }
}

class Clock2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default App;
