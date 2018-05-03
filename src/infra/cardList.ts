let cardList = [
  {
    id: 1,
    title: 'Read the Book',
    description: 'I should read the whole book',
    status: 'in-progress',
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true,
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false,
      },
    ],
  },
  {
    id: 2,
    title: 'Write some code',
    description: 'Code along with the sample in the book',
    status: 'done',
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true,
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false,
      },
    ],
  },
  {
    id: 3,
    title: 'Write some code2',
    description: 'Code along with the sample in the book2',
    status: 'todo',
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true,
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false,
      },
      {
        id: 3,
        name: "My own experiments",
        done: false,
      },
    ],
  },
];

export default cardList;