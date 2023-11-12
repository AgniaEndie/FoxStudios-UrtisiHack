import axios from 'axios';
import React, { useState } from "react";

interface Off {
    uuid: string;
    name: string;
    city: string;
    timeZone: string;
    organisation: string;
}

const baseURL = 'https://api.foxworld.online/corporative/office/all';

function Office() {
    const [posts, setPosts] = React.useState<Off[]>([]);

    React.useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setPosts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Office List</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.uuid}>
                        <p>Name: {post.name}</p>
                        <p>City: {post.city}</p>
                        <p>Time Zone: {post.timeZone}</p>
                        <p>Organisation: {post.organisation}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Office;