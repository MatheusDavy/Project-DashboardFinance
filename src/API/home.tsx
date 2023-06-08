import { FiBarChart } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';

export interface DataPlansProps {
  name: string
  Goal: number
  Reached: number
}[]

export interface DataBugetsProps {
  name: string
  Expenses: number
  Incomes: number
}[]

export const API_HOME = {
  banner: {
    amount: "2",
    banner: ''
  },

  earning_data: [
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: "39.354",
      percentage: "-4%",
      title: "Customers",
      iconColor: "#03C9D7",
      iconBg: "#E5FAFB",
      pcColor: "red-600",
    },
    {
      icon: <BsBoxSeam />,
      amount: "4.396",
      percentage: "+23%",
      title: "Products",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "rgb(254, 201, 15)",
      pcColor: "green-600",
    },
    {
      icon: <FiBarChart />,
      amount: "423.39",
      percentage: "+38%",
      title: "Sales",
      iconColor: "rgb(228, 106, 118)",
      iconBg: "rgb(255, 244, 229)",

      pcColor: "green-600",
    },
    {
      icon: <HiOutlineRefresh />,
      amount: "39.354",
      percentage: "-12%",
      title: "Refunds",
      iconColor: "rgb(0, 194, 146)",
      iconBg: "rgb(235, 250, 242)",
      pcColor: "red-600",
    },
  ],

  datas_budgets: [
    {
      name: "January",
      Expenses: 1300,
      Incomes: 2400
    },
    {
      name: "February",
      Expenses: 1000,
      Incomes: 1398
    },
    {
      name: "March",
      Expenses: 5000,
      Incomes: 9800
    },
    {
      name: "April",
      Expenses: 2780,
      Incomes: 3908
    },
    {
      name: "July",
      Expenses: 1890,
      Incomes: 4800
    },
    {
      name: "June",
      Expenses: 2390,
      Incomes: 3800
    },
    {
      name: "August",
      Expenses: 3490,
      Incomes: 4300
    }
  ],

  data_plans: [
    {
      name: "Notebook",
      Goal: 4000,
      Reached: 2400
    },
    {
      name: "Tablet",
      Goal: 3000,
      Reached: 1398
    },
    {
      name: "Course",
      Goal: 13000,
      Reached: 9800
    },
    {
      name: "Car",
      Goal: 25780,
      Reached: 14000
    }
  ] 
};
