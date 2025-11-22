import { useQuery } from "@tanstack/react-query";
import type { IPeople } from "@/types";

import { api } from "../api";

const getPeople = async () => {
  const { data } = await api.get<{ results: IPeople[] }>("/people");
  return data.results;
};

export const useGetPeople = () => {
  return useQuery({
    queryKey: ["people"],
    queryFn: getPeople,
  });
};
