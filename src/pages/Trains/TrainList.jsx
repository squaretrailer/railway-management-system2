import { Link } from 'react-router-dom';

const trains = [
  { id: 1, name: 'Express 101', route: 'Colombo → Kandy', status: 'On time' },
  { id: 2, name: 'Night Rail', route: 'Galle → Colombo', status: 'Boarding' },
  { id: 3, name: 'Hill Line', route: 'Nuwara Eliya → Colombo', status: 'Delayed' },
];

function TrainList() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8">

  <div className="flex justify-between items-center mb-8">
    <div>
      <p className="text-amber-500 uppercase tracking-widest font-semibold">
        Train Administration
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-2">
        Train Catalogue
      </h2>
    </div>

    <Link
      to="/trains/add"
      className="bg-amber-500 text-white px-5 py-3 rounded-lg hover:bg-amber-600 transition"
    >
      Add Train
    </Link>
  </div>

  <div className="space-y-4">
    {trains.map((train) => (
      <div
        key={train.id}
        className="flex justify-between items-center bg-amber-50 border border-amber-200 rounded-xl p-5 hover:shadow-md transition"
      >
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {train.name}
          </h3>

          <p className="text-gray-600 mt-1">
            {train.route}
          </p>
        </div>

        <div className="flex items-center gap-4">

          <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            {train.status}
          </span>

          <Link
            to={`/trains/${train.id}`}
            className="border border-amber-500 text-amber-600 px-4 py-2 rounded-lg hover:bg-amber-500 hover:text-white transition"
          >
            View
          </Link>

        </div>
      </div>
    ))}
  </div>

</section>
  );
}

export default TrainList;
