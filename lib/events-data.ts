export type EventFeatures = {
  academic: number;
  social: number;
  sports: number;
  indoor: number;
  evening: number;
};

export type CampusEvent = {
  id: number;
  title: string;
  date: string;
  location: string;
  features: EventFeatures;
};

export const campusEvents: CampusEvent[] = [
  {
    id: 1,
    title: "Guest Lecture: AI & Society",
    date: "Mon 28 Apr 2026",
    location: "Lecture Theatre B, Block 3",
    features: { academic: 1, social: 0, sports: 0, indoor: 1, evening: 0 },
  },
  {
    id: 2,
    title: "Freshers' Welcome Party",
    date: "Fri 25 Apr 2026",
    location: "Student Union, Main Hall",
    features: { academic: 0, social: 1, sports: 0, indoor: 1, evening: 1 },
  },
  {
    id: 3,
    title: "5-a-side Football Tournament",
    date: "Sat 3 May 2026",
    location: "Sports Complex, Pitch 2",
    features: { academic: 0, social: 1, sports: 1, indoor: 0, evening: 0 },
  },
  {
    id: 4,
    title: "CV & Interview Skills Workshop",
    date: "Wed 7 May 2026",
    location: "Careers Centre, Room 104",
    features: { academic: 1, social: 0, sports: 0, indoor: 1, evening: 0 },
  },
  {
    id: 5,
    title: "Campus Night Market",
    date: "Thu 1 May 2026",
    location: "Campus Courtyard",
    features: { academic: 0, social: 1, sports: 0, indoor: 0, evening: 1 },
  },
  {
    id: 6,
    title: "Study Skills Bootcamp",
    date: "Mon 12 May 2026",
    location: "Library, Floor 2",
    features: { academic: 1, social: 0, sports: 0, indoor: 1, evening: 0 },
  },
  {
    id: 7,
    title: "Basketball Inter-Society Cup",
    date: "Fri 9 May 2026",
    location: "Sports Hall, Block D",
    features: { academic: 0, social: 1, sports: 1, indoor: 1, evening: 1 },
  },
  {
    id: 8,
    title: "International Food Festival",
    date: "Thu 8 May 2026",
    location: "Campus Courtyard",
    features: { academic: 0, social: 1, sports: 0, indoor: 0, evening: 0 },
  },
  {
    id: 9,
    title: "Research Poster Exhibition",
    date: "Tue 6 May 2026",
    location: "Atrium, Block A",
    features: { academic: 1, social: 1, sports: 0, indoor: 1, evening: 0 },
  },
  {
    id: 10,
    title: "Yoga & Mindfulness Session",
    date: "Wed 30 Apr 2026",
    location: "Wellness Centre, Studio 1",
    features: { academic: 0, social: 0, sports: 1, indoor: 1, evening: 0 },
  },
  {
    id: 11,
    title: "Campus Quiz Night",
    date: "Thu 15 May 2026",
    location: "Student Bar, Lower Ground",
    features: { academic: 1, social: 1, sports: 0, indoor: 1, evening: 1 },
  },
  {
    id: 12,
    title: "Outdoor Movie Night",
    date: "Sat 17 May 2026",
    location: "Campus Green",
    features: { academic: 0, social: 1, sports: 0, indoor: 0, evening: 1 },
  },
];
