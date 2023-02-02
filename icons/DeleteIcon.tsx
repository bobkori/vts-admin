import React from "react";

const DeleteIcon = ({ ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" {...rest}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM8 10h8v2H8v-2z" />
    </svg>
  );
};

export default DeleteIcon;
