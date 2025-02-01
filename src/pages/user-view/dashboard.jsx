import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();





    useEffect(() => {
        // Fetch main categories
        axios
            .get("http://localhost:5000/api/admin/get-categories")
            .then((response) => setCategories(response.data))
            .catch((error) => console.error("Error fetching categories:", error));
    }, []);


    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        // Fetch subcategories for the selected category
        axios
            .get(
                `http://localhost:5000/api/admin/categories/${category.id}/subcategories`
            )
            .then((response) => setSubCategories(response.data))
            .catch((error) => console.error("Error fetching subcategories:", error));
    };

    const handleProceedClick = (subCategory) => {
        // Navigate to services page
        navigate(`/user/services/${subCategory.id}`);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-6 md:p-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h1>

            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Main Categories</h2>
                <div className="flex flex-wrap gap-4">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            onClick={() => handleCategoryClick(category)}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md focus:ring focus:ring-blue-300"
                        >
                            {category.name}
                        </Button>
                    ))}
                </div>
            </div>

            {selectedCategory && (
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Subcategories for {selectedCategory.name}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {subCategories.map((subCategory) => (
                            <Card key={subCategory.id} className="shadow-md">
                                <CardContent className="p-4">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        {subCategory.name}
                                    </h3>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        onClick={() => handleProceedClick(subCategory)}
                                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 w-full rounded-lg"
                                    >
                                        Proceed
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDashboard;
