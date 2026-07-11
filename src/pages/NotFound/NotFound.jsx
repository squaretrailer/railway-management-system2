function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-amber-50 px-6">

  <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full text-center border-t-8 border-amber-500">

    <p className="text-amber-500 text-6xl font-bold">
      404
    </p>

    <h2 className="text-3xl font-bold text-gray-800 mt-4">
      Page Not Found
    </h2>

    <p className="text-gray-500 mt-4">
      The page you're looking for doesn't exist or may have been moved.
    </p>

    <div className="mt-8">
      <Link
        to="/"
        className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition"
      >
        Return to Home
      </Link>
    </div>

  </div>

</section>
  );
}

export default NotFound;