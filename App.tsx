import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Keyboard, StyleSheet, TouchableWithoutFeedback, View, Text, Button } from 'react-native';
import InputTodo from './components/todo/input.todo';
import ListTodo from './components/todo/list.todo';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeDetail from './components/learn/home.detail';
import Home from './components/learn/home';
import Like from './components/learn/like';
import LikeDetail from './components/learn/like.detail';
import About from './components/learn/about';
import ChangePassword from './components/learn/change.password';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const TabApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Like') {
            iconName = focused ? 'thumbs-up' : 'thumbs-up-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Like" component={Like} />
    </Tab.Navigator>
  )
}

const StackApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabApp" component={TabApp}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="HomeDetail"
        component={HomeDetail}
        options={(props: any) => ({ headerTitle: `Chi tiết ${props?.route?.params?.userId ?? ""}` })}
      />
      <Stack.Screen name="LikeDetail" component={LikeDetail} />
    </Stack.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          options={{
            drawerLabel: "Trang chủ",
            headerTitle: "Trang chủ",
          }}
          name="StackApp"
          component={StackApp} />
        <Drawer.Screen
          options={{
            drawerLabel: "Thông tin",
            headerTitle: "Thông tin",
          }}
          name="About" component={About} />
        <Drawer.Screen
          options={{
            drawerLabel: "Đổi mật khẩu",
            headerTitle: "Đổi mật khẩu",
          }}
          name="ChangePassword" component={ChangePassword} />
      </Drawer.Navigator>


    </NavigationContainer>
  );

};
