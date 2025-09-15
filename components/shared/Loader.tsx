import LottieView from "lottie-react-native";
import { View } from "react-native";

const Loader = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <LottieView
        source={require("../../assets/loader/Bible.json")}
        style={{
          width: 50,
          height: 50,
        }}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loader;
