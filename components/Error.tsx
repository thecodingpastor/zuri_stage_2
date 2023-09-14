import React from "react";

const Error: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div
      style={{
        maxWidth: "50rem",
        margin: "8rem auto",
        marginTop: "80px !important",
        padding: "2rem",
      }}
    >
      {message || "Something went wrong"}
    </div>
  );
};

export default Error;
