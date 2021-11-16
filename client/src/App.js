import { ChakraProvider, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Playtest from './pages/Playtest';
import NewPlaytest from './pages/NewPlaytest';
import { chakraTheme } from './ui/theme';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={chakraTheme}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/playtest" element={<Playtest />} />
              <Route path="/newplaytest" element={<NewPlaytest />} />
            </Routes>
          </Router>
        </ChakraProvider>
      </QueryClientProvider>
    </Container>
  );
};

export default App;
