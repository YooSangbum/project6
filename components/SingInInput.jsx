import React, { useState } from 'react';
import { Stack, Input, Box } from 'native-base';

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function SingInInput() {
  const [show, setShow] = useState(false);
  return (
    <Stack space={4} w="100%" alignItems="center">
      <Input
        w={{
          base: '90%',
          md: '25%',
        }}
        borderRadius={25}
        InputLeftElement={
          <Box
            backgroundColor={'#5197F2'}
            borderRadius={50}
            w={10}
            h={10}
            justifyContent={'center'}
            alignItems={'center'}
            ml={1}
            person
          >
            <AntDesign name="mail" size={14} color="white" />
          </Box>
        }
        placeholder="이메일을 적어주세요"
        placeholderTextColor={'black'}
        fontFamily={'SCDream5'}
      />
      <Input
        w={{
          base: '90%',
          md: '25%',
        }}
        borderRadius={25}
        InputLeftElement={
          <Box
            backgroundColor={'#5197F2'}
            borderRadius={50}
            w={10}
            h={10}
            justifyContent={'center'}
            alignItems={'center'}
            ml={1}
          >
            <EvilIcons name="lock" size={24} color="white" />
          </Box>
        }
        placeholder="··········"
        placeholderTextColor={'black'}
        fontWeight={700}
      />
    </Stack>
  );
}
