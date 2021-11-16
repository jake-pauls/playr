import { ChakraProvider, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Playtest from './pages/Playtest';
import NewPlaytest from './pages/NewPlaytest';

const App = () => {
  return (
    <Container>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/playtest" element={<Playtest />} />
            <Route path="/newplaytest" element={<NewPlaytest />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </Container>
  );
};

export default App;
