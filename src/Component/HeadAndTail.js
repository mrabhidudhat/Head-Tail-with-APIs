import React, { useState } from "react";

const HeadAndTail = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [combinedLists, setCombinedLists] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (!selectedValue) {
      setErrorMessage("Please select a value from the dropdown.");
      return;
    }

    setCombinedLists((prevCombinedLists) => {
      const lastList =
        prevCombinedLists.length > 0
          ? prevCombinedLists[prevCombinedLists.length - 1]
          : [];

      if (lastList.length === 0 || lastList[0] === selectedValue) {
        return [
          ...prevCombinedLists.slice(0, -1),
          [...lastList, selectedValue],
        ];
      } else {
        return [...prevCombinedLists, [selectedValue]];
      }
    });

    setSelectedValue("");
    setErrorMessage("");
  };

  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Head & Tail</h1>

      <div className="flex mb-4">
        <select
          className="p-2 border border-gray-300 rounded mr-2"
          value={selectedValue}
          onChange={(event) => setSelectedValue(event.target.value)}
        >
          <option value="">Select value</option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

      <h2 className="text-lg font-bold mt-4 mb-2">Result</h2>
      <div className="flex flex-wrap">
        {combinedLists.map((list, index) => (
          <div key={index} className="bg-gray-200 p-2 rounded mr-4 mb-4">
            {list.map((value, i) => (
              <div key={i} className="mr-2">
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadAndTail;
