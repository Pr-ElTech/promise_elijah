import promiseImage from "../assets/image/promiseimage.png";

const AboutImage = () => {
  return (
    <div className="relative">

      <div className="absolute inset-0 rounded-3xl bg-blue-600 blur-3xl opacity-20"></div>

      <img
        src={promiseImage}
        alt="Promise Elijah"
        className="relative rounded-3xl border border-slate-800"
      />

    </div>
  );
};

export default AboutImage;