import React from "react";

interface ButtonProps {
  title: string;
  isBrown: boolean;
  onClick?: () => void;
}

export default function Button({ title, isBrown, onClick }: ButtonProps) {
  if (isBrown) {
    return (
      <button
        className="w-full rounded-2xl bg-brown p-4 font-bold text-white"
        onClick={onClick}
      >
        {title}
      </button>
    );
  }

  return (
    <button
      className="w-full rounded-2xl bg-yellow p-4 font-bold text-brown"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
