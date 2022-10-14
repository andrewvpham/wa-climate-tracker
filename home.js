import React, { Component, useState } from "react";
import { Button } from "@react-native-material/core";
import { Text } from "@react-native-material/core";
import { Box } from "@react-native-material/core";



import { NativeRouter, Route, Link } from "react-router-native";

function Home() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Text variant="h4" style={{ margin: 16 }}>
                AQI Data
            </Text>
            <Button title="Click Me" onPress={() => alert("🎉🎉🎉")}/>
        </Box>
    );
}

export default Home;