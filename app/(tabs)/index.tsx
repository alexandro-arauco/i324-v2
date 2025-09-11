import DevotionalSection from "@/components/home/devotional-section";
import NoticesSection from "@/components/home/notices-section";
import { View } from "react-native";

const HomeScreen = () => {
  return (
    <View className="flex-1">
      <DevotionalSection />
      <NoticesSection />
    </View>
  );
};

export default HomeScreen;
