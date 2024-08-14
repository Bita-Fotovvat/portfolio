import { Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import HomePage from '../src/components/HomePage/HomePage'; // Import your HomePage component

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </>
  );
}

export default App;
