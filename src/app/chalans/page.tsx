export default function Chalans() {
  return (
    <main>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Issuing Officer
              </th>
              <th scope="col" className="px-6 py-3">
                Payable Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Chalan has been issued for driving without seatbelt at around
                11:05PM near IITL Gate
              </th>
              <td className="px-6 py-4">1/11/2023</td>
              <td className="px-6 py-4">Officer Ranjesh</td>
              <td className="px-6 py-4">₹500</td>
              <td className="px-6 py-4">
                <p className="w-fit px-2 py-1 rounded-md cursor-pointer bg-blue-500 text-white hover:bg-blue-600">
                  Pay now
                </p>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Parking at a no parking spot near Ekane Stadium
              </th>
              <td className="px-6 py-4">1/11/2023</td>
              <td className="px-6 py-4">Officer Hritesh</td>
              <td className="px-6 py-4">₹900</td>
              <td className="px-6 py-4">
                <p className="w-fit px-2 py-1 rounded-md cursor-pointer bg-blue-500 text-white hover:bg-blue-600">
                  Pay now
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
