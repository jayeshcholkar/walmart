
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import React, { useState } from 'react';

function Address() {
   const inputStyle = "border-[2px] border-silver rounded-lg outline-[#0071dc] p-2 focus:border-[#0071dc] ease-linear duration-200 ";
   const [value, setValue] = useState()
   return (
    <div>
       <div className="flex justify-center w-[100%] h-[100vh] bg-[#f0eef3] mt-[4%]">
        <div className="flex flex-col top-[30%] bg-white shadow-lg border-silver border-[2px] rounded-lg p-5 w-[75%]">
          <text className="text-2xl ">Address</text>

          {/* First Name Last Name */}
          <div className="flex mt-7">
            <input
              className={ inputStyle + ` mt-2 w-[50%]`}
              name="Name"
              type="Name"
              placeholder="Full Name"
              
            />
          </div>
            {/* Email */}
          <div className="flex mt-7">
            <input
              className={ inputStyle + ` mt-2 w-[50%]`}
              name="email"
              type="email"
              placeholder="Email"
              
            />
          </div>
          {/* Address */}
          <div className="flex mt-7">
            <input
              className={ inputStyle + ` w-[100%]`}
              name="pass"
              type="Address"
              placeholder="Address line 1"
             
            />
          </div>
          <div className="flex mt-7">
            <input
              className={ inputStyle + ` w-[100%]`}
              name="pass"
              type="Address"
              placeholder="Address line 2"
             
            />
          </div>
          <div className="flex mt-7">
            <input
              className={ inputStyle + ` w-[10%]`}
              name="Postal code"
              type="Postal code"
              placeholder="Postal code"
             
            />
          </div>
{/* Phone numes */}
<div className="flex mt-7">
<PhoneInput
      className={ inputStyle + ` w-[30%]`}
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
</div>

          {/* Submit button */}
          <input
            type="button"
            className="mt-5 text-white bg-[#0071dc] rounded-[1rem] hover:bg-[#045bac] ease-in duration-100 shadow-md p-3 w-28"
            value="Order now"
            
          />
        </div>
      </div>
      </div>
    );
  }


export default Address