import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<React.StrictMode>
              <BrowserRouter>
              <QueryClientProvider client={queryClient}>
                  <App/>
                </QueryClientProvider>
              </BrowserRouter>
            </React.StrictMode>);

reportWebVitals();
