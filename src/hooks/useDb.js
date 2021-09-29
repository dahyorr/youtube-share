import {getDatabase, ref, push, onValue, query, limitToLast} from "firebase/database";
import { useEffect, useState } from "react";

const db = getDatabase();
const shareRef = ref(db, 'shares/')

export const useDb = () => {

    let [shares, setShares] = useState({})

    useEffect(() => {
        const q = query(shareRef, limitToLast(20));
        const unsubscribe = onValue(q, (snapshot) => setShares(snapshot.val()))
        return unsubscribe
    }, [])

    return {
        addNewShare: (data) => {
            return push(shareRef, data)
        },
        shares
    }
} 