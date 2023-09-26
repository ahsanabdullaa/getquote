import { React, useState, useEffect } from "react";
import axios from "axios";

export default function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("happiness");
  const options = [
    "attitude",
    "beauty",
    "birthday",
    "dad",
    "dating",
    "death",
    "dreams",
    "failure",
    "fitness",
    "friendship",
    "happiness",
    "history",
    "hope",
    "inspirational",
    "leadership",
    "mom",
    "success",
  ];
  const getQuote = async () => {
    console.log(category);
    await axios
      .get("https://api.api-ninjas.com/v1/quotes?category=" + category, {
        headers: { "X-Api-Key": "McYiM+kVUw3XUcGjao2Qug==RQ019vhWRxa0HNHE" },
      })
      .then((response) => {
        console.log(response.data);
        setQuote(response.data[0].quote);
        setAuthor(response.data[0].author);
        setCategory(response.data[0].category);
      });
  };

  const setCat = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    getQuote();
  }, [quote]);

  return (
    <div>
      <div className=" shadow-lg bg-gradient-to-r from-slate-700 to-slate-500 p-5 rounded-lg">
        {/* <h1>Quote</h1> */}
        {/* <p className="text-4xl text-gray-800">~{category}~</p> */}
        <h1 className="text-3xl text-gray-400 leading-normal mt-3">
          "{quote}"
        </h1>
        <div className="flex justify-end">
          <p className="text-xl text-zinc-800">By ~ {author}</p>
        </div>
        {/* <div className="flex justify-end">
        <p className="text-lg text-zinc-800">Category - {category}</p>
      </div> */}
      </div>
      <label htmlFor="quote" className="text-gray-400 text-lg">
        Category:
      </label>
      <select
        id="category"
        name="category"
        onChange={setCat}
        className="rounded-lg px-6 py-2 m-5 bg-slate-900 text-gray-400"
        value={category}
      >
        <option value="Select Category">Select Category</option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      <button
        onClick={getQuote}
        className="rounded-lg px-5 py-3 m-5 bg-slate-900 text-gray-400 hover:bg-gradient-to-l from-slate-800 to-slate-600"
      >
        Get Quote
      </button>
    </div>
  );
}
