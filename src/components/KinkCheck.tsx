import { useState } from "preact/hooks";
import { defaultRatings, kinks, type kink } from "../base";
import Rater from "./Rater";
import styles from "./KinkCheck.module.css";

export function Kink({ kink: [kink, positions, , description], ratings, setRating }:
    { kink: kink, ratings: number[], setRating?: (p: number) => (r: number) => void }) {
    return (
        <tr>
            <td>
                <span>{kink}</span>
                <span class={styles.desc}>{description}</span>
            </td>
            {positions.map((pos, p) => (
                <td>
                    <Rater text={pos} rating={ratings[p]} setRating={setRating && setRating(p)} clickable={true} />
                </td>
            ))}
            {positions.length === 1 && <td />}
        </tr>
    );
}

export function Category({ cat, kinks, ratings, setRating }: {
    cat: string, kinks: kink[], ratings: number[][],
    setRating: (k: number) => (p: number) => (r: number) => void
}) {
    return (
        <div class={styles.category}>
            <h2 class={styles.catname}>{cat}</h2>
            <table>
                <tbody>
                    {kinks.map((kink, i) => (
                        <Kink kink={kink} ratings={ratings[i]} setRating={setRating(i)} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function KinkCheck() {
    const [ratings, setRatings] = useState(defaultRatings);
    const setRating = (cat: string) => (kink: number) => (pos: number) => (rat: number) => {
        const c = ratings[cat];
        const p = c[kink];
        p[pos] = rat;
        c[kink] = p;
        setRatings({ ...ratings, [cat]: c });
    };
    // TODO: add a name field
    return <main class={styles.catcontainer}>
        {
            Object.entries(kinks).map(([cat, kinks]) => (
                <Category cat={cat} kinks={kinks} ratings={ratings[cat]} setRating={setRating(cat)} />
            ))
        }
    </main>;
}
