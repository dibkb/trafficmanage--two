import React from "react";
const Name: React.FC<Name> = ({ name, roll }) => {
  return (
    <div
      className="flex gap-2 text-sm"
      style={{
        gap: "10px",
      }}
    >
      <p className="">{name}</p>
      <p className="">{roll}</p>
    </div>
  );
};
interface Name {
  name: string;
  roll: string;
}
export default Name;
