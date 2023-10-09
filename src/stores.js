import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "This is the new feedback, adipisicing elit. Ex, alias? This is the first task",
  },

  {
    id: 2,
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, alias? This is the second task",
  },

  {
    id: 3,
    rating: 9,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, alias? This is the third task",
  },
]);
