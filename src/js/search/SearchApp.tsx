import React, { useEffect, useState } from "react";

const DEFAULT_YEAR = 2023;

/**
 * Returns cost center data.
 *
 * @param year The fiscal year
 * @returns The cost center for the given fiscal year.
 */
function getData(year: number = DEFAULT_YEAR) {
  return [1, 2, 3, 4, 5].map((data) => {
    const expenses = Math.random() * 10000;
    return {
      id: data,
      name: `Test Cost Center ${data}`,
      expenses: expenses,
      revenue: Math.random() + expenses,
    };
  });
}

function filterResults(data: CostCenterInfo[], query: string) {
  return data.filter(({ id, name, expenses, revenue }) => {
    return (
      name.startsWith(query) ||
      String(id).startsWith(query) ||
      String(id).endsWith(query)
    );
  });
}

/**
 * A component that allows the user to search and filter cost centers by ID and other attributes.
 */
export default function SearchApp() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<CostCenterInfo[]>([]);

  const handleSubmit = () => { };

  useEffect(() => {
    const result = getData();
    setData(result);
  }, []);

  const handleUpdate = (newQuery: string) => {
    setQuery(newQuery);
  };

  const rows = filterResults(data, query).map((data) => {
    return <TableRow data={data} />;
  });

  return (
    <div className="max-w-4xl mx-auto m-4 rounded-lg bg-white shadow-md">
      <SearchBox
        currentQuery={query}
        onUpdate={handleUpdate}
        onSubmit={handleSubmit}
      />
      <div className="mt-2 px-2">
        <span className="italic text-sm">
          Showing data for fiscal year 2023 (ending August 31, 2023)
        </span>
      </div>
      <table className="w-full mt-4 table-fixed">
        <thead className="p-4 bg-gray-200">
          <tr>
            <th className="p-4">Cost Center #</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Expenses</th>
            <th className="p-4 text-left">Revenue</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <tbody></tbody>
    </div>
  );
}

interface TableRowProps {
  data: CostCenterInfo;
}

function TableRow({ data: { id, name, expenses, revenue } }: TableRowProps) {
  return (
    <tr className="border-slate-200 border-b-[1px]">
      <td className="px-4 py-2 font-bold text-right">{id}</td>
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">
        {expenses.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </td>
      <td className="px-4 py-2">
        {revenue.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </td>
    </tr>
  );
}

type CostCenterInfo = {
  /**
   * The cost center number.
   *
   * This is the unique identifier for this cost center.
   */
  id: number;

  /**
   * A human-readable name for the Cost Center.
   */
  name: string;

  /**
   * The budgeted expenses.
   */
  expenses: number;

  /**
   * The budgeted (expected) revenue.
   */
  revenue: number;
};

interface SearchBoxProps {
  /**
   * The current contents of the search box.
   */
  currentQuery: string;

  /**
   * Called every time the search box content updates.
   *
   * @param query The input string
   */
  onUpdate: (query: string) => void;

  /**
   * Called when the search box content submission is triggered.
   */
  onSubmit: () => void;
}

function SearchBox({ currentQuery, onUpdate, onSubmit }: SearchBoxProps) {
  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    onUpdate(value);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  const isDisabled = currentQuery.trim() === "";

  return (
    <div className="flex p-2 space-x-4">
      <input
        className="p-2 flex-1 bg-slate-200 rounded-md"
        type="text"
        name="searchQuery"
        id="searchQuery"
        onChange={handleUpdate}
        value={currentQuery}
      />
      <button
        className="p-2 text-white font-semibold bg-primary disabled:bg-slate-200 disabled:text-slate-700 rounded-md hover:bg-black transition cursor-pointer disabled:cursor-not-allowed"
        onClick={handleSubmit}
        disabled={isDisabled}
      >
        Search
      </button>
    </div>
  );
}
