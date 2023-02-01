import React from "react";

const SearchIcon = ({ ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" {...rest}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z" />
    </svg>
  );
};

export default SearchIcon;
