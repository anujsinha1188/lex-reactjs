import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class ConditionalRendering extends React.Component {
    render() {
        var employees = [
            { empId: 1234, name: 'Jack', designation: 'SE', salary: 23000 },
            { empId: 4567, name: 'Johnson', designation: 'SSE', salary: 15000 },
            { empId: 8910, name: 'Sachin', designation: 'TA', salary: 30000 }
        ]

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
                        return employee.salary > 15000 ? (<tr key={employee.empId}>
                            <td>{employee.empId}</td>
                            <td>{employee.name}</td>
                            <td>{employee.designation}</td>
                        </tr>) : null
                    })
                    }
                </tbody>
            </table>
        </React.Fragment>)
    }
}
export default ConditionalRendering;