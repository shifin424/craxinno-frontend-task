import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateAccountPage from "../pages/CreateAccountPage";
import PersonalInfoPage from "../pages/PersonalInfoPage";
import FinancialInfoPage from "../pages/FinancialInfioPage";


const userRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<CreateAccountPage/> }></Route>
                <Route path="/personal-info" element={<PersonalInfoPage/>}></Route>
                <Route path="/financial-info" element={<FinancialInfoPage/>}></Route>
            </Routes>
        </>
    )
}


export default userRoutes;