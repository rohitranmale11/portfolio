import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";

const ServicesPage = () => {
    const { subCategoryId } = useParams(); // Get subcategory ID from the URL
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (subCategoryId) {
            // Fetch services for the selected subcategory
            axios
                .get(`http://localhost:5000/api/admin/service/services/${subCategoryId}`)
                .then((response) => setServices(response.data))
                .catch((error) => console.error("Error fetching services:", error));
        }
    }, [subCategoryId]);

    const handleServiceClick = (service) => {
        // Navigate to the service form page with the service ID
        navigate(`/user/service-form/${service.id}`, { state: { service } });
    };
    

    return (
        <div className="bg-gray-100 min-h-screen p-6 md:p-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Services for Subcategory {subCategoryId}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service) => (
                    <Card
                        key={service.id}
                        className="shadow-lg hover:shadow-xl transition-shadow duration-300"
                        onClick={() => handleServiceClick(service)}
                    >
                        <CardContent className="p-4 flex flex-col items-center">
                            <Settings size={48} className="text-blue-500 mb-2" />
                            <h3 className="text-lg font-semibold text-gray-800">
                                {service.name}
                            </h3>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
