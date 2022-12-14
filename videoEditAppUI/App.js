import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from './Screens/FirstScreen';
import SecondScreen from './Screens/SecondScreen';

//Router Sayfası
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="first"
        defaultScreenOptions={{navigationBarHidden: true}}>
        <Stack.Screen
          name="first"
          options={{navigationBarHidden: true, headerShown: false}}
          component={FirstScreen}
        />
        <Stack.Screen
          name="second"
          options={{navigationBarHidden: true, headerShown: false}}
          component={SecondScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
