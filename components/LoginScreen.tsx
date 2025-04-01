import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FC, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View className="flex-1 justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
            <View className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg">
                <Text className="text-3xl font-bold text-center text-gray-800 mb-6">Логін</Text>

                <TextInput
                    className="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 mb-4"
                    placeholder="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    className="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 mb-6"
                    placeholder="Пароль"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity className="w-full bg-blue-600 p-4 rounded-lg shadow-md">
                    <Text className="text-white text-center font-bold text-lg">Увійти</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text className="text-blue-600 text-center mt-4">Реєстрація</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;
