import { useState } from 'react';
import { Box, HStack, Flex } from 'native-base';

import { TouchableOpacity, Dimensions } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import GridViewMyComponent from './GridViewMyComponent';
import FriendMyComponent from './FriendMyComponent';
import HeartMyComponent from './HeartMyComponent';

const imgWidth = Dimensions.get('window').width / 3;

export default function FeedMyShowComponent({ data, fireData }) {
  const [gridView, setgridView] = useState(true);
  const [friend, setfriend] = useState(false);
  const [heart, setheart] = useState(false);
  return (
    <>
      <Box mt={2} color="black">
        <HStack backgroundColor={'#F7F7FE'}>
          <TouchableOpacity
            onPress={() => {
              setgridView(true);
              setfriend(false);
              setheart(false);
            }}
          >
            <Box
              width={imgWidth}
              height={12}
              justifyContent={'center'}
              alignItems={'center'}
              borderBottomWidth={gridView ? 1 : 0}
              borderBottomColor={'tomato'}
            >
              <MaterialIcons
                name="grid-view"
                size={24}
                color={gridView ? 'tomato' : 'grey'}
              />
            </Box>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setfriend(true);
              setgridView(false);
              setheart(false);
            }}
          >
            <Box
              width={imgWidth}
              height={12}
              justifyContent={'center'}
              alignItems={'center'}
              borderBottomWidth={friend ? 1 : 0}
              borderBottomColor={'tomato'}
            >
              <MaterialIcons
                name="pets"
                size={24}
                color={friend ? 'tomato' : 'grey'}
              />
            </Box>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setheart(true);
              setfriend(false);
              setgridView(false);
            }}
          >
            <Box
              width={imgWidth}
              height={12}
              justifyContent={'center'}
              alignItems={'center'}
              borderBottomWidth={heart ? 1 : 0}
              borderBottomColor={'tomato'}
            >
              <Octicons
                name="heart"
                size={24}
                color={heart ? 'tomato' : 'grey'}
              />
            </Box>
          </TouchableOpacity>
        </HStack>
      </Box>
      <Flex mt={1} flexDirection={'row'} flexWrap={'wrap'} borderColor={'red'}>
        {fireData.map((fireData, i) => {
          return gridView ? (
            <GridViewMyComponent fireData={fireData} key={i} />
          ) : null;
        })}
      </Flex>
      {friend ? <FriendMyComponent data={data} /> : null}
      {heart ? <HeartMyComponent data={data} /> : null}
    </>
  );
}
