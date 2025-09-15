import { api } from "@/api/api";
import { Devotional } from "@/infrastructure/interfaces/devotional";

export const getDevotional = async () => {
  try {
    const { data } = await api.get<Devotional>("/devotionals", {
      params: {
        created_at: new Date(),
      },
    });

    return data;
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
