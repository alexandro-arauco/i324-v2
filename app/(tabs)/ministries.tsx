import { MINISTRIES } from "@/_mockup/ministries";
import MinistiresItem from "@/components/ministries/components/ministries-item";
import { FlatList, View } from "react-native";

export default function MinistriesScreen() {
  return (
    <View className="flex-1">
      <FlatList
        data={MINISTRIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MinistiresItem key={item.id} item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
