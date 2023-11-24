import base64 from "base64-js";

export const ratings: [string, string][] = [
    ["i dont know", "#a0a0a0"],
    ["favorite", "#00e0e0"],
    ["want to do", "#00c020"],
    ["could be convinced", "#eeee20"],
    ["not interested", "#d02000"],
    ["hard limit", "#303030"],
];

type positions = [string, string] | [""];
// TODO: info texts
type kink = [string, positions, number];

export const kinks: { [k: string]: kink[] } = {
    "General": [
        ["Fellatio/Blowjobs", ["receive", "give"], 0],
        ["Cunnilingus", ["receive", "give"], 1],
        ["Face-Fucking", ["give", "receive"], 2],
        ["Face-Sitting", ["top", "bottom"], 3],
        ["Handjobs", ["give", "receive"], 4],
        ["Fingering", ["give", "receive"], 5],
        ["Fisting", ["give", "receive"], 6],
        ["Rough Sex", [""], 7],
        ["Creampie", ["give", "receive"], 8],
        ["Swallowing", ["top", "bottom"], 9],
        ["Facials", ["give", "receive"], 10],
        ["Masturbation", ["top", "anal/…"], 11],
        ["Anal Sex", ["top", "bottom"], 12],
        ["Anal Fingering", ["top", "bottom"], 13],
        ["Anal Fisting", ["top", "bottom"], 14],
        ["Pegging", ["top", "bottom"], 15],
        ["Anilingus/Rimming", ["top", "bottom"], 16],
    ],
    "BDSM": [
        ["Little/Daddy*Mommy", ["dom", "sub"], 17],
        ["Slave/Master*Mistress", ["dom", "sub"], 18],
        ["Pet/Owner", ["dom", "sub"], 19],
        ["Power Exchange (24/7)", ["dom", "sub"], 22],
        ["Humiliation/Embarrassment", ["dom", "sub"], 23],
        ["Degradation/Name Calling", ["dom", "sub"], 24],
        ["Bondage", ["dom", "sub"], 25],
        ["Encasement/Cages", ["dom", "sub"], 26],
        ["Discipline", ["dom", "sub"], 27],
        ["Rape/CNC", ["top", "bottom"], 28],
        ["Kidnapping", ["dom", "sub"], 29],
        ["Spanking", ["give", "receive"], 30],
        ["Forced Orgasms", ["give", "receive"], 31],
        ["Orgasm Denial", ["dom", "sub"], 32],
        ["Chastity", ["dom", "sub"], 33],
        ["Masturbation Instructions", ["give", "receive"], 34],
        ["Servitude", ["dom", "sub"], 35],
        ["Sensation Play", ["dom", "sub"], 36],
        ["Electric Stimulation", ["dom", "sub"], 37],
        ["Breathing Play", ["dom", "sub"], 38],
        ["Choking", ["dom", "sub"], 39],
        ["Gags", ["dom", "sub"], 40],
        ["Begging", ["dom", "sub"], 41],
        ["Teasing", ["dom", "sub"], 42],
        ["Sounding/Urethral Insertion", ["dom", "sub"], 43],
        ["Worship", ["dom", "sub"], 44],
    ],
    "Kinks": [
        ["Incest", ["cousins", "siblings"], 45],
        ["Incest (any age)", ["parents", "children"], 46],
        ["Impregnation/Pregnancy", ["top", "bottom"], 47],
        // TODO: rename big time
        ["Milking", ["dom", "sub"], 48],
        ["Nursing", ["dom", "sub"], 49],
        ["Feet", [""], 50],
        ["Pee", ["dom", "sub"], 51],
        ["Roleplay", [""], 52],
        ["Diapers/ABDL", [""], 53],
        ["Cheating/Cuckold/NTR", ["dom", "sub"], 54],
        ["Feminization/Sissy", ["dom", "sub"], 55],
        ["Exhibition/Voyeur", ["exhib", "voyeur"], 56],
        ["Double-Penetration", ["top", "bottom"], 57],
        ["Multi-Partner", ["top", "bottom"], 58],
        ["Tickling", ["dom", "sub"], 59],
        ["Cumswapping", [""], 60],
        ["Thighsex", ["top", "bottom"], 61],
        ["Titfuck", ["top", "bottom"], 62],
        ["Footjob", ["give", "receive"], 63],
        ["Armpit Sex", ["top", "bottom"], 64],
    ],
    "Pain": [
        ["Physical Pain", ["give", "receive"], 65],
        ["Nipple Clamps", ["give", "receive"], 66],
        ["Hard Spanking", ["give", "receive"], 67],
        ["Whipping", ["give", "receive"], 68],
        ["Slapping", ["give", "receive"], 69],
        ["Biting", ["give", "receive"], 70],
        ["Hot Wax", ["give", "receive"], 71],
        ["Scratching", ["give", "receive"], 72],
        ["Cock/Ball Slapping", ["give", "receive"], 73],
        ["Vagina Slapping", ["give", "receive"], 74],
        ["Clothespins", ["give", "receive"], 75],
        ["Needles", ["give", "receive"], 76],
    ],
    "Clothing": [
        ["Clothed Sex", [""], 77],
        ["Collars", ["dom", "sub"], 78],
        ["Latex", [""], 79],
        ["Lingerie", [""], 80],
        ["Stockings/Pantyhose", [""], 81],
        ["Crossdressing", [""], 82],
        ["Forced Dressup", ["dom", "sub"], 83],
        ["Leather", [""], 84],
        ["Socks", [""], 85],
        ["Uniforms", [""], 86],
        ["Cosplay", [""], 87],
        ["Furry", [""], 88],
    ],
    "Extreme": [
        ["Scat", [""], 89],
        ["Cutting", ["give", "receive"], 90],
        ["Raceplay", ["dom", "sub"], 91],
        ["Bestiality", [""], 92],
        ["Necrophilia", [""], 93],
        ["Hard Rape", ["top", "bottom"], 94],
        ["Children", [""], 95],
        ["Blood", [""], 96],
        ["Cannibalism", ["dom", "sub"], 97],
        ["Torture", ["dom", "sub"], 20],
        ["Genital Mutilation", ["give", "receive"], 21],
    ],
};

export type ratings = { [k: string]: number[][] };
export const defaultRatings: ratings = Object.fromEntries(
    Object.entries(kinks).map<[string, number[][]]>(
        ([cat, kinks]) => [cat, kinks.map((k) => k[1].map(() => 0))])
);

const toBase64 = (x: Uint8Array) =>
    base64.fromByteArray(x).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
const fromBase64 = (x: string) =>
    base64.toByteArray(x.length % 4 ? x.padEnd(x.length + 4 - (x.length % 4), "=") : x);

export function encodeKinkCheck({ ratings }: { ratings: ratings }): string {
    const r = Object.entries(ratings)
        .flatMap(([cat, rats]) => kinks[cat]
            .map<[number, number[]]>(([, , id], i) => [id, rats[i]]))
        .reduce<number[]>((r, [id, rat]) => {
            const enc = (x: number) => x % 1 === 0 ? x : Math.floor(x) | (1 << 3);
            r[id] = (enc(rat[rat.length == 1 ? 0 : 1]) << 4) | enc(rat[0]);
            return r;
        }, []);
    return "0~" + toBase64(new Uint8Array(r));
}

export function decodeKinkCheck(s: string): { ratings: ratings } {
    const x = s.split("~");
    if (Number.parseInt(/[0-9]+/.exec(x[0])!.reduce((x, y) => x + y)) !== 0)
        throw "unsupported kinkcheck serialization version";
    const ratings = defaultRatings;
    fromBase64(x[1]).forEach((rat, id) => {
        Object.keys(ratings).forEach((cat) => {
            ratings[cat].forEach((_, i) => {
                if (kinks[cat][i][2] === id) {
                    const dec = (x: number) => (x & 7) + (x & (1 << 3) ? 0.5 : 0);
                    const r0 = dec(rat);
                    const r1 = dec(rat >> 4);
                    const len2 = kinks[cat][i][1].length === 2;
                    if (len2 || r0 === r1)
                        ratings[cat][i] = len2 ? [r0, r1] : [r0];
                }
            });
        });
    });
    return { ratings };
}
