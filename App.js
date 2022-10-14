import * as React from 'react';
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NativeRouter, Route, Link, Routes} from "react-router-native";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Drawer } from 'react-native-material-drawer';
import { Button } from "@react-native-material/core";
import { Divider } from "@react-native-material/core";
import { ListItem } from "@react-native-material/core";

import Home from './home';
import Carbon from './carbon';
import { SafeAreaView, StatusBar  } from 'react-native';


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
            to="/carbon"
            underlayColor="#ff0000"
            style={styles.navItem}
            onPress={() => { switchState(); setAppTitle('Carbon Emissions');}}
            >
           <Text style={styles.menuitem}>Carbon Emissions</Text>
           </Link>
           <Divider style={{ margin: 10 }} />
        </View>
          
        }
        onClose={switchState}
        animationTime={250}>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/carbon" element={<Carbon />} />
            </Routes>
        <View style={styles.body}>
            <View style={{ marginTop: 20, alignItems: 'center', width: '100%', flex: 1 }}>

            <TouchableOpacity onTouch={switchState}>
            
              <Text>Toggle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Drawer>
     
      <Link
          to="/carbon"
          underlayColor="#ff0000"
          style={styles.navItem}
      >
        <Text>About</Text>
      </Link>

     
      
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
