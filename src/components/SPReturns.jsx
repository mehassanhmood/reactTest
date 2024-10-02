// SPReturns.js
import React from 'react';
import SPY from "../../public/SPY.png";
import investmentImage from "../../public/investment_pic.png"; // Placeholder image

const SPReturns = () => {
  return (
    <div className="p-4 border rounded-lg shadow-lg  shadow-teal-100 hover:shadow-teal-600 bg-teal-500  flex">
      <div className="flex-1 text-left p-4">
        <div className="mb-4">
          <p className='text-xl' ><b>Beating the odds:</b></p>
          <p className='text-xl'>
            As Shakira sat at the table, her mind drifted to an article from <b>Morningstar: "The Rise of Passive Investing"</b> she had recently read. It wasn’t just experts and wealthy investors who had found ways to shield themselves from inflation—40% of investors were now hedging inflation through passive indexing.
          </p>
          <p className='text-xl'>
            What truly surprised her was the fact that many who didn’t succeed lacked basic financial literacy. Studies showed that millennials adopting passive investing were far better prepared for retirement compared to those who had no investments, highlighting how essential understanding these strategies had become, according to <strong>"Millennials and Retirement: How to Prepare." Bankrate, 2022.</strong>
          </p>
        </div>
      </div>
      <div className="flex-shrink-0 flex flex-col items-end ml-4">
        <img
          className="max-w-xs h-auto rounded-md mb-2" // Adjust size as needed
          src={SPY}
          alt="SPY Image"
        />
        <img
          className="max-w-xs h-auto rounded-md mb-2" // Placeholder image
          src={ investmentImage}
          alt="Investments"
        />
      </div>
    </div>
  );
};

export default SPReturns;
