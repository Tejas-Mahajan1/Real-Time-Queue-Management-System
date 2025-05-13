"use client";

const Counter = ({ index, customers, totalItems, isDark }) => {
  return (
    <div
      className={`rounded-lg p-6 w-full max-w-sm transition-colors duration-200
                    ${
                      isDark
                        ? "bg-gray-800 border-gray-700 shadow-gray-900"
                        : "bg-white border border-sky-200 shadow-lg shadow-sky-100"
                    }`}
    >
      <h2
        className={`text-xl font-semibold mb-4 
                    ${isDark ? "text-white" : "text-gray-800"}`}
      >
        Counter {index + 1}
      </h2>
      <div className="flex items-center justify-between mb-2">
        <span
          className={`flex items-center gap-2 
                       ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${isDark ? "text-gray-400" : "text-sky-600"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          {customers.length} customers
        </span>
      </div>

      <div className="space-y-2">
        {customers.map((items, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-2 rounded 
                          transition-colors duration-200
                          ${
                            isDark
                              ? "bg-gray-700 text-gray-300"
                              : "bg-sky-50 text-gray-700"
                          }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${isDark ? "text-gray-400" : "text-sky-600"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span>{items} items</span>
          </div>
        ))}
      </div>

      <div
        className={`mt-4 pt-4 border-t 
                    ${isDark ? "border-gray-700" : "border-sky-200"}`}
      >
        <div className="flex justify-between items-center">
          <span className={isDark ? "text-gray-400" : "text-gray-600"}>
            Total Items:
          </span>
          <span
            className={`font-semibold 
                        ${isDark ? "text-white" : "text-gray-800"}`}
          >
            {totalItems}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
