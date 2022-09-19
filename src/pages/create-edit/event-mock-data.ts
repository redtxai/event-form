import { CustomCircleEvent } from "../../models/event.model";

export const eventMap: Record<number, CustomCircleEvent> = {
  1: {
    id: 1,
    'date-time': "17 Sep 2022 8:00",
    'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    duration: "3 hours",
    'event-name': "Test",
    slug: "test.com",
    where: ['virtual']
  },
  2: {
    id: 2,
    'date-time': "17 Sep 2022 8:00",
    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    duration: "1 hour",
    'event-name': "Test In person",
    slug: "test-inperson.com",
    where: ['inperson']
  },
  3: {
    id: 3,
    'date-time': "17 Sep 2022 8:00",
    'description': "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "4 hours",
    'event-name': "Test Both",
    slug: "test-both.com",
    where: ['virtual', 'inperson']
  },
  4: {
    id: 4,
    'date-time': "17 Sep 2022 8:00",
    'description': "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    duration: "5 hours",
    'event-name': "Test Bla bla bla",
    slug: "test.blablabla.com",
    where: ['virtual']
  }
}
