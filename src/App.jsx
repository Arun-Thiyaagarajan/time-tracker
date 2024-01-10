import { useState, useEffect } from "react";
import "./App.css";
import reset from "./assets/reset.png";
import plus from "./assets/plus.svg";
import minus from "./assets/minus.svg";

const App = () => {
    const [count, setCount] = useState(() => {
        // Initialize count from localStorage or default to 0
        const storedCount = localStorage.getItem("count");
        return storedCount !== null ? parseFloat(storedCount) : 0;
    });

    const increaseCount = () => {
        setCount((prevCount) => prevCount + 0.25);
    };

    const decreaseCount = () => {
        // Ensure count doesn't go below 0
        if (count >= 0.25) {
            setCount((prevCount) => prevCount - 0.25);
        } else {
            alert("Count Cannot Go Below 0!");
        }
    };

    const resetCount = () => {
        setCount(0);
    };

    useEffect(() => {
        // Store count in localStorage whenever it changes
        localStorage.setItem("count", count.toString());
    }, [count]);

    return (
        <>
            <div className="container">
                <div className="box">
                    <h1>Time Tracker</h1>
                    <div className="number">
                        <p>{count} <span className="hrs">hr</span></p>
                    </div>
                    <div className="button-group">
                        <button type="button" className="btn" onClick={decreaseCount}>
                            <img src={minus} className="img" alt="" />
                        </button>
                        <button type="button" className="btn" onClick={resetCount}>
                            <img src={reset} className="img" alt="" />
                        </button>
                        <button type="button" className="btn" onClick={increaseCount}>
                            <img src={plus} className="img" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
