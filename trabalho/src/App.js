import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import List from './pages/List';
import Detail from './pages/Detail';

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={setLoggedIn} isLoggedIn={loggedIn} />} />
        <Route
          path="/items"
          element={loggedIn ? <List /> : <Navigate to="/" />}
        />
        <Route
          path="/items/:id"
          element={loggedIn ? <Detail /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
