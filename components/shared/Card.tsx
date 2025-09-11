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
  return <Image source={{ uri }} className="w-full h-48 rounded-t-xl" resizeMode="cover" />;
};

const CardTitle = ({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) => {
  return <Text className={`font-bold text-2xl ${className}`}>{title}</Text>;
};

const CardText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  return (
    <Text className={`text-lg ${className}`} numberOfLines={3}>
      {text}
    </Text>
  );
};

Card.Image = CardImage;
Card.Title = CardTitle;
Card.Text = CardText;

export default Card;
