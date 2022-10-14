import React, { Component, useState } from "react";
import { Button } from "@react-native-material/core";
import { Text } from "@react-native-material/core";
import { Box } from "@react-native-material/core";
import Service from "./service/apiservice";
import { NativeRouter, Route, Link } from "react-router-native";

const placeholderData = {
    "status": "null data",
    "data": {
        "city": "Seattle",
        "state": "Washington",
        "country": "USA",
        "location": {
            "type": "Point",
            "coordinates": [
                -122.308628,
                47.568236
            ]
        },
        "current": {
            "pollution": {
                "ts": "null",
                "aqius": "null",
                "mainus": "null",
                "aqicn": null,
                "maincn": "null"
            },
            "weather": {
                "ts": "null",
                "tp": "null",
                "pr": "null",
                "hu": "null",
                "ws": "null",
                "wd": "null",
                "ic": "null"
            }
        }
    }
}

function Home() {
    const [value, setValue] = React.useState('recents');
    const [apiLoaded, setApiLoaded] = React.useState(false);
    const [aqiData, setAqiData] = React.useState(placeholderData);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const fetchAqiData = async () => {
        const newdata = await Service.getAqiData()
        setAqiData(newdata);        
      }

    if(apiLoaded==false) {
        fetchAqiData();
        setApiLoaded(true);
    }

    return (
        <Box>
            <Text variant="h6" style={{ margin: 16 }}>
                AQI Metrics for Seattle, WA
            </Text>
            <Text fontSize="12" style={{ margin: 16 }}>
                
                Seattle Current AQI: {JSON.stringify(aqiData.data.current.pollution.aqius)}
            </Text>
        </Box>
    );
}

export default Home;