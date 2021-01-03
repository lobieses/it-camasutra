import './App.css';
import Header from './components/header/header';
import SideBar from './components/side-bar/side-bar';
import Content from './components/content/content';




function App() {
  return (
    <div className="App">
        <Header />
        <SideBar />
        <Content />     
    </div>
  );
}

export default App;
