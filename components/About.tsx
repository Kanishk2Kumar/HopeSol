import dynamic from "next/dynamic";

export function About() {
  return (
    <div className="m-10 mt-28">
      <h2 className="text-center text-3xl font-bold mb-8 mt-8">
        About <span className='text-[#13ADB7]'>HopeSol</span>
      </h2>
      <div className="px-48">
        <p className="dark:text-white text-black text-lg leading-snug tracking-wide">HopeSol is a crowdfunding platform dedicated to empowering NGOs and connecting them with generous donors. Their mission is to create a transparent
          and reliable space where every donation can make a meaningful impact. Whether it's supporting disaster relief, education, healthcare, or sustainable
          development, HopeSol provides NGOs with a platform to raise funds for their important causes.</p><br />
        <p className="dark:text-white text-black text-lg leading-snug tracking-wide">With a focus on trust and transparency, HopeSol has implemented a thorough
          verification process for all NGOs. Their blockchain technology ensures that every transaction is secure and traceable, giving donors confidence in where their
          money is going. By joining HopeSol, you can be part of a community that is working together to make a positive difference in the world.</p>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(About), { ssr: false })