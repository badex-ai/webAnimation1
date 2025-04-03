import * as React from "react";

const Headphone = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${props.w}`}
        height={`${props.h}`}
        fill="none"
        viewBox="0 0 24 24"
    >
        <path
            stroke="#000"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3.457 14.838a3 3 0 0 1 1.262-1.106 2 2 0 0 1 2.658.968l1.69 3.625a2 2 0 0 1-.967 2.658 3 3 0 0 1-3.987-1.451l-.845-1.813a3 3 0 0 1 .189-2.88Zm0 0a9 9 0 1 1 17.055.092m0 0a3 3 0 0 0-1.318-1.198 2 2 0 0 0-2.658.968l-1.69 3.625a2 2 0 0 0 .967 2.658 3 3 0 0 0 3.986-1.451l.846-1.813a3 3 0 0 0-.133-2.788Zm-2.95-10.006L16.003 7c-1.03-.612-2.725-1-4-1-1.3 0-2.957.366-4 1L6.436 4.927"
        ></path>
    </svg>
);

export default Headphone;
