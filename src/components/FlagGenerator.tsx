import { useState } from "preact/hooks";

export default function FlagGenerator() {
    const [flag, setFlag] = useState("");
    const colors = {
        "t": "rgb(var(--transblue))",
        "r": "rgb(var(--transpink))",
        "a": "white",
        "n": "rgb(var(--transpink))",
        "s": "rgb(var(--transblue))",
    };
    const chars = [...flag].filter(x => "trans".includes(x));
    const height = 400 / chars.length;
    return (
        <main>
            <input type="text" placeholder="trans, rat, ant, ..."
                spellcheck={false} autocorrect="off"
                value={flag} onChange={e => setFlag(e.target.value)} />
            {chars.length ? chars.map(x => (
                <div style={{ width: 600, backgroundColor: colors[x], height }} />
            )) : <div style={{ width: 600, backgroundColor: "transparent", height: 400 }} />}
        </main>
    );
}
