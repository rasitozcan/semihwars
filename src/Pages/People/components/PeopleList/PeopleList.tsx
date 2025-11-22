import { Card } from "@/components/Card/Card";
import type { IPeople } from "swapi-ts";

type Props = {
  data?: IPeople[];
};

export const PeopleList = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {data?.map((person) => (
        <Card key={person.name} title={person.name} testId="person-card">
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
          <p>Gender: {person.gender}</p>
          <p>Birth Year: {person.birth_year}</p>
        </Card>
      ))}
    </div>
  );
};
