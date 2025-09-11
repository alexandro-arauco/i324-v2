import { MINISTRIES } from "@/_mockup/ministries";
import Card from "@/components/shared/Card";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

export default function MinistriesScreen() {
  const [showLeaders, setShowLeaders] = useState(false);

  return (
    <View className="flex-1">
      <FlatList
        data={MINISTRIES}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="px-3 py-2">
            <Card>
              <View className="flex-1 flex-row items-center px-3">
                <View className="w-20 h-20 rounded-xl justify-center items-center bg-red-100">
                  <FontAwesome
                    className="opacity-80"
                    name={item.icon as any}
                    size={40}
                    color="tomato"
                  />
                </View>
                <View className="flex-1 flex-col">
                  <Card.Title title={item.name} />
                  <View className="flex-1 flex-row justify-between mr-5">
                    <Card.Text text={item.description} />
                    <Pressable
                      className="active:opacity-90"
                      onPress={() => setShowLeaders(!showLeaders)}
                    >
                      <FontAwesome
                        className=""
                        name="chevron-down"
                        size={15}
                        color="tomato"
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
              {showLeaders && (
                <View className="mt-2 px-3 py-1">
                  <Text className="text-md font-bold">Lideres</Text>
                  <FlatList
                    horizontal
                    data={item.leaders}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                      <View className="px-2 py-2">
                        <View className="w-20 h-20 rounded-full justify-center items-center bg-gray-200">
                          <FontAwesome
                            className="opacity-80"
                            name={item.gender as any}
                            size={40}
                            color="tomato"
                          />
                        </View>
                        <Text className="text-sm text-center mt-1">
                          {item.name}
                        </Text>
                      </View>
                    )}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              )}
            </Card>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
