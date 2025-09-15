import { api } from "@/api/api";
import { Ministries } from "@/infrastructure/interfaces/ministries";

export const getMinistries = async () => {
  try {
    const data = await api.get<Ministries>("/ministries");

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
