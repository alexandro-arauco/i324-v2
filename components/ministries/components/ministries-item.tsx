import Card from "@/components/shared/Card";
import {
  Data,
  Leader,
  MinistriesToLeader,
} from "@/infrastructure/interfaces/ministries";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { FlatList, Modal, Pressable, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface MinistiresItemProps {
  item: Data;
}

const MinistiresItem = ({ item }: MinistiresItemProps) => {
  const [showLeaders, setShowLeaders] = useState(false);

  return (
    <View className="px-3 py-2">
      <Card>
        <View className="flex-row items-center p-3">
          <View className="w-[50px] h-[50px] bg-red-100 justify-center items-center rounded-lg">
            <FontAwesome name={item.icon as any} size={25} color="tomato" />
          </View>
          <View className="flex-1 flex-col px-3">
            <Card.Title title={item.name} className="text-xl" />
            <Card.Text
              text={item.description}
              className="text-sm text-gray-600 tracking-wider"
            />
          </View>
          <Pressable
            className="active:opacity-80 p-3"
            onPress={() => setShowLeaders((prev) => !prev)}
          >
            <FontAwesome
              name={showLeaders ? "chevron-up" : "chevron-down"}
              color="tomato"
              size={15}
            />
          </Pressable>
        </View>

        {showLeaders && (
          <LeadersList ministriesToLeader={item.ministriesToLeaders} />
        )}
      </Card>
    </View>
  );
};

export default MinistiresItem;

interface LeadersListProps {
  ministriesToLeader: MinistriesToLeader[];
}

const LeadersList = ({ ministriesToLeader }: LeadersListProps) => {
  const [openModalLeaderInformation, setOpenModalLeaderInformation] =
    useState(false);

  const [leaderSelected, setLeaderSelected] = useState<
    Pick<Leader, "name" | "phoneNumber" | "email">
  >({
    name: "",
    phoneNumber: "",
    email: "",
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text className="text-lg font-bold tracking-wider p-3">Líderes</Text>
        <FlatList
          data={ministriesToLeader}
          keyExtractor={(item, index) => `${item.leader.name}-${index}`}
          renderItem={({ item, index }) => (
            <Pressable
              className="active:opacity-80"
              onPress={() => {
                setLeaderSelected({
                  name: item.leader.name,
                  phoneNumber: item.leader.phoneNumber,
                  email: item.leader.email,
                });
                setOpenModalLeaderInformation(true);
              }}
            >
              <View
                className="px-3 mb-3 flex-1 justify-center items-center w-[85px] h-[85px]"
                key={`${item.leader.name}-${index}`}
              >
                <View className="w-[45px] h-[45px] bg-red-100 justify-center items-center rounded-full">
                  <FontAwesome
                    name={item.leader.gender as any}
                    size={25}
                    color="tomato"
                  />
                </View>
                <Text className="px-3 text-sm text-center" numberOfLines={2}>
                  {item.leader.name}
                </Text>
              </View>
            </Pressable>
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        {openModalLeaderInformation && (
          <ModalLeaderInformation
            visible={openModalLeaderInformation}
            closeModal={() => setOpenModalLeaderInformation(false)}
            name={leaderSelected.name}
            phoneNumber={leaderSelected.phoneNumber}
            email={leaderSelected.email}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const ModalLeaderInformation = ({
  visible,
  closeModal,
  name,
  phoneNumber,
  email,
}: {
  visible: boolean;
  closeModal: () => void;
  name: string;
  phoneNumber: string;
  email: string;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white rounded-lg p-6 w-4/5">
          <Text className="text-center text-2xl font-bold tracking-wider">
            Información de Contacto
          </Text>

          <View className="py-3">
            <View className="flex-row items-center">
              <Text className="text-xl font-bold">Nombre: </Text>
              <Text className="text-lg text-gray-600">{name}</Text>
            </View>
            <View className="flex-row">
              <Text className="text-xl font-bold">Celular: </Text>
              <Text className="text-lg text-gray-600">{phoneNumber}</Text>
            </View>
            <View className="flex-row">
              <Text className="text-xl font-bold">Correo Electrónico: </Text>
              <Text className="text-lg text-gray-600">{email}</Text>
            </View>
          </View>

          <View className="justify-center items-center">
            <Pressable className="active:opacity-80" onPress={closeModal}>
              <View
                className="p-2 rounded-lg"
                style={{ backgroundColor: "tomato" }}
              >
                <Text className="text-lg text-white font-bold tracking-widest">
                  Cerrar
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
