import { extraRatingColor, ratingColors } from "../base";
import { useState } from "preact/hooks";

export default function Rater({ text }: { text: string }) {
    const [rating, setRating] = useState(0);
    // TODO: use right click to go back
    return (
        <div class="rater" onClick={(e) => setRating((rating + (e.shiftKey ? 0.5 : 1)) % ratingColors.length)}>
            <button style={"background-color:" + extraRatingColor(rating)} />
            {text}
        </div>
    );
}
