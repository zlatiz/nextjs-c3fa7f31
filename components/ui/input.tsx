import React from "react";

type Props = {
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
};

export default function Input({ id, name, placeholder, value }: Props): JSX.Element {
  return (
    <input id={id} name={name} defaultValue={value} placeholder={placeholder} className="border border-slate-200 rounded-md px-3 py-2 w-full" />
  );
}
