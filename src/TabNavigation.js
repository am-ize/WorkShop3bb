import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TabStack = createBottomTabNavigator({
    TabHome: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
                <Icon name="home" size={16} color={tintColor} />
        }
    },
    TabProfile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
                <Icon name="user" size={16} color={tintColor} />
        }
    }
},

    {
        tabBarOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: 'white',
            style: {
                backgroundColor: '#000008',
            },
        }
    },
    {
        initialRouteName: 'TabHome'
    }
);

const App = createAppContainer(TabStack);

export default App;
