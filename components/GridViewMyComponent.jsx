import { Flex, Image } from 'native-base';

import { Dimensions } from 'react-native';

const imgWidth = Dimensions.get('window').width / 3;

export default function GridViewMyComponent({ data }) {
  return (
    <Flex mt={1} flexDirection={'row'} flexWrap={'wrap'} borderColor={'red'}>
      <Image
        width={imgWidth}
        height={imgWidth}
        source={{ uri: data[0].image }}
        alt="Img"
      />
    </Flex>
  );
}
