import { useState } from 'react';
import './Carousel.css'

export const Carousel = () => {
  const [index, setIndex] = useState(0); 
  const length = 4;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel">
      <div className='carousel flex gap-[28px] justify-center text-center items-center h-[42px] px-[20px] py-[10px] bg-[#252F3D]'>
        <div className='flex justify-start'>
          <button onClick={handlePrevious}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13.75 4.50781L12.9414 3.75L6.25 10L12.9414 16.25L13.75 15.4961L7.87109 10L13.75 4.50781Z" fill="white"/>
            </svg>
          </button>
        </div>
        <div className='flex justify-center items-center'>
          {
            index === 0
            ? <div className="flex justify-center items-center gap-2">
                  <svg className="w-[22px] h-[22px] text-[#FFFFFF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"/>
                  </svg>
                  <span>30-DAY SATISFACTION GUARANTEE</span>
              </div>
            : ""
          }
          {
            index === 1
            ? <div className="flex justify-center items-center gap-2">
                  <svg className="w-[22px] h-[22px] text-[#FFFFFF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.5 10.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm0 0a2.225 2.225 0 0 0-1.666.75H12m3.5-.75a2.225 2.225 0 0 1 1.666.75H19V7m-7 4V3h5l2 4m-7 4H6.166a2.225 2.225 0 0 0-1.666-.75M12 11V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v9h1.834a2.225 2.225 0 0 1 1.666-.75M19 7h-6m-8.5 3.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"/>
                  </svg>
                  <span>FREE DELIVERY ON ORDERS OVER $40.00</span>
              </div>
            : ""
          }
          {
            index === 2
            ? <div className="flex justify-center items-center gap-2">
                  <svg className="w-[22px] h-[22px] text-[#FFFFFF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"/>
                  </svg>
                  <span>50.000+ HAPPY CUSTOMERS</span>
              </div>
            : ""
          }
          {
            index === 3
            ? <div className="flex justify-center items-center gap-2">
                  <svg className="w-[22px] h-[22px] text-[#FFFFFF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                  <span>100% MONEY BACK GUARANTEE</span>
              </div>
            : ""
          }
        </div>
        <div className='flex justify-end'>
          <button onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6.25 4.50781L7.05859 3.75L13.75 10L7.05859 16.25L6.25 15.4961L12.1289 10L6.25 4.50781Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
