import { useCallback, useEffect, useState } from 'react';
import { getUserDataById } from '../helpers'


const useUserData = (Members) => {
    const [usersData, setUsersData] = useState([])

    const usersDataMemo = useCallback(async () => {
        const data = await Members.map(async e => {
            const user = await getUserDataById(e);
            return user;
        })
        Promise.all(data).then((values) => {
            setUsersData(values)
        });

    }, [Members])

    useEffect(() => {
        usersDataMemo()
    }, [Members])

    return [usersData]
}

export default useUserData;