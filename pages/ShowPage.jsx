import { ScrollView } from 'native-base';
import React from 'react';
import { useState, useEffect } from 'react';
import CardComponent from '../components/CardComponent';

import HeaderComponent from '../components/HeaderComponent';
import SuperStar from '../components/SuperStar';
import TapComponent from '../components/TapComponent';



export default function ShowPage({ navigation, route, data }) {
  
  return (
    <ScrollView background={"#fff"}>
      <HeaderComponent />
      <TapComponent route={route} navigation={navigation} />
      <SuperStar 
      content={data} 
      navigation={navigation}
      route={route} 
      />
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
