import { getImageUrl } from '../utils/imageUrl';

const ClientsSection = ({ clients, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (clients.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No clients available yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {clients.map((client) => (
        <div
          key={client._id}
          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
        >
          {/* Circular Profile Picture */}
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 flex-shrink-0">
            <img
              src={getImageUrl(client.image)}
              alt={client.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150?text=No+Image';
              }}
            />
          </div>
          
          {/* Testimonial Text */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-4 leading-relaxed flex-grow">
            "{client.description}"
          </p>
          
          {/* Client Name */}
          <h4 className="text-blue-600 font-semibold text-base mb-1">
            {client.name}
          </h4>
          
          {/* Client Designation */}
          <p className="text-gray-500 text-sm">
            {client.designation}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ClientsSection;
