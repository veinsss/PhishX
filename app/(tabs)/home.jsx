import { View, Text, Image, ScrollView, Alert } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { icons } from "../../constants";
import PowerButton from "../../components/PowerButton";

import React from "react";

const homePage = () => {
    return (
        <SafeAreaView className='bg-primary'>
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className='w-full flex justify-center m-h-[85vh] px-4 my-6'></View>
                <Image
                    source={icons.countryMap}
                    resizeMode='contain'
                    className='opacity-10 object-center'
                />
                <PowerButton>

                </PowerButton>
            </ScrollView>
        </SafeAreaView>
    );
};

export default homePage;
