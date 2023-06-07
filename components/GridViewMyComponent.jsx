import { Flex, Image } from 'native-base';

import { Dimensions } from 'react-native';

const imgWidth = Dimensions.get('window').width / 3;

export default function GridViewMyComponent({ fireData }) {
  return (
    <Image
      width={imgWidth}
      height={imgWidth}
      source={{ uri: fireData.image }}
      alt="Img"
    />
  );
}
