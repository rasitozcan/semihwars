import { useGetPeople } from "@/api/people/use-get-people";
import { Alert } from "@/components/Alert/Alert";
import { Loading } from "@/components/Loading/Loading";

import {
  PeopleFilterForm,
  type PeopleFormData,
} from "./components/PeopleFilterForm/PeopleFilterForm";
import { PeopleList } from "./components/PeopleList/PeopleList";

export const People = () => {
  const { data, isLoading, error } = useGetPeople();

  if (isLoading) return <Loading />;

  if (error) return <Alert message={error.message} />;

  const handleFilter = (data: PeopleFormData) => {
    console.log(data);
  };
  return (
    <>
      <PeopleFilterForm onSubmit={handleFilter} />
      <PeopleList data={data} />
    </>
  );
};
