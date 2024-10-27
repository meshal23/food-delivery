import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'screens/HomeScreen';
import RestaurentScreen from 'screens/RestaurentScreen';

export type RootStackParamList = {
  home: undefined;
  restaurent: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="restaurent" component={RestaurentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
