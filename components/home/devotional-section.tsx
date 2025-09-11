import Card from "@/components/shared/Card";
import { Text, View } from "react-native";

const DevotionalSection = () => {
  return (
    <>
      <Text className="text-3xl font-bold mt-2 p-3 tracking-wider">
        Devocional del día
      </Text>
      <View className="px-3">
        <Card>
          <Card.Image uri="https://picsum.photos/200" />
          <View className="px-3 py-2">
            <Card.Title title="Confia en el Señor" />
            <Card.Text
              text="Confía en el Señor con todo tu corazón y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus sendas."
              className="-tracking-wider text-gray-600 leading-normal"
            />
          </View>
        </Card>
      </View>
    </>
  );
};

export default DevotionalSection;
