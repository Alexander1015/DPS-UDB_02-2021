import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Peliculas from './indexPeliculas';
import Series from './indexSeries'
import Proximamente from './indexProximas';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if(route.name === "index_pelicula") {
            return(
              <MaterialCommunityIcons 
                name={ "movie" }
                size={size}
                color={color}
              />
            );
          }
          else if(route.name === "index_serie") {
            return(
              <FontAwesome5
                name={ "tv" }
                size={size}
                color={color}
              />
            );
          }
          else if(route.name === "index_proximamente") {
            return (
              <MaterialCommunityIcons 
                name={ "youtube-tv" }
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: '#2C3E50',
        tabBarActiveTintColor: '#2E86C1',
        headerShown: false,
      })}
    >
      <Tab.Screen name="index_pelicula" component={Peliculas} options={{ title: 'Peliculas' }} />
      <Tab.Screen name="index_serie" component={Series} options={{ title: 'Series' }} />
      <Tab.Screen name="index_proximamente" component={Proximamente} options={{ title: 'Proximamente' }} />
    </Tab.Navigator>
  );
}

export default Navigation;