import React, {useEffect, useState} from "react";
import Title from "../components/Title.jsx";
import Cards from "../components/Cards.jsx";
import Top3 from "../components/Top3.jsx";
import axios from "axios";

export default function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const fetchPosts = async () => {

            try {

                const response = await axios.get('http://localhost:5000/api/post');
                setPosts(response.data)

            } catch (err) {
                console.error('Postları çekerken bir hata oluştu!', err)
            }

        }
        fetchPosts();
    }, []);

    return (
        <div className="pt-20 mx-auto container">
            <Top3/>
            <div className="mt-5">
                <Title>Last Posts</Title>
                <div className="grid grid-cols-3 gap-x-5">
                    {posts.map((post) => (
                        <Cards
                        key={post._id}
                        title={post.title}
                        username={post.author?.username}
                        date={new Date(post.createdAt).toLocaleDateString()}
                        image={post.image}
                        pp={post.author?.profilePicture
                        ? `${post.author.profilePicture}`
                        : "/default-avatar.png"}
                        desc={post.content}
                        />

                        ))}
                </div>
            </div>
        </div>
    )
}
