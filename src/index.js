import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SearchContext } from './pages/Header/Nav1/Nav1';
import Context from './pages/Shared/Context';


const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // usequery 

    <Context>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </QueryClientProvider>
    </Context>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
