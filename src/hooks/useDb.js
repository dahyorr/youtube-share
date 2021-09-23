import {getDatabase, ref, push, onValue, query, limitToLast} from "firebase/database";

const db = getDatabase();
const shareRef = ref(db, 'shares/')

export const useDb = () => ({
    addNewShare: (data) => {
        return push(shareRef, data)
    },
    getShares: (setState) => {
        const q = query(shareRef, limitToLast(20));
        return onValue(q, (snapshot) =>{
            setState(snapshot.val())
        })
    }
})  