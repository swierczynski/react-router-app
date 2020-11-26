import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import '../styles/App.css';
import Footer from '../layouts/Footer'; 
import Header from '../layouts/Header'; 
import Navigation from '../layouts/Navigation'; 
import Page from '../layouts/Page'; 

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <header>
            <Header />
          </header>
          <main>
            <aside>
              <Navigation />
            </aside>
            <section className="page">
              <Page />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
