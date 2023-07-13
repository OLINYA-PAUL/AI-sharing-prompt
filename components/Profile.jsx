import PromptCard from "./PromptCard";

const Profile = ({ name, description, handleDelete, handleUpdate, data }) => {
  return (
    <div>
      <div className="text_heading mt-5 ">
        <span className="blue_gradient max-sm:text-[30px]">
          {name}
          <span className="ml-5 max-sm:ml-3 ">Profile</span>
        </span>
      </div>
      <div className="font-satoshi text-gray-400 text-[18px] mt-3">
        {description}
      </div>
      <div className="mt-5 max-sm:mt-5 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleUpdate={() => handleUpdate && handleUpdate(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
