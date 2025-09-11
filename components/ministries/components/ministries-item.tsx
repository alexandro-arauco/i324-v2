import Card from "@/components/shared/Card";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

interface MinistiresItemProps {
  item: any;
}

const MinistiresItem = ({ item }: MinistiresItemProps) => {
  const [showLeaders, setShowLeaders] = useState(false);

  return (
    <View className="px-3 py-2">
      <Card>
        <View className="flex-row items-center p-3">
          <View className="w-[50px] h-[50px] bg-red-100 justify-center items-center rounded-lg">
            <FontAwesome name={item.icon as any} size={25} color="tomato" />
          </View>
          <View className="flex-1 flex-col px-3">
            <Card.Title title={item.name} className="text-xl" />
            <Card.Text
              text={item.description}
              className="text-sm text-gray-600 tracking-wider"
            />
          </View>
          <Pressable
            className="active:opacity-80 p-3"
            onPress={() => setShowLeaders((prev) => !prev)}
          >
            <FontAwesome
              name={showLeaders ? "chevron-up" : "chevron-down"}
              color="tomato"
              size={15}
            />
          </Pressable>
        </View>

        {showLeaders && <LeadersList leaders={item.leaders} />}
      </Card>
    </View>
  );
};

export default MinistiresItem;

interface LeadersListProps {
  leaders: any;
}

const LeadersList = ({ leaders }: LeadersListProps) => {
  return (
    <>
      <Text className="text-lg font-bold tracking-wider p-3">Líderes</Text>
      <FlatList
        data={leaders}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item, index }) => (
          <View
            className="px-3 mb-3 flex-1 justify-center items-center w-[85px] h-[85px]"
            key={`${item.name}-${index}`}
          >
            <View className="w-[45px] h-[45px] bg-red-100 justify-center items-center rounded-full">
              <FontAwesome name={item.gender as any} size={25} color="tomato" />
            </View>
            <Text className="px-3 text-sm text-center" numberOfLines={2}>
              {item.name}
            </Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        horizontal
      />
    </>
  );
};
