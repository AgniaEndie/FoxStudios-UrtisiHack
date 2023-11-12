import axios from 'axios';
import React from "react";

interface Org{
    uuid:string,
    name:string,
    status:string
}
const baseURL = 'https://api.foxworld.online/corporative/organisation/all';
function Organisation() {
    const [posts, setPosts] = React.useState<Org[]>([]);

    React.useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    if (!posts || posts.length === 0) return null;

    return (
        <div>
            {posts.map((post) => (
                <div key={post.uuid}>
                    <h1>{post.name}</h1>
                    <p>{post.status}</p>
                </div>
            ))}
        </div>
    );
}

export default Organisation;