import { useEffect, useState } from "react";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { format, startOfWeek, endOfWeek, startOfMonth, endOfMonth, subDays, subMonths, subYears } from "date-fns";

export default function TimePeriodSelection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState("This Month");
  const [dateRange, setDateRange] = useState("");

  const dateRanges = [
    "Today", "Yesterday", "This Week", "Last Week", "This Month", "Last Month",
    "Last 7 Days", "Last 30 Days", "Last 90 Days", "Last 6 Months", "This Year", "Custom Range"
  ];

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  useEffect(() => {
    handleSelect(selectedRange);
  }, [selectedRange]);

  const handleSelect = (option: string) => {
    setSelectedRange(option);
    const today = new Date(); // Use real-time current date

    let start, end;
    switch (option) {
      case "Today":
        setDateRange(format(today, "MMMM d, yyyy"));
        break;
      case "Yesterday":
        setDateRange(format(subDays(today, 1), "MMMM d, yyyy"));
        break;
      case "This Week":
        start = startOfWeek(today, { weekStartsOn: 1 });
        end = endOfWeek(today, { weekStartsOn: 1 });
        setDateRange(`${format(start, "MMM d")} - ${format(end, "MMM d, yyyy")}`);
        break;
      case "Last Week":
        start = startOfWeek(subDays(today, 7), { weekStartsOn: 1 });
        end = endOfWeek(subDays(today, 7), { weekStartsOn: 1 });
        setDateRange(`${format(start, "MMM d")} - ${format(end, "MMM d, yyyy")}`);
        break;
      case "This Month":
        setDateRange(`${format(startOfMonth(today), "MMM d")} - ${format(endOfMonth(today), "MMM d, yyyy")}`);
        break;
      case "Last Month":
        start = startOfMonth(subMonths(today, 1));
        end = endOfMonth(subMonths(today, 1));
        setDateRange(`${format(start, "MMM d")} - ${format(end, "MMM d, yyyy")}`);
        break;
      case "Last 7 Days":
        setDateRange(`${format(subDays(today, 7), "MMM d")} - ${format(today, "MMM d, yyyy")}`);
        break;
      case "Last 30 Days":
        setDateRange(`${format(subDays(today, 30), "MMM d")} - ${format(today, "MMM d, yyyy")}`);
        break;
      case "Last 90 Days":
        setDateRange(`${format(subDays(today, 90), "MMM d")} - ${format(today, "MMM d, yyyy")}`);
        break;
      case "Last 6 Months":
        setDateRange(`${format(subMonths(today, 6), "MMM d")} - ${format(today, "MMM d, yyyy")}`);
        break;
      case "This Year":
        setDateRange(`${format(new Date(today.getFullYear(), 0, 1), "MMM d")} - ${format(new Date(today.getFullYear(), 11, 31), "MMM d, yyyy")}`);
        break;
      default:
        setDateRange("Select a range");
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400"
      >
        <span className="block mr-1 font-medium text-theme-sm">{selectedRange} | {dateRange}</span>
        <svg
          className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-2 w-[200px] flex flex-col rounded-2xl border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-800 dark:bg-gray-dark"
      >
        {dateRanges.map((range) => (
          <DropdownItem
            key={range}
            onItemClick={() => {
              setSelectedRange(range);
              closeDropdown();
            }}
            className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
          >
            {range}
          </DropdownItem>
        ))}
      </Dropdown>
    </div>
  );
}
