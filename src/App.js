
import Header from "./Header"
import Footer from "./Footer";
import "./App.css"
import Content from "./Content";
import react,{useState} from 'react'

function App() {
  const [currPage,setCurrentPage]  = useState("About");
  return (
    <div className="App">
     <Header currPage = {currPage} setCurrPage={setCurrentPage}/>
    <Content currPage = {currPage}/>
     <Footer />
    </div>
  );
}

export default App;
