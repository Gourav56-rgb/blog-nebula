import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

export default function PostPage() {
  const { postTitle } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/post/getposts?title=${postTitle}`);
        const data = await res.json();
        if (!res.ok) {
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [postTitle]);

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        {post && post.title}
      </h1>
      <Link
        to={`/www.linkedin.com/in/gourav-kumar-behera-79a9b8228/`}
        target="_blank"
        className="self-center mt-5"
      >
        <button color="gray" pill size="xs">
          {post && post.author}
        </button>
      </Link>
      <img
        src={post && post.image}
        alt={post && post.title}
        className="mt-10 p-3 max-h-[600px] w-full object-cover"
      />
      <div
        className="p-3 max-w-2xl mx-auto w-full post-content"
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
      <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
        <BsFacebook href="#" />
        <BsTwitter href="#" />
        <BsLinkedin href="#" />
      </div>
    </main>
  );
}
