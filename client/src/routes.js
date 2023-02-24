import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "components/login";
import Home from "components/home";
import VehicleRegistration from "components/vehicleRegistration";
import Container from "components/container";

const Way = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home open={open} setOpen={setOpen} />} path="/">
            <Route element={<Container />} index />
            <Route element={<Login />} path="/login" />
            <Route
              element={<VehicleRegistration open={open} setOpen={setOpen} />}
              path="/vehicleRegistration"
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Way;
