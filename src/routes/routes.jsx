import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateAccountPage from "../pages/CreateAccountPage";
import PersonalInfoPage from "../pages/PersonalInfoPage";
import FinancialInfoPage from "../pages/FinancialInfioPage";
import UserAuthorization from "../utils/privateRoute";

const UserRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <UserAuthorization>
                        <CreateAccountPage />
                    </UserAuthorization>
                }
            />
            <Route
                path="/personal-info"
                element={
                    <UserAuthorization>
                        <PersonalInfoPage />
                    </UserAuthorization>
                }
            />
            <Route
                path="/financial-info"
                element={
                    <UserAuthorization>
                        <FinancialInfoPage />
                    </UserAuthorization>
                }
            />
        </Routes>
    );
};

export default UserRoutes;
