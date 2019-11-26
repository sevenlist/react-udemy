import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = () => {

  const [user, setUser] = useState({
    name: 'Alice'
  });

  const handleNewUsername = event => {
    setUser({ name: event.target.value })
  };

  return (
    <div className="App">
      <UserInput username={user.name} onChange={handleNewUsername}/>
      <UserOutput username={user.name} />
      <UserOutput username="Bob" />
    </div>
  );
}

export default App;
