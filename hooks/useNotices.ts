import { getNotices } from "@/actions/get-notices.action";
import { useQuery } from "@tanstack/react-query";

export const useNotices = () => {
  const noticesQuery = useQuery({
    queryKey: ["notices"],
    queryFn: () => getNotices(),
  });

  return { noticesQuery };
};
