import AnimatedTitle from "./AnimatedTitle";

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-5 md:px-10">
      <div className="relative min-h-[34rem] overflow-hidden rounded-lg bg-black text-blue-50">
        <img
          src="/img/me_2.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex min-h-[34rem] flex-col items-center justify-center px-4 py-24 text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Me
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> C<b>S</b> t<b>o</b>gether."
            className="special-font w-full font-zentry !text-5xl !leading-[.9] text-blue-50 md:!text-[6.2rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
