import MinistiresItem from "@/components/ministries/components/ministries-item";
import Loader from "@/components/shared/Loader";
import { useMinistries } from "@/hooks/useMinistries";
import { FlatList, View } from "react-native";

export default function MinistriesScreen() {
  const { ministriesQuery } = useMinistries();
  const { isLoading, data } = ministriesQuery;

  if (isLoading) return <Loader />;

  return (
    <View className="flex-1">
      <FlatList
        data={data?.data.data ?? []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MinistiresItem key={item.id} item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
