/* eslint-disable prettier/prettier */
import { useQuery } from '@tanstack/react-query';
import pb from 'lib/pocketbase';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function Categories() {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    (async () => {
      const authUser = await pb
        .collection('user')
        .authWithPassword('meshal@gmail.com', 'meshal123');

      console.log('user: ', authUser);
      setUser(authUser);
    })();
  }, []);

  const getCategories = async () => {
    const result = await pb.collection('categories').getFullList();
    return result;
  };

  const { data, isSuccess } = useQuery({ queryKey: ['food-categories'], queryFn: getCategories });

  if (isSuccess) {
    console.log(data);
  }

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 15 }}>
        {/* map categories */}
        <Text>Categories</Text>
      </ScrollView>
    </View>
  );
}
