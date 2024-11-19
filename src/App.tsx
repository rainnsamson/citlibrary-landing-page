import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Import the Home component
import LibraryServices from './services1/Library_services'; // Import the LibraryServices component

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Set up the route to render the Home component */}
        <Route path="/" element={<Home />} /> {/* Default route for Home */}
        {/* Add a route for LibraryServices */}
        <Route path="/library-services" element={<LibraryServices />} />
      </Routes>
    </Router>
  );
};

export default App;
