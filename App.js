import * as React from 'react';
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { StyleSheet, Text, View } from 'react-native';

import Navbar from './navbar';
import { SafeAreaView, StatusBar  } from 'react-native';


export default function App() {
  const [value, setValue] = React.useState('recents');
  const [appTitle, setAppTitle] = React.useState('Home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <SafeAreaView style={styles.container}>
      <AppBar
      style={styles.appbar}
    title={appTitle}
    subtitle="Lorem ipsum"
    centerTitle={true}
    leading={props => (
      <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
    )}
    trailing={props => (
      <IconButton
        icon={props => <Icon name="dots-vertical" {...props} />}
        {...props}
      />
    )}>
      
    </AppBar>
    <Navbar />
      
    </SafeAreaView>
    
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
  }
});
