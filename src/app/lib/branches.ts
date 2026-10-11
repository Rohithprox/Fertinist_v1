// Clinic phone numbers, in one place. The header Contact picker, the mobile
// menu and the bottom bar's Consult tab all read from here, so a number only
// ever has to be changed once.

export type Branch = { city: string; display: string; dial: string };

export const BRANCHES: Branch[] = [
  { city: "Nellore", display: "+91 91820 39911", dial: "+919182039911" },
  { city: "Anantapur", display: "+91 951555 3093", dial: "+919515553093" },
];
