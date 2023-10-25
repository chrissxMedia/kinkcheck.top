import { ratingColor, ratings } from "../base";
import { useState } from "preact/hooks";

export default function Rater({ text, initialRating, className }:
    { text: string, initialRating?: number, className?: string }) {
    const [rating, setRating] = useState(initialRating ?? 0);
    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        // FIXME: there shouldnt be a step between i dont know and fav
        const step = e.shiftKey || e.altKey ? 0.5 : 1;
        const newRating = e.button ? rating - step : rating + step;
        const max = ratings.length - 1;
        setRating(newRating > max ? 0 : newRating < 0 ? max : newRating);
        window.onbeforeunload = () => true;
    };
    return (
        <div class={className ?? "rater"} onClick={handleClick} onContextMenu={handleClick}>
            <button style={"background-color:" + ratingColor(rating)} />
            {text}
        </div>
    );
}
