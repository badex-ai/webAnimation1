import * as React from "react";
import { forwardRef } from "react";

const Sun = forwardRef((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        id="sun"
        width={`${props.w}`}
        height={`${props.h}`}
        fill="#000"
        version="1.1"
        viewBox="0 0 207.628 207.628"
        ref={ref}
    >
        <circle fill="white" cx="103.814" cy="103.814" r="45.868"></circle>
        <path d="M103.814 157.183c-29.427 0-53.368-23.941-53.368-53.368s23.941-53.368 53.368-53.368 53.368 23.941 53.368 53.368-23.941 53.368-53.368 53.368m0-91.737c-21.156 0-38.368 17.212-38.368 38.368s17.212 38.368 38.368 38.368 38.368-17.212 38.368-38.368-17.212-38.368-38.368-38.368M103.814 39.385a7.5 7.5 0 0 1-7.5-7.5V7.5a7.5 7.5 0 0 1 15 0v24.385a7.5 7.5 0 0 1-7.5 7.5M103.814 207.628a7.5 7.5 0 0 1-7.5-7.5v-24.385a7.5 7.5 0 0 1 15 0v24.385a7.5 7.5 0 0 1-7.5 7.5M200.128 111.314h-24.385a7.5 7.5 0 0 1 0-15h24.385a7.5 7.5 0 0 1 0 15M31.885 111.314H7.5a7.5 7.5 0 0 1 0-15h24.385a7.5 7.5 0 0 1 0 15M154.676 60.452a7.47 7.47 0 0 1-5.303-2.197 7.5 7.5 0 0 1 0-10.606l17.243-17.242a7.5 7.5 0 0 1 10.606 0 7.5 7.5 0 0 1 0 10.606l-17.243 17.242a7.47 7.47 0 0 1-5.303 2.197M35.709 179.419a7.47 7.47 0 0 1-5.303-2.197 7.5 7.5 0 0 1 0-10.606l17.243-17.243a7.5 7.5 0 0 1 10.606 0 7.5 7.5 0 0 1 0 10.606l-17.243 17.243a7.47 7.47 0 0 1-5.303 2.197M171.918 179.419a7.47 7.47 0 0 1-5.303-2.197l-17.243-17.243a7.5 7.5 0 0 1 0-10.606 7.5 7.5 0 0 1 10.606 0l17.243 17.243a7.5 7.5 0 0 1 0 10.606 7.47 7.47 0 0 1-5.303 2.197M52.952 60.452a7.47 7.47 0 0 1-5.303-2.197L30.406 41.013a7.5 7.5 0 0 1 0-10.606 7.5 7.5 0 0 1 10.606 0l17.243 17.242a7.5 7.5 0 0 1 0 10.606 7.47 7.47 0 0 1-5.303 2.197"></path>
    </svg>
));

export default Sun;
