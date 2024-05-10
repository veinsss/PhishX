import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButtons from '../components/CustomButtons';
import 'react-native-url-polyfill/auto'

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center items-center min-h-[85vh] px-4">
                    <Image
                        source={images.mainLogo}
                        className='w-[100px] h-[84px]'
                    />
                    <View classname="relative mt-5">
                        <Text className="text-3xl text-white font-bold text-center"> Protect your </Text>
                    </View>

                    <View classname="relative mt-5">
                        <Text className="text-3xl text-secondary font-bold text-center">
                            privacy test push
                        </Text>
                    </View>


                    <CustomButtons
                        title="Get Started"
                        handlePress={() => { router.push('/sign-in') }}
                        containerStyles='w-full mt-7'
                    />
                </View>
            </ScrollView>

            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    );
}
