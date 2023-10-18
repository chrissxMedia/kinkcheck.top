import { atom } from "nanostores";

// TODO: try to unify these 2

export const ratingNames = [
    "i dont know",
    "favorite, love it",
    "want to try/do",
    "could be convinced",
    "not interested",
    "hard limit",
];

export const ratingColors = [
    "#808080",
    "#21eee0",
    "#0eb620",
    "#eeef29",
    "#c81c11",
    "#202020",
];

function splitColor(hex: string): [number, number, number] {
    const c = hex.substring(1).match(/.{2}/g)!;
    return [parseInt(c[0], 16), parseInt(c[1], 16), parseInt(c[2], 16)];
}

function mixColors(a: [number, number, number], b: [number, number, number]): number[] {
    return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2].map(Math.round);
}

export function extraRatingColor(i: number) {
    if (i % 1 == 0) return ratingColors[i];
    const c = mixColors(splitColor(ratingColors[i - 0.5]), splitColor(ratingColors[i + 0.5]));
    return `#${c[0].toString(16)}${c[1].toString(16)}${c[2].toString(16)}`;
}

type positions = [string, string] | [""];
// TODO: info texts
type kink = [string, positions];
type kl = kink[];

export const kinks: { General: kl, BDSM: kl, Kinks: kl, Pain: kl, Clothing: kl, Extreme: kl } = {
    "General": [
        ["Fellatio/Blowjobs", ["receive", "give"]],
        ["Cunnilingus", ["receive", "give"]],
        ["Face-Fucking", ["give", "receive"]],
        ["Face-Sitting", ["top", "bottom"]],
        ["Handjobs", ["give", "receive"]],
        ["Fingering", ["give", "receive"]],
        ["Fisting", ["give", "receive"]],
        ["Rough Sex", [""]],
        ["Creampie", ["give", "receive"]],
        ["Swallowing", ["top", "bottom"]],
        ["Facials", ["give", "receive"]],
        // TODO: you can be top/bottom when masturbating...
        ["Masturbation", [""]],
        ["Anal Masturbation", [""]],
        ["Anal Sex", ["top", "bottom"]],
        ["Anal Fingering", ["top", "bottom"]],
        ["Anal Fisting", ["top", "bottom"]],
        ["Pegging", ["top", "bottom"]],
        ["Anilingus/Rimming", ["top", "bottom"]],
    ],
    "BDSM": [
        ["Little/Daddy*Mommy", ["dom", "sub"]],
        ["Slave/Master*Mistress", ["dom", "sub"]],
        ["Pet/Owner", ["dom", "sub"]],
        ["Femdom", ["dom", "sub"]],
        ["Maledom", ["dom", "sub"]],
        ["Power Exchange", ["dom", "sub"]],
        ["Humiliation/Embarrassment", ["dom", "sub"]],
        ["Degradation/Name Calling", ["dom", "sub"]],
        ["Bondage", ["dom", "sub"]],
        ["Encasement/Cages", ["dom", "sub"]],
        ["Discipline", ["dom", "sub"]],
        ["Rape/CNC", ["top", "bottom"]],
        ["Kidnapping", ["dom", "sub"]],
        ["Spanking", ["give", "receive"]],
        // TODO: give/receive?
        ["Forced Orgasms", ["dom", "sub"]],
        ["Orgasm Denial", ["dom", "sub"]],
        ["Chastity", ["dom", "sub"]],
        ["Masturbation Instructions", ["give", "receive"]],
        ["Servitude", ["dom", "sub"]],
        ["Sensation Play", ["dom", "sub"]],
        ["Electric Stimulation", ["dom", "sub"]],
        ["Breathing Play", ["dom", "sub"]],
        ["Choking", ["dom", "sub"]],
        ["Gags", ["dom", "sub"]],
        ["Begging", ["dom", "sub"]],
        ["Teasing", ["dom", "sub"]],
        ["Sounding/Urethral Insertion", ["dom", "sub"]],
        ["Worship", ["dom", "sub"]],
    ],
    "Kinks": [
        ["Incest", ["cousins", "siblings"]],
        ["Incest (any age)", ["parents", "children"]],
        ["Impregnation/Pregnancy", ["top", "bottom"]],
        // TODO: rename big time
        ["Milking", ["dom", "sub"]],
        ["Nursing", ["dom", "sub"]],
        ["Feet", [""]],
        ["Pee", ["dom", "sub"]],
        ["Roleplay", [""]],
        // TODO: is this distinct from little/daddy*mommy?
        ["Ageplay", [""]],
        // TODO: ABDL? positions?
        ["Diapers", [""]],
        ["Cheating/Cuckold/NTR", ["dom", "sub"]],
        ["Feminization/Sissy", ["dom", "sub"]],
        ["Exhibition/Voyeur", ["exhib", "voyeur"]],
        ["Double-Penetration", ["top", "bottom"]],
        ["Multi-Partner", ["top", "bottom"]],
        ["Tickling", ["dom", "sub"]],
        // TODO: give/receive?
        ["Cumswapping", [""]],
        ["Thighsex", ["top", "bottom"]],
        ["Titfuck", ["top", "bottom"]],
        ["Footjob", ["give", "receive"]],
        ["Armpit Sex", ["top", "bottom"]],
    ],
    "Pain": [
        ["Physical Pain", ["give", "receive"]],
        ["Nipple Clamps", ["give", "receive"]],
        ["Hard Spanking", ["give", "receive"]],
        ["Whipping", ["give", "receive"]],
        ["Slapping", ["give", "receive"]],
        ["Biting", ["give", "receive"]],
        ["Hot Wax", ["give", "receive"]],
        ["Scratching", ["give", "receive"]],
        ["Cock/Ball Slapping", ["give", "receive"]],
        ["Vagina Slapping", ["give", "receive"]],
        ["Clothespins", ["give", "receive"]],
        ["Needles", ["give", "receive"]],
    ],
    "Clothing": [
        ["Clothed Sex", [""]],
        ["Collars", ["dom", "sub"]],
        ["Latex", [""]],
        ["Lingerie", [""]],
        ["Stockings/Pantyhose", [""]],
        ["Crossdressing", [""]],
        ["Forced Dressup", ["dom", "sub"]],
        ["Leather", [""]],
        ["Socks", [""]],
        ["Uniforms", [""]],
        ["Cosplay", [""]],
        ["Furry", [""]],
    ],
    "Extreme": [
        ["Scat", [""]],
        ["Cutting", ["give", "receive"]],
        ["Raceplay", ["dom", "sub"]],
        ["Bestiality", [""]],
        ["Necrophilia", [""]],
        ["Hard Rape", ["top", "bottom"]],
        ["Children", [""]],
        ["Blood", [""]],
        ["Cannibalism", ["dom", "sub"]],
        ["Torture", ["dom", "sub"]],
        ["Genital Mutilation", ["give", "receive"]],
    ],
};

export const transbianLines: [string, string][] = [
    ["Snortin' lines of progesterone", "has taken prog"],
    ["More alpha than you, bitch, where my testosterone", "has t levels below 100 ng/dL"],
    ["I cyber-dommed a bitch and she told me \"thank you!\"", "dommed someone online (and they thanked)"],
    ["She sent me a picture of her pussy like Britney Spears", "received a picture of someone's pussy"],
    ["She asked me where I'm at, look, bitch, I am almost here!", "been eagerly awaited for sexual reasons"],
    ["I'm smoking fat blunts, I look like Fidel Castro", "regularly smokes weed"],
    ["I'm a femboy so my Glock got a girldick", "owns a gun"],
    ["Internally drowned a femboy, he drank too much from nursing", "nursed someone"],
    ["I'm with a bad bitch shootin' clips for /r/lesdom", "recorded porn"],
    ["I don't own a kingdom, I just do my femdom", "dommed (irl)"],
    ["I'm at the Taco Bell dropping lean in my Baja Blast", "taken codeine"],
    ["I'm shootin' at her feet", "came on someone's feet"],
    ["My Glock is just like me, 'cause it also got a big cock!", "has a cock ≥ 18cm (7in)"],
    ["I'm sexting a cute top and she's making me keysmash", "keysmashed"],
    ["Put it to his lips like it's beeswax", "came on someone's lips"],
    ["I cannot associate with you, you're not a sex haver", "has sex regularly"],
    ["Femme sub bitch, so she use me like a sex toy", "been someone's \"sex toy\""],
    ["This bitch that I'm sexting just called me her princess", "been called \"princess\""],
    ["I call her Corpsegrinder 'cause she give me that good neck", "gotten head"],
    ["She tryna grab my girlcock, I told her \"bitch, settle down!\"", "had to slow someone down sexually"],
    ["Put a Glock to his forehead, now he got a metal crown", "pulled a gun on someone"],
];

export const topBottomValue = atom(0.5);
export const sexualValue = atom(0.5);
