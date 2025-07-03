 

import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Landing from './pages/Landing'
 
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="/" element={<Landing />} />
         
      </Routes>
    </Router>
  );
}

export default App;
