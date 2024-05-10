import { View, Text } from "react-native";
import { TouchableOpacity} from "react-native";
import React from "react";

const PowerButton = ({ handlePress }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-blue min-h-[1000px] rounded-3xl`}
        >

        </TouchableOpacity>
    );
};

export default PowerButton;
