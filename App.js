import React from 'react';
import {SafeAreaView} from 'react-native';
import {HelloWorld} from './src/Componet/HelloWord';
import SocialLogin from './src/Componet/SocialLogin/SocialLogin';

const App = () => {
  return (
    <SafeAreaView>
      {/* <SocialLogin /> */}
      <HelloWorld />
    </SafeAreaView>
  );
};

export default App;
