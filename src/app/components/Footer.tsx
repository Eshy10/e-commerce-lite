import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>

    <div className='flex flex-col lg:flex-row justify-between items-center flex-wrap mt-10 sm:px-16 px-6 py-10'>
      <p>@2023 Wineey. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;