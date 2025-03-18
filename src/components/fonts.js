import {
    Cormorant_Garamond,
    Dancing_Script,
    Poppins,
    Barlow_Condensed,
    Nunito_Sans,
    Merriweather,
    Inknut_Antiqua
} from "next/font/google";

const c = Cormorant_Garamond({ subsets: ['latin'], weight: '700' });
const d = Dancing_Script({ subsets: ['latin'], weight: '600' });
const p = Poppins({ subsets: ['latin'], weight: '400' });
const c2 = Barlow_Condensed({ subsets: ['latin'], weight: '700' });
const n = Nunito_Sans({ subsets: ['latin'], weight: '700' });
const m = Merriweather({ subsets: ['latin'], weight: '700' });
const i = Inknut_Antiqua({ subsets: ['latin'], weight: '600' });

export const cormorantbold = c.className;
export const dancingbold = d.className;
export const poppins = p.className;
export const barlowcondensed = c2.className;
export const nunitobold = n.className;
export const merriweather = m.className;
export const inknut = i.className;