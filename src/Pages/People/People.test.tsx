import { People } from "./People";
import { render, screen } from "@/utilities/testing-utils";
import { mockPeople } from "@/api/people/mock";
import { useGetPeople } from "@/api/people/use-get-people";

vi.mock("@/api/people/use-get-people", () => ({
  ...vi.importActual("@/api/people/use-get-people"),
  useGetPeople: vi.fn(),
}));

const mockUseGetPeople = vi.mocked(useGetPeople);

describe("People component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("when data is fetching", () => {
    beforeEach(() => {
      mockUseGetPeople.mockReturnValue({
        data: undefined,
        isLoading: true,
        error: null,
      } as unknown as ReturnType<typeof useGetPeople>);
    });

    it("displays loading state", () => {
      render(<People />);

      expect(screen.getByTestId("loading")).toBeInTheDocument();
    });
  });

  describe("when there is an error fetching data", () => {
    beforeEach(() => {
      mockUseGetPeople.mockReturnValue({
        data: undefined,
        isLoading: false,
        error: new Error("Error fetching people"),
      } as unknown as ReturnType<typeof useGetPeople>);
    });

    it("displays error alert", () => {
      render(<People />);

      expect(screen.getByTestId("alert")).toBeInTheDocument();
      expect(screen.getByTestId("alert")).toHaveTextContent(
        "Error fetching people"
      );
    });
  });

  describe("when data is successfully fetched", () => {
    beforeEach(() => {
      mockUseGetPeople.mockReturnValue({
        data: mockPeople,
        isLoading: false,
        error: null,
      } as unknown as ReturnType<typeof useGetPeople>);
    });

    it("displays person cards", () => {
      render(<People />);

      const personCards = screen.queryAllByTestId("person-card");
      expect(personCards).toHaveLength(2);
    });
  });
});
