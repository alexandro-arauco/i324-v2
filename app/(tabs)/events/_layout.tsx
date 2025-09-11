import { Stack } from "expo-router";

const EventsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Eventos" }} />
      <Stack.Screen name="details" />
    </Stack>
  );
};

export default EventsLayout;
