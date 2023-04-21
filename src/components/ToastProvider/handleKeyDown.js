import React from "react";

export default function useEscKey(callback) {
    return React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.code === 'Escape') { callback([]) }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [callback])
}