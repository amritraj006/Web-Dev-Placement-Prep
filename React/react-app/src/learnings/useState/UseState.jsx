import { useState } from 'react'

export const UseState = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState([]);

const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = [];

    if (
        formData.name.trim() === "" ||
        formData.email.trim() === "" ||
        formData.password.trim() === ""
    ) {
        newErrors.push("Please fill all the fields");
    }

    if (!formData.email.includes("@gmail.com")) {
        newErrors.push("Invalid Email");
    }

    if (formData.password.length < 8) {
        newErrors.push("Password must be at least 8 characters long");
    }

    setErrors(newErrors);

    if (newErrors.length > 0) {
        return;
    }

    alert("Form Data Submitted");
    console.log(formData);

    setFormData({
        name: "",
        email: "",
        password: ""
    });

    setErrors([]);
};

  return (
    <div>
        Name
        <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
/>
Email
<input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
/>
Age
<input
    type="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
/>

<button onClick={handleSubmit}>Submit</button>

<ol>
    {errors.map((item, index) => (
        <li style={{
            color: "red"
        }} key={index}>{item}</li>
    ))}
</ol>
    </div>
  )
}
