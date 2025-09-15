import { getDevotional } from "@/actions/get-devotional.action";
import { useQuery } from "@tanstack/react-query";

export const useDevotional = () => {
  const devotionalQuery = useQuery({
    queryKey: ["devotional"],
    queryFn: () => getDevotional(),
  });

  return { devotionalQuery };
};
