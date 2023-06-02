import { useState } from 'react';
import { Box, HStack } from 'native-base';

import { TouchableOpacity, Dimensions } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import GridViewComponent from './GridViewComponent';
import MultipleComponent from './MultipleComponent';
import HeartComponent from './HeartComponent';

const imgWidth = Dimensions.get('window').width / 3;

export default function FeedShowComponent({content}) {
  const [gridView, setgridView] = useState(true);
  const [multiple, setmultiple] = useState(false);
  const [heart, setheart] = useState(false);
  return (
    <>
      <Box mt={6} color="black">
        <HStack backgroundColor={'#F7F7FE'}>
          <TouchableOpacity
            onPress={() => {
              setgridView(true);
              setmultiple(false);
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
              setmultiple(true);
              setgridView(false);
              setheart(false);
            }}
          >
            <Box
              width={imgWidth}
              height={12}
              justifyContent={'center'}
              alignItems={'center'}
              borderBottomWidth={multiple ? 1 : 0}
              borderBottomColor={'tomato'}
            >
              <MaterialCommunityIcons
                name="play-box-multiple-outline"
                size={24}
                color={multiple ? 'tomato' : 'grey'}
              />
            </Box>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setheart(true);
              setmultiple(false);
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
      {gridView ? <GridViewComponent content={content} /> : null}
      {multiple ? <MultipleComponent content={content} /> : null}
      {heart ? <HeartComponent content={content} /> : null}
    </>
  );
}
