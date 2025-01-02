import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SongsProvider } from "./components/context/SongsProvider";
import { AudioProvider } from "./components/context/AudioContext";
import Login from "./components/Login";
import Songs from "./screens/Songs";
import SongPlay from "./screens/SongPlay";
import Search from "./screens/Search";
import StartingScreen from "./screens/StartingScreen";
import Home from "./screens/Home";
import Library from "./screens/Library";
import Details from "./screens/Details";
import AudioFooter from "./components/AudioFooter";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

// Tab Navigator
const Tab = createBottomTabNavigator();

// Stack Navigator
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Songs"
        component={Songs}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="music" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="book-open" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <AudioProvider>
      <SongsProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="StartingScreen"
          >
            <Stack.Screen name="StartingScreen" component={StartingScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen name="SongPlay" component={SongPlay} />
            <Stack.Screen name="Songs" component={Songs} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>

          <AudioFooter />
        </NavigationContainer>
      </SongsProvider>
    </AudioProvider>
  );
}
