import React from "react"
import { Route, Routes } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/customers" element={<CustomerList/>}/>

            <Route path="/employees" element={<EmployeeList/>}/>

            <Route path="/tickets" element={<TicketList/>}/>
        </Routes>
    )
}