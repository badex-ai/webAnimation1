import * as React from "react";

const CreditIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${props.w}`}
        height={`${props.h}`}
        viewBox="0 0 32 32"
    >
        <path d="M0 26.016q0 .832.576 1.408t1.44.576h28q.8 0 1.408-.576T32 26.016v-20q0-.832-.576-1.408T30.016 4h-28q-.832 0-1.44.608T0 6.016zm2.016 0V12h28v14.016zM2.016 8V6.016h28V8zM4 24h4v-1.984H4zm0-4h6.016v-5.984H4zm6.016 4h4v-1.984h-4zM16 24h4v-1.984h-4zm6.016 0H24v-1.984h-1.984zm4 0H28v-1.984h-1.984z"></path>
    </svg>
);

export default CreditIcon;
