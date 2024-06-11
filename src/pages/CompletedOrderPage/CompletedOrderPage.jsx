const CompletedOrderPage = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="font-bold text-3xl my-5">Complete Order</h2>
      </div>
      <div className="py-7">
        <table className="min-w-full bg-white bg-opacity-80 border border-gray-200">
          <thead>
            <tr className="text-center">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Customer Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Last Modified</th>
              <th className="py-2 px-4 border-b">Edit / View</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center bg-custom-secondary-light">
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">Customer Name</td>
              <td className="py-2 px-4 border-b">100 $</td>
              <td className="py-2 px-4 flex justify-center">
                11/6/2024 (11:30 PM)
              </td>
              <td>
                <button>
                  <strong>...</strong>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CompletedOrderPage;
