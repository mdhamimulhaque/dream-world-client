import React from 'react';
import './App.css';
import { RouterProvider } from "react-router-dom";
import routes from './routes/routes';

const App: React.FC = () => {
  return (
    <div className="App max-w-[1440px] mx-auto">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
