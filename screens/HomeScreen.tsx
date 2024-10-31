/* eslint-disable prettier/prettier */
import Categories from 'components/Categories';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from 'theme';

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar style="dark" />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-1 flex-row items-center rounded-full border border-gray-300 p-3">
          <Icon.Search width="25" height="25" stroke="gray" />
          <TextInput placeholder="Restaurent" className="ml-4 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 border-l-gray-300 pl-2">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="ml-1 text-gray-500">New York, NYC</Text>
          </View>
        </View>
        <View style={{ backgroundColor: themeColors.bgColor(1) }} className="ml-2 rounded-full p-3">
          <Icon.Sliders width="20" height="20" strokeWidth={2.5} stroke="white" />
        </View>
      </View>

      {/* main page */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}>
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
