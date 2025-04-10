import * as React from "react";

const Rooftop = (props) => (

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 40 800 270">
        <g id="roof-structure">
            <g id="left-roof">
                <path id="left-roof-base" fill="#f0f0f0" d="M10 300h650L750 90H100z"></path>
                <path id="left-roof-depth" fill="#e0e0e0" stroke="#d0d0d0" strokeWidth="0.8" d="M650 300l100-210v25l-90 185h-10z"></path>
                <g id="roof-tiles-horizontal" stroke="#e0e0e0" strokeWidth="0.5">
                    {/* <path d="M50 100h700M45 120h700M40 140h700M35 160h700M30 180h700M25 200h700M20 220h700M15 240h700M10 260h700M5 280h700"></path> */}
                    <path d="M95 100h650M88 120h650M78 140h650M68 160h650M64 180h650M55 200h650M45 220h650M35 240h650M30 260h650M20 280h650"></path>
                </g>
                <g id="roof-tiles-vertical" stroke="#e0e0e0" strokeWidth="0.5">
                    <path d="M100 90 10 300M150 90 60 300M200 90 110 300M250 90 160 300M300 90 210 300M350 90 260 300M400 90 310 300M450 90 360 300M500 90 410 300M550 90 460 300M600 90 510 300M650 90 560 300M700 90 610 300M750 90 660 300"></path>
                </g>
                {/* <path fill="#d8d8d8" d="M50 90h700l15-15H65Z"></path> */}
            </g>
            <g id="right-roof">
                <path id="right-roof-base" fill="#d8d8d8" d="M750 90v-0.5l50 210h-150L750 90z"></path>
                <path id="right-roof-depth" fill="#c0c0c0" stroke="#b0b0b0" strokeWidth="0.8" d="M750 90v25l45 185h5l-50-210z"></path>
            </g>
            <g id="roof-ridge">
                <path fill="#c8c8c8" d="M100 89h652l10-15H110Z"></path>
                <path id="ridge-details" stroke="#b0b0b0" strokeWidth="1.5" d="M110 75h650"></path>
                <path fill="#b0b0b0" stroke="#a0a0a0" strokeWidth="0.8" d="M110 75h655v-7h-650z"></path>
                <g id="ridge-boxes">
                    <path fill="#d6d6d6" stroke="#a0a0a0" strokeWidth="0.5" d="M120 65h25v16h-25z"></path>
                    <path fill="#d6d6d6" stroke="#a0a0a0" strokeWidth="0.5" d="M165 65h25v16h-25z"></path>
                    <path fill="#d6d6d6" stroke="#a0a0a0" strokeWidth="0.5" d="M210 65h25v16h-25z"></path>
                    <path fill="#d6d6d6" stroke="#a0a0a0" strokeWidth="0.5" d="M255 65h25v16h-25z"></path>
                    <path fill="#d6d6d6" stroke="#a0a0a0" strokeWidth="0.5" d="M300 65h25v16h-25z"></path>
                    <path fill="#d6d6d6" stroke="#a0a0a0" strokeWidth="0.5" d="M345 65h25v16h-25z"></path>
                    <path fill="#d6d6d6" stroke="#a0a0a0" strokeWidth="0.5" d="M390 65h25v16h-25z"></path>
                    <path fill="#d6d6d6" stroke="#a0a0a0" strokeWidth="0.5" d="M435 65h25v16h-25z"></path>
                    <path fill="#d6d6d6" stroke="#a0a0a0" strokeWidth="0.5" d="M480 65h25v16h-25z"></path>
                    <path fill="#d6d6d6" stroke="#a0a0a0" strokeWidth="0.5" d="M525 65h25v16h-25z"></path>
                    <path fill="#d6d6d6" stroke="#a0a0a0" strokeWidth="0.5" d="M570 65h25v16h-25z"></path>
                    <path fill="#d6d6d6" stroke="#a0a0a0" strokeWidth="0.5" d="M615 65h25v16h-25z"></path>
                    <path fill="#d6d6d6" stroke="#a0a0a0" strokeWidth="0.5" d="M660 65h25v16h-25z"></path>
                    <path fill="#d6d6d6" stroke="#a0a0a0" strokeWidth="0.5" d="M705 65h25v16h-25z"></path>
                </g>
            </g>
        </g>
        <g className="connector"><path d="M80 117 h180" stroke="#8a8a8a" strokeWidth="3" fill="none"></path><rect x="245" y="110" width="20" height="12" fill="#ffffff" stroke="#8a8a8a" strokeWidth="1"></rect><rect x="266" y="111" width="10" height="8" fill="#ffffff" stroke="#8a8a8a" strokeWidth="1"></rect></g>
        <g className="connect"><path d="M80 116 v20" stroke="#8a8a8a" strokeWidth="3" fill="none"></path></g>
        <g id="panel-row-1">
            <g id="panel-1-1">
                <path fill="#ffffff" stroke="#8a8a8a" strokeWidth="2" d="M280 95l-40 80h90l40-80z"></path>
                <path fill="#ffffff" stroke="#b8b8b8" d="M282 100l-35 70h80l35-70z"></path>
                <g id="panel-1-1-grid" stroke="#d0d0d0" strokeWidth="0.5">
                    <path d="M282 100l-5 10h80l5-10M277 110l-5 10h80l5-10M272 120l-5 10h80l5-10M267 130l-5 10h80l5-10M262 140l-5 10h80l5-10M257 150l-5 10h80l5-10M252 160l-5 10h80l5-10"></path>
                    <path d="M282 100l-35 70M292 100l-35 70M302 100l-35 70M312 100l-35 70M322 100l-35 70M332 100l-35 70M342 100l-35 70M352 100l-35 70M362 100l-35 70"></path>
                </g>

            </g>
            <g id="panel-1-2">
                <path fill="#ffffff" stroke="#8a8a8a" strokeWidth="2" d="M380 95l-40 80h90l40-80z"></path>
                <path fill="#ffffff" stroke="#b8b8b8" d="M382 100l-35 70h80l35-70z"></path>
                <g id="panel-1-2-grid" stroke="#d0d0d0" strokeWidth="0.5">
                    <path d="M382 100l-5 10h80l5-10M377 110l-5 10h80l5-10M372 120l-5 10h80l5-10M367 130l-5 10h80l5-10M362 140l-5 10h80l5-10M357 150l-5 10h80l5-10M352 160l-5 10h80l5-10"></path>
                    <path d="M382 100l-35 70M392 100l-35 70M402 100l-35 70M412 100l-35 70M422 100l-35 70M432 100l-35 70M442 100l-35 70M452 100l-35 70M462 100l-35 70"></path>
                </g>
            </g>
            <g id="panel-1-3">
                <path fill="#ffffff" stroke="#8a8a8a" strokeWidth="2" d="M480 95l-40 80h90l40-80z"></path>
                <path fill="#ffffff" stroke="#b8b8b8" d="M482 100l-35 70h80l35-70z"></path>
                <g id="panel-1-3-grid" stroke="#d0d0d0" strokeWidth="0.5">
                    <path d="M482 100l-5 10h80l5-10M477 110l-5 10h80l5-10M472 120l-5 10h80l5-10M467 130l-5 10h80l5-10M462 140l-5 10h80l5-10M457 150l-5 10h80l5-10M452 160l-5 10h80l5-10"></path>
                    <path d="M482 100l-35 70M492 100l-35 70M502 100l-35 70M512 100l-35 70M522 100l-35 70M532 100l-35 70M542 100l-35 70M552 100l-35 70M562 100l-35 70"></path>
                </g>
            </g>
            <g id="panel-1-4">
                <path fill="#ffffff" stroke="#8a8a8a" strokeWidth="2" d="M580 95l-40 80h90l40-80z"></path>
                <path fill="#ffffff" stroke="#b8b8b8" d="M582 100l-35 70h80l35-70z"></path>
                <g id="panel-1-4-grid" stroke="#d0d0d0" strokeWidth="0.5">
                    <path d="M582 100l-5 10h80l5-10M577 110l-5 10h80l5-10M572 120l-5 10h80l5-10M567 130l-5 10h80l5-10M562 140l-5 10h80l5-10M557 150l-5 10h80l5-10M552 160l-5 10h80l5-10"></path>
                    <path d="M582 100l-35 70M592 100l-35 70M602 100l-35 70M612 100l-35 70M622 100l-35 70M632 100l-35 70M642 100l-35 70M652 100l-35 70M662 100l-35 70"></path>
                </g>
            </g>
        </g>
        <g id="panel-row-2">
            <g id="panel-2-3">
                <path fill="#ffffff" stroke="#8a8a8a" strokeWidth="2" d="M338 195l-40 80h90l40-80z"></path>
                <path fill="#ffffff" stroke="#b8b8b8" d="M340 200l-35 70h80l35-70z"></path>
                <g id="panel-2-3-grid" stroke="#d0d0d0" strokeWidth="0.5">
                    <path d="M340 200l-5 10h80l5-10M335 210l-5 10h80l5-10M330 220l-5 10h80l5-10M325 230l-5 10h80l5-10M320 240l-5 10h80l5-10M315 250l-5 10h80l5-10M310 260l-5 10h80l5-10"></path>
                    <path d="M340 200l-35 70M350 200l-35 70M360 200l-35 70M370 200l-35 70M380 200l-35 70M390 200l-35 70M400 200l-35 70M410 200l-35 70M420 200l-35 70"></path>
                </g>
            </g>
            <g id="panel-2-1">
                <path fill="#ffffff" stroke="#8a8a8a" strokeWidth="2" d="M438 195l-40 80h90l40-80z"></path>
                <path fill="#ffffff" stroke="#b8b8b8" d="M440 200l-35 70h80l35-70z"></path>
                <g id="panel-2-1-grid" stroke="#d0d0d0" strokeWidth="0.5">
                    <path d="M440 200l-5 10h80l5-10M435 210l-5 10h80l5-10M430 220l-5 10h80l5-10M425 230l-5 10h80l5-10M420 240l-5 10h80l5-10M415 250l-5 10h80l5-10M410 260l-5 10h80l5-10"></path>
                    <path d="M440 200l-35 70M450 200l-35 70M460 200l-35 70M470 200l-35 70M480 200l-35 70M490 200l-35 70M500 200l-35 70M510 200l-35 70M520 200l-35 70"></path>
                </g>
            </g>
            <g id="panel-2-2">
                <path fill="#ffffff" stroke="#8a8a8a" strokeWidth="2" d="M538 195l-40 80h90l40-80z"></path>
                <path fill="#ffffff" stroke="#b8b8b8" d="M540 200l-35 70h80l35-70z"></path>
                <g id="panel-2-2-grid" stroke="#d0d0d0" strokeWidth="0.5">
                    <path d="M540 200l-5 10h80l5-10M535 210l-5 10h80l5-10M530 220l-5 10h80l5-10M525 230l-5 10h80l5-10M520 240l-5 10h80l5-10M515 250l-5 10h80l5-10M510 260l-5 10h80l5-10"></path>
                    <path d="M540 200l-35 70M550 200l-35 70M560 200l-35 70M570 200l-35 70M580 200l-35 70M590 200l-35 70M600 200l-35 70M610 200l-35 70M620 200l-35 70"></path>
                </g>
            </g>
        </g>
    </svg>


);

export default Rooftop;
