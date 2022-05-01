import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../graphql/queries";
import Card from "./Card";

const ListUsers = () => {
    const { data, loading, error } = useQuery(GET_USERS);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error while fetching data...</div>;
    return (
        <div>
            <h3>List of users:</h3>
            <div className="d-flex flex-wrap">
                {data.getUsers.map((user) => (
                    <Card key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default ListUsers;
