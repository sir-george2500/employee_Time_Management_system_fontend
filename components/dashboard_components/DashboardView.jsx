const DashboardView = () => {
  return (
    <div className="flex-1 flex">
      <div className="flex-1 ml-2 mt-2 h-screen bg-stone-200 rounded-lg shadow-lg p-4">
        <h1 className="text-3xl font-bold mb-6 text-stone-900">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Widget 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Widget 1</h2>
            {/* Add widget content here */}
          </div>

          {/* Widget 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Widget 2</h2>
            {/* Add widget content here */}
          </div>

          {/* Widget 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Widget 3</h2>
            {/* Add widget content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
