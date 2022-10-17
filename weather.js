import React, { Component, useState } from "react";
import { Button } from "@react-native-material/core";
import { Text } from "@react-native-material/core";
import { Box } from "@react-native-material/core";
import Service from "./service/apiservice"
import { NativeRouter, Route, Link } from "react-router-native";

function Weather() {
    const [apiLoaded, setApiLoaded] = React.useState(false);
    const [apiData, setApiData] = React.useState(null);

    const fetchApiData = async () => {
        const newdata = await Service.getWeather()
        setApiData(newdata.data[0].temp);
      }

    if(apiLoaded==false) {
        fetchApiData();
        setApiLoaded(true);
    }

    //data[0].temp
    return (
        <Box>
            <Text variant="h6" style={{ margin: 16 }}>
                Seattle current temperature:                
            </Text>
            <Text fontSize="12" style={{ margin: 16 }}>
            Celsius: {apiData}
            {'\n'} 
            Farenheit: {(apiData * 9/5)+32}
            </Text>
            
        </Box>
        
    );
}

export default Weather;