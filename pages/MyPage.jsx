import { ScrollView } from 'native-base';

import FeedMyComponent from '../components/FeedMyComponent';
import HeaderComponent from '../components/HeaderComponent';
import FeedMyShowComponent from '../components/FeedMyShowComponent';

export default function FeedPage() {
  return (
    <ScrollView backgroundColor={'#fff'} flex={1}>
      <HeaderComponent />
      <FeedMyComponent />
      <FeedMyShowComponent />
    </ScrollView>
  );
}
