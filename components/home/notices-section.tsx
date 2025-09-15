import { useNotices } from "@/hooks/useNotices";
import { FlatList, Text } from "react-native";
import Loader from "../shared/Loader";
import NoticeItem from "./components/notice-item";

const NoticesSection = () => {
  const { noticesQuery } = useNotices();
  const { data, isLoading } = noticesQuery;

  if (isLoading) return <Loader />;

  return (
    <>
      <Text className="text-3xl font-bold mt-2 p-3 tracking-wider">
        Noticias y Anuncios
      </Text>
      <FlatList
        data={data?.data.data ?? []}
        renderItem={({ item }) => <NoticeItem key={item.id} item={item} />}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default NoticesSection;
