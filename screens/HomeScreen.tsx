/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather';

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar style="dark" />
      <View className="flex-row items-center px-4 pb-2 space-x-2">
        <View className="flex-row items-center flex-1 p-3 border border-gray-300 rounded-full">
          <Icon.Search width="25" height="25" stroke="gray" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
