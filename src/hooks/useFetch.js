import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                const responseNotOkay = !res.ok;

                if (responseNotOkay) {
                    const message = 'Could not fetch data for that resource';
                    throw Error(message);
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setError(null);
                setPending(false);
            })
            .catch(err => {
                setError(err.message);
                setPending(false);
            });
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;