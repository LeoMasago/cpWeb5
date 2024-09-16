import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; /* necessario para criar as rotas e ligar as páginas/conteudos */
import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import Formacao from './pages/Fromacao.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import ListaProjetos from './pages/ListaProjetos.jsx';
import DetalheProjeto from './pages/DetalheProjeto.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/formacao", element: <Formacao /> },
      { path: "/projetos", element: <ListaProjetos /> },
      { path: "/projetos/:id", element: <DetalheProjeto /> },
      { path: "*", element: <PageNotFound /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
