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
                <div style={`width:600px;background-color:${colors[x]};height:${height}px`} />
            )) : <div style={`width:600px;background-color:transparent;height:400px`} />}
        </main>
    );
}
