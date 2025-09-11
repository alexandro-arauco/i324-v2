import { NOTICES } from "@/_mockup/notices";
import Card from "@/components/shared/Card";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View className="flex-1">
      <View className="mt-2">
        <Text className="px-3 text-3xl font-bold tracking-wider">
          Devocional del día
        </Text>
        <View className="px-3 mt-2">
          <Card>
            <Card.Image uri="https://picsum.photos/200/300" />
            <Card.Title title="Título de la tarjeta" />
            <Card.Text text="Este es un texto de ejemplo para la tarjeta. Aquí puedes colocar una breve descripción o contenido relevante." />
          </Card>
        </View>
      </View>

      <View className="mt-10 flex-1">
        <Text className="px-3 text-3xl font-bold tracking-wider">
          Noticias y Anuncios
        </Text>

        <FlatList
          className="flex-1 mt-3"
          data={NOTICES}
          renderItem={({ item }) => (
            <View className="px-3 py-2">
              <Card>
                <View className="flex-row items-center px-3">
                  <Image
                    className="w-[100px] h-[100px] rounded-xl"
                    source={{ uri: item.image }}
                  />
                  <View className="flex-1">
                    <Card.Title title={item.title} />
                    <Card.Text text={item.description} />
                  </View>
                </View>
              </Card>
            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
