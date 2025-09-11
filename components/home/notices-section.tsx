import { NOTICES } from "@/_mockup/notices";
import { FlatList, Text } from "react-native";
import NoticeItem from "./components/notice-item";

const NoticesSection = () => {
  return (
    <>
      <Text className="text-3xl font-bold mt-2 p-3 tracking-wider">
        Noticias y Anuncios
      </Text>
      <FlatList
        data={NOTICES}
        renderItem={({ item }) => <NoticeItem item={item} />}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default NoticesSection;
