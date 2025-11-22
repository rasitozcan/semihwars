import { expect, test } from "vitest";
import { People } from "./People";
import { render } from "@/utilities/testing-utils";
import { mockPeople } from "@/api/people/mock";

vi.mock("@/api/people/use-get-people", async () => {
  const actual = await vi.importActual("@/api/people/use-get-people");
  return {
    ...actual,
    useGetPeople: vi.fn(() => ({
      data: mockPeople,
      isLoading: false,
      error: null,
    })),
  };
});

test("People component renders without an issue", () => {
  const { container } = render(<People />);
  expect(container).toBeInTheDocument();
});

test("People component displays person cards", () => {
  const { getAllByTestId } = render(<People />);
  const personCards = getAllByTestId("person-card");

  expect(personCards).toHaveLength(2);
});

test("First person card has name Luke Skywalker", () => {
  const { getAllByTestId, getByText } = render(<People />);
  const personCards = getAllByTestId("person-card");

  expect(getByText("Luke Skywalker")).toBeInTheDocument();
  expect(personCards[0]).toContainElement(getByText("Height: 172"));
  expect(personCards[0]).toContainElement(getByText("Mass: 77"));
  expect(personCards[0]).toContainElement(getByText("Gender: male"));
  expect(personCards[0]).toContainElement(getByText("Birth Year: 19BBY"));
});
