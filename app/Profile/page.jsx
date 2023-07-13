"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import Profile from "@components/Profile";

const UserProfile = () => {
  const [PostPrompt, setPostPrompt] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();

  const handleUpdate = (post) => {
    router.push(`update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const comfirmpost = confirm(`are you sure you want to delete this prompt`);

    if (comfirmpost) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });
        const filterPost = PostPrompt.filter((post) => post._id !== post._id);
        setPostPrompt(filterPost);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      // check if data is an array
      if (Array.isArray(data)) {
        if (session?.user.id) setPostPrompt(data);
      }
    };
    fetchPost();
  }, []);

  return (
    <div>
      <Profile
        name="My"
        description="Welcome to your personalised Profiles"
        data={PostPrompt}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default UserProfile;
