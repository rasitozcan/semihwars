import { useForm, type SubmitHandler } from "react-hook-form";
import type { IPeople } from "swapi-ts";

export type PeopleFormData = {
  name: IPeople["name"];
  gender: IPeople["gender"];
};

type PeopleFilterFormProps = {
  onSubmit?: SubmitHandler<PeopleFormData>;
};

export const PeopleFilterForm = ({
  onSubmit = () => {},
}: PeopleFilterFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { dirtyFields },
  } = useForm<PeopleFormData>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-4 mb-4 md:flex-row flex-col"
    >
      <input
        {...register("name")}
        className="w-full input"
        type="text"
        placeholder="Name"
      />

      <select
        {...register("gender")}
        className="w-full select"
        defaultValue="Pick a gender"
      >
        <option disabled={true}>Pick a gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <button type="submit" className="btn btn-primary">
        Filter
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          reset();
        }}
        disabled={Object.keys(dirtyFields).length === 0}
      >
        Reset
      </button>
    </form>
  );
};
