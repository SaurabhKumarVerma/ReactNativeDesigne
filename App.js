import React from 'react';
import Home  from "./src/cryptoDesgine/MainScreen/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from "./src/cryptoDesgine/Screen/MainScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="MainScreen" component={MainScreen}
        options={{
        headerShown: false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
