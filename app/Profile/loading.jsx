import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Image
        src="assets/icons/loader.svg"
        alt="Loading..."
        height={35}
        width={35}
      />
    </div>
  );
};

export default Loading;
