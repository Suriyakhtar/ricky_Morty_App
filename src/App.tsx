import { Route, Routes } from "react-router-dom"
import Profile from './containers/Profile/Profile';
import HomePage from './containers/HomePage';

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/search" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
