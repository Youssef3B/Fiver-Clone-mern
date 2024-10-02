function HeaderServiceDetails({ Service }) {
  const fullPath = String(Service?.user?.avatar);

  const pathParts = fullPath.split("\\");
  const desiredPath = pathParts.slice(-2).join("\\");
  return (
    <div>
      <h4 className="text-xl font-semibold text-green-500 my-2">
        Categorie- <span>{Service?.user?.category}</span>
      </h4>
      <h2 className="mb-3 text-3xl font-bold">{Service?.title} </h2>
      <div className="flex items-center space-x-3">
        <img
          src={`../${desiredPath}`}
          className="h-12 w-12 rounded-full object-cover"
          alt=""
        />
        <h6 className="font-bold text-sm">
          {Service?.user?.firstName} {Service?.user?.lastName}
        </h6>
        <p className="font-semibold text-sm">
          City: <span>{Service?.user?.city}</span>
        </p>
      </div>
    </div>
  );
}
export default HeaderServiceDetails;
