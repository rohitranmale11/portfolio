import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';

const AdminServiceManagement = () => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [services, setServices] = useState([]);
    const [formFields, setFormFields] = useState([]);
    const [newCategory, setNewCategory] = useState('');
    const [newSubCategory, setNewSubCategory] = useState('');
    const [newService, setNewService] = useState('');
    const [newFormField, setNewFormField] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [editCategory, setEditCategory] = useState(null);
    const [editCategoryName, setEditCategoryName] = useState('');
    const [editingCategory, setEditingCategory] = useState(null);
    const [editingSubCategory, setEditingSubCategory] = useState(null);
    const [editingService, setEditingService] = useState(null);
    const [selectedService, setSelectedService] = useState(null);

         // Reset the data when a section is selected and has no data
  useEffect(() => {
    if (!selectedCategory) {
      setSubCategories([]);
      setServices([]);
    } else {
      // Reset subcategories and services if a new category is selected
      setSubCategories([]);
      setServices([]);
    }
    
    if (!selectedSubCategory) {
      setServices([]);
    }
  }, [selectedCategory, selectedSubCategory]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/admin/get-categories')
            .then(response => setCategories(response.data))
            .catch(error => console.error("Error fetching categories:", error));
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            axios.get(`http://localhost:5000/api/admin/categories/${selectedCategory.id}/subcategories`)
                .then(response => setSubCategories(response.data))
                .catch(error => console.error("Error fetching subcategories:", error));
        }
    }, [selectedCategory]);

    useEffect(() => {
        if (selectedSubCategory) {
            axios.get(`http://localhost:5000/api/admin/service/services/${selectedSubCategory.id}`)
                .then(response => setServices(response.data))
                .catch(error => console.error("Error fetching services:", error));
        }
    }, [selectedSubCategory]);

    const handleCategorySubmit = () => {
        if (newCategory) {
            axios.post('http://localhost:5000/api/admin/categories', { name: newCategory })
                .then(response => {
                    setCategories(prevCategories => [...prevCategories, response.data]);
                    setNewCategory('');
                })
                .catch(error => console.error("Error adding category:", error));
        }
    };

    const handleSubCategorySubmit = () => {
        if (newSubCategory && selectedCategory) {
            axios.post('http://localhost:5000/api/admin/categories', { name: newSubCategory, parent_id: selectedCategory.id })
                .then(response => {
                    setSubCategories(prevSubCategories => [...prevSubCategories, response.data]);
                    setNewSubCategory('');
                })
                .catch(error => console.error("Error adding subcategory:", error));
        }
    };

    const handleServiceSubmit = () => {
        if (newService && selectedSubCategory) {
            axios.post('http://localhost:5000/api/admin/service/services', { name: newService, subcategory_id: selectedSubCategory.id })
                .then(response => {
                    setServices(prevServices => [...prevServices, response.data]);
                    setNewService('');
                })
                .catch(error => console.error("Error adding service:", error));
        }
    };

    const handleFormFieldSubmit = () => {
        if (newFormField && selectedSubCategory) {
            axios.post(`http://localhost:5000/api/admin/service/services/${selectedSubCategory.id}/submit`,
                { serviceId: selectedSubCategory.id, formData: { field: newFormField } })
                .then(response => {
                    setFormFields(prevFormFields => [...prevFormFields, response.data]);
                    setNewFormField('');
                })
                .catch(error => console.error("Error adding form field:", error));
        }
    };

    const handleUpdateCategory = (category) => {
        axios
          .put(`http://localhost:5000/api/admin/categories/${category.id}`, {
            name: category.name,
            parent_id: category.parent_id,
          })
          .then(() => {
            setCategories((prev) =>
              prev.map((cat) => (cat.id === category.id ? { ...cat, name: category.name } : cat))
            );
            setEditingCategory(null);
          })
          .catch((error) => console.error('Error updating category:', error));
      };
    
      const handleDeleteCategory = (id) => {
        axios
          .delete(`http://localhost:5000/api/admin/categories/${id}`)
          .then(() => {
            setCategories((prev) => prev.filter((cat) => cat.id !== id));
            if (selectedCategory?.id === id) {
              setSelectedCategory(null);
              setSubCategories([]);
            }
          })
          .catch((error) => console.error('Error deleting category:', error));
      };
    
      const handleUpdateSubCategory = (subCategory) => {
        axios
          .put(`http://localhost:5000/api/admin/categories/${subCategory.id}`, {
            name: subCategory.name,
            parent_id: subCategory.parent_id,
          })
          .then(() => {
            setSubCategories((prev) =>
              prev.map((sub) => (sub.id === subCategory.id ? { ...sub, name: subCategory.name } : sub))
            );
            setEditingSubCategory(null);
          })
          .catch((error) => console.error('Error updating subcategory:', error));
      };
    
      const handleDeleteSubCategory = (id) => {
        axios
          .delete(`http://localhost:5000/api/admin/categories/${id}`)
          .then(() => {
            setSubCategories((prev) => prev.filter((sub) => sub.id !== id));
          })
          .catch((error) => console.error('Error deleting subcategory:', error));
      };





   // Function to handle selecting a subcategory
const handleSelectSubCategory = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setSelectedService(null); // Clear selected service when a new subcategory is selected
  };
  
  // Function to handle selecting a service
  const handleSelectService = (service) => {
    setSelectedService(service);
  };
  
  // Function to handle adding a new service
  
  
  // Function to handle updating a service
  const handleUpdateService = (updatedService) => {
    setServices((prev) =>
      prev.map((srv) => (srv.id === updatedService.id ? updatedService : srv))
    );
    setEditingService(null); // Clear editing state after update
  };
  
  // Function to handle deleting a service
 

    const handleSaveService = (service) => {
        axios.put(`http://localhost:5000/api/admin/service/services/${service.id}`, { name: editServiceName })
            .then(() => {
                setServices((prev) => prev.map((serv) =>
                    serv.id === service.id ? { ...serv, name: editServiceName } : serv
                ));
                setEditingService(null); // Close the edit mode
            })
            .catch((error) => console.error('Error updating service:', error));
    };

 

   

    const handleDeleteService = (id) => {
        axios.delete(`http://localhost:5000/api/admin/service/services/${id}`)
            .then(() => {
                setServices((prev) => prev.filter((service) => service.id !== id));
            })
            .catch((error) => console.error('Error deleting service:', error));
    };
return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Service Management</h1>

            {/* Navigation Bar */}
            <div className="mb-8 flex gap-6">
                <Button onClick={() => setSelectedCategory(null)}>Categories</Button>
                {selectedCategory && <Button onClick={() => setSelectedSubCategory(null)}>Subcategories</Button>}
                {selectedSubCategory && <Button onClick={() => setServices([])}>Services</Button>}
                {selectedSubCategory && <Button onClick={() => setFormFields([])}>Forms</Button>}
            </div>

            {/* Categories Section */}
            {!selectedCategory && (
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Categories</h2>
                    <div className="flex gap-4 mb-4">
                        <input
                            type="text"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            placeholder="Add new category"
                            className="flex-1 border rounded-lg p-2"
                        />
                        <Button onClick={handleCategorySubmit}>Add Category</Button>
                    </div>
                    <ul className="space-y-3">
                        {categories.length === 0 ? (
                            <li className="text-gray-500">No data available in the categories list.</li>
                        ) : (
                            categories.map((category) => (
                                <li key={category.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
                                    {editingCategory === category.id ? (
                                        <input
                                            type="text"
                                            value={category.name}
                                            onChange={(e) =>
                                                setCategories((prev) =>
                                                    prev.map((cat) =>
                                                        cat.id === category.id ? { ...cat, name: e.target.value } : cat
                                                    )
                                                )
                                            }
                                            className="border rounded-lg p-2 flex-1 mr-4"
                                        />
                                    ) : (
                                        <span className="text-gray-800 font-medium">{category.name}</span>
                                    )}
                                    <div className="flex gap-2">
                                        {editingCategory === category.id ? (
                                            <>
                                                <Button onClick={() => handleUpdateCategory(category)}>Save</Button>
                                                <Button onClick={() => setEditingCategory(null)}>Cancel</Button>
                                            </>
                                        ) : (
                                            <>
                                                <Button onClick={() => setEditingCategory(category.id)}>Edit</Button>
                                                <Button variant="destructive" onClick={() => handleDeleteCategory(category.id)}>
                                                    Delete
                                                </Button>
                                            </>
                                        )}
                                        <Button onClick={() => setSelectedCategory(category)}>Manage</Button>
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            )}

            {/* Subcategories Section */}
            {selectedCategory && !selectedSubCategory && (
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Subcategories for {selectedCategory.name}</h2>
                    <div className="flex gap-4 mb-4">
                        <input
                            type="text"
                            value={newSubCategory}
                            onChange={(e) => setNewSubCategory(e.target.value)}
                            placeholder="Add new subcategory"
                            className="flex-1 border rounded-lg p-2"
                        />
                        <Button onClick={handleSubCategorySubmit}>Add Subcategory</Button>
                    </div>
                    <ul className="space-y-3">
                        {subCategories.length === 0 ? (
                            <li className="text-gray-500">No data available in the subcategories list.</li>
                        ) : (
                            subCategories.map((subCategory) => (
                                <li key={subCategory.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
                                    {editingSubCategory === subCategory.id ? (
                                        <input
                                            type="text"
                                            value={subCategory.name}
                                            onChange={(e) =>
                                                setSubCategories((prev) =>
                                                    prev.map((sub) =>
                                                        sub.id === subCategory.id ? { ...sub, name: e.target.value } : sub
                                                    )
                                                )
                                            }
                                            className="border rounded-lg p-2 flex-1 mr-4"
                                        />
                                    ) : (
                                        <span className="text-gray-800 font-medium">{subCategory.name}</span>
                                    )}
                                    <div className="flex gap-2">
                                        {editingSubCategory === subCategory.id ? (
                                            <>
                                                <Button onClick={() => handleUpdateSubCategory(subCategory)}>Save</Button>
                                                <Button onClick={() => setEditingSubCategory(null)}>Cancel</Button>
                                            </>
                                        ) : (
                                            <>
                                                <Button onClick={() => setEditingSubCategory(subCategory.id)}>Edit</Button>
                                                <Button variant="destructive" onClick={() => handleDeleteSubCategory(subCategory.id)}>
                                                    Delete
                                                </Button>
                                                <Button onClick={() => setSelectedSubCategory(subCategory)}>Manage</Button>
                                            </>
                                        )}
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            )}

            {/* Services Section */}
            {selectedSubCategory && !selectedService && (
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Services for {selectedSubCategory.name}</h2>
                    <div className="flex gap-4 mb-4">
                        <input
                            type="text"
                            value={newService}
                            onChange={(e) => setNewService(e.target.value)}
                            placeholder="Add new service"
                            className="flex-1 border rounded-lg p-2"
                        />
                        <Button onClick={handleServiceSubmit}>Add Service</Button>
                    </div>
                    <ul className="space-y-3">
                        {services.length === 0 ? (
                            <li className="text-gray-500">No data available in the services list.</li>
                        ) : (
                            services.map((service) => (
                                <li key={service.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
                                    {editingService === service.id ? (
                                        <input
                                            type="text"
                                            value={service.name}
                                            onChange={(e) =>
                                                setServices((prev) =>
                                                    prev.map((srv) =>
                                                        srv.id === service.id ? { ...srv, name: e.target.value } : srv
                                                    )
                                                )
                                            }
                                            className="border rounded-lg p-2 flex-1 mr-4"
                                        />
                                    ) : (
                                        <span className="text-gray-800 font-medium">{service.name}</span>
                                    )}
                                    <div className="flex gap-2">
                                        {editingService === service.id ? (
                                            <>
                                                <Button onClick={() => handleUpdateService(service)}>Save</Button>
                                                <Button onClick={() => setEditingService(null)}>Cancel</Button>
                                            </>
                                        ) : (
                                            <>
                                                <Button onClick={() => setEditingService(service.id)}>Edit</Button>
                                                <Button variant="destructive" onClick={() => handleDeleteService(service.id)}>
                                                    Delete
                                                </Button>
                                                <Button onClick={() => setSelectedService(service)}>Manage</Button>
                                            </>
                                        )}
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            )}

            {/* Forms Section */}
            {formFields.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Forms</h2>
                    <form>
                        <input
                            type="text"
                            value={newFormField}
                            onChange={(e) => setNewFormField(e.target.value)}
                            placeholder="Add form field"
                            className="flex-1 border rounded-lg p-2 mb-4"
                        />
                        <Button onClick={handleFormFieldSubmit}>Add Form Field</Button>
                    </form>
                    <ul className="space-y-3">
                        {formFields.map((formField) => (
                            <li key={formField.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
                                <span className="text-gray-800 font-medium">{formField.field}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </div>
);


    
};

export default AdminServiceManagement;
