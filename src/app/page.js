import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="max-w-md mx-auto text-gray-500 mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsa
            veritatis fugit ratione animi dolores delectus alias, voluptatibus
            odio! Odio aperiam, dicta quibusdam asperiores nihil minus? Id natus
            nesciunt quaerat!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae maiores recusandae eos vero, nemo praesentium magni
            reprehenderit officiis veniam, harum qui doloremque cum. Cum
            voluptatem numquam excepturi. Voluptatibus, tempore natus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nihil
            asperiores itaque maxime reiciendis facere nisi cupiditate molestiae
            reprehenderit in qui animi deleniti debitis, enim, quo repudiandae
            laborum earum aperiam?
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contect us"}
        />

        <a
          href="tel: +917980804436"
          className="text-4xl underline text-gray-500 block mt-8"
        >
          +91 79808 04436
        </a>
      </section>
    </>
  );
}
