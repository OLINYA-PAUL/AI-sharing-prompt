"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Profile from "@components/Profile";

const UserPostProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userProfileName = searchParams.get("name");
  const [userPost, setUserPost] = useState([]);

  const descriptionText = () => (
    <p>
      Welcome to {userProfileName}'s personalized profile page.Explore
      <br className="max-sm:hidden" />
      {userProfileName}'s exceptional prompts and be inspired by the power of
      their imagination.
    </p>
  );

  useEffect(() => {
    const fetchUserProfile = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setUserPost(data);
      }
    };

    if (params.id) fetchUserProfile();
  }, [params.id]);

  return (
    <section>
      <Profile
        name={userProfileName}
        description={descriptionText()}
        data={userPost}
      />
    </section>
  );
};

export default UserPostProfile;
