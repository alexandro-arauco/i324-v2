import Card from "@/components/shared/Card";
import { useDevotional } from "@/hooks/useDevotional";
import { Text, View } from "react-native";
import Loader from "../shared/Loader";

const DevotionalSection = () => {
  const { devotionalQuery } = useDevotional();
  const { data, isLoading } = devotionalQuery;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Text className="text-3xl font-bold mt-2 p-3 tracking-wider">
        Devocional del día
      </Text>
      <View className="px-3">
        <Card>
          <Card.Image uri="https://picsum.photos/200" />
          <View className="px-3 py-2">
            <Card.Title title={data?.title ?? ""} />
            <Card.Text
              text={data?.content ?? ""}
              className="-tracking-wider text-gray-600 leading-normal"
            />
          </View>
        </Card>
      </View>
    </>
  );
};

export default DevotionalSection;
