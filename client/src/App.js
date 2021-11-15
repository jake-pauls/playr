import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import Dashboard from './pages/Dashboard';
import Playtest from './pages/Playtest';
import NewPlaytest from './pages/NewPlaytest';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              {/*
              <Route path="nextPage" element={<Home />}>
              </Route> */}
            </Route>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/playtest" element={<Playtest/>}/>
            <Route path="/newplaytest" element={<NewPlaytest/>}/>
          </Routes>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
