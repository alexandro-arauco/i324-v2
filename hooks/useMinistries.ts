import { getMinistries } from "@/actions/get-ministries.action";
import { useQuery } from "@tanstack/react-query";

export const useMinistries = () => {
  const ministriesQuery = useQuery({
    queryKey: ["ministries"],
    queryFn: () => getMinistries(),
  });

  return { ministriesQuery };
};
