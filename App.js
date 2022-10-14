import * as React from 'react';
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NativeRouter, Route, Link, Routes} from "react-router-native";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Drawer } from 'react-native-material-drawer';
import { Button } from "@react-native-material/core";
import { Divider } from "@react-native-material/core";
import { ListItem } from "@react-native-material/core";

import Navbar from './navbar';
import { SafeAreaView, StatusBar  } from 'react-native';


export default function App() {
  const [value, setValue] = React.useState('recents');
  const [appTitle, setAppTitle] = React.useState('Home');
  const [drawerState, setDrawerState] = React.useState(false);

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

  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>

      <AppBar
      color="#4ed970"
      style={styles.appbar}
      title={appTitle}
      subtitle="Lorem ipsum"
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
          <Text>Drawer Content</Text>
          <ListItem
      title="Inbox"
      leading={<Icon name="inbox" size={24} />}
      trailing={props => <Icon name="chevron-right" {...props} />}
    />
    <ListItem
      title="Drafts"
      leading={<Icon name="email-open" size={24} />}
      trailing={props => <Icon name="chevron-right" {...props} />}
    />
    <ListItem
      title="Trash"
      trailing={props => <Icon name="chevron-right" {...props} />}
    />
    <ListItem
      title="Spam"
      trailing={props => <Icon name="chevron-right" {...props} />}
    />
        </View>
          
        }
        onClose={switchState}
        animationTime={250}>
        <View style={styles.body}>
            <View style={{ marginTop: 20, alignItems: 'center', width: '100%', flex: 1 }}>
            <Text style={{ marginBottom: 20 }}>
              This is a page
            </Text>
            <TouchableOpacity onTouch={switchState}>
            <Routes>
      <Route path="/" element={<Navbar />} />
      </Routes>
              <Text>Toggle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Drawer>

    <Button title="Open Drawer" onPress={switchState}/>
      <Link
          to="/"
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
  }
});
