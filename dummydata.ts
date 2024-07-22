import { TaskMap } from "./types/types";
export const initialState: TaskMap = {
    Pending: [
      {
        id: "1",
        task: "Leetcode",
        description: "Description with some more text here",
        tag: "DSA",
        date: "Mon July 22 2024",
      },
      {
        id: "2",
        task: "Build a To-Do App",
        description: "Description with some more text here",
        tag: "Mid",
        date: "Mon July 22 2024",
      },
      {
        id: "3",
        task: "Learn Dev",
        description: "Description with some more text here",
        tag: "High",
        date: "Mon July 22 2024",
      },
    ],
    Ongoing: [],
    Done: [
      {
        id: "4",
        task: "Get an internship",
        description: "Description with some more text here",
        tag: "High",
        date: "Mon July 22 2024",
      },
    ],
  };
  