import React, { useState } from "react";
import "./App.css";

const Register = () => {
  const [employees, setEmployees] = useState([]);
  const [formInfo, setFormInfo] = useState({
    emailAddress: '',
    phoneNumber: '',
    image: '', 
    position: '',
    id: '',
  });

  const Submittion = (event) => {
    event.preventDefault();
    const newEmployee = {
      emailAddress: formInfo.emailAddress,
      phoneNumber: formInfo.phoneNumber,
      image: formInfo.image,
      position: formInfo.position,
      id: formInfo.id, 
    };
    console.log('The form has been submitted:', formInfo);
    
    setEmployees([...employees, newEmployee]);
    // Clear the form after submission
    setFormInfo({
      emailAddress: '',
      phoneNumber: '',
      image: '',
      position: '',
      id: '',
    });
  };

  const InputInfo = (event) => {
    const { name, value } = event.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  const handleEditEmployee = (index) => {
    const employeeToEdit = employees[index];
    setFormInfo({
      emailAddress: employeeToEdit.emailAddress,
      phoneNumber: employeeToEdit.phoneNumber,
      image: employeeToEdit.image,
      position: employeeToEdit.position,
      id: employeeToEdit.id,
    });
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  const handleRemoveEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="register">
      <h2>REGISTER</h2>
      <form onSubmit={Submittion}>
        <div className="info">
          <div><strong>EMAIL</strong></div>
          <input
            type="email"
            name="emailAddress"
            placeholder="Email Address"
            value={formInfo.emailAddress}
            onChange={InputInfo}
          />
        </div>
        <div className="info">
          <div><strong>Cellphone Number</strong></div>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formInfo.phoneNumber}
            onChange={InputInfo}
          />
        </div>
        <div className="info">
        <div><strong>IMAGE</strong></div>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={InputInfo}
          />
        </div>
        <div className="info">
        <div><strong>POSITION</strong></div>
          <label></label>
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={formInfo.position}
            onChange={InputInfo}
          />
        </div>
        <div className="info">
        <div><strong>ID</strong></div>
          <input
            type="text"
            name="id"
            placeholder="ID"
            value={formInfo.id}
            onChange={InputInfo}
          />
        </div>
        <button type="submit" className="register_button">Register</button>
      </form>
      <hr />
      <h3>Employee List</h3>
      <ul className="employee_list">
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.emailAddress} - {employee.phoneNumber}
            <button className="edit_button" onClick={() => handleEditEmployee(index)}>Edit</button>
            <button className="remove_button" onClick={() => handleRemoveEmployee(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Register;
/*export default Register;
import React, { useState } from "react";

const AdminPortal = () => {
  const [employees, setEmployees] = useState([]);
  const [formInfo, setFormInfo] = useState({
    name: '',
    emailAddress: '',
    phoneNumber: '',
    image: '',
    position: '',
    id: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmployee = {
      name: formInfo.name,
      emailAddress: formInfo.emailAddress,
      phoneNumber: formInfo.phoneNumber,
      image: formInfo.image,
      position: formInfo.position,
      id: formInfo.id,
    };
    setEmployees([...employees, newEmployee]);
    // Clear the form after submission
    setFormInfo({
      name: '',
      emailAddress: '',
      phoneNumber: '',
      image: '',
      position: '',
      id: '',
    });
  };

  const handleEditEmployee = (index) => {
    // Implement editing functionality here
    // You can set the form fields with the selected employee details for editing
    // For example:
    const employeeToEdit = employees[index];
    setFormInfo({
      name: employeeToEdit.name,
      emailAddress: employeeToEdit.emailAddress,
      phoneNumber: employeeToEdit.phoneNumber,
      image: employeeToEdit.image,
      position: employeeToEdit.position,
      id: employeeToEdit.id,
    });
    // Remove the employee from the list after editing
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  const handleRemoveEmployee = (index) => {
    // Implement remove functionality here
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  return (
    <div>
      <h2>Admin Portal - Register Employees</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formInfo.name}
          onChange={handleInputChange}
          required
        />
        <label>Email Address:</label>
        <input
          type="email"
          name="emailAddress"
          value={formInfo.emailAddress}
          onChange={handleInputChange}
          required
        />
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formInfo.phoneNumber}
          onChange={handleInputChange}
          required
        />
        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={formInfo.image}
          onChange={handleInputChange}
        />
        <label>Position:</label>
        <input
          type="text"
          name="position"
          value={formInfo.position}
          onChange={handleInputChange}
          required
        />
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={formInfo.id}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Employee</button>
      </form>
      <hr />
      <h3>Employee List</h3>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.name} - {employee.emailAddress}
            <button onClick={() => handleEditEmployee(index)}>Edit</button>
            <button onClick={() => handleRemoveEmployee(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPortal;
*/