function AboutSeller({ Service }) {
  const fullPath = String(Service?.user?.avatar);

  const pathParts = fullPath.split("\\");
  const desiredPath = pathParts.slice(-2).join("\\");
  return (
    <div className="my-10 px-8 bg-white border border-zinc-300 shadow-md p-4 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">About The Seller</h3>
      <div className="flex items-center space-x-3">
        <div>
          <img
            className="h-24 w-24 rounded-full object-cover object-center"
            src={`../${desiredPath}`}
            alt=""
          />
        </div>
        <div>
          <h4 className="text-md font-semibold">
            {Service?.user?.firstName} {Service?.user?.lastName}
          </h4>
          <p className="font-sm text-zinc-600">{Service?.user?.city}</p>
          <p className="font-sm text-zinc-600">{Service?.user?.category}</p>
        </div>
      </div>
      <p className="my-5">{Service?.user?.bio}</p>
    </div>
  );
}
export default AboutSeller;
