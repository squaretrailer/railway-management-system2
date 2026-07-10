const users = [
  { name: 'Nimal Perera', role: 'Operations Manager', status: 'Active' },
  { name: 'Sajini Silva', role: 'Booking Agent', status: 'Active' },
  { name: 'Ramesh Kumar', role: 'Support', status: 'Pending' },
];

function UserManagement() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8">

  <div className="flex justify-between items-center mb-8">
    <div>
      <p className="text-amber-500 uppercase tracking-widest font-semibold">
        Admin Panel
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-2">
        User Management
      </h2>

      <p className="text-gray-500 mt-2">
        Manage staff accounts and system access.
      </p>
    </div>

    <button className="bg-amber-500 text-white px-5 py-3 rounded-lg hover:bg-amber-600 transition">
      Add User
    </button>
  </div>

  <div className="space-y-4">

    {users.map((user) => (
      <div
        key={user.name}
        className="flex justify-between items-center bg-amber-50 border border-amber-200 rounded-xl p-5 hover:shadow-md transition"
      >

        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {user.name}
          </h3>

          <p className="text-gray-600 mt-1">
            {user.role}
          </p>
        </div>

        <div className="flex items-center gap-4">

          <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {user.status}
          </span>

          <button className="border border-amber-500 text-amber-600 px-4 py-2 rounded-lg hover:bg-amber-500 hover:text-white transition">
            Edit
          </button>

        </div>

      </div>
    ))}

  </div>

</section>
  );
}

export default UserManagement;
