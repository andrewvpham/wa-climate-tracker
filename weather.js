import React, { Component, useState } from "react";
import { Button } from "@react-native-material/core";
import { Text } from "@react-native-material/core";
import { Box } from "@react-native-material/core";
import Service from "./service/apiservice"
import { NativeRouter, Route, Link } from "react-router-native";

function Weather() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Text variant="h6" style={{ margin: 16 }}>
                Nothing here yet!
            </Text>
        </Box>
        
    );
}

export default Weather;