import React from 'react'

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {

    // const for SQLite3 database named users.db
    // const db = openDatabase('users.db', '1.0', 'users', 2 * 1024 * 1024);

    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users', 
        // { next: { revalidate: 1 } },
        { cache: "no-store" }
    );
    const users: User[] = await res.json();
    return (
        <>
            <h1>Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

export default UsersPage