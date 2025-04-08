import * as React from "react";

const Rooftop = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 350">
        {/* Roof Base */}
        <g id="roof-base">
            <path fill="#f0f0f0" d="M0 300h600L700 90H100z"></path>
            {/* Horizontal Roof Tiles */}
            <g id="roof-tiles-horizontal" stroke="#e0e0e0" strokeWidth="0.5">
                <path d="M100 110h600M100 130h600M100 150h600M100 170h600M100 190h600M100 210h600M100 230h600M100 250h600M100 270h600"></path>
            </g>
            {/* Vertical Roof Tiles */}
            <g id="roof-tiles-vertical" stroke="#e0e0e0" strokeWidth="0.5">
                <path d="M150 90 50 300M200 90 100 300M250 90 150 300M300 90 200 300M350 90 250 300M400 90 300 300M450 90 350 300M500 90 400 300M550 90 450 300M600 90 500 300M650 90 550 300M700 90 600 300"></path>
            </g>
            <path fill="#d8d8d8" d="M90 90h610l10-10H100Z"></path>
            {/* Roof Ridge */}
            <g id="roof-ridge">
                <path fill="#c8c8c8" d="M100 80h610l10-10H110Z"></path>
                <path id="ridge-details" stroke="#b0b0b0" d="M110 70h610"></path>
            </g>
        </g>

        {/* Roof Device on ridge */}
        <path id="roof-device" fill="#d6d6d6" stroke="#a0a0a0" d="M80 65h20v10H80z"></path>

        {/* Solar Panels - Top Row (4 panels in a row) */}
        <g id="panel-row-1">
            {/* Panel 1 */}
            <g id="panel-1-1">
                {/* Outer border */}
                <path fill="#ffffff" stroke="#8a8a8a" strokeWidth="2" d="M280 95l-40 80h90l40-80z"></path>
                {/* Inner panel - fixed to properly fit within outer border */}
                <path fill="#ffffff" stroke="#b8b8b8" d="M282 100l-35 70h80l35-70z"></path>
                {/* Grid lines - adjusted to match inner panel */}
                <g id="panel-1-1-grid" stroke="#d0d0d0" strokeWidth="0.5">
                    {/* Horizontal grid lines */}
                    <path d="M282 100l-5 10h80l5-10M282 110l-5 10h80l5-10M277 120l-5 10h80l5-10M272 130l-5 10h80l5-10M267 140l-5 10h80l5-10M262 150l-5 10h80l5-10M257 160l-5 10h80l5-10"></path>
                    {/* Vertical grid lines */}
                    <path d="M282 100l-35 70M292 100l-35 70M302 100l-35 70M312 100l-35 70M322 100l-35 70M332 100l-35 70M342 100l-35 70M352 100l-35 70M362 100l-35 70"></path>
                </g>
            </g>

            {/* Panel 2 */}
            <g id="panel-1-2">
                {/* Outer border */}
                <path fill="#ffffff" stroke="#8a8a8a" strokeWidth="2" d="M380 95l-40 80h90l40-80z"></path>
                {/* Inner panel - fixed to properly fit within outer border */}
                <path fill="#ffffff" stroke="#b8b8b8" d="M382 100l-35 70h80l35-70z"></path>
                {/* Grid lines - adjusted to match inner panel */}
                <g id="panel-1-2-grid" stroke="#d0d0d0" strokeWidth="0.5">
                    {/* Horizontal grid lines */}
                    <path d="M382 100l-5 10h80l5-10M382 110l-5 10h80l5-10M377 120l-5 10h80l5-10M372 130l-5 10h80l5-10M367 140l-5 10h80l5-10M362 150l-5 10h80l5-10M357 160l-5 10h80l5-10"></path>
                    {/* Vertical grid lines */}
                    <path d="M382 100l-35 70M392 100l-35 70M402 100l-35 70M412 100l-35 70M422 100l-35 70M432 100l-35 70M442 100l-35 70M452 100l-35 70M462 100l-35 70"></path>
                </g>
            </g>

            {/* Panel 3 */}
            <g id="panel-1-3">
                {/* Outer border */}
                <path fill="#ffffff" stroke="#8a8a8a" strokeWidth="2" d="M480 95l-40 80h90l40-80z"></path>
                {/* Inner panel - fixed to properly fit within outer border */}
                <path fill="#ffffff" stroke="#b8b8b8" d="M482 100l-35 70h80l35-70z"></path>
                {/* Grid lines - adjusted to match inner panel */}
                <g id="panel-1-3-grid" stroke="#d0d0d0" strokeWidth="0.5">
                    {/* Horizontal grid lines */}
                    <path d="M482 100l-5 10h80l5-10M482 110l-5 10h80l5-10M477 120l-5 10h80l5-10M472 130l-5 10h80l5-10M467 140l-5 10h80l5-10M462 150l-5 10h80l5-10M457 160l-5 10h80l5-10"></path>
                    {/* Vertical grid lines */}
                    <path d="M482 100l-35 70M492 100l-35 70M502 100l-35 70M512 100l-35 70M522 100l-35 70M532 100l-35 70M542 100l-35 70M552 100l-35 70M562 100l-35 70"></path>
                </g>
            </g>

            {/* Panel 4 - Rightmost top panel */}
            <g id="panel-1-4">
                {/* Outer border */}
                <path fill="#ffffff" stroke="#8a8a8a" strokeWidth="2" d="M580 95l-40 80h90l40-80z"></path>
                {/* Inner panel - fixed to properly fit within outer border */}
                <path fill="#ffffff" stroke="#b8b8b8" d="M582 100l-35 70h80l35-70z"></path>
                {/* Grid lines - adjusted to match inner panel */}
                <g id="panel-1-4-grid" stroke="#d0d0d0" strokeWidth="0.5">
                    {/* Horizontal grid lines */}
                    <path d="M582 100l-5 10h80l5-10M582 110l-5 10h80l5-10M577 120l-5 10h80l5-10M572 130l-5 10h80l5-10M567 140l-5 10h80l5-10M562 150l-5 10h80l5-10M557 160l-5 10h80l5-10"></path>
                    {/* Vertical grid lines */}
                    <path d="M582 100l-35 70M592 100l-35 70M602 100l-35 70M612 100l-35 70M622 100l-35 70M632 100l-35 70M642 100l-35 70M652 100l-35 70M662 100l-35 70"></path>
                </g>
            </g>
        </g>

        {/* Bottom Row (3 panels) */}
        <g id="panel-row-2">
            {/* Panel 5 - Left-most bottom panel */}
            <g id="panel-2-3">
                {/* Outer border */}
                <path fill="#ffffff" stroke="#8a8a8a" strokeWidth="2" d="M338 195l-40 80h90l40-80z"></path>
                {/* Inner panel - fixed to properly fit within outer border */}
                <path fill="#ffffff" stroke="#b8b8b8" d="M340 200l-35 70h80l35-70z"></path>
                {/* Grid lines - adjusted to match inner panel */}
                <g id="panel-2-3-grid" stroke="#d0d0d0" strokeWidth="0.5">
                    {/* Horizontal grid lines */}
                    <path d="M340 200l-5 10h80l5-10M340 210l-5 10h80l5-10M335 220l-5 10h80l5-10M330 230l-5 10h80l5-10M325 240l-5 10h80l5-10M320 250l-5 10h80l5-10M315 260l-5 10h80l5-10"></path>
                    {/* Vertical grid lines */}
                    <path d="M340 200l-35 70M350 200l-35 70M360 200l-35 70M370 200l-35 70M380 200l-35 70M390 200l-35 70M400 200l-35 70M410 200l-35 70M420 200l-35 70"></path>
                </g>
            </g>

            {/* Panel 6 - Middle bottom panel */}
            <g id="panel-2-1">
                {/* Outer border */}
                <path fill="#ffffff" stroke="#8a8a8a" strokeWidth="2" d="M438 195l-40 80h90l40-80z"></path>
                {/* Inner panel - fixed to properly fit within outer border */}
                <path fill="#ffffff" stroke="#b8b8b8" d="M440 200l-35 70h80l35-70z"></path>
                {/* Grid lines - adjusted to match inner panel */}
                <g id="panel-2-1-grid" stroke="#d0d0d0" strokeWidth="0.5">
                    {/* Horizontal grid lines */}
                    <path d="M440 200l-5 10h80l5-10M440 210l-5 10h80l5-10M435 220l-5 10h80l5-10M430 230l-5 10h80l5-10M425 240l-5 10h80l5-10M420 250l-5 10h80l5-10M415 260l-5 10h80l5-10"></path>
                    {/* Vertical grid lines */}
                    <path d="M440 200l-35 70M450 200l-35 70M460 200l-35 70M470 200l-35 70M480 200l-35 70M490 200l-35 70M500 200l-35 70M510 200l-35 70M520 200l-35 70"></path>
                </g>
            </g>

            {/* Panel 7 - Right-most bottom panel */}
            <g id="panel-2-2">
                {/* Outer border */}
                <path fill="#ffffff" stroke="#8a8a8a" strokeWidth="2" d="M538 195l-40 80h90l40-80z"></path>
                {/* Inner panel - fixed to properly fit within outer border */}
                <path fill="#ffffff" stroke="#b8b8b8" d="M540 200l-35 70h80l35-70z"></path>
                {/* Grid lines - adjusted to match inner panel */}
                <g id="panel-2-2-grid" stroke="#d0d0d0" strokeWidth="0.5">
                    {/* Horizontal grid lines */}
                    <path d="M540 200l-5 10h80l5-10M540 210l-5 10h80l5-10M535 220l-5 10h80l5-10M530 230l-5 10h80l5-10M525 240l-5 10h80l5-10M520 250l-5 10h80l5-10M515 260l-5 10h80l5-10"></path>
                    {/* Vertical grid lines */}
                    <path d="M540 200l-35 70M550 200l-35 70M560 200l-35 70M570 200l-35 70M580 200l-35 70M590 200l-35 70M600 200l-35 70M610 200l-35 70M620 200l-35 70"></path>
                </g>
            </g>
        </g>
    </svg>
);

export default Rooftop;
