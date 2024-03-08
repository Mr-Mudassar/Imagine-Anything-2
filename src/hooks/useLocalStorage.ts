"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

function useLocalStorage<T = unknown>(
    key: string,
    initialValue?: T
): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
        if (typeof window !== "undefined") {
            const storedValue = window.localStorage.getItem(key);

            return storedValue !== "undefined" && storedValue !== null
                ? JSON.parse(storedValue)
                : initialValue;
        } else {
            return initialValue;
        }
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    }, [value, key]);

    return [value, setValue];
}

export default useLocalStorage;
