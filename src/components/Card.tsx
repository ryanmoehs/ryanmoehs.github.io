import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`w-full h-full flex flex-col bg-amber-300 hover:bg-amber-200 hover:cursor-pointer dark:bg-slate-600 hover:dark:bg-slate-500 ${className}`}>
      {children}
    </div>
  );
};

export default Card;