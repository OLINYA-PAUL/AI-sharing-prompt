import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="flex w-full flex-col">
      <main className="text_full leading-[1] text-center">
        <h1 className="text-[80px] max-sm:text-5xl">Discover And Share AI</h1>
        <h2 className="text_gradient max-sm:text-[35px] mt-[17px]">
          Power Prompt
        </h2>
      </main>
      <p className=" text-black max-sm:text-[18px] max-sm:font-normal font-normal pt-4 text-[20px] font-inter text-center">
        Discover and share AI powerfull prompt tool for{" "}
        <br className="max-sm:hidden" />
        modern world technology to create and share creative prompt
      </p>
      <Feed />
    </section>
  );
};

export default Home;
