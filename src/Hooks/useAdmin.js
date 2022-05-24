import { useEffect, useState } from "react"

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/admin/${email}`)
                .then(res => res.json())
                .then(data => {

                    setIsAdmin(data.admin)

                });
        }
    }, [email]);

    return [isAdmin];
}
export default useAdmin;