"use client";
import styles from "./page.module.css";
import { useState } from "react";

const mockValues = [
    "Result",
    "Rishav",
    "Rahul",
    "Raghav",
    "sham",
    "Sureta",
    "Shweta",
    "abhinav",
    "Aryan",
    "Ajay",
    "Babar",
    "Boy",
];

export default function Home() {
    const [results, setResults] = useState<Array<string>>([]);

    const getSearchResults = async (searchItem: string) => {
        console.log("Sending an API request");
        await new Promise((response) => setTimeout(response, 1000));
        return mockValues.filter((value) =>
            value.toLowerCase().includes(searchItem.toLowerCase())
        );
    };
    const handleInput = async (searchItem: string) => {
        const value = await getSearchResults(searchItem);
        setResults(value);
    };
    return (
        <main className={styles.main}>
            <input type='text' onChange={(e) => handleInput(e.target.value)} />
            {results.map((result) => {
                return <span key={result}>{result}</span>;
            })}
        </main>
    );
}
