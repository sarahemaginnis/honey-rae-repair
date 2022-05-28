import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialties, setSpecial] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(() => {
        const justSpecialties = employees.map(employee => employee.specialty) // use .map() to get the specialty of each employee
        setSpecial(justSpecialties.join(", ")) //update a state variable to be a comma-separated string
    }, [employees])

    return (
        <>
            <div>
                <button onClick={() => history.push("/employees/create")}>Hire Employee</button>
            </div>
            <div>
                Specialties: {specialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}><Link to={`/employees/${employee.id}`}>{employee.name}</Link></p>
                    }
                )
            }
        </>
    )
}