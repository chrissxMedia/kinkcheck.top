import { ratingColor, ratings } from "../base";
import { useState } from "preact/hooks";

export default function Rater({ text, initialRating, className }:
    { text: string, initialRating?: number, className?: string }) {
    const [rating, setRating] = useState(initialRating ?? 0);
    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        const step = e.shiftKey || e.altKey ? 0.5 : 1;
        let newRating = e.button ? rating - step : rating + step;
        const max = ratings.length - 1;
        if (newRating === 0.5) newRating = e.button ? 0 : 1;
        else if (newRating > max) newRating = 0;
        else if (newRating < 0) newRating = max;
        setRating(newRating);
        window.onbeforeunload = () => true;
    };
    return (
        <div class={className ?? "rater"} onClick={handleClick} onContextMenu={handleClick}>
            <button style={"background-color:" + ratingColor(rating)} />
            {text}
        </div>
    );
}
