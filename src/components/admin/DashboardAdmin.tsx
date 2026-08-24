import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import DashboardInicio from './inicio/DashboardInicio';
import ProductosTabla from './productos/ProductosTabla';
import Sidebar from "../../components/admin/ui/Sidebar";
import SeguimientoTable from "./seguimiento/SeguimientoTable";
import BlogTabla from "./blogs/BlogsTable"
import ReclamacionesTable from "./reclamaciones/ReclamacionesTable";
import UsuariosTable from "./usuarios/UsuariosTable";
import ChatbotDashboard from "./chatbot/chatbotTable";
import DashboardPopups from './popups/DashboardPopups';

function Layout() {
  return (
    <>
       <aside
          className="fixed top-16 left-0 h-[calc(100vh-4rem)] bg-[var(--background-color)] shadow-lg z-40 lg:w-72 w-full lg:block hidden"
        >
          <Sidebar/>
        </aside> 
     
      <div className="flex h-[calc(100vh-4rem)]">

            <main
                className="lg:ml-72 flex-1 overflow-y-auto p-6 bg-[var(--background-color)] text-[var(--text-color)]"
              >
              <Outlet />
            </main>
      </div>    
</>
  );
}


export default function DashboardAdmin() {
  return (
    
 
    <BrowserRouter>
      <Routes>
        {/* Usamos "/admin" como ruta principal y anidamos las rutas hijas */}
        <Route path="/admin" element={<Layout />}>
          <Route path="inicio" element={<DashboardInicio />} />
          <Route path="productos" element={<ProductosTabla />} />
          <Route path="seguimiento" element={<SeguimientoTable />} />
          {/* Falta ventas pero nunca se hizo un componente*/}
          <Route path="ventas" element={<ProductosTabla />} /> 
          <Route path="usuarios" element={<UsuariosTable />} /> 
          <Route path="blog" element={<BlogTabla />} />
          <Route path="reclamaciones" element={<ReclamacionesTable />} />
          {/* Falta */}
          <Route path="popups" element={<DashboardPopups />} />
          <Route path="chatbot" element={
            <ChatbotDashboard />
            
            } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
