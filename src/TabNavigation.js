import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TabStack = createBottomTabNavigator({
    TabHome: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) =>
                <Icon name="home" size={16} color={tintColor} style={{ paddingBottom: 5 }} />
        }
    },
    TabProfile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: "Profile",
            tabBarIcon: ({ tintColor }) =>
                <Icon name="user" size={16} color={tintColor} />
        }
    }
},

    {
        tabBarOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: '#101010',
                paddingVertical: 10,
                height: 55
            },
            labelStyle: {
                color: '#fff'
            }
        }
    },
    {
        initialRouteName: 'TabHome'
    }
);
TabStack.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];

    // You can do whatever you like here to pick the title based on the route name
    const headerTitle = routeName;

    return {
        headerStyle: { backgroundColor: '#FF8033', height: 45 },
        headerTitleStyle: { flex: 1, fontSize: 16, textAlign:"center", color: '#fff', },
        title: '3BB App',
        headerRight: (
            <TouchableOpacity><IconFontisto name='email' size={24} color={'#fff'} style={{paddingRight: 10}}/></TouchableOpacity>
        ),
        headerLeft: (
            <View></View>
        )
    };
};

const AppStack = createStackNavigator({
    Tabs: { screen: TabStack },
}, { initialRouteName: "Tabs" })

export default createAppContainer(createSwitchNavigator(
    {
        AppSceme: AppStack
    }, {
        initialRouteName: 'AppSceme'
    }
));
