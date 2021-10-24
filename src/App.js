import './App.css';
import { renderRoutes } from 'react-router-config';
import routes from './routes.js'
import "tailwindcss/tailwind.css"

function App() {
  return (
    <div className="App">
      {renderRoutes(routes)}
    </div>
  );
}

export default App;
