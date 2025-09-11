import Card from "@/components/shared/Card";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, View } from "react-native";

interface EventsItemsProps {
  item: any;
}

const EventsItem = ({ item }: EventsItemsProps) => {
  const router = useRouter();
  return (
    <Pressable
      className="active:opacity-80"
      onPress={() =>
        router.push({
          pathname: "/events/details",
          params: item,
        })
      }
    >
      <View className="px-3 py-2">
        <Card>
          <View className="flex-1 flex-row p-3 items-center">
            <View className="flex-1 px-3">
              <Card.Title
                title={item.ministrie}
                className="text-red-500 text-2xl"
              />
              <Card.Title title={item.name} className="text-2xl" />
              <View className="flex-row items-center py-1">
                <FontAwesome name="calendar" size={15} color="tomato" />
                <Card.Text
                  text={item.from}
                  className="px-3 text-[14px] text-gray-600 tracking-wider"
                />
              </View>
              <View className="flex-row items-center py-1">
                <FontAwesome name="calendar" size={15} color="tomato" />
                <Card.Text
                  text={item.from}
                  className="px-3 text-[14px] text-gray-600 tracking-wider"
                />
              </View>
            </View>
            <Image
              className="w-[75px] h-[75px] rounded-md"
              source={{ uri: item.image }}
            />
          </View>
        </Card>
      </View>
    </Pressable>
  );
};

export default EventsItem;
