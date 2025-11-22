import { cn } from "@/utilities/cn";

type Props = {
  className?: string;
  title: string;
  children?: React.ReactNode;
  testId?: string;
};

export const Card = ({ title, children, className, testId }: Props) => {
  const encodedTitle = encodeURI(title);
  return (
    <div
      className={cn("card bg-base-100 w-full shadow-sm", className)}
      data-testid={testId}
    >
      <figure>
        <img
          src={`https://placehold.co/384x220?text=${encodedTitle}`}
          alt="Shoes"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
};
