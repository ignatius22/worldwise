import { useState } from "react";


export function useFormData() {
    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [isLoadingGeolocation, setIsLoadingGeolocation] = useState(false)
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState("");
    const [emoji,setEmoji] = useState()

    return{
        cityName,
        setCityName,
        country,
        setCountry,
        isLoadingGeolocation,
        setIsLoadingGeolocation,
        date,
        setDate,
        notes,
        setNotes,
        emoji,
        setEmoji
    }
}

