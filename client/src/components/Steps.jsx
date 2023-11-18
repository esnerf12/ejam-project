import CheckIcon from '../images/CheckIcon.png'
import ThreeIcon from '../images/three.png'
import FourIcon from '../images/four.png'
import './Steps.css'

export function Steps () {
    return (
        <>
            <section className='steps flex justify-center gap-[43px] px-[128px] py-[50px]'>
                <div className='flex justify-center items-center gap-[20px]'>
                    <img className='w-[40px] h-[40px]' src={ CheckIcon } alt="check-icon" />
                    <span>Step 1 : Cart review</span>
                </div>
                <div className='flex justify-center items-center gap-[20px]'>
                    <img className='w-[40px] h-[40px]' src={ CheckIcon } alt="check-icon" />
                    <span>Step 2 : Checkout</span>
                </div>
                <div className='flex justify-center items-center gap-[20px]'>
                    <img className='w-[40px] h-[40px]' src={ ThreeIcon } alt="check-icon" />
                    <span><strong>Step 3 : Special Offer</strong></span>
                </div>
                <div className='flex justify-center items-center gap-[20px]'>
                    <img className='w-[40px] h-[40px]' src={ FourIcon } alt="check-icon" />
                    <span>Step 4 : Confirmation</span>
                </div>
            </section>
        </>
    )
}
