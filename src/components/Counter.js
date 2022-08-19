import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount((prev) => prev + 1)
    }

    const decrementHandler = () => {
        setCount((prev) => prev - 1);
    }

    return (
        <div class="max-w-md mx-auto mt-10 space-y-5">
            <div
                class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
            >
                <div class="text-2xl font-semibold">{count}</div>
                <div class="flex space-x-3">
                    <button
                        class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                        onClick={incrementHandler}
                    >
                        Increment
                    </button>
                    <button
                        class="bg-red-400 text-white px-3 py-2 rounded shadow"
                        onClick={decrementHandler}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;