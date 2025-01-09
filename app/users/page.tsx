import React from 'react'
import UserTable from './UserTable'


interface Props {
    searchParams: { sortOrder: string };
}


const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
    console.log(sortOrder)

    // const for SQLite3 database named users.db
    // const db = openDatabase('users.db', '1.0', 'users', 2 * 1024 * 1024);
    return (
        <>
            <h1>Users</h1>
            <UserTable sortOrder={sortOrder} />
        </>
    )
}

export default UsersPage