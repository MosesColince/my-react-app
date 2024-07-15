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

     
      