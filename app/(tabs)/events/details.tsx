import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const EventsDetail = () => {
  const navigation = useNavigation();
  const item = useLocalSearchParams();

  useEffect(() => {
    navigation.setOptions({
      title: item.name,
    });
  }, []);

  return (
    <View className="flex-1">
      <Image
        className="w-full h-[250px]"
        source={{ uri: item.image as string }}
        resizeMode="cover"
      />

      <ScrollView>
        <Text className="px-3 text-2xl font-bold text-red-500 py-2 tracking-wide">
          {item.ministrie}
        </Text>
        <Text className="text-3xl font-bold px-3 tracking-wider">
          {item.name}
        </Text>

        <View className="mt-2">
          <View className="flex-1 flex-row px-3 items-center mt-3">
            <View className="w-[50px] h-[50px] bg-red-100 justify-center items-center rounded-lg">
              <FontAwesome name="calendar" size={25} color="tomato" />
            </View>
            <View className="px-3">
              <Text className="font-semibold text-xl">
                {item.from} / {item.to}
              </Text>
              <Text className="text-sm text-gray-600 font-semibold">Fecha</Text>
            </View>
          </View>

          <View className="flex-1 flex-row px-3 items-center mt-3">
            <View className="w-[50px] h-[50px] bg-red-100 justify-center items-center rounded-lg">
              <FontAwesome name="clock-o" size={25} color="tomato" />
            </View>
            <View className="px-3">
              <Text className="font-semibold text-xl">
                {item.hourInit} - {item.hourEnd}
              </Text>
              <Text className="text-sm text-gray-600 font-semibold">Hora</Text>
            </View>
          </View>

          <View className="flex-1 flex-row px-3 items-center mt-3">
            <View className="w-[50px] h-[50px] bg-red-100 justify-center items-center rounded-lg">
              <FontAwesome name="map-marker" size={25} color="tomato" />
            </View>
            <View className="px-3">
              <Text className="font-semibold text-xl">{item.address}</Text>
              <Text className="text-sm text-gray-600 font-semibold">
                Ubicación
              </Text>
            </View>
          </View>
        </View>

        <Text className="text-3xl font-bold px-3 tracking-wider mt-3">
          Acerca del Evento
        </Text>

        <Text className="px-3 text-xl mt-3 tracking-wide text-gray-600">
          {item.description}
        </Text>
      </ScrollView>
    </View>
  );
};

export default EventsDetail;
