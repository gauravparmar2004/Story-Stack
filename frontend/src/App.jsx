import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import ProjectsAdmin from './pages/ProjectsAdmin';
import ClientsAdmin from './pages/ClientsAdmin';
import ContactsAdmin from './pages/ContactsAdmin';
import SubscribersAdmin from './pages/SubscribersAdmin';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/projects" element={<ProjectsAdmin />} />
          <Route path="/admin/clients" element={<ClientsAdmin />} />
          <Route path="/admin/contacts" element={<ContactsAdmin />} />
          <Route path="/admin/subscribers" element={<SubscribersAdmin />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
