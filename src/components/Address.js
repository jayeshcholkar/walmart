
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import React, { useState } from 'react';

function Address() {
   const inputStyle = "border-[2px] border-silver rounded-lg outline-[#0071dc] p-2 focus:border-[#0071dc] ease-linear duration-200 ";
   const [value, setValue] = useState()
   return (
    <div>
       <div className="flex justify-center w-[100%] h-[100%] bg-[#f0eef3] mt-[4%]">
        <div className="flex flex-col top-[30%] bg-white shadow-lg border-silver border-[2px] rounded-lg p-5 w-[75%] max-sm:w-[90%]">
          <text className="text-2xl ">Address</text>

          {/* First Name Last Name */}
          <form 
           method="POST"
          action="https://getform.io/f/cb5bab2d-19ed-4bf4-a0b7-90597e715e8c">
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
              name="Address1"
              type="Address"
              placeholder="Address line 1"
             
            />
          </div>
          <div className="flex mt-7">
            <input
              className={ inputStyle + ` w-[100%]`}
              name="Address2"
              type="Address"
              placeholder="Address line 2"
             
            />
          </div>
          <div className="flex mt-7">
            <input
              className={ inputStyle + ` w-[15%] max-sm:w-[30%] `}
              name="Postalcode"
              type="Postal code"
              placeholder="Postal code"
             
            />
          </div>
{/* Phone numes */}
<div className="flex mt-7">
<PhoneInput
      name="number"
      className={ inputStyle + ` w-[30%] max-sm:w-[60%]`}
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
</div>

          {/* Submit button */}
          <button className="mt-5 flex text-white bg-[#0071dc] border-0 py-2 px-6 focus:outline-none hover:bg-[#0467c4] rounded">Place your order</button>
            
            
          
        </form>
        </div>
      </div>
      </div>
    );
  }


export default Address