import { useRouter } from "next/navigation";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const router = useRouter();
  return (
    <div className="w-full max-w-full flex-col flex flex-start mt-[30px] text-left">
      <div className="text_heading">
        <span className="blue_gradient max-sm:text-[40px]">
          {type}
          {"  "} POST
        </span>
      </div>
      <p className="text-[20px] tracking-wider font-[500]">
        {type} and share amazing prompts with the world,
        <br className="max-sm:hidden" /> and let your imagination run wild with
        any AI-powered platform
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 glassmorphism p-5 w-full flex flex-col max-w-2xl"
      >
        <label className="font-satoshi pt-3 text-base text-black">
          Your Amazing AI Prompt
        </label>
        <textarea
          rows={5}
          value={post.prompt}
          name={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          placeholder="Write your prompt here"
          required
          className="mt-3 p-5 resize-none"
        />
        <label className="font-satoshi pt-3 text-base text-black">
          Tag #Programming #Web Development #Search Products
        </label>
        <input
          value={post.tag}
          name={post.tag}
          onChange={(e) => setPost({ ...post, tag: e.target.value })}
          placeholder="Enter #Tags"
          required
          className="mt-3 p-3"
        />
        <div className="gap-5 flex items-end justify-end mt-4">
          <div
            className="px-5 blue_gradient font-bold p-1 cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            Cancel
          </div>
          <button type="submit" className=" btn_outline" disabled={submitting}>
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
