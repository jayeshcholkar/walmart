import React from 'react'
import logo  from '../assets/logo1.png'
const Footer = () => {
  return (
      
<div className="max-w-full mx-auto mt-10">

	<footer className="p-4 shadow md:px-6 md:py-8 bg-[#0071dc]">
		<div className="sm:flex sm:items-center sm:justify-between">
			<button target="_blank" className="flex items-center mb-4 sm:mb-0">
				<img src={logo} className="mr-4 h-8" alt="Logo" />
				<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
			</button>
			<ul className="flex flex-wrap items-center mb-6 sm:mb-0">
				<li>
					<button className="mr-4 text-sm text-white hover:underline md:mr-6 ">About</button>
				</li>
				<li>
					<button className="mr-4 text-sm text-white hover:underline md:mr-6 ">Privacy
						Policy</button>
				</li>
				<li>
					<button
						className="mr-4 text-sm text-white hover:underline md:mr-6 ">Licensing</button>
				</li>
				<li>
					<button className="text-sm text-white hover:underline ">Contact</button>
				</li>
			</ul>
		</div>
		<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
		<span className="block text-sm text-white sm:text-center ">© 2022 <button  className="hover:underline">DollarStore™</button>. All Rights Reserved.
    </span>
	</footer>

	
</div>
  );
};

export default Footer;