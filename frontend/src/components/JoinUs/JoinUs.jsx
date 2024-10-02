import Button from "../Button";
function JoinUs() {
  return (
    <div className="px-64 my-8">
      <div className="relative">
        <img src="./images/banner.webp" alt="" />
        <div className="absolute  top-0 w-full h-full">
          <div className=" absolute left-10 top-28">
            <h2 className="text-white font-bold text-5xl mb-8 w-[80%]">
              Freelance services at your fingertips!
            </h2>
            <Button variant="filled">Join Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default JoinUs;
