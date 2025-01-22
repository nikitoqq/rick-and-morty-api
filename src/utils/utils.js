import axios from "axios";

export const statusColor = (status) => {
  if (status === "Alive") {
    return { backgroundColor: "#55cc44" };
  } else if (status === "Dead") {
    return { backgroundColor: "#d63d2e" };
  } else {
    return { backgroundColor: "#9e9e9e" };
  }
};

export const filterData = [
  {
    name: "status",
    data: ["none", "Alive", "Dead", "Unknown"],
  },
  {
    name: "type",
    data: ["none", "Alien", "Human"],
  },
];

export const GetFullDate = (date) =>
  `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;

export const headerLink = ["Home", "Setting"];

export const isOnline = async () => {
  try {
    await axios("hhtps://google.com");
    return true;
  } catch {
    return false;
  }
};
