import React, { Component, useState } from "react";
import { Button } from "@react-native-material/core";
import { Text } from "@react-native-material/core";
import { Box } from "@react-native-material/core";
import Service from "./service/apiservice"
import { Image, ScrollView} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { Divider } from "@react-native-material/core";
import { render } from "react-dom";



function EarthQuake() {
    const [apiLoaded, setApiLoaded] = React.useState(false);
    const [apiData, setApiData] = React.useState();
    const [renderData, setRenderData] = React.useState(<Text>No data yet</Text>);

    const  convertEpochToSpecificTimezone = (timeEpoch, offset) =>{
        var d = new Date(timeEpoch);
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);  //This converts to UTC 00:00
        var nd = new Date(utc + (3600000*offset));
        return nd.toLocaleString();
    }

    const fetchApiData = async () => {
        const newdata = await Service.getEarthQuakeData()
        //console.log("Recent earthquake location: " + newdata.features[0].properties.title)
        //console.log("Mag: " + newdata.features[0].properties.mag)
        setApiData(newdata);

        const listItems2 = newdata.features.map((number) =>
        <Box>
            <Text>{number.properties.title}</Text>
            <Text>{convertEpochToSpecificTimezone(number.properties.time, -8)}</Text>
            <Divider style={{ margin: 16 }} />
        </Box>
              
               
        ); 
        //setRenderData(listItems); 
        const listItems = <Text>{newdata.features[0].properties.title}</Text>;
        //console.log(listItems2);
        setRenderData(listItems2);
      }

    
    
    
    if(apiLoaded==false) {
        fetchApiData();
        setApiLoaded(true);
    }


    return (
        <ScrollView>
        <Box>
            {renderData }

        </Box>
        </ScrollView>
        
        
    );
}

export default EarthQuake;