import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Eye,
  Cloud,
  TrendingUp,
  
} from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "March", "April", "May", "Jun", "July", "Aug", "Sep", "Oct","Nov","Dec" ],
    datasets: [
      {
        label: "User Requests",
        data: [65, 59, 80, 81, 56, 55, 58,65, 59, 80, ],
        fill: false,
        backgroundColor: "#4F46E5",
        borderColor: "#4F46E5",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "User Requests",
      },
    },
  };

  const stats = [
    { icon: <Users className="text-gray-400" />, label: "Total Users", value: "301", color: "text-blue-700" },
    { icon: <Eye className="text-gray-400" />, label: "Total Vendors", value: "152", color: "text-purple-700" },
    { icon: <Cloud className="text-gray-400" />, label: "Total Request", value: "100", color: "text-green-600" },
    { icon: <TrendingUp className="text-gray-400" />, label: "Total Earning", value: "5000", color: "text-red-600" },
  ];

 

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="flex flex-col items-center p-6 bg-white shadow-md rounded-2xl text-center hover:scale-105 transition-transform">
            <div className="mb-4 text-3xl">{stat.icon}</div>
            <h2 className={`${stat.color} text-3xl font-bold`}>{stat.value}</h2>
            <p className="text-gray-500">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Graph Section */}
      <Card className="bg-white p-6 shadow-md rounded-2xl mb-8 ">
        <h2 className="text-xl font-bold mb-4 text-center">User Request Graph</h2>
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1000px] md:w-3/4 lg:w-2/3 mx-auto">
            <Line data={data} options={options} />
          </div>
        </div>
      </Card>

   
    </div>
  );
};

export default AdminDashboard;