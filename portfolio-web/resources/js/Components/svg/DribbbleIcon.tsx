import React from 'react';

interface DribbbleIconProps {
    className?: string;
}

export function DribbbleIcon({ className = 'h-4 w-4' }: DribbbleIconProps) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm6.9 8.2a8.03 8.03 0 0 1-3.2 2.3 22 22 0 0 0-1.8-3.7 8.02 8.02 0 0 1 5-1.4zM12 4a7.96 7.96 0 0 1 5.1 1.8 10 10 0 0 0-4.6 1.3 22.2 22.2 0 0 0-2.8-4.4A8.1 8.1 0 0 1 12 4zM7.8 4.7a24.1 24.1 0 0 1 2.9 4.5A8.1 8.1 0 0 1 4 10.9a8 8 0 0 1 3.8-6.2zM4 12.8a9.8 9.8 0 0 0 7.3 1 20 20 0 0 1-1.3 2.9 8 8 0 0 1-6-3.9zm8 7.2a8 8 0 0 1-2.9-.5 22 22 0 0 0 1.4-3.1 19.5 19.5 0 0 0 4.6-.2A8 8 0 0 1 12 20zm4.4-2.8a17.8 17.8 0 0 1-4.2.2 20.3 20.3 0 0 1 1.7-3.4 19.6 19.6 0 0 1 3.2-2.3 8 8 0 0 1-.7 5.5z" />
        </svg>
    );
}
