import React from "react";
import EmployeesInfo from "./EmployeesInfo";

const EmployeesList = ({emloyees, editEmployee, removeEmployee}) => {
    return(
        <ul>
            {emloyees.map((emloyees) => (
              <EmployeesInfo
              key = {emloyees.id}
              editEmployee ={editEmployee}
              emloyee = {emloyees}
              removeEmployee = {removeEmployee}
              />  
            ))}
        </ul>
    )
}
export default EmployeesList;