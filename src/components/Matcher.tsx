import { useState } from "preact/hooks";
import { decodeKinkCheck, defaultKinkcheck, kinks, ratings, type template_revision } from "../base";
import { Category } from "./KinkCheck";
import kc from "./KinkCheck.module.css";
import styles from "./Matcher.module.css";
import Input from "./Input";

function matchRating(a: number, b: number): number {
    if (!a || !b) return a + b;
    return Math.round(a + b) / 2;
}

export function match(a: ratings, b: ratings): ratings {
    // if (!Object.keys(a).every((k) => Object.keys(b).includes(k))) throw "incompatible ratings";
    return a.map((rA, cat) => rA.map((rsA, kink) => rsA.map((ratA, pos) => matchRating(ratA, b[cat][kink][pos]))));
}

export default function Matcher(meta: template_revision) {
    const [partnerA, setPartnerA] = useState("");
    const [partnerB, setPartnerB] = useState("");
    let kcA = defaultKinkcheck(kinks);
    let kcB = defaultKinkcheck(kinks);
    let errorA, errorB;
    try { kcA = decodeKinkCheck(meta, partnerA.trim()); } catch(e: any) { errorA = e.toString(); }
    try { kcB = decodeKinkCheck(meta, partnerB.trim()); } catch(e: any) { errorB = e.toString(); }
    kcB.ratings = kcB.ratings.map(ks => ks.map(rs => rs.toReversed()));
    const matched = match(kcA.ratings, kcB.ratings);
    return <main>
        <div class={styles.matcherfrontmatter + " " + kc.catcontainer}>
            <p>The resulting KinkCheck is written from Partner A's perspective.</p>
            <Input error={errorA} placeholder="Partner A" value={partnerA} setValue={setPartnerA} className={styles.input} />
            <Input error={errorB} placeholder="Partner B" value={partnerB} setValue={setPartnerB} className={styles.input} />
        </div>
        <div class={kc.catcontainer}>
            {
                kinks.map(([cat, kinks], i) => (
                    <Category cat={cat} kinks={kinks} ratings={matched[i]} />
                ))
            }
        </div>
    </main>;
}
