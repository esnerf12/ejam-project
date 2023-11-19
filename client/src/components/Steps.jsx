import CheckIcon from '../images/CheckIcon.png'
import ThreeIcon from '../images/three.png'
import FourIcon from '../images/four.png'
import { useScreenSize } from '../hooks/useScreenSize.js'
import './Steps.css'

export function Steps () {
    const { width } = useScreenSize()
    const mediaScreen = width > 1090

    const stepOne = mediaScreen ? "Step 1 : Cart review" : "Cart Review"
    const stepTwo = mediaScreen ? "Step 2 : Checkout" : "Checkout"
    const stepThree = mediaScreen ? "Step 3 : Special Offer" : "Special Offer"
    const stepFour = mediaScreen ? "Step 4 : Confirmation" : "Confirmation"

    return (
        <>
            <section className='steps flex justify-center text-center gap-[18px] md:gap-[43px] md:px-[128px] py-[24px] md:py-[50px]'>
                <div className='flex flex-col md:flex-row justify-center items-center gap-[8px] md:gap-[20px]'>
                    <img className='w-[20px] h-[20px] md:w-[40px] md:h-[40px]' src={ CheckIcon } alt="check-icon" />
                    <span className='text-[12px] md:text-[20px]'>{ stepOne }</span>
                </div>
                <div className='flex flex-col md:flex-row  justify-center items-center gap-[8px] md:gap-[20px]'>
                    <img className='w-[20px] h-[20px] md:w-[40px] md:h-[40px]' src={ CheckIcon } alt="check-icon" />
                    <span className='text-[12px] md:text-[20px]'>{ stepTwo }</span>
                </div>
                <div className='flex flex-col md:flex-row  justify-center items-center gap-[8px] md:gap-[20px]'>
                    <img className='w-[20px] h-[20px] md:w-[40px] md:h-[40px]' src={ ThreeIcon } alt="check-icon" />
                    <span className='text-[12px] md:text-[20px]'><strong>{ stepThree }</strong></span>
                </div>
                <div className='flex flex-col md:flex-row  justify-center items-center gap-[8px] md:gap-[20px]'>
                    <img className='w-[20px] h-[20px] md:w-[40px] md:h-[40px]' src={ FourIcon } alt="check-icon" />
                    <span className='text-[12px] md:text-[20px]'>{ stepFour }</span>
                </div>
            </section>
        </>
    )
}
