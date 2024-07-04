import { Patient } from "../types/patients";

export const sortPatientsByColumn = (
  array: Patient[],
  column: keyof Patient,
  order: "asc" | "desc"
) => {
  return array.slice().sort((a, b) => {
    if (a[column] < b[column]) {
      return order === "asc" ? -1 : 1;
    }
    if (a[column] > b[column]) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  });
};
