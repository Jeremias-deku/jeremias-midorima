import React from "react";

interface MyButtonProps {
  title: string;
  onClick: () => void; // function with no parameters
}

export default function MyButton({ title, onClick }: MyButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
    >
      {title}
    </button>
  );
}
