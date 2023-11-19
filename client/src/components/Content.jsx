import ImageClarifion from '../images/image_clarifion.png'
import VerifiedCustomer from '../images/verified_customer.png'
import CheckGreen from '../images/check_green.png'
import ImageClarifion2 from '../images/image_clarifion_2.png'
import BubbleBlue from '../images/bubble_blue.png'
import CheckBlue from '../images/check_blue.png'
import Percentage from '../images/percentage.png'
import Arrow from '../images/arrow.png'
import Lock from '../images/lock.png'
import Visa from '../images/visa.png'
import ShopPay from '../images/shop_pay.png'
import Paypal from '../images/paypal.png'
import Mastercard from '../images/mastercard.png'
import Gpay from '../images/gpay.png'
import ApplePay from '../images/apple_pay.png'
import Amex from '../images/amex.png'
import Guarantee from '../images/guarantee.png'
import './Content.css'

export function Content () {
    return (
        <>
            <section className='content flex flex-col md:grid justify-center gap-[24px] md:gap-[40px] bg-white md:bg-[#FAFAFA] rounded-[10px] md:mx-[128px] md:p-[40px] md:mb-[60px]'>
                <div className='md:h-[591px]'>
                    <img className='md:w-[575px] md:h-[591px]' src={ ImageClarifion } alt="image_clarifion" />
                </div>
                <div className='flex flex-col md:w-[550px] gap-[24px] md:gap-[32px]'>
                    <div>
                        <h2 className='title text-[24px] md:text-[32px]'><span className='blue text-[24px] md:text-[32px]'>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span className='blue text-[24px] md:text-[32px]'>$14 each</span> ($84.00 total!)</h2>
                    </div>
                    <div className='flex items-center gap-[16px] md:gap-[24px]'>
                        <div className='flex items-center w-[80px] h-[80px] md:w-[134px] md:h-[134px] bg-blue-500 rounded-[10px]'>
                            <img src={ ImageClarifion2 } alt="image_clarifion_2" />
                        </div>
                        <div className='flex flex-col gap-[10px] md:gap-[15px] w-[392px]'>
                            <div className='grid grid-cols-2 grid-rows-1 items-center'>
                                <div className='flex items-center'>
                                    <h3 className='product_name text-[14px] md:text-[20px]'>Clarifion Air Ionizer</h3>
                                </div>
                                <div className='flex justify-end items-center gap-[10px]'>
                                    <span className='price_strike'>$180</span>
                                    <span className='price'>$84</span>
                                </div>
                            </div>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M15.9611 6.2066L11.498 5.55797L9.50289 1.51325C9.4484 1.4025 9.35875 1.31285 9.24801 1.25836C8.97028 1.12125 8.63278 1.23551 8.49391 1.51325L6.49879 5.55797L2.03571 6.2066C1.91266 6.22418 1.80016 6.28219 1.71403 6.37008C1.6099 6.47711 1.55252 6.6211 1.55449 6.77041C1.55647 6.91972 1.61764 7.06214 1.72457 7.16637L4.95367 10.3146L4.19078 14.7601C4.17289 14.8635 4.18434 14.9699 4.22382 15.0671C4.2633 15.1644 4.32923 15.2486 4.41415 15.3103C4.49906 15.3719 4.59956 15.4086 4.70424 15.4161C4.80892 15.4235 4.9136 15.4015 5.00641 15.3525L8.9984 13.2537L12.9904 15.3525C13.0994 15.4105 13.2259 15.4298 13.3472 15.4088C13.6531 15.356 13.8588 15.066 13.806 14.7601L13.0431 10.3146L16.2722 7.16637C16.3601 7.08024 16.4181 6.96774 16.4357 6.84469C16.4832 6.53707 16.2687 6.25231 15.9611 6.2066Z" fill="#FFC000"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M15.9611 6.2066L11.498 5.55797L9.50289 1.51325C9.4484 1.4025 9.35875 1.31285 9.24801 1.25836C8.97028 1.12125 8.63278 1.23551 8.49391 1.51325L6.49879 5.55797L2.03571 6.2066C1.91266 6.22418 1.80016 6.28219 1.71403 6.37008C1.6099 6.47711 1.55252 6.6211 1.55449 6.77041C1.55647 6.91972 1.61764 7.06214 1.72457 7.16637L4.95367 10.3146L4.19078 14.7601C4.17289 14.8635 4.18434 14.9699 4.22382 15.0671C4.2633 15.1644 4.32923 15.2486 4.41415 15.3103C4.49906 15.3719 4.59956 15.4086 4.70424 15.4161C4.80892 15.4235 4.9136 15.4015 5.00641 15.3525L8.9984 13.2537L12.9904 15.3525C13.0994 15.4105 13.2259 15.4298 13.3472 15.4088C13.6531 15.356 13.8588 15.066 13.806 14.7601L13.0431 10.3146L16.2722 7.16637C16.3601 7.08024 16.4181 6.96774 16.4357 6.84469C16.4832 6.53707 16.2687 6.25231 15.9611 6.2066Z" fill="#FFC000"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M15.9611 6.2066L11.498 5.55797L9.50289 1.51325C9.4484 1.4025 9.35875 1.31285 9.24801 1.25836C8.97028 1.12125 8.63278 1.23551 8.49391 1.51325L6.49879 5.55797L2.03571 6.2066C1.91266 6.22418 1.80016 6.28219 1.71403 6.37008C1.6099 6.47711 1.55252 6.6211 1.55449 6.77041C1.55647 6.91972 1.61764 7.06214 1.72457 7.16637L4.95367 10.3146L4.19078 14.7601C4.17289 14.8635 4.18434 14.9699 4.22382 15.0671C4.2633 15.1644 4.32923 15.2486 4.41415 15.3103C4.49906 15.3719 4.59956 15.4086 4.70424 15.4161C4.80892 15.4235 4.9136 15.4015 5.00641 15.3525L8.9984 13.2537L12.9904 15.3525C13.0994 15.4105 13.2259 15.4298 13.3472 15.4088C13.6531 15.356 13.8588 15.066 13.806 14.7601L13.0431 10.3146L16.2722 7.16637C16.3601 7.08024 16.4181 6.96774 16.4357 6.84469C16.4832 6.53707 16.2687 6.25231 15.9611 6.2066Z" fill="#FFC000"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M15.9611 6.2066L11.498 5.55797L9.50289 1.51325C9.4484 1.4025 9.35875 1.31285 9.24801 1.25836C8.97028 1.12125 8.63278 1.23551 8.49391 1.51325L6.49879 5.55797L2.03571 6.2066C1.91266 6.22418 1.80016 6.28219 1.71403 6.37008C1.6099 6.47711 1.55252 6.6211 1.55449 6.77041C1.55647 6.91972 1.61764 7.06214 1.72457 7.16637L4.95367 10.3146L4.19078 14.7601C4.17289 14.8635 4.18434 14.9699 4.22382 15.0671C4.2633 15.1644 4.32923 15.2486 4.41415 15.3103C4.49906 15.3719 4.59956 15.4086 4.70424 15.4161C4.80892 15.4235 4.9136 15.4015 5.00641 15.3525L8.9984 13.2537L12.9904 15.3525C13.0994 15.4105 13.2259 15.4298 13.3472 15.4088C13.6531 15.356 13.8588 15.066 13.806 14.7601L13.0431 10.3146L16.2722 7.16637C16.3601 7.08024 16.4181 6.96774 16.4357 6.84469C16.4832 6.53707 16.2687 6.25231 15.9611 6.2066Z" fill="#FFC000"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M15.9611 6.2066L11.498 5.55797L9.50289 1.51325C9.4484 1.4025 9.35875 1.31285 9.24801 1.25836C8.97028 1.12125 8.63278 1.23551 8.49391 1.51325L6.49879 5.55797L2.03571 6.2066C1.91266 6.22418 1.80016 6.28219 1.71403 6.37008C1.6099 6.47711 1.55252 6.6211 1.55449 6.77041C1.55647 6.91972 1.61764 7.06214 1.72457 7.16637L4.95367 10.3146L4.19078 14.7601C4.17289 14.8635 4.18434 14.9699 4.22382 15.0671C4.2633 15.1644 4.32923 15.2486 4.41415 15.3103C4.49906 15.3719 4.59956 15.4086 4.70424 15.4161C4.80892 15.4235 4.9136 15.4015 5.00641 15.3525L8.9984 13.2537L12.9904 15.3525C13.0994 15.4105 13.2259 15.4298 13.3472 15.4088C13.6531 15.356 13.8588 15.066 13.806 14.7601L13.0431 10.3146L16.2722 7.16637C16.3601 7.08024 16.4181 6.96774 16.4357 6.84469C16.4832 6.53707 16.2687 6.25231 15.9611 6.2066Z" fill="#FFC000"/>
                                </svg>
                            </div>
                            <div className='flex gap-[12px]'>
                                <img className='w-[16px] h-[16px]' src={ BubbleBlue } alt="bubble_blue" />
                                <span className='stock'>12 left in Stock</span>
                            </div>
                            <div>
                                <p className='description hidden md:block'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='description text-center block md:hidden'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <div className='flex gap-[12px]'>
                            <img className='w-[16px] h-[16px] md:w-[22px] md:h-[22px]' src={ CheckBlue } alt="check_blue" />
                            <span className='text-[12px] md:text-[16px]'>Negative Ion Technology may <strong>help with allergens</strong></span>
                        </div>
                        <div className='flex gap-[12px]'>
                            <img className='w-[16px] h-[16px] md:w-[22px] md:h-[22px]' src={ CheckBlue } alt="check_blue" />
                            <span className='text-[12px] md:text-[16px]'>Designed for <strong>air rejuvenation</strong></span>
                        </div>
                        <div className='flex gap-[12px]'>
                            <img className='w-[16px] h-[16px] md:w-[22px] md:h-[22px]' src={ CheckBlue } alt="check_blue" />
                            <span className='text-[12px] md:text-[16px]'><strong>Perfect for every room</strong> in all types of places</span>
                        </div>
                    </div>
                    <div className='h-[64px] md:w-[542px] md:h-[56px] bg-blue-100 py-[12px] px-[16px] rounded-[10px]'>
                        <div className='flex items-center gap-[16px]'>
                            <img src={ Percentage } alt="percentage" />
                            <p className='saving text-[14px] md:text-[16px]'>Save <span className='lightblue'>53%</span> and get <span className='lightblue'>6 extra Clarifision</span> for only <span className='lightblue'>$14 Each</span>.</p>
                        </div>
                    </div>
                    <div className='flex gap-[12px]'>
                        <div className='flex gap-[19.76px] justify-center items-center w-[542px] h-[59px] px-[44px] py-[16px] rounded-[50px] bg-[#59AE43] cursor-pointer'>
                            <p className='text_button text-[14px] md:text-[20px]'>Yes - Claim my discount</p>
                            <img className='w-[12px] h-[12px] md:w-[18px] md:h-[18px]' src={ Arrow } alt="arrow" />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:justify-center items-center gap-[10px] md:gap-[16px] md:w-[542px] h-[71px] md:h-[32px] px-[16px] py-[8px] border-[1px] border-[#CFCFCF] rounded-[4px]'>
                        <div className='flex items-center gap-[8px] md:gap-[12px]'>
                            <span className='free text-[10px] md:text-[12px]'>Free Shipping</span>
                            <div className='border-[1px] border-[#CFCFCF] w-[1px] h-[16px]'></div>
                            <img className='w-[12px] h-[12px]' src={ Lock } alt="lock" />
                            <span className='secure text-[10px] md:text-[12px]'>Secure 256-bit SSL encryption</span>
                            <div className='border-[1px] border-[#CFCFCF] w-[1px] h-[16px] hidden md:block'></div>
                        </div>
                        <hr className="border-[1px] border-[#CFCFCF] w-full block md:hidden" />
                        <div className='flex'>
                            <img src={ Visa } alt="visa" />
                            <img src={ ShopPay } alt="shop_pay" />
                            <img src={ Paypal } alt="paypal" />
                            <img src={ Mastercard } alt="mastercard" />
                            <img src={ Gpay } alt="gpay" />
                            <img src={ ApplePay } alt="apple_pay" />
                            <img src={ Amex } alt="amex" /> 
                        </div>
                    </div>
                    <div className='text-center'>
                        <span className='dont_want text-[12px] md:text-[18px]'>No thanks, I don’t want this.</span>
                    </div>
                    <div className='flex gap-[16px]'>
                        <img className='w-[48px] h-[48px] md:w-[88px] md:h-[88px]' src={ Guarantee } alt="guarantee" />
                        <p className='text_guarantee text-[12px] md:text-[16px]'>If you are not completely thrilled with your Clarifion - We have a <strong>30 day satisfaction guarantee</strong>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
                    </div>
                </div>
                <div className='md:flex flex-col gap-[18px] p-[24px] hidden md:visible'>
                    <div className='flex items-center gap-[13px]'>
                        <img className='w-[48px] h-[48px]' src={ VerifiedCustomer } alt="verified_customer" />
                        <div className='flex flex-col gap-[7.35px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="79" height="13" viewBox="0 0 79 13" fill="none">
                                <path d="M2.28466 12.2974L3.67338 7.75793L0 5.12982H4.53946L5.97297 0.35144L7.40649 5.12982H11.9459L8.27257 7.75793L9.66128 12.2974L5.97297 9.49009L2.28466 12.2974Z" fill="#FBBC04"/>
                                <path d="M18.8257 12.2975L20.2144 7.75805L16.5411 5.12994H21.0805L22.514 0.351562L23.9475 5.12994H28.487L24.8136 7.75805L26.2023 12.2975L22.514 9.49021L18.8257 12.2975Z" fill="#FBBC04"/>
                                <path d="M35.3669 12.2975L36.7556 7.75805L33.0823 5.12994H37.6217L39.0552 0.351562L40.4887 5.12994H45.0282L41.3548 7.75805L42.7435 12.2975L39.0552 9.49021L35.3669 12.2975Z" fill="#FBBC04"/>
                                <path d="M51.9061 12.2975L53.2948 7.75805L49.6214 5.12994H54.1609L55.5944 0.351562L57.0279 5.12994H61.5674L57.894 7.75805L59.2827 12.2975L55.5944 9.49021L51.9061 12.2975Z" fill="#FBBC04"/>
                                <path d="M68.4473 12.2975L69.836 7.75805L66.1626 5.12994H70.7021L72.1356 0.351562L73.5691 5.12994H78.1086L74.4352 7.75805L75.8239 12.2975L72.1356 9.49021L68.4473 12.2975Z" fill="#FBBC04"/>
                            </svg>
                            <div className='flex items-center gap-[10px]'>
                                <span className='user_name'>Ken T.</span>
                                <img className='w-[16px] h-[16px]' src={ CheckGreen } alt="check_green" />
                                <div className='flex items-center'>
                                    <span className='verified_customer'>Verified Customer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='user_commit'>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
                    </div>
                </div>
            </section>
        </>
    )
}
