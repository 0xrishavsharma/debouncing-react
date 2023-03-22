"use client";
import styles from "./page.module.css";
import { ChangeEvent, useCallback, useState } from "react";
import debounce from "lodash.debounce";

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
    const [searchTerm, setSearchTerm] = useState<string>("");

    const getSearchResults = async (searchItem: string) => {
        console.log("Sending an API request");
        await new Promise((response) => setTimeout(response, 1000));
        return mockValues.filter((value) =>
            value.toLowerCase().includes(searchItem.toLowerCase())
        );
    };

    const request = debounce(async (searchItem: string) => {
        const value = await getSearchResults(searchItem);
        setResults(value);
    }, 300);

    const debounceRequest = useCallback(
        async (searchItem: string) => await request(searchItem),
        []
    );

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        debounceRequest(e.target.value);
    };
    return (
        <main className={styles.main}>
            <input type='text' value={searchTerm} onChange={onChange} />
            {results.map((result) => {
                return <span key={result}>{result}</span>;
            })}
        </main>
    );
}
