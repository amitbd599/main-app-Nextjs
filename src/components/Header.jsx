import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-[30px]">
        {/* Logo Section */}
        <div className="logo">
          <img src="/images/logo.png" alt="myImg" />
        </div>

        {/* menu item */}
        <nav>
          <ul className="flex gap-[40px]">
            <li>
              <Link href={"/"} className="font-bold text-[18px] text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="font-medium text-[18px] text-gray-700"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="font-medium text-[18px] text-gray-700"
              >
                Our App
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="font-medium text-[18px] text-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Button section */}
        <div className="flex items-center gap-[20px]">
          <div>
            <Link
              href="#"
              className="py-[14px] px-[22px] font-semibold text-gray-700"
            >
              Login
            </Link>
          </div>
          <div>
            <Link
              href="#"
              className=" py-[14px] px-[22px] bg-[#FF6600] rounded-lg font-semibold text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
