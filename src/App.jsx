import { useState, useCallback } from 'react';
import './App.css'
import Bar from './Bar'

function App() {
  const [isHovering, setIsHovering] = useState(false);

  const handleHovering = useCallback(() => {
    setIsHovering(true);
  }, []); 

  const handleLeaving = useCallback(() => {
    setIsHovering(false);
  }, []);

  return (
    <div className={`container ${isHovering ? "container-light" : ""}`} onMouseEnter={handleHovering} onMouseLeave={handleLeaving}>
      <h1>To Do List</h1>
      <p>Ecrivez vos pensées</p>
      <Bar />
    </div>
  )
}

export default App