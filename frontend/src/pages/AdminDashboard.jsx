import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            <Link
              to="/"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Manage Your Content</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Projects Card */}
          <Link
            to="/admin/projects"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition cursor-pointer"
          >
            <div className="text-4xl mb-4">📁</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Projects</h3>
            <p className="text-gray-600">Manage your projects</p>
          </Link>

          {/* Clients Card */}
          <Link
            to="/admin/clients"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition cursor-pointer"
          >
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Clients</h3>
            <p className="text-gray-600">Manage client testimonials</p>
          </Link>

          {/* Contacts Card */}
          <Link
            to="/admin/contacts"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition cursor-pointer"
          >
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Entries</h3>
            <p className="text-gray-600">View contact form submissions</p>
          </Link>

          {/* Subscribers Card */}
          <Link
            to="/admin/subscribers"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition cursor-pointer"
          >
            <div className="text-4xl mb-4">📬</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Subscribers</h3>
            <p className="text-gray-600">View newsletter subscribers</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
