import { Image, View } from "react-native";

import Card from "@/components/shared/Card";

interface NoticeItemProps {
  item: any;
}

const NoticeItem = ({ item }: NoticeItemProps) => {
  return (
    <View className="px-3 py-2" key={item.id}>
      <Card>
        <View className="flex-1 flex-row p-3 items-center">
          <Image
            className="w-[75px] h-[75px] rounded-md"
            source={{ uri: item.image }}
          />
          <View className="flex-1 px-3">
            <Card.Title title={item.title} className="text-xl" />
            <Card.Text
              text={item.description}
              className="text-sm text-gray-600 tracking-wider"
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default NoticeItem;
