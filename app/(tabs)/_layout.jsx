import { Tabs, Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className='items-center justify-center gap-2'>
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-5'
            />

            <Text className={`${focused}`} style={{ color: color }}>
                {name}
            </Text>
        </View>
    );
};

const tabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#F38BA8",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarStyle: {
                        backgroundColor: "#181825",
                        borderTopWidth: 1,
                        borderTopColor: "#232533",
                        height: 70,
                    },
                }}
            >
                <Tabs.Screen
                    name='home'
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name='Home'
                                focused={focused}
                            />

                            // <TabIcon
                            //     icon={icons.settings}
                            //     color={color}
                            //     name="Settings"
                            //     focused={focused}
                            // />
                        ),
                    }}
                />

                <Tabs.Screen
                    name='settings'
                    options={{
                        title: "settings",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.settings}
                                color={color}
                                name='Setting'
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name='activity'
                    options={{
                        title: "activity",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.globe}
                                color={color}
                                name='Activity'
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tabs>
            <StatusBar backgroundColor='#161622' style='light' />
        </>
    );
};

export default tabsLayout;
