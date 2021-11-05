import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Splash,
  Kamus,
  Profile,
  Notification,
  Asesmen,
  FaedahDetail,
  Pelajaran,
  PelajaranDetail,
  PelajaranQuiz,
} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Kamus"
        component={Kamus}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Asesmen"
        component={Asesmen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerStyle: {
            backgroundColor: '#1D2330',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Asesmen"
        component={Asesmen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Faedah Detail"
        component={FaedahDetail}
        options={{
          title: 'Faedah Kebahasaan',
          headerStyle: {
            backgroundColor: '#1D2330',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Pelajaran"
        component={Pelajaran}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pelajaran Detail"
        component={PelajaranDetail}
        options={{
          headerStyle: {
            backgroundColor: '#1D2330',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Pelajaran Quiz"
        component={PelajaranQuiz}
        options={{
          headerStyle: {
            title: 'Quiz',
            backgroundColor: '#1D2330',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
