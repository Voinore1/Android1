import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();
