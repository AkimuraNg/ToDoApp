import './App.css';
import Navbar from './components/navbar';
import Features from './components/features';
import List from './components/list';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Features />
      <div className="container todo-app">
        <List />
      </div>
      <footer className="text-center text-lg-start footer bg-dark">
        <div className="container d-flex justify-content-center">
          <h5>Thank you for using this application</h5>
        </div>
        
        <div className="text-center text-white p-3">
          © 2021 Copyright:
          <p className="text-white" >Hoang Nhat Duy Nguyen</p>
        </div>
        
      </footer>
    </div>
  );
}

export default App;
