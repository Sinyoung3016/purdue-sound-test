import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import RNSoundLevel from 'react-native-sound-level';

export default App => {
  useEffect(() => {
    RNSoundLevel.start();
    RNSoundLevel.onNewFrame = data => {
      console.log('Sound level info', data);
    };
  }, []);

  useEffect(() => {
    return () => {
      RNSoundLevel.stop();
    };
  });
  return (
    <View>
      <Text>Good</Text>
    </View>
  );
};
