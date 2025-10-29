// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </div>
  );
};

export default App;
