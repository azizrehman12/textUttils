//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar tittle="TextUtils " About ="About TextUtils"   />
    <div className="container my-3">
    <TextForm heading='Enter the text to analyize'/>
    </div>
    {/* <About/> */}
    
    </>
    

     );
}

export default App;
