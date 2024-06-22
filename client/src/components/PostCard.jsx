import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="group relative w-full border border-teal-500 rounded-lg sm:w-[430px]">
      <Link to={`/post/${post.title}`}>
        <img
          src={post.image}
          alt={post.title}
          className="h-[260px] w-full object-cover z-20"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
        <span className="italic text-sm">{post.author}</span>
      </div>
    </div>
  );
}
