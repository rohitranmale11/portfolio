import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom"; // useParams to get serviceId

const ServiceFormPage = () => {
    const { serviceId } = useParams(); // Get service ID from the URL params
    const [service, setService] = useState(null);
    const [formFields, setFormFields] = useState([]);

    useEffect(() => {
        if (serviceId) {
            // Fetch the service details based on the serviceId
            axios
                .get(`http://localhost:5000/api/admin/service/services/${serviceId}`)
                .then((response) => setService(response.data))
                .catch((error) => console.error("Error fetching service:", error));

            // Fetch form fields for the selected service
            axios
                .get(`http://localhost:5000/api/admin/service/services/${serviceId}/fields`)
                .then((response) => setFormFields(response.data))
                .catch((error) => console.error("Error fetching form fields:", error));
        }
    }, [serviceId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Form Data:", data);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-6 md:p-12">
            {service && (
                <>
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">{service.name} Form</h1>
                    <form
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg p-6"
                        onSubmit={handleSubmit}
                    >
                        {formFields.map((field) => (
                            <div key={field.id} className="flex flex-col">
                                <label htmlFor={field.field_name} className="text-gray-700 font-medium mb-2">
                                    {field.field_name}
                                </label>
                                <input
                                    id={field.field_name}
                                    name={field.field_name}
                                    type="text"
                                    className="border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                                    placeholder={`Enter ${field.field_name}`}
                                />
                            </div>
                        ))}
                        <button
                            type="submit"
                            className="col-span-full  text-white py-2 px-4 rounded-lg shadow-md focus:ring focus:ring-blue-300"
                        >
                            Submit
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default ServiceFormPage;
