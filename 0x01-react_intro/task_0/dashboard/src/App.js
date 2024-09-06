import logo from './holberton-logo.jpg';
import './App.css';

function Header() {
  return(
    <div className="App-header">
      <img src={logo} alt="Holberton-logo" className='Header-logo'/>
      <h1 className="Header-title">School dashboard</h1>
    </div>
  );
}

function Body() {
  return(
    <div className="App-body">
      <hr className='Body-divider' />
      <p className='Body-para'>Login to access the full dashboard</p>
    </div>
  );
}

function Footer() {
  return(
    <div className="App-footer">
      <hr className='Footer-divider'/>
      <p className='Footer-para'>Copyright 2020 - holberton School</p>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
