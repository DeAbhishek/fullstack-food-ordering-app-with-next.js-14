import Image from "next/image";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <section className="hero mt-4">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything
          <br /> is better
          <br /> with a <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the missiing peice that makes every day complete, a simple
          yet delicious joy in life.
        </p>
        <div className="flex gap-4 items-center text-sm">
          <button className="bg-primary uppercase rounded-full text-white px-4 py-2 flex gap-2 items-center">
            Order Now
            <Right />
          </button>
          <button className="flex gap-2 items-center text-gray-600 font-semibold">
            Learn More
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt="pizza"
        />
      </div>
    </section>
  );
};

export default Hero;
