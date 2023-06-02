import { ScrollView } from 'native-base';
import React from 'react';
import { useState, useEffect } from 'react';
import CardComponent from '../components/CardComponent';

import HeaderComponent from '../components/HeaderComponent';
import SuperStar from '../components/SuperStar';
import TapComponent from '../components/TapComponent';

import testData from '../data/testData';

export default function ShowPage({ navigation, route }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(testData);
  }, []);
  return (
    <ScrollView borderWidth={10} backgroundColor={'#fff'}>
      <HeaderComponent />
      <TapComponent route={route} navigation={navigation} />
      <SuperStar data={data} />
      {data.map((data, i) => {
        return (
          <CardComponent
            content={data}
            navigation={navigation}
            route={route}
            key={i}
          />
        );
      })}
    </ScrollView>
  );
}
