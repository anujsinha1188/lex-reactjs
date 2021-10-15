import React, { useState, useEffect } from 'react';
import axios from 'axios';
const RHUED4Employees = () => {
    const [employees, setEmployees] = useState([
    ])
    const addEmployee = () => {
        setEmployees([...employees, { empId: 6789, name: 'Sam', designation: 'TL' }]);
    };
    useEffect(() => {
        axios.get('http://localhost:4000/employees')
            .then(result =>
                setEmployees(result.data)
            )
    }, []);

    return (<React.Fragment>
        <table style={{ width: '60%' }} className='table'>
            <thead className="thead-light">
                <tr>
                    <th>EmpID</th>
                    <th>Name</th>
                    <th>Designation</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => {
                    return (<tr key={employee.empId}>
                        <td>{employee.empId}</td>
                        <td>{employee.name}</td>
                        <td>{employee.designation}</td>
                    </tr>)
                })
                }
            </tbody>
        </table>
        <button onClick={addEmployee}>Add an Employee</button>
    </React.Fragment>)
}
export default RHUED4Employees;
