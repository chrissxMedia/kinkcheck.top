import { ratingColors } from "../base";
import { useState } from "preact/hooks";

export default function Rater({ text }: { text: string }) {
    const [rating, setRating] = useState(0);
    return (
        <div class="rater" onClick={() => setRating((rating + 1) % ratingColors.length)}>
            <button style={"background-color:" + ratingColors[rating]} />
            {text}
        </div>
    );
}
