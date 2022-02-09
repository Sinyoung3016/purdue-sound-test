import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import RNSoundLevel from 'react-native-sound-level';

export default App => {
  const [sound, setSound] = useState(false);

  function soundLevel() {
    if (!sound) {
      RNSoundLevel.start();
      setSound(true);
      RNSoundLevel.onNewFrame = data => {
        console.log('Sound level info', data);
      };
    } else {
      setSound(false);
      RNSoundLevel.stop();
    }
  }

  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: '#9dbad1',
          borderRadius: 40,
          marginTop: 100,
          marginLeft: 50,
          width: 300,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={soundLevel}>
        <Text style={{fontSize: 20}}>SoundLevel</Text>
      </TouchableOpacity>
    </View>
  );
};
