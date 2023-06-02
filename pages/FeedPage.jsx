import {
  ScrollView,
  Text,
  Input,
  Flex,
  HStack,
  Image,
  VStack,
  Box,
} from 'native-base';

import FeedUserComponent from '../components/FeedUserComponent';
import HeaderComponent from '../components/HeaderComponent';
import FeedShowComponent from '../components/FeedShowComponent';

export default function FeedPage({ navigation, route }) {
  return (
    <ScrollView backgroundColor={'#fff'} flex={1}>
      <HeaderComponent />
      <FeedUserComponent />
      <FeedShowComponent route={route} />
    </ScrollView>
  );
}
