import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '../TabNavigation';
import {Color, Screen} from '../../Constant';
import {Back} from '../../Component';
import LoginScreen from '../../Screen/Login';
import AppSplashScreen from '../../Screen/AppSplashScreen';
import AppHeaderTitle from '../../Component/Share/AppHeaderTitle';
import AppGradientHeaderTitle from '../../Component/Share/AppGradientHeaderTItle';
import AppSearch from '../../Component/Share/AppSearch';
import AppDownload from '../../Component/Share/AppDownload';
import Register from '../../Screen/Register';
import VerifyOTP from '../../Screen/VerifyOTP';
import ForgotPassword from '../../Screen/ForgotPassword';
import VerifyGmail from '../../Screen/VerifyGmail';
import PhoneNumberLogin from '../../Screen/PhoneNumberLogin';
import AfterVerifyOTP from '../../Screen/AfterVerifyOTP';
import AfterRegisterGoogle from '../../Screen/AfterRegisterGoogle';
import SearchScreen from '../../Screen/SearchScreen';
import HistoryScreen from '../../Screen/History';
import SubscribePlan from '../../Screen/SubscribePlan';
import NormalFeature from '../../Screen/NormalFeature';
import AdvanceFeature from '../../Screen/AdvanceFeature';
import Profile from '../../Screen/Profile';
import Security from '../../Screen/Security';
import TwoFactorScreen from '../../Screen/TwoFactorScreen';
import NormalEdit from '../../Screen/NormalEdit';
import AdvanceEdit from '../../Screen/AdvanceEdit';
import Preference from '../../Screen/Preference';
import Favorite from '../../Screen/Favorite';
import TermAndCondition from '../../Screen/TermAndCondition';
import PrivacyAndPolicy from '../../Screen/TermAndCondition';
import AboutUs from '../../Screen/AboutUs';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerBackVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Color.APP_BACKGROUND,
        },
        headerLeft: function () {
          return <Back />;
        },
      }}>
      <Stack.Screen
        name={Screen.HOME}
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'LoginScreen'}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'AppSplashScreen'}
        component={AppSplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'Register'}
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'VerifyOTP'}
        component={VerifyOTP}
        options={{
          headerTitle: () => null,
        }}
      />
      <Stack.Screen
        name={'ForgotPassword'}
        component={ForgotPassword}
        options={{
          headerTitle: () => null,
        }}
      />
      <Stack.Screen
        name={'VerifyGmail'}
        component={VerifyGmail}
        options={{
          headerTitle: () => null,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name={'PhoneNumberLogin'}
        component={PhoneNumberLogin}
        options={{
          headerTitle: () => null,
        }}
      />
      <Stack.Screen
        name={'AfterVerifyOTP'}
        component={AfterVerifyOTP}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Information'} />,
        }}
      />
      <Stack.Screen
        name={'AfterRegisterGoogle'}
        component={AfterRegisterGoogle}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Information'} />,
        }}
      />
      <Stack.Screen
        name={'SearchScreen'}
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'HistoryScreen'}
        component={HistoryScreen}
        options={{
          headerTitle: () => <AppGradientHeaderTitle width={65} title={'History'} />,
          headerRight: () => <AppSearch />,
        }}
      />
      <Stack.Screen
        name={'SubscribePlan'}
        component={SubscribePlan}
        options={{
          headerTitle: () => null,
        }}
      />
      <Stack.Screen
        name={'NormalFeature'}
        component={NormalFeature}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Rewrite Content'} />,
        }}
      />
      <Stack.Screen
        name={'AdvanceFeature'}
        component={AdvanceFeature}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Rewrite Content'} />,
        }}
      />
      <Stack.Screen
        name={'Profile'}
        component={Profile}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Profile'} />,
        }}
      />
      <Stack.Screen
        name={'Security'}
        component={Security}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Security'} />,
        }}
      />
      <Stack.Screen
        name={'TwoFactorScreen'}
        component={TwoFactorScreen}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Security'} />,
        }}
      />
      <Stack.Screen
        name={'NormalEdit'}
        component={NormalEdit}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Editor'} />,
        }}
      />
      <Stack.Screen
        name={'AdvanceEdit'}
        component={AdvanceEdit}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Editor'} />,
        }}
      />
      <Stack.Screen
        name={'Preference'}
        component={Preference}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Preferences'} />,
        }}
      />
      <Stack.Screen
        name={'Favorite'}
        component={Favorite}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Favorite'} />,
          headerRight: () => <AppDownload />,
        }}
      />
      <Stack.Screen
        name={'TermAndCondition'}
        component={TermAndCondition}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Terms & Condition'} />,
        }}
      />
      <Stack.Screen
        name={'PrivacyAndPolicy'}
        component={PrivacyAndPolicy}
        options={{
          headerTitle: () => <AppHeaderTitle title={'Privacy & Policy'} />,
        }}
      />
      <Stack.Screen
        name={'AboutUs'}
        component={AboutUs}
        options={{
          headerTitle: () => <AppHeaderTitle title={'About Us'} />,
        }}
      />
    </Stack.Navigator>
  );
}
