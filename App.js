import React from 'react';
import {SafeAreaView} from 'react-native';
import {HelloWorld} from './src/Componet/HelloWord';
import SocialLogin from './src/Componet/SocialLogin/SocialLogin';
import { Home } from "./src/cryptoDesgine/MainScreen/Home";

const App = () => {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
};

export default App;
