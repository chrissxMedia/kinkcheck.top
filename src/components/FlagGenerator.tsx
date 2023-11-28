import { useEffect, useState } from "preact/hooks";
import styles from "./FlagGenerator.module.css";

const colors = {
    "t": "rgb(var(--transblue))",
    "r": "rgb(var(--transpink))",
    "a": "white",
    "n": "rgb(var(--transpink))",
    "s": "rgb(var(--transblue))",
};

export default function FlagGenerator() {
    const [flag, setFlag] = useState("");
    let input: HTMLInputElement;
    const chars = [...flag.toLowerCase()].filter(x => "trans".includes(x));
    const height = 400 / chars.length;
    useEffect(() => input.focus());
    return (
        <main>
            <input ref={x => input = x!} type="text" placeholder="trans, rat, ant, ..."
                spellcheck={false} autocorrect="off" class={styles.input}
                value={flag} onInput={e => setFlag(e.target.value)} />
            {chars.length ? chars.map(x => (
                <div style={{ width: 600, backgroundColor: colors[x], height }} />
            )) : <div style={{ width: 600, backgroundColor: "transparent", height: 400 }} />}
        </main>
    );
}
