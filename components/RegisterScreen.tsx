import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FC, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen: FC<Props> = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View className="flex-1 justify-center items-center bg-gradient-to-r from-green-400 to-teal-500 p-6">
            <View className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg">
                <Text className="text-3xl font-bold text-center text-gray-800 mb-6">Реєстрація</Text>

                <TextInput
                    className="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 mb-4"
                    placeholder="Ім'я"
                    value={name}
                    onChangeText={setName}
                />

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

                <TouchableOpacity className="w-full bg-green-600 p-4 rounded-lg shadow-md">
                    <Text className="text-white text-center font-bold text-lg">Зареєструватися</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text className="text-green-600 text-center mt-4">Уже маєте акаунт? Увійти</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegisterScreen;
