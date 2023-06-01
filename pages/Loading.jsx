import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';

import ImageBlurLoading from 'react-native-image-blur-loading';

const bg = require('../assets/img/loading.png');

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text fontSize={48}>Wepet</Text>
      <ImageBlurLoading thumbnailSource={bg} source={bg} style={styles.bg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '70%',
  },
});
