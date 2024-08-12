// import { useEffect, useState } from "react";
// import React from "react";
// import axios from "axios";

// export default function MainPage() {
//   // States for the form fields
//   const [date, setDate] = useState("");
//   const [sourceCurrency, setSourceCurrency] = useState("");
//   const [targetCurrency, setTargetCurrency] = useState("");
//   const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
//   const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);
//   const [sourceCurrencyName, setsourceCurrencyName] = useState("");
//   const [targetCurrencyName, settargetCurrencyName] = useState("");
//   const [currencyNames, setCurrencyNames] = useState([]);
//   const [pressed, setPressed] = useState(false);

//   // Handle submit method =ok
//   const handleSubmit = async (e) => {
//     // Marked as async
//     e.preventDefault();
//     setPressed(true);
//     try {
//       const response = await axios.get("http://localhost:5000/convert", {
//         params: {
//           date,
//           sourceCurrency,
//           targetCurrency,
//           amountInSourceCurrency,
//         },
//       });

//       const { amountInTargetCurrency } = responce.data;
//       //currencyNames
//       const { sourceCurrencyName, targetCurrencyName } = responce.data;
//       setsourceCurrencyName(sourceCurrencyName);
//       settargetCurrencyName(targetCurrencyName);
//       setamountInTargetCurrency(amountInTargetCurrency);
//       //setAmountInTargetCurrency(response.data.amountInTargetCurrency);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   //get all currencies = ok
//   useEffect(() => {
//     const getCurrencyNames = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/getAllCurrencies"
//         );
//         setCurrencyNames(response.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getCurrencyNames();
//   }, []);

//   return (
//     <div>
//       <h1 className="lg:mx-32 text-5xl font-bold text-green-50">
//         Convert your currencies today
//       </h1>
//       <p className="lg:mx-32 opacity-40 py-5">
//         Welcome to "Convert Your Currencies Today"! This application allows you
//         to easily convert currencies based on the latest exchange rates. Whether
//         you're planning a trip, managing your finances, or simply curious about
//         the value of your money in different currencies, this tool is here to
//         help.
//       </p>

//       <div className="mt-5 flex items-center justify-center flex-col">
//         <section className="w-full lg:w-1/2">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="date"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Date
//               </label>
//               <input
//                 onChange={(e) => setDate(e.target.value)}
//                 type="date"
//                 id="date"
//                 name="date"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder=""
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="sourceCurrency"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Source Currency
//               </label>
//               <select
//                 onChange={(e) => setSourceCurrency(e.target.value)}
//                 id="sourceCurrency"
//                 name="sourceCurrency"
//                 value={sourceCurrency}
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder=""
//                 required
//               >
//                 <option value="">Select source currency</option>
//                 {Object.keys(currencyNames).map((currency) => {
//                   return (
//                     <option className="p-1" key={currency} value={currency}>
//                       {currencyNames[currency]}
//                     </option>
//                   );
//                 })}
//               </select>
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="targetCurrency"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Target Currency
//               </label>
//               <select
//                 onChange={(e) => setTargetCurrency(e.target.value)}
//                 id="targetCurrency"
//                 name="targetCurrency"
//                 value={targetCurrency}
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder=""
//                 required
//               >
//                 <option value="">Select target currency</option>
//                 {Object.keys(currencyNames).map((currency) => {
//                   return (
//                     <option className="p-1" key={currency} value={currency}>
//                       {currencyNames[currency]}
//                     </option>
//                   );
//                 })}
//               </select>
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="amountInSourceCurrency"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Amount in source currency
//               </label>
//               <input
//                 onChange={(e) => setAmountInSourceCurrency(e.target.value)}
//                 type="number"
//                 id="amountInSourceCurrency"
//                 name="amountInSourceCurrency"
//                 value={amountInSourceCurrency}
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="Amount in source currency"
//                 required
//               />
//             </div>

//             <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md">
//               Get the target currency
//             </button>
//           </form>
//         </section>
//       </div>
//       <h3 className=" flex items-center justify-start py-5 text-lg">
//         {pressed ? (
//           <div>
//             <span className=" text-xl"> {amountInSourceCurrency}</span>{" "}
//             {sourceCurrencyName} is equal to
//             <span className=" text-xl font-bold text-green-400">
//               {" "}
//               {amountInTargetCurrency.toFixed(2)}
//             </span>{" "}
//             {targetCurrencyName}
//           </div>
//         ) : (
//           ""
//         )}
//       </h3>
//     </div>
//   );
// }
