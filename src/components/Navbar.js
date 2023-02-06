import React, { useCallback } from "react";
import logo from "../assets/logo1.png";
import logo11 from "../assets/logo11.png";
import { FaLayerGroup } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { MdAccountCircle, MdLogout } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DLT } from "./redux/actions/action";
const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  const [price, setPrice] = useState(0);
  console.log(price);

  const HandleNav = () => {
    setOpen(!open);
  };

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = useCallback( () => {
    let price = 0;
    getdata.map(product => price = product.price * product.qnty + price);
    setPrice(price);
  }, [getdata])

  useEffect(() => {
    total();
  }, [total]);

  return (
    <div className="max-w-[600rem]">
      <div className="bg-[#0071dc] px-3 py-2 lg:px-8 text-white flex justify-between items-center">
        {/* Left */}
        <div className="flex  items-center gap-x-3 shrink-0">
        <NavLink to={'/'}>
          <div  className="hover:bg-[#06529a] p-2 rounded-full">
            <img src={logo} alt="" className=" h-12 max-sm:hidden" />
            <img src={logo11} alt="" className=" h-10 sm:hidden" />
          </div>
          </NavLink>

          <div className="md:flex items-center gap-2 hidden hover:bg-[#06529a] p-3 rounded-full">
            <FaLayerGroup className="text-[17px]" />
            <p className="text-[16px] font-semibold">Sections</p>
          </div>
          <div className="md:flex hidden  items-center gap-2 hover:bg-[#06529a] p-3 rounded-full ">
            <HiUserGroup className="text-[20px]" />
            <p className="text-[16px] font-semibold">Partners</p>
          </div>
        </div>
        {/* Middle */}
        <div className=" relative flex items-center flex-1 mx-6 max-sm:mx-1">
          <input
            type="search"
            className="rounded-full py-1.5 outline-0 flex-1 w-4 "
          />
          <div className="absolute bg-[#ffc220] p-1.5 rounded-full left-1.5">
            <GoSearch className="text-black " />
          </div>
        </div>
        {/* Right */}
        <div className="flex  items-center gap-x-2 max-sm:gap-x-1">
          <div className="hidden lg:flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full">
            <MdAccountCircle className="text-[20px]" />
            <p className="text-[16px] font-semibold">Account</p>
          </div>
          <button onClick={props.handleLogout}>
            <div className="flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full whitespace-nowrap">
              <MdLogout className="text-[20px] -rotate-90 max-sm:hidden" />

              <p className="flex max-sm:text-[15px] text-[16px] cursor-pointer font-semibold">
                Sign out
              </p>
            </div>
          </button>
          <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="absolute z-10" onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                          <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                            <div className="flex items-start justify-between">
                              <Dialog.Title className="text-lg font-medium text-gray-900">
                                {getdata.length ? (
                                  <h1> Shopping cart </h1>
                                ) : (
                                  <h1> Shopping cart is empty</h1>
                                )}
                              </Dialog.Title>
                              <div className="ml-3 flex h-7 items-center">
                                <button
                                  type="button"
                                  className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>

                            <div className="mt-8">
                              <div className="flow-root">
                                <div
                                  role="list"
                                  className="-my-6 divide-y divide-gray-200"
                                >
                                  {getdata.map((product) => (
                                    <li key={product.id} className="flex py-6">
                                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <NavLink
                                          to={`/detail/${product.id}`}
                                          onClick={() => setOpen(false)}
                                        >
                        
                                          <img
                                            src={product.imgdata}
                                            alt=""
                                            className="h-full w-full object-cover object-center"
                                          />
                                        </NavLink>
                                      </div>

                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                          <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                              <a href={product.href}>
                                                {product.rname}
                                              </a>
                                            </h3>
                                            <p className="ml-4">
                                              ${product.price}
                                            </p>
                                          </div>
                                          <p className="mt-1 text-sm text-gray-800 bg-green-500 inline rounded-md p-0.5">
                                            {product.rating} ★
                                          </p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                          <p className="text-gray-500">
                                            Quantity {product.qnty}
                                          </p>

                                          <div className="flex">
                                            <button
                                              type="button"
                                              className="font-medium text-indigo-600 hover:text-indigo-500"
                                              onClick={() => dlt(product.id)}
                                            >
                                              Remove
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <p>Subtotal</p>
                              <p>${price}</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                              Shipping and taxes calculated at checkout.
                            </p>
                            <div className="mt-6">
                            <NavLink to={'/Address'}>
                              <button onClick={() => setOpen(false)} className="flex items-center justify-center rounded-md border border-transparent bg-[#0071dc] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#0267c5]">
                                Checkout
                              </button>
                              </NavLink>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                              <p>
                                or
                                <button
                                  type="button"
                                  className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
                                  onClick={() => setOpen(false)}
                                >
                                   Continue Shopping
                                  <span aria-hidden="true"> &rarr;</span>
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
          <div className="hover:bg-[#06529a] p-3 rounded-full">
            <div>
              <strong className="relative inline-flex items-center rounded text-xs font-medium">
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-white flex justify-center items-center text-blue-500 items">
                  <span>{getdata.length}</span>
                </span>
                <span className="">
                  <AiOutlineShoppingCart
                    className="w-7 h-7"
                    onClick={HandleNav}
                  />
                </span>
              </strong>
            </div>
          </div>
        </div>
      </div>
      {/* Categories */}
      <div className="bg-[#0071dc] mt-[1px] text-white px-3 py-2 lg:px-8 flex items-center gap-6">
        <div className="flex items-center gap-1 hover:underline">
          <BsPhone />
          <p className="text-[15px] font-semibold">Place an order on the App</p>
        </div>
        <div className="flex items-center gap-1 hover:underline">
          <BiWorld />
          <p className="text-[15px] hover:underline">TX Adress 87358</p>
        </div>
        <p className="hidden md:flex hover:underline">Deals on Phones</p>
        <p className="hidden md:flex font-bold hover:underline">
          $499 OFF on Laptops
        </p>
      </div>
    </div>
  );
};

export default Navbar;
