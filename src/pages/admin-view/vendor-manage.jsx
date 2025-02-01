import React, { useEffect, useState } from "react";
import axios from "axios";
import { Check, X, Trash } from "lucide-react";

const AdminVendorManagement = () => {
  const [vendors, setVendors] = useState([]);
  const [activeTab, setActiveTab] = useState("pending");

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/vendors/get-vendors");
        setVendors(response.data);
      } catch (error) {
        console.error("Error fetching vendors:", error);
      }
    };

    fetchVendors();
  }, []);

  const handleStatusChange = async (id, newStatus) => {

    const response = confirm("Are you sure you want to update vendor status");
    if (response) {

      try {
        await axios.put("http://localhost:5000/api/admin/vendors/update-status", { id, status: newStatus });
        setVendors(vendors.map((vendor) => (vendor.id === id ? { ...vendor, status: newStatus } : vendor)));
      } catch (error) {
        console.error("Error updating vendor status:", error);
      }

        alert("Updating vendor status successfully.");



    } else {
        alert("Action canceled.");
    }

   
  };

  const handleDeleteVendor = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/vendors/delete-vendor/${id}`);
      setVendors(vendors.filter((vendor) => vendor.id !== id));
    } catch (error) {
      console.error("Error deleting vendor:", error);
    }
  };

  const filteredVendors = vendors.filter((vendor) => vendor.status === activeTab);

  return (
    <div className="p-6">
      <div className="mb-4 flex space-x-4">
        <button
          className={`py-2 px-4 rounded-md ${activeTab === "pending" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
          onClick={() => setActiveTab("pending")}
        >
          Pending Vendors
        </button>
        <button
          className={`py-2 px-4 rounded-md ${activeTab === "approved" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
          onClick={() => setActiveTab("approved")}
        >
          Approved Vendors
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Mobile</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Action</th>
              <th className="px-6 py-3 text-left">Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredVendors.map((vendor) => (
              <tr key={vendor.id} className="border-t">
                <td className="px-6 py-4">{vendor.fullName}</td>
                <td className="px-6 py-4">{vendor.email}</td>
                <td className="px-6 py-4">{vendor.mobileNumber}</td>
                <td className="px-6 py-4">
                  <select
                    className="border rounded-md py-1 px-2"
                    value={vendor.status}
                    onChange={(e) => handleStatusChange(vendor.id, e.target.value)}
                  >
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  {vendor.status === "approved" ? (
                    <button
                      className="bg-red-500 text-white rounded-sm p-2"
                      onClick={() => handleStatusChange(vendor.id, "pending")}
                    >
                      <X size={16} />
                    </button>
                  ) : (
                    <button
                      className="bg-green-500 text-white rounded-sm p-2"
                      onClick={() => handleStatusChange(vendor.id, "approved")}
                    >
                      <Check size={16} />
                    </button>
                  )}
                </td>
                <td className="px-6 py-4">
                  <button
                    className="bg-red-600 text-white rounded-sm p-2"
                    onClick={() => handleDeleteVendor(vendor.id)}
                  >
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminVendorManagement;