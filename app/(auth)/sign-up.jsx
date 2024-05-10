import { Image, View, Text, ScrollView, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButtons from '../../components/CustomButtons';
import { Link, router } from 'expo-router';
import { createUser } from '../../lib/appwrite';

const signUp = () => {

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [isSubmit, setisSubmit] = useState(false)

    const submit = async () => {
        if(!form.username|| !form.email  || !form.password)
        {
            Alert.alert('Error', "Fill out all blanks stupid")
        }
        setisSubmit(true);

        try {
            const result = await createUser(form.email,form.password,form.username)

            // global
            router.replace('/home')
        } catch (error) {
            Alert.alert('Error', error.message)

        }finally{
            setisSubmit(false)
        }
    };



    return (
        <SafeAreaView className="bg-primary h-full">

            <ScrollView>
                <View className="w-full flex justify-center min-h-[85vh] px-4 my-6 ">
                    <Text className="text-2xl font-semibold text-white mt-10 font-psemibold"> Sign up Into PhishX</Text>

                    <FormField
                        title="Username"
                        value={form.username}
                        handleChangeText={(e) => setForm({ ...form, username: e })}
                        otherStyles="mt-10"
                    />

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    />


                    <CustomButtons
                        title="Sign Up"
                        handlePress={submit}
                        containerStyles={"mt-7"}
                        isLoading={isSubmit}
                    />

                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-gray-100 font-pregular">
                            Already existing account?
                        </Text>

                        <Link href="/sign-in" className="text-lg font-psemibold text-secondary"> Sign in</Link>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default signUp