import { createContext, useContext, useEffect, useState } from "react";

const JSON_URLS = {
  products: "https://pub-b503c07d1dfc433d9dd12777ed900d31.r2.dev/jsons/products.json",
  make: "https://pub-b503c07d1dfc433d9dd12777ed900d31.r2.dev/jsons/make.json",
  vision: "https://pub-b503c07d1dfc433d9dd12777ed900d31.r2.dev/jsons/vision.json",
  usp: "https://pub-b503c07d1dfc433d9dd12777ed900d31.r2.dev/jsons/usp.json",
  invest: "https://pub-b503c07d1dfc433d9dd12777ed900d31.r2.dev/jsons/invest.json"
};

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const entries = Object.entries(JSON_URLS);

        const fetched = await Promise.all(
          entries.map(([key, url]) =>
            fetch(url).then((res) => res.json())
          )
        );

        const result = Object.fromEntries(
          entries.map(([key], i) => [key, fetched[i]])
        );

        setData(result);

        setTimeout(() => {
          setAnimateOut(true);
          setTimeout(() => {
            setLoading(false);
          }, 800);
        }, 500);
      } catch (error) {
        console.error("Error loading JSONs:", error);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <div className={`loader-container ${animateOut ? "move-up" : ""}`}>
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}