'use client';
import { useRef, useEffect, useState } from "react";

export default function Ticker({ items = [], direction = "left", speed = 1, className = "" }) {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [contentWidth, setContentWidth] = useState(0);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const content = contentRef.current;
        let pos = direction === "right" ? -contentWidth : 0;
        setPosition(pos);

        let frame;
        const scroll = () => {
            pos += direction === "left" ? -speed : speed;

            if (direction === "left" && Math.abs(pos) >= contentWidth) {
                pos = 0;
            } else if (direction === "right" && pos >= 0) {
                pos = -contentWidth;
            }

            content.style.transform = `translateX(${pos}px)`;
            frame = requestAnimationFrame(scroll);
        };

        frame = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(frame);
    }, [direction, speed, contentWidth]);

    useEffect(() => {
        const calculateWidth = () => {
            const single = contentRef.current?.querySelector(".ticker-group");
            if (single) {
                const width = single.offsetWidth;
                setContentWidth(width);
                if (direction === "right") {
                    setPosition(-width);
                    contentRef.current.style.transform = `translateX(${-width}px)`;
                }
            }
        };

        calculateWidth();
        window.addEventListener("resize", calculateWidth);
        return () => window.removeEventListener("resize", calculateWidth);
    }, [items, direction]);

    const renderItems = () =>
        items.map((item, index) => (
            <span key={index} className={`px-4 ${item.className || ""}`}>
                {item.text}
            </span>
        ));

    return (
        <div ref={containerRef} className={`w-full overflow-hidden flex items-center ${className}`}>
            <div ref={contentRef} className="flex whitespace-nowrap text-black text-lg md:text-4xl lg:text-7xl will-change-transform">
                <div className="flex ticker-group">{renderItems()}</div>
                <div className="flex ticker-group">{renderItems()}</div>
            </div>
        </div>
    );
}
