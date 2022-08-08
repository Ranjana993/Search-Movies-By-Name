import { useContext, createContext, useEffect, useState } from "react";

export  const API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=`


export const AppContext = createContext()
export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState([])
    const [query, setQuery] = useState("titanic")
    const[error , setError]=useState({show:"false" , msg:""})

    const getMovies = async (url) => {
        setLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data);
            if (data.Response === "True") {
                setMovie(data.Search)
                setLoading(false)
            }else{
                setError({ show: true, msg:data.Error})
            }
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        const setTimerOut = setTimeout(() => {
            getMovies(`${API}&s=${query}`)
        }, 800);
        return () => clearTimeout(setTimerOut)
    }, [query])



    return (
        <AppContext.Provider value={{ error, loading, movie, setLoading, setMovie, query, setQuery }}>
            {children}
        </AppContext.Provider>
    )
}


// Creating global hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}