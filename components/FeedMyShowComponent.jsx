import { useState } from 'react';
import { Box, HStack } from 'native-base';

import { TouchableOpacity, Dimensions } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import GridViewComponent from './GridViewComponent';
import FriendComponent from './FriendComponent';
import HeartComponent from './HeartComponent';

const imgWidth = Dimensions.get('window').width / 3;

export default function FeedMyShowComponent() {
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
      {gridView ? <GridViewComponent /> : null}
      {friend ? <FriendComponent /> : null}
      {heart ? <HeartComponent /> : null}
    </>
  );
}
