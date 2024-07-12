import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen, Color} from '../../Constant';
import {HomeScreen, Template, Billing, Account} from '../../Screen';
import images from '../../Common/images';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.HOME_STACK}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function TemplateStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.TEMPLATE_STACK}
        component={Template}
        options={{
          title: 'Template',
          headerShadowVisible: false,
          headerStyle: {backgroundColor: Color.APP_BACKGROUND},
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Color.LIGHT_PRIMARY,
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function BillingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.BILLING_STACK}
        component={Billing}
        options={{
          title: 'Billing',
          headerShadowVisible: false,
          headerStyle: {backgroundColor: Color.APP_BACKGROUND},
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Color.LIGHT_PRIMARY,
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.ACCOUNT_STACK}
        component={Account}
        options={{
          headerShadowVisible: false,
          headerStyle: {backgroundColor: Color.APP_BACKGROUND},
          headerTitle: () => null,
        }}
      />
    </Stack.Navigator>
  );
}

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color.LIGHT_PRIMARY,
        tabBarInactiveTintColor: Color.DARK_SILVER,
        tabBarLabelStyle: {
          fontSize: 13,
        },
        tabBarStyle: {
          height: 65,
          paddingTop: 7,
          paddingBottom: 7,
          backgroundColor: Color.APP_BACKGROUND,
          borderTopColor: Color.APP_BACKGROUND,
        },
      }}>
      <Tab.Screen
        name={Screen.HOME_TAB}
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => {
            const iconColor = focused ? Color.LIGHT_PRIMARY : Color.DARK_SILVER;
            return (
              <Image
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: 'stretch',
                  tintColor: iconColor,
                }}
                source={images.HomeTab()}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Screen.TEMPLATE_TAB}
        component={TemplateStack}
        options={{
          tabBarLabel: 'Template',
          tabBarIcon: ({focused}) => {
            const iconColor = focused ? Color.LIGHT_PRIMARY : Color.DARK_SILVER;
            return (
              <Image
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: 'stretch',
                  tintColor: iconColor,
                }}
                source={images.TemplateTab()}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Screen.BILLING_TAB}
        component={BillingStack}
        options={{
          tabBarLabel: 'Billing',
          tabBarIcon: ({focused}) => {
            const iconColor = focused ? Color.LIGHT_PRIMARY : Color.DARK_SILVER;
            return (
              <Image
                style={{
                  width: 26,
                  height: 24,
                  resizeMode: 'stretch',
                  tintColor: iconColor,
                }}
                source={images.BillingTab()}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Screen.ACCOUNT_TAB}
        component={AccountStack}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({focused}) => {
            const iconColor = focused ? Color.LIGHT_PRIMARY : Color.DARK_SILVER;
            return (
              <Image
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: 'stretch',
                  tintColor: iconColor,
                }}
                source={images.AccountTab()}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
