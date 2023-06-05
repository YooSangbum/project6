import React from 'react';
//설치한 스택 네비게이션 라이브러리를 가져옵니다
import { createStackNavigator } from '@react-navigation/stack';

//페이지로 만든 컴포넌트들을 불러옵니다
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import SignInEmail from '../pages/SignInEmail';
import TabNavigator from './TabNavigator';
import DetailPage from '../pages/DetailPage';
import CommentPage from '../pages/CommentPage';
import FeedPage from '../pages/FeedPage';
import HospitalDetailPage from '../pages/HospitalDetailPage';
import HoneyTipPage from '../pages/HoneyTipPage';
import ShoppingmallPage from '../pages/ShoppingmallPage';

const Stack = createStackNavigator();
const StackNavigator = ({ hospital, data }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 50,
        },
        // 헤더 숨기기
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignInPage" component={SignInPage} />
      {/* <Stack.Screen name="TabNavigator" component={TabNavigator}  /> */}
      <Stack.Screen name="TabNavigator">
        {(props) => <TabNavigator {...props} hospital={hospital} data={data} />}
      </Stack.Screen>
      <Stack.Screen name="HospitalDetailPage" component={HospitalDetailPage} />
      <Stack.Screen name="FeedPage" component={FeedPage} />
      <Stack.Screen name="CommentPage" component={CommentPage} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
      <Stack.Screen name="SignInEmail" component={SignInEmail} />
      <Stack.Screen name="HoneyTipPage" component={HoneyTipPage} />
      <Stack.Screen name="ShoppingmallPage" component={ShoppingmallPage} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
