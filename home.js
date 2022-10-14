import React, { Component, useState } from "react";
import { Button } from "@react-native-material/core";
import { Text } from "@react-native-material/core";
import { Box } from "@react-native-material/core";
import Service from "./service/apiservice"


import { NativeRouter, Route, Link } from "react-router-native";

function Home() {
    const [value, setValue] = React.useState('recents');
    const [apiLoaded, setApiLoaded] = React.useState(false);
    const [aqiData, setAqiData] = React.useState('AQI Data has not loaded yet');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const fetchPageSpeed = async () => {
        const newdata = await Service.getAqiData()
        setAqiData(newdata);        
      }

    if(apiLoaded==false) {
        fetchPageSpeed();
        setApiLoaded(true);
    }

    return (
        <Box>
            <Text variant="h4" style={{ margin: 16 }}>
                AQI Data
            </Text>
            <Text fontSize="12" style={{ margin: 16 }}>
                
                Seattle AQI: {JSON.stringify(aqiData.data)}
            </Text>
        </Box>
    );
}

export default Home;