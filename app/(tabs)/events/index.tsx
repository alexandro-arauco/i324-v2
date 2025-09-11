import { EVENTS } from "@/_mockup/events";
import EventsItem from "@/components/events/components/events-intem";
import { FlatList, Text, View } from "react-native";

const EventsScreen = () => {
  return (
    <View className="flex-1">
      <Text className="text-3xl font-bold mt-2 p-3 tracking-wider">
        Proximos Eventos
      </Text>
      <FlatList
        data={EVENTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EventsItem key={item.id} item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default EventsScreen;
