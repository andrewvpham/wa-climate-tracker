import * as React from 'react';
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NativeRouter, Route, Link, Routes} from "react-router-native";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Drawer } from 'react-native-material-drawer';
import { Button } from "@react-native-material/core";
import { Divider } from "@react-native-material/core";
import { ListItem } from "@react-native-material/core";

//Components
import Home from './home';
import Newsfeed from './newsfeed';
import Weather from './weather';


import { SafeAreaView, StatusBar  } from 'react-native';
import EarthQuake from './earthquake';


export default function App() {
  const [value, setValue] = React.useState('recents');
  const [appTitle, setAppTitle] = React.useState('AQI Data');
  const [drawerState, setDrawerState] = React.useState(false);
  const [theme, setTheme] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const switchState = () => {
    if(drawerState==false) {
      setDrawerState(true)
    }
    else {
      setDrawerState(false)
    }
  }

  const switchTheme = () => {
    if(drawerState==false) {
      setDrawerState(true)
    }
    else {
      setDrawerState(false)
    }
  }

  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
      
      <AppBar
      color="#4ed970"
      style={styles.appbar}
      title={appTitle}
      subtitle="Washington Climate Tracker"
      centerTitle={true}
      leading={props => (
      <IconButton onPress={switchState} icon={props => <Icon name="menu" {...props} />} {...props} />
      )}
      trailing={props => (
        <IconButton
          icon={props => <Icon name="dots-vertical" {...props} />}
          {...props}
        />
      )}>
       
      
    </AppBar>

    <Drawer
        open={drawerState}
        drawerContent={
        <View>
          <Link
            to="/"
            underlayColor="#ff0000"
            style={styles.navItem}
            onPress={() => { switchState(); setAppTitle('AQI Data');}}
            >
           <Text style={styles.menuitem}>AQI Data</Text>
           </Link>
           <Divider style={{ margin: 10 }} />
           <Link
            to="/newsfeed"
            underlayColor="#ff0000"
            style={styles.navItem}
            onPress={() => { switchState(); setAppTitle('News Feed');}}
            >
           <Text style={styles.menuitem}>News Feed</Text>
           </Link>
           <Divider style={{ margin: 10 }} />
           <Link
            to="/earthquake"
            underlayColor="#ff0000"
            style={styles.navItem}
            onPress={() => { switchState(); setAppTitle('Recent Earthquake Data');}}
            >
           <Text style={styles.menuitem}>Earthquake</Text>
           </Link>
           <Divider style={{ margin: 10 }} />
           <Link
            to="/weather"
            underlayColor="#ff0000"
            style={styles.navItem}
            onPress={() => { switchState(); setAppTitle('Weather');}}
            >
           <Text style={styles.menuitem}>Weather</Text>
           </Link>
           <Divider style={{ margin: 10 }} />
        </View>
          
        }
        onClose={switchState}
        animationTime={250}>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/newsfeed" element={<Newsfeed />} />
              <Route path="/earthquake" element={<EarthQuake />} />
              <Route path="/weather" element={<Weather />} />
            </Routes>
        <View style={styles.body}>
            <View style={{ marginTop: 20, alignItems: 'center', width: '100%', flex: 1 }}>

            <TouchableOpacity onTouch={switchState}>
            
              <Text>Toggle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Drawer>     
    </SafeAreaView>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
    backgroundColor: '#fff',
    alignItems: 'center',

    
  },
  appbar: {
    width: '100%',
    top: 0,
  },
  menuitem: {
    padding: 15,
  }
});
