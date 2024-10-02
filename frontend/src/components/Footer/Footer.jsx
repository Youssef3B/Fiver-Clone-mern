function Footer() {
  return (
    <footer className="px-64 bg-white grid grid-cols-3 gap-8 border py-6 ">
      <div>
        <ul>
          <li className="font-bold">Useful Limks</li>
          <li className="font-semibold my-2">Home</li>
          <li className="font-semibold my-2">Services</li>
          <li className="font-semibold my-2">Blog</li>
          <li className="font-semibold my-2">Contact</li>
        </ul>
      </div>
      <div>
        <img className="w-64" src="./images/bricoolLogo.png" alt="" />
      </div>
      <div>
        <ul>
          <li className="font-bold">Contact</li>
          <li className="font-semibold my-2">
            198 West 21th Street, Suite 721 New York NY 10016
          </li>
          <li className="font-semibold my-2">Phone: + 1235 2355 98</li>
          <li className="font-semibold my-2">Email: info@yoursite.com</li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
