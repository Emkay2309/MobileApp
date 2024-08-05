import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator';
import { AuthProvider } from './helpers/AuthProvider';

const Navigator = () => {

  return (
    <NavigationContainer>
      <AuthProvider >
        <MainStackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};
export default Navigator;