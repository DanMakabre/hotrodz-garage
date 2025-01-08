import React from 'react'
import UserTable from './UserTable'

const UsersPage = async () => {

    // const for SQLite3 database named users.db
    // const db = openDatabase('users.db', '1.0', 'users', 2 * 1024 * 1024);
    return (
        <>
            <h1>Users</h1>
            <UserTable />
        </>
    )
}

export default UsersPage