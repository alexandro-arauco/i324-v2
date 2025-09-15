import { api } from "@/api/api";
import { Notices } from "@/infrastructure/interfaces/notices";

export const getNotices = async () => {
  try {
    const data = await api.get<Notices>("/notices");

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
