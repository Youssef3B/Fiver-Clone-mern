function CardBlog() {
  return (
    <div className="bg-white shadow-md border rounded-lg">
      <div>
        <img
          className="h-80 w-full object-cover rounded-t-lg"
          src="./images/blog1.jpg"
          alt=""
        />
      </div>
      <div className="p-4 flex flex-col space-y-3">
        <span className="bg-sky-500 w-28 text-center rounded-full px-1 py-1 text-white text-sm font-semibold">
          Technologies
        </span>
        <h3 className="font-bold text-2xl">What s New In 2024 Tech</h3>
        <p className="text-sm text-gray-600 font-serif pb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          atque! Numquam vero, aspernatur voluptas suscipit maiores expedita
          possimus. Consectetur, recusandae?
        </p>
        <div className="flex space-x-3 items-center">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="./images/team-1.jpg"
            alt=""
          />
          <div>
            <h5 className="font-semibold">Jhon Dane</h5>
            <p className="text-sm text-gray-700">2h Ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardBlog;
