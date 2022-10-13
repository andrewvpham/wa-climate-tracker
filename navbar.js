import React, { Component, useState } from "react";
import { Button } from "@react-native-material/core";


import { NativeRouter, Route, Link } from "react-router-native";

function Navbar() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Button title="Click Me" onPress={() => alert("🎉🎉🎉")}/>
    );
}

export default Navbar;