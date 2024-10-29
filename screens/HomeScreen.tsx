/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from 'theme';

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar style="dark" />
      <View className="flex-row items-center px-4 pb-2 space-x-2">
        <View className="flex-row items-center flex-1 p-3 border border-gray-300 rounded-full">
          <Icon.Search width="25" height="25" stroke="gray" />
          <TextInput placeholder="Restaurent" className="flex-1 ml-4" />
          <View className="flex-row items-center pl-2 space-x-1 border-0 border-l-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="ml-1 text-gray-500">New York, NYC</Text>
          </View>
        </View>
        <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 ml-2 rounded-full">
          <Icon.Sliders width="20" height="20" strokeWidth={2.5} stroke="white" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
