import React from 'react'
import Title from "../components/Title.jsx";
import Cards from "../components/Cards.jsx";
import Top3 from "../components/Top3.jsx";

export default function Home() {
    return (
        <div className="pt-20 mx-auto container">
            <Top3 />
            <div className="mt-5">
                <Title>Last Posts</Title>
                <div className="grid grid-cols-3 gap-x-5">
                    <Cards title="Title here" username="admin" date="12/12/2024"
                           image="https://images.unsplash.com/photo-1509280951623-4a17506e3eb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXNsYW5kfGVufDB8fDB8fHww"
                           pp="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/46/460ad5a9a76add4a06263ff55999c2d0288a7fa8_full.jpg"
                           desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur consequuntur cupiditate debitis dignissimos dolorem eum fuga iure magnam, necessitatibus nostrum quam, quia saepe temporibus ullam velit voluptatem? Eum, sequi?"/>
                    <Cards title="Title here" username="admin" date="12/12/2024"
                           image="https://images.unsplash.com/photo-1509280951623-4a17506e3eb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXNsYW5kfGVufDB8fDB8fHww"
                           pp="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/46/460ad5a9a76add4a06263ff55999c2d0288a7fa8_full.jpg"
                           desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur consequuntur cupiditate debitis dignissimos dolorem eum fuga iure magnam, necessitatibus nostrum quam, quia saepe temporibus ullam velit voluptatem? Eum, sequi?"/>
                    <Cards title="Title here" username="admin" date="12/12/2024"
                           image="https://images.unsplash.com/photo-1509280951623-4a17506e3eb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXNsYW5kfGVufDB8fDB8fHww"
                           pp="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/46/460ad5a9a76add4a06263ff55999c2d0288a7fa8_full.jpg"
                           desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur consequuntur cupiditate debitis dignissimos dolorem eum fuga iure magnam, necessitatibus nostrum quam, quia saepe temporibus ullam velit voluptatem? Eum, sequi?"/>
                    <Cards title="Title here" username="admin" date="12/12/2024"
                           image="https://images.unsplash.com/photo-1509280951623-4a17506e3eb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXNsYW5kfGVufDB8fDB8fHww"
                           pp="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/46/460ad5a9a76add4a06263ff55999c2d0288a7fa8_full.jpg"
                           desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur consequuntur cupiditate debitis dignissimos dolorem eum fuga iure magnam, necessitatibus nostrum quam, quia saepe temporibus ullam velit voluptatem? Eum, sequi?"/>
                    <Cards title="Title here" username="admin" date="12/12/2024"
                           image="https://images.unsplash.com/photo-1509280951623-4a17506e3eb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXNsYW5kfGVufDB8fDB8fHww"
                           pp="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/46/460ad5a9a76add4a06263ff55999c2d0288a7fa8_full.jpg"
                           desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur consequuntur cupiditate debitis dignissimos dolorem eum fuga iure magnam, necessitatibus nostrum quam, quia saepe temporibus ullam velit voluptatem? Eum, sequi?"/>
                    <Cards title="Title here" username="admin" date="12/12/2024"
                           image="https://images.unsplash.com/photo-1509280951623-4a17506e3eb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXNsYW5kfGVufDB8fDB8fHww"
                           pp="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/46/460ad5a9a76add4a06263ff55999c2d0288a7fa8_full.jpg"
                           desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur consequuntur cupiditate debitis dignissimos dolorem eum fuga iure magnam, necessitatibus nostrum quam, quia saepe temporibus ullam velit voluptatem? Eum, sequi?"/>
                </div>
            </div>
        </div>
    )
}
