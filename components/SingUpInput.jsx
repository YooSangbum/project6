import React, { useState } from 'react';
import { Stack, Input, Box, Text } from 'native-base';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function SingUpInput({
  type,
  error,
  setFunc,
  typeE,
  titleE,
  errorE,
  setFuncE,
  typeP,
  titleP,
  errorP,
  setFuncP,
  typePC,
  titlePC,
  errorPC,
  setFuncPC,
}) {
  return (
    <Stack space={4} w="100%" alignItems="center">
      <KeyboardAvoidingView style={styles.avoid}>
        <Input
          w={{
            base: '90%',
            md: '25%',
          }}
          borderRadius={25}
          InputLeftElement={
            <Box
              backgroundColor={'#EC7542'}
              borderRadius={50}
              w={10}
              h={10}
              justifyContent={'center'}
              alignItems={'center'}
              ml={1}
            >
              <Octicons name="person" size={14} color="white" />
            </Box>
          }
          placeholder={type}
          placeholderTextColor={'black'}
          fontFamily={'SCDream5'}
          onChangeText={(text) => {
            text = text.trim();
            setFunc(text);
          }}
        />
        <Text w={'80%'} color={'yellow.500'}>
          {error}
        </Text>
        <Input
          w={{
            base: '90%',
            md: '25%',
          }}
          borderRadius={25}
          InputLeftElement={
            <Box
              backgroundColor={'#EC7542'}
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
          placeholder={typeE}
          placeholderTextColor={'black'}
          fontFamily={'SCDream5'}
          onChangeText={(text) => {
            text = text.trim();
            setFuncE(text);
          }}
        />
        <Text w={'80%'} color={'yellow.500'}>
          {errorE}
        </Text>
        <Input
          w={{
            base: '90%',
            md: '25%',
          }}
          borderRadius={25}
          InputLeftElement={
            <Box
              backgroundColor={'#EC7542'}
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
          placeholder={typeP}
          placeholderTextColor={'black'}
          fontWeight={700}
          secureTextEntry={typeP === 'password' ? true : false}
          onChangeText={(text) => {
            text = text.trim();
            setFuncP(text);
          }}
        />
        <Text w={'80%'} color={'yellow.500'}>
          {errorP}
        </Text>

        <Input
          w={{
            base: '90%',
            md: '25%',
          }}
          borderRadius={25}
          InputLeftElement={
            <Box
              backgroundColor={'#EC7542'}
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
          placeholder={typePC}
          placeholderTextColor={'black'}
          fontWeight={700}
          secureTextEntry={typePC === 'passpasswordConfirmword' ? true : false}
          onChangeText={(text) => {
            text = text.trim();
            setFuncPC(text)
          }
          }
        />
        <Text w={'80%'} color={'yellow.500'}>
          {errorPC}
        </Text>
      </KeyboardAvoidingView>
    </Stack>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: { height: 300 },
});
