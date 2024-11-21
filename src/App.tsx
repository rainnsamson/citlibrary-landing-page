import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Import the Home component
import LibraryServices from './services1/LibraryServices';
import MissionVision from './about_us/MissionVison';
import History from './about_us/History';
import Books from './resources/Books';
import DigitalResources from './resources/DigitalResources';
import ResearchGuides from './resources/ResearchGuides';
import Archives from './archive/Archives';
import LibraryGuide from './services1/Library_Guide';
import SearchCatalog from './opac/SearchCatalog';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Set up the route to render the Home component */}
        <Route path="/" element={<Home />} /> {/* Default route for Home */}
        {/* Add a route for LibraryServices */}
        <Route path="/library-guide" element={<LibraryGuide />} />
        <Route path="/library-services" element={<LibraryServices />} />
        <Route path="/mission-vision" element={<MissionVision  />} />
        <Route path="/history" element={<History  />} />
        <Route path="/books" element={<Books  />} />
        <Route path="/digital-resources" element={<DigitalResources  />} />
        <Route path="/research-guides" element={<ResearchGuides  />} />
        <Route path="/archives" element={<Archives  />} />
        <Route path="/search" element={<SearchCatalog  />} />
      </Routes>
    </Router>
  );
};

export default App;
