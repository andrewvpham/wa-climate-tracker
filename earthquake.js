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

    const fetchApiData = async () => {
        const newdata = await Service.getEarthQuakeData()
        console.log("Recent earthquake location: " + newdata.features[0].properties.title)
        console.log("Mag: " + newdata.features[0].properties.mag)
        setApiData(newdata);
        /*const listItems = newdata.features.map((number) =>
        <Text>{newdata.features[number].properties.title}</Text>
        ); */
        //setRenderData(listItems); 
        const listItems = <Text>{newdata.features[0].properties.title}</Text>;
        setRenderData(listItems);
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