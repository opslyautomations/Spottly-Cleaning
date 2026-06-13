export interface Review {
  name: string
  city: string
  text: string
  date?: string
}

// Keyed by city slug. Initially empty — add real customer reviews here to
// activate the "What [City] clients say" section on each location page.
// A review MUST come from the city it is filed under — never move a review to a different city.
export const locationReviews: Record<string, Review> = {
  // 'culver-city': { name: 'Jane D.', city: 'Culver City', text: '...', date: '2025-01-15' },
  // 'mar-vista': { ... },
  // 'palms': { ... },
  // 'playa-del-rey': { ... },
  // 'playa-vista': { ... },
  // 'marina-del-rey': { ... },
  // 'westchester': { ... },
  // 'santa-monica': { ... },
  // 'venice-beach': { ... },
  // 'el-segundo': { ... },
  // 'manhattan-beach': { ... },
  // 'redondo-beach': { ... },
  // 'torrance': { ... },
  // 'hawthorne': { ... },
  // 'gardena': { ... },
}

// Placeholder reviews for /reviews page and homepage preview.
// <!-- PLACEHOLDER REVIEW — replace with a real customer review before launch -->
export const placeholderReviews: Review[] = [
  {
    name: 'Sarah M.',
    city: 'Culver City',
    text: "Spottly is the real deal. I've tried a few cleaning services in Culver City and none of them touched the baseboards or got behind the toilet properly. Spottly actually cleaned the spots I didn't even think to ask about. Booked biweekly and haven't looked back.",
  },
  {
    name: 'James T.',
    city: 'Santa Monica',
    text: "I work long hours and my condo was getting away from me. One deep clean and then a biweekly plan — within two months the place looked better than when I moved in. The products don't leave that harsh chemical smell either, which matters to me.",
  },
  {
    name: 'Priya K.',
    city: 'Manhattan Beach',
    text: 'Hired Spottly for a move-out clean on my Sand Section condo. The oven and fridge were left in bad shape by the previous tenant and they came back spotless. Got my full deposit. Would absolutely hire again.',
  },
  {
    name: 'Mark & Dana R.',
    city: 'Torrance',
    text: "We have two kids and two dogs — our house was not in good shape. Spottly came in, did a deep clean first, and now we're on a weekly plan. The difference is night and day. They're careful with our stuff and consistent every single time.",
  },
  {
    name: 'Lisa C.',
    city: 'Venice',
    text: 'Between guests, my Abbot Kinney rental needs a full reset. Spottly does it every time — inside the cabinets, the kitchen, the bathrooms, all of it. Fast, thorough, and they don\'t cut corners. Guests have commented on how clean the place is.',
  },
  {
    name: 'Anthony V.',
    city: 'El Segundo',
    text: 'I relocated here for work and needed the new place cleaned before I moved in. Spottly was on time, communicative, and left it spotless. Set up recurring after that. Exactly what a busy professional needs.',
  },
  {
    name: 'Natalie H.',
    city: 'Mar Vista',
    text: 'My mid-century home had some serious grime built up in the kitchen and the original tile in the bathrooms. Spottly did a deep clean and honestly it looked like a different house afterward. They got into every corner — the kind of clean I couldn\'t manage on my own.',
  },
  {
    name: 'Chris B.',
    city: 'Redondo Beach',
    text: "I was skeptical about the recurring plan at first but it's been worth every penny. They show up, they do the work, and my house actually stays clean between visits. Low-toxicity products were important to me with my dog and they delivered on that.",
  },
]
