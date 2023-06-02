import { ScrollView, Text } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
import HospitalComponent from '../components/HospitalComponent';
import TapComponent from '../components/TapComponent';

export default function PetHospitalPage({ route, navigation, hospital }) {
  return (
    <ScrollView flex={1} backgroundColor={'#fff'}>
      <HeaderComponent />
      <TapComponent route={route} navigation={navigation} />
      <Text
        px="16px"
        fontFamily={'SUIT-Regular'}
        color={'#EC7542'}
        fontSize={18}
        mb={3}
      >
        우리동네 <Text color={'#000'}>동물병원</Text>
      </Text>
      {
        hospital.map((hospital,i)=>{
          return (
            <HospitalComponent hospital={hospital} key={i} route={route}/>
          )
        })
      }
    </ScrollView>
  );
}
