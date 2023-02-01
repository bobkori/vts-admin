import React from "react";

const Notification = ({ ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" {...rest}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm7-16c4.97 0 9 4.043 9 9.031V20H3v-8.969C3 6.043 7.03 2 12 2zM9.5 21h5a2.5 2.5 0 1 1-5 0z" />
    </svg>
  );
};

export default Notification;
