import { Flex, Image } from 'native-base';

import { Dimensions } from 'react-native';

const Img = require('../assets/img/user3.jpg');
const imgWidth = Dimensions.get('window').width / 3;

export default function HeartComponent({content}) {
  return (
    <Flex mt={1} flexDirection={'row'} flexWrap={'wrap'} borderColor={'red'}>
      <Image width={imgWidth} height={imgWidth} source={{uri:content.image}} alt="Img" />
     
    </Flex>
  );
}
