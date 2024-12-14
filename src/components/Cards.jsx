import React from "react";

export default function Cards({ username,pp,image,title,desc,date }) {
    return (
        <div className="mt-4 border border-three rounded-xl p-1">
            <div className="flex gap-x-2 py-4 items-center px-5">
                <img
                    src={pp}
                    alt={username}
                    className="object-cover rounded-full w-[35px]"
                />
                <p className="text-second-color text-sm">{username}</p>
            </div>
            <div className="px-4">
                <img
                    src={image}
                    alt={title}
                    className="object-cover rounded-xl"
                />
                <h3 className="text-xl font-Poppins border-b border-b-three py-2 hover:text-second-color hover:underline">{title}</h3>
                <p className="text-balance leading-6 pt-2 text-gray-200">{desc}</p>
                <p className="text-sm text-left text-gray-400 py-4">{date}</p>
            </div>
        </div>
    )
}
