export type MangoScheduleItem = {
  name: string;
  urdu: string;
  boxKg: number;
  boxPriceRs: number;
  when: string;
  img: string;
};

const imageByName: Record<string, string> = {
  Dusheri: "/deshri.webp",
  Langda: "/lagra.jpg",
  "Anwar Ratol": "/anwar.jpg",
  Sindhri: "/Sindhri-Mango.jpg",
  "Multani Chaunsa": "/multani.jpg",
  "White Chaunsa": "/white.jpg",
  "Black Chaunsa": "/black.webp",
  "Anwar Ratol 12#": "/anwar%20lator.webp",
};

export const mangoSchedule: MangoScheduleItem[] = [
  {
    name: "Dusheri",
    urdu: "دسہری",
    boxKg: 10,
    boxPriceRs: 2000,
    when: "Early / Mid of June",
    img: imageByName["Dusheri"] ?? "/mango.svg",
  },
  {
    name: "Langda",
    urdu: "لنگڑا",
    boxKg: 10,
    boxPriceRs: 2000,
    when: "Mid of June",
    img: imageByName["Langda"] ?? "/mango.svg",
  },
  {
    name: "Anwar Ratol",
    urdu: "انوار رٹول",
    boxKg: 10,
    boxPriceRs: 2000,
    when: "End of June",
    img: imageByName["Anwar Ratol"] ?? "/mango.svg",
  },
  {
    name: "Sindhri",
    urdu: "سندھڑی",
    boxKg: 10,
    boxPriceRs: 2000,
    when: "End of June",
    img: imageByName["Sindhri"] ?? "/mango.svg",
  },
  {
    name: "Multani Chaunsa",
    urdu: "ملتانی چونسہ",
    boxKg: 10,
    boxPriceRs: 2200,
    when: "Mid of July",
    img: imageByName["Multani Chaunsa"] ?? "/mango.svg",
  },
  {
    name: "White Chaunsa",
    urdu: "وائٹ چونسہ",
    boxKg: 10,
    boxPriceRs: 2200,
    when: "Mid of July",
    img: imageByName["White Chaunsa"] ?? "/mango.svg",
  },
  {
    name: "Black Chaunsa",
    urdu: "بلیک چونسہ",
    boxKg: 10,
    boxPriceRs: 2200,
    when: "Early August",
    img: imageByName["Black Chaunsa"] ?? "/mango.svg",
  },
  {
    name: "Anwar Ratol 12#",
    urdu: "انوار رٹول ۱۲#",
    boxKg: 10,
    boxPriceRs: 2200,
    when: "Mid of August",
    img: imageByName["Anwar Ratol 12#"] ?? "/mango.svg",
  },
];

export function formatRs(amount: number) {
  return `Rs. ${amount}`;
}

export function perKgRs(item: Pick<MangoScheduleItem, "boxKg" | "boxPriceRs">) {
  return Math.round(item.boxPriceRs / item.boxKg);
}

export const homeVarieties = mangoSchedule.slice(0, 3);
