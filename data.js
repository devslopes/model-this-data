const phrases = [
  // LOTR Quotes
  {
    id: 1,
    text: "not all who wander are lost",
    by: {
      id: 1,
      name: "Gandalf",
    },
    categories: [
      {
        id: 1,
        name: "Fantasy",
      },
      {
        id: 2,
        name: "Lord of the Rings",
      },
    ],
  },
  {
    id: 2,
    text: "one ring to rule them all",
    by: {
      id: 2,
      name: "Suaron",
    },
    categories: [
      {
        id: 1,
        name: "Fantasy",
      },
      {
        id: 2,
        name: "Lord of the Rings",
      },
    ],
  },
  {
    id: 3,
    text: "Moonlight drowns out all but the brightest stars",
    by: {
      id: 3,
      name: "J.R.R Tolkein",
    },
    categories: [
      { id: 1, name: "Fantasy" },
      {
        id: 2,
        name: "Lord of the Rings",
      },
    ],
  },
  {
    id: 4,
    text: "Where there's life there is hope, and no need of vittles",
    by: {
      id: 3,
      name: "J.R.R Tolkein",
    },
    categories: [
      { id: 1, name: "Fantasy" },
      {
        id: 2,
        name: "Lord of the Rings",
      },
    ],
  },
  // marvel quotes
  {
    id: 5,
    text: "With great power comes great responsibility",
    by: {
      id: 4,
      name: "Uncle Ben",
    },
    categories: [
      {
        id: 3,
        name: "Marvel",
      },
      {
        id: 5,
        name: "Superhero",
      },
    ],
  },
  {
    id: 6,
    text: "It's not about how much we lost, it's about how much we get back",
    by: {
      id: 5,
      name: "Tony Stark",
    },
    categories: [
      {
        id: 3,
        name: "Marvel",
      },
      {
        id: 5,
        name: "Superhero",
      },
    ],
  },
  // DC quotes
  {
    id: 7,
    text: "I'm Batman",
    by: {
      id: 6,
      name: "Batman",
    },
    categories: [
      {
        id: 7,
        name: "DC",
      },
      {
        id: 5,
        name: "Superhero",
      },
    ],
  },
  {
    id: 8,
    text: "I am vengeance",
    by: {
      id: 6,
      name: "Batman",
    },
    categories: [
      {
        id: 7,
        name: "DC",
      },
      {
        id: 5,
        name: "Superhero",
      },
    ],
  },
  // the boys quotes
  {
    id: 9,
    text: "Yeah I can talk to fish. So What? How often do you need to be saved by a school of salmon?",
    by: {
      id: 7,
      name: "The Deep",
    },
    categories: [
      {
        id: 9,
        name: "The Boys",
      },
      {
        id: 5,
        name: "Superhero",
      },
    ],
  },
  {
    id: 10,
    text: "Sometimes it's hard being superior to every single other person on the planet",
    by: {
      id: 8,
      name: "Homelander",
    },
    categories: [
      {
        id: 9,
        name: "The Boys",
      },
      {
        id: 5,
        name: "Superhero",
      },
    ],
  },

  // Willow quotes
  {
    id: 11,
    text: "I hate trolls",
    by: {
      id: 9,
      name: "Willow",
    },
    categories: [
      { id: 1, name: "Fantasy" },
      {
        id: 11,
        name: "Willow",
      },
    ],
  },

  // Music Quotes
  {
    id: 12,
    text: "My daughter is like Sia you can't see her",
    by: {
      id: 10,
      name: "Chance the Rapper",
    },
    categories: [
      {
        id: 12,
        name: "Music",
      },
      {
        id: 13,
        name: "Hip Hop",
      },
    ],
  },
  {
    id: 13,
    text: "And if I was thinking I'd be thinking thank god",
    by: {
      id: 11,
      name: "Wood Brothers",
    },
    categories: [
      {
        id: 12,
        name: "Music",
      },
      {
        id: 15,
        name: "Folk",
      },
    ],
  },
  {
    id: 14,
    text: "It's me, LT, like when you heat butter",
    by: {
      id: 12,
      name: "Lil' Wayne",
    },
    categories: [
      {
        id: 12,
        name: "Music",
      },
      {
        id: 13,
        name: "Hip Hop",
      },
    ],
  },
  {
    id: 15,
    text: "Because here you come again... and here I Go",
    by: {
      id: 13,
      name: "Dolly Parton",
    },
    categories: [
      {
        id: 12,
        name: "Music",
      },
      {
        id: 18,
        name: "Country",
      },
    ],
  },
];

const users = [
  {
    id: 1,
    email: "jon@jon.com",
    hashedPassword: "aoidfjoasidjf1209384093248",
  },
  {
    id: 2,
    email: "jim@jim.com",
    hashedPassword: "aoidfjoasidjf1209384093248",
  },
  {
    id: 3,
    email: "sandra@sandra.com",
    hashedPassword: "aoidfjoasidjf1209384093248",
  },
];

const scores = [
  {
    category: {
      id: 12,
      name: "Music",
    },
    length: "long",
    userId: 1,
    wpm: 100,
  },
  {
    category: { id: 1, name: "Fantasy" },
    length: "short",
    userId: 1,
    wpm: 120,
  },
  {
    category: {
      id: 2,
      name: "Lord of the Rings",
    },
    length: "short",
    userId: 3,
    wpm: 130,
  },
  {
    category: {
      id: 12,
      name: "Music",
    },
    length: "mediumn",
    userId: 2,
    wpm: 130,
  },
];
