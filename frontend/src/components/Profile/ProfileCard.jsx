import Button from "../Button";

function ProfileCard({ user2 }) {
  const fullPath = String(user2?.avatar);

  const pathParts = fullPath.split("\\");
  const desiredPath = pathParts.slice(-2).join("\\");
  console.log(`../${desiredPath}`);
  return (
    <div className="bg-white shadow-lg rounded-lg border p-8 text-center flex flex-col space-y-2">
      <img
        className="w-32 h-32 rounded-full object-cover object-center mx-auto"
        src={`../${desiredPath}`}
        alt=""
      />
      <h2 className="text-center my-3 font-bold text-xl">
        {user2?.firstName} {user2?.lastName}
      </h2>
      <p className="font-semibold">{user2?.city}</p>
      <p className="font-semibold text-sm text-gray-800">{user2?.category}</p>
      <Button variant={"filled"}>Contact Me</Button>
    </div>
  );
}
export default ProfileCard;
