import React, { Component, useState } from "react";
import { Button } from "@react-native-material/core";
import { Text } from "@react-native-material/core";
import { Box } from "@react-native-material/core";
import Service from "./service/apiservice"
import { Image, ScrollView} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { Divider } from "@react-native-material/core";

const placeholder = {
    "time": "null",
    "href": "null",
    "links": {
        "self": {
            "href": "null"
        },
        "next": {
            "href": "null"
        }
    },
    "took": "null",
    "totalCount": "null",
    "count": "null",
    "data": [
        {
            "id": "null",
            "score": "null",
            "fields": {
                "title": "null"
            },
            "href": "null",
        },
        {
            "id": "null",
            "score": "null",
            "fields": {
                "title": "null"
            },
            "href": "null"
        },
        {
            "id": "null",
            "score": "null",
            "fields": {
                "title": "null"
            },
            "href": "null"
        },
        {
            "id": "null",
            "score": "null",
            "fields": {
                "title": "null"
            },
            "href": "null"
        },
        {
            "id": "null",
            "score": "null",
            "fields": {
                "title": "null"
            },
            "href": "null"
        },
        {
            "id": "null",
            "score": "null",
            "fields": {
                "title": "null"
            },
            "href": "null"
        },
        {
            "id": "null",
            "score": "null",
            "fields": {
                "title": "null"
            },
            "href": "null"
        },
        {
            "id": "null",
            "score": "null",
            "fields": {
                "title": "null"
            },
            "href": "null"
        },
        {
            "id": "null",
            "score": "null",
            "fields": {
                "title": "null"
            },
            "href": "null"
        },
        {
            "id": "null",
            "score": "null",
            "fields": {
                "title": "null"
            },
            "href": "null"
        }
    ]
}

function Newsfeed() {
    const [apiLoaded, setApiLoaded] = React.useState(false);
    const [apiData, setApiData] = React.useState(placeholder);

    const fetchApiData = async () => {
        const newdata = await Service.getNewsFeed()
        setApiData(newdata);
      }

    if(apiLoaded==false) {
        fetchApiData();
        setApiLoaded(true);
    }


    return (
        <ScrollView>
            <Box>
            <Text variant="h6" style={{ margin: 16 }}>
                Washington disaster and relief stories/articles
            </Text>
            <Text fontSize="12" style={{ margin: 16 }}>
            {JSON.stringify(apiData.data[0].fields.title)}
            {'\n'} 
            {JSON.stringify(apiData.data[0].href)}
            </Text>
            <Divider style={{ margin: 16 }} />
            <Text fontSize="12" style={{ margin: 16 }}>
            {JSON.stringify(apiData.data[1].fields.title)}
            {'\n'} 
            {JSON.stringify(apiData.data[1].href)}
            </Text>
            <Divider style={{ margin: 16 }} />
            <Text fontSize="12" style={{ margin: 16 }}>
            {JSON.stringify(apiData.data[2].fields.title)}
            {'\n'} 
            {JSON.stringify(apiData.data[2].href)}
            </Text>
            <Divider style={{ margin: 16 }} />
            <Text fontSize="12" style={{ margin: 16 }}>
            {JSON.stringify(apiData.data[3].fields.title)}
            {'\n'} 
            {JSON.stringify(apiData.data[3].href)}
            </Text>
            <Divider style={{ margin: 16 }} />
            <Text fontSize="12" style={{ margin: 16 }}>
            {JSON.stringify(apiData.data[4].fields.title)}
            {'\n'} 
            {JSON.stringify(apiData.data[4].href)}
            </Text>
            <Divider style={{ margin: 16 }} />
            <Text fontSize="12" style={{ margin: 16 }}>
            {JSON.stringify(apiData.data[5].fields.title)}
            {'\n'} 
            {JSON.stringify(apiData.data[5].href)}
            </Text>
            <Divider style={{ margin: 16 }} />
            <Text fontSize="12" style={{ margin: 16 }}>
            {JSON.stringify(apiData.data[6].fields.title)}
            {'\n'} 
            {JSON.stringify(apiData.data[6].href)}
            </Text>
            <Divider style={{ margin: 16 }} />
            <Text fontSize="12" style={{ margin: 16 }}>
            {JSON.stringify(apiData.data[7].fields.title)}
            {'\n'} 
            {JSON.stringify(apiData.data[7].href)}
            </Text>
            <Divider style={{ margin: 16 }} />
            <Text fontSize="12" style={{ margin: 16 }}>
            {JSON.stringify(apiData.data[8].fields.title)}
            {'\n'} 
            {JSON.stringify(apiData.data[8].href)}
            </Text>
            <Divider style={{ margin: 16 }} />
            <Text fontSize="12" style={{ margin: 16 }}>
            {JSON.stringify(apiData.data[9].fields.title)}
            {'\n'} 
            {JSON.stringify(apiData.data[9].href)}
            </Text>
            <Divider style={{ margin: 16 }} />

        </Box>
        </ScrollView>
        
        
    );
}

export default Newsfeed;