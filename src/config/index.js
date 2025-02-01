// export const registerFormControls=[
//     {
//         name: 'userName',
//         label: 'User Name',
//         placeholder: 'Enter your user name',
//         type: 'text',
//         componentType : 'input'
//     },
//     {
//         name: 'email',
//         label: 'Email',
//         placeholder: 'Enter your email',
//         type: 'email',
//         componentType : 'input'
//     },
//     {
//         name: 'password',
//         label: 'Password',
//         placeholder: 'Enter your password',
//         type: 'password',
//         componentType : 'input'
//     },
// ]
export const registerFormControls = [
  {
    name: 'userName',
    label: 'User Name',
    placeholder: 'Enter Username',
    type: 'text',
    componentType: 'input'
},
  {
      name: 'fullName',
      label: 'Full Name',
      placeholder: 'Enter your full name',
      type: 'text',
      componentType: 'input'
  },
  {
      name: 'email',
      label: 'Email Address',
      placeholder: 'Enter your email address',
      type: 'email',
      componentType: 'input'
  },
  {
      name: 'mobileNumber',
      label: 'Mobile Number',
      placeholder: 'Enter your mobile number',
      type: 'tel',
      componentType: 'input'
  },
  {
      name: 'aadhaarNumber',
      label: 'Aadhaar Number',
      placeholder: 'Enter your Aadhaar number',
      type: 'number',
      componentType: 'input'
  },
  {
      name: 'dob',
      label: 'Date of Birth',
      placeholder: 'Select your date of birth',
      type: 'date',
      componentType: 'input'
  },
  {
      name: 'gender',
      label: 'Gender',      
      componentType: 'select',
      options: [
        { id: "male", label: "Male" },
        { id: "female", label: "Female" },
        { id: "other", label: "Other" },
       
      ],
  },
  {
      name: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      type: 'password',
      componentType: 'input'
  },
  {
      name: 'confirmPassword',
      label: 'Confirm Password',
      placeholder: 'Re-enter your password',
      type: 'password',
      componentType: 'input'
  },
  {
    name: 'role',
    label: 'Select Role',      
    componentType: 'select',
    options: [
      { id: "user", label: "User" },
      { id: "vendor", label: "Vendor" },
     
     
    ],
},


];


export const loginFormControls=[
    
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        type: 'email',
        componentType : 'input'
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        type: 'password',
        componentType : 'input'
    },
]


export const addProductFormElements = [
    {
      label: "Title",
      name: "title",
      componentType: "input",
      type: "text",
      placeholder: "Enter product title",
    },
    {
      label: "Description",
      name: "description",
      componentType: "textarea",
      placeholder: "Enter product description",
    },
    {
      label: "Category",
      name: "category",
      componentType: "select",
      options: [
        { id: "men", label: "Men" },
        { id: "women", label: "Women" },
        { id: "kids", label: "Kids" },
        { id: "accessories", label: "Accessories" },
        { id: "footwear", label: "Footwear" },
      ],
    },
    {
      label: "Brand",
      name: "brand",
      componentType: "select",
      options: [
        { id: "nike", label: "Nike" },
        { id: "adidas", label: "Adidas" },
        { id: "puma", label: "Puma" },
        { id: "levi", label: "Levi's" },
        { id: "zara", label: "Zara" },
        { id: "h&m", label: "H&M" },
      ],
    },
    {
      label: "Price",
      name: "price",
      componentType: "input",
      type: "number",
      placeholder: "Enter product price",
    },
    {
      label: "Sale Price",
      name: "salePrice",
      componentType: "input",
      type: "number",
      placeholder: "Enter sale price (optional)",
    },
    {
      label: "Total Stock",
      name: "totalStock",
      componentType: "input",
      type: "number",
      placeholder: "Enter total stock",
    },
  ];