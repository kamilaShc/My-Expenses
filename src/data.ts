import { useId } from "react";

interface ExpensesData {
  user: string;
  expenses: Expenses[];
}

export interface Expenses {
  id: string;
  date: string;
  subject: string;
  sum: number;
}

export const expensesData: ExpensesData[] = [
  {
    user: "kamila",
    expenses: [
      {
        id: "a7f9d2e4",
        date: "15.03.2024",
        subject: "Groceries",
        sum: 95.0,
      },
      {
        id: "b8e3c5a1",
        date: "15.03.2024",
        subject: "Transport",
        sum: 30.0,
      },
      {
        id: "c4f1a6b3",
        date: "15.03.2024",
        subject: "Utilities",
        sum: 60.0,
      },
      {
        id: "d7e8f9c2",
        date: "29.03.2024",
        subject: "Entertainment",
        sum: 50.0,
      },
      {
        id: "e1f4a8b7",
        date: "12.04.2024",
        subject: "Bills",
        sum: 200.0,
      },
      {
        id: "f6b9c2e3",
        date: "12.04.2024",
        subject: "Dining Out",
        sum: 40.0,
      },
      {
        id: "g3a7f5d4",
        date: "24.04.2024",
        subject: "Groceries",
        sum: 85.0,
      },
      {
        id: "h2e9b1c8",
        date: "24.04.2024",
        subject: "Health & Wellness",
        sum: 50.0,
      },
      {
        id: "i8c3d6a2",
        date: "03.05.2024",
        subject: "Entertainment",
        sum: 120.0,
      },
      {
        id: "j4f5a7e9",
        date: "03.05.2024",
        subject: "Transport",
        sum: 20.0,
      },
      {
        id: "k7b3e9d1",
        date: "18.05.2024",
        subject: "Health & Wellness",
        sum: 60.0,
      },
      {
        id: "l1c6f3a4",
        date: "18.05.2024",
        subject: "Shopping",
        sum: 150.0,
      },
      {
        id: "m2d8e7b9",
        date: "06.06.2024",
        subject: "Rent",
        sum: 850.0,
      },
      {
        id: "n9a5c3e1",
        date: "06.06.2024",
        subject: "Bills",
        sum: 120.0,
      },
      {
        id: "o3e7f2c5",
        date: "21.06.2024",
        subject: "Utilities",
        sum: 95.0,
      },
      {
        id: "p6b8d4a7",
        date: "21.06.2024",
        subject: "Groceries",
        sum: 105.0,
      },
      {
        id: "q1f4c7e8",
        date: "10.07.2024",
        subject: "Shopping",
        sum: 135.0,
      },
      {
        id: "r2d5e9b6",
        date: "10.07.2024",
        subject: "Entertainment",
        sum: 90.0,
      },
      {
        id: "s7a3f8c1",
        date: "25.07.2024",
        subject: "Travel",
        sum: 300.0,
      },
      {
        id: "t9e4c6b2",
        date: "25.07.2024",
        subject: "Dining Out",
        sum: 85.0,
      },
      {
        id: "u3b5f7e9",
        date: "02.08.2024",
        subject: "Bills",
        sum: 140.0,
      },
      {
        id: "v6d9a2e4",
        date: "02.08.2024",
        subject: "Health & Wellness",
        sum: 70.0,
      },
      {
        id: "w1f3c7b5",
        date: "16.08.2024",
        subject: "Groceries",
        sum: 110.0,
      },
      {
        id: "x8d4e6a3",
        date: "16.08.2024",
        subject: "Transport",
        sum: 35.0,
      },
      {
        id: "y9c2b5e7",
        date: "01.09.2024",
        subject: "Dining Out",
        sum: 80.0,
      },
      {
        id: "z3e8f1a6",
        date: "01.09.2024",
        subject: "Shopping",
        sum: 120.0,
      },
      {
        id: "a1d7c5e9",
        date: "05.09.2024",
        subject: "Health & Wellness",
        sum: 70.0,
      },
      {
        id: "b2f6a3d8",
        date: "05.09.2024",
        subject: "Entertainment",
        sum: 100.0,
      },
    ],
  },
];
