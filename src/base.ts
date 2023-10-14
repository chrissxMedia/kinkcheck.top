export const ratingNames = [
    "i dont know",
    "favorite (love it)",
    "yes (want to try/do)",
    "maybe (could be convinced)",
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

type positions = ["give", "receive"] | ["top", "bottom"] | ["dom", "sub"] | [""];
type kink = [string, positions];
type kl = kink[];

export const kinks: { General: kl, BDSM: kl, Kinks: kl, Pain: kl, Clothing: kl, Extreme: kl } = {
    "General": [
        ["Fellatio/Blowjobs", ["give", "receive"]],
        ["Cunnilingus", ["give", "receive"]],
        ["Face-Fucking", ["give", "receive"]],
        ["Face-Sitting", ["top", "bottom"]],
        ["Handjobs", ["give", "receive"]],
        ["Fingering", ["give", "receive"]],
        ["Fisting", ["give", "receive"]],
        ["Rough Sex", [""]],
        ["Creampie", ["give", "receive"]],
        ["Swallowing", ["top", "bottom"]],
        ["Facials", ["give", "receive"]],
        ["Masturbation", [""]],
        ["Anal Sex", ["top", "bottom"]],
        ["Anal Fingering", ["top", "bottom"]],
        ["Anal Masturbation", [""]],
        ["Anal Fisting", ["top", "bottom"]],
        ["Pegging", ["top", "bottom"]],
        ["Anilingus/Rimming", ["top", "bottom"]],
        ["Toys", [""]],
        ["Anal Toys", [""]],
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
        ["Public Sex/Exhibition", [""]],
        ["Rape", ["top", "bottom"]],
        ["Kidnapping", ["dom", "sub"]],
        ["Spanking", ["give", "receive"]],
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
        ["Genital Worship", ["dom", "sub"]],
        ["Body Worship", ["dom", "sub"]],
    ],
    "Kinks": [
        ["Incest - Cousins", [""]],
        ["Incest - Siblings", [""]],
        ["Incest - Parents", [""]],
        ["Incest - Children (Any age)", [""]],
        ["Impregnation/Pregnancy", ["top", "bottom"]],
        ["Milking", ["dom", "sub"]],
        ["Nursing", ["dom", "sub"]],
        ["Feet", [""]],
        ["Pee", [""]],
        ["Roleplay", [""]],
        ["Ageplay", [""]],
        ["Cheating/Cuckold/NTR", ["dom", "sub"]],
        ["Feminization/Sissy", ["dom", "sub"]],
        ["Voyeur/Watching", [""]],
        ["Double-Penetration", ["top", "bottom"]],
        ["Multi-Partner", ["top", "bottom"]],
        ["Furry-Roleplay", [""]],
        ["Tickling", ["dom", "sub"]],
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
        ["Stockings", [""]],
        ["Crossdressing", [""]],
        ["Forced Dressup", ["dom", "sub"]],
        ["Leather", [""]],
        ["Socks", [""]],
        ["Uniforms", [""]],
        ["Cosplay", [""]],
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
