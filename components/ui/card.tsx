import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props): JSX.Element {
  return (
    <div className="card flex flex-col h-full">
      {children}
    </div>
  );
}
