// Draggable.js
import React, { useState, useEffect, useRef } from "react";

export const Draggable = ({ children, initialPosition }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState(initialPosition);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const draggableRef = useRef(null);

    // Function to start dragging
    const onMouseDown = (e) => {
        setIsDragging(true);
        const rect = draggableRef.current.getBoundingClientRect();
        setOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    // Function to handle mouse movement while dragging
    const onMouseMove = (e) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
            });
        }
    };

    // Function to stop dragging
    const onMouseUp = () => {
        setIsDragging(false);
    };

    // Add event listeners for dragging
    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };
    }, [isDragging, offset]);

    return (
        <div
            ref={draggableRef}
            className="fixed"
            style={{ top: `${position.y}px`, left: `${position.x}px` }}
            onMouseDown={onMouseDown}
        >
            {children}
        </div>
    );
};
