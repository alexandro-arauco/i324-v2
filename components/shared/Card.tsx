import React from "react";
import { Image, Text, View } from "react-native";

interface CardProps {
  color?: string;
  children: React.ReactNode;
}

const Card = ({ color, children }: CardProps) => {
  const bgColor = !color ? "bg-white" : color;
  return <View className={`rounded-xl shadow-md ${bgColor}`}>{children}</View>;
};

interface CardImageProps {
  uri: string;
}

const CardImage = ({ uri }: CardImageProps) => {
  return <Image source={{ uri }} className="w-full h-48 rounded-t-xl" />;
};

const CardTitle = ({ title }: { title: string }) => {
  return <Text className="px-3 py-2 font-bold text-2xl">{title}</Text>;
};

const CardText = ({ text }: { text: string }) => {
  return (
    <Text className="px-3 py-2 text-lg" numberOfLines={2}>
      {text}
    </Text>
  );
};

Card.Image = CardImage;
Card.Title = CardTitle;
Card.Text = CardText;

export default Card;
