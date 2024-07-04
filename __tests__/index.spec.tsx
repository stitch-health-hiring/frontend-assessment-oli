import React from "react";
import { render, screen } from "@testing-library/react";

import Home from "../pages/index";

const mockPatients = [
  {
    firstName: "Ellie-May",
    lastName: "Conner",
    id: "2593afce",
    dateOfBirth: "1931-02-07",
    dateOfRegistration: "2021-01-19",
    favoriteColor: "blue",
  },
  {
    firstName: "Alexis",
    lastName: "Stewart",
    id: "63ed7504",
    dateOfBirth: "1962-09-21",
    dateOfRegistration: "2021-07-01",
    favoriteColor: "red",
  },
  {
    firstName: "Kathleen",
    lastName: "Chambers",
    id: "520879ca",
    dateOfBirth: "1932-05-19",
    dateOfRegistration: "2021-08-06",
    favoriteColor: "yellow",
  },
  {
    firstName: "Ben",
    lastName: "Spears",
    id: "9b3412d8",
    dateOfBirth: "1951-05-17",
    dateOfRegistration: "2021-09-02",
    favoriteColor: "green",
  },
  {
    firstName: "Habib",
    lastName: "Duran",
    id: "622fa867",
    dateOfBirth: "1960-03-26",
    dateOfRegistration: "2021-09-15",
    favoriteColor: "red",
  },
];

test("renders title", () => {
  render(<Home patients={mockPatients} />);
  const headerElement = screen.getByText(/Patients/);
  expect(headerElement).toBeInTheDocument();
});

test("renders all patients in the table", () => {
  render(<Home patients={mockPatients} />);
  const tableRows = screen.getAllByRole("row");
  // ignore header row
  expect(tableRows.length - 1).toBe(mockPatients.length);
});

test("renders value for each patient data property for each patient", () => {
  render(<Home patients={mockPatients} />);
  mockPatients.forEach((patient) => {
    const name = `${patient.firstName} ${patient.lastName}`;
    const id = patient.id;
    const dateOfBirth = patient.dateOfBirth;
    const dateOfRegistration = patient.dateOfRegistration;
    const nameElement = screen.getByText(name);
    const idElement = screen.getByText(id);
    const dateOfBirthElement = screen.getByText(dateOfBirth);
    const dateOfRegistrationElement = screen.getByText(dateOfRegistration);
    expect(nameElement).toBeInTheDocument();
    expect(idElement).toBeInTheDocument();
    expect(dateOfBirthElement).toBeInTheDocument();
    expect(dateOfRegistrationElement).toBeInTheDocument();
  });
});
