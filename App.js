import React from 'react';
import {Text, View} from 'react-native';
import {API_KEY} from '@env';
export default App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{API_KEY}</Text>
      <View />
    </View>
  );
};
