import { extraRatingColor, ratingColors } from "../base";
import { useState } from "preact/hooks";

export default function Rater({ text, initialRating, className }:
    { text: string, initialRating?: number, className?: string }) {
    const [rating, setRating] = useState(initialRating ?? 0);
    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        const step = e.shiftKey ? 0.5 : 1;
        const newRating = e.button ? rating - step : rating + step;
        const max = ratingColors.length - 1;
        setRating(newRating > max ? 0 : newRating < 0 ? max : newRating);
    };
    return (
        <div class={className ?? "rater"} onClick={handleClick} onContextMenu={handleClick}>
            <button style={"background-color:" + extraRatingColor(rating)} />
            {text}
        </div>
    );
}
