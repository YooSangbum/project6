import { Center } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
import TapComponent from '../components/TapComponent';

export default function ShoppingmallPage({ navigation, route }) {
  return (
    <Center backgroundColor={'#fff'}>
      <HeaderComponent />
      <TapComponent route={route} navigation={navigation} />
      쇼핑몰 페이지 준비중입니다.
    </Center>
  );
}
