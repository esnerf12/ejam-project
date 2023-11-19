import ClarifionLogo from '../images/Clarifion_Logo_1.png'
import McAffeLogo from '../images/McAfee_Secure.png'
import NortonLogo from '../images/norton-antivirus-logo_1.png'
import './Navbar.css'

export function Navbar () {
    return (
        <>
            <nav className='grid grid-cols-2 h-[96px] md:px-[127px] py-[20px] md:py-[30px]'>
                <div className='flex justify-center items-center md:block'>
                    <img className='w-[106.67] h-[20px] md:w-[192] md:h-[36px]' src={ ClarifionLogo } alt="clarifion-logo" />
                </div>
                <div className='flex justify-center md:justify-end items-center gap-[32px]'>
                    <img className='w-[44px] h-[16px] md:w-[88px] md:h-[32px]' src={ McAffeLogo } alt="macaffe-logo" />
                    <img className='w-[41px] h-[16px] md:w-[82px] md:h-[32px]' src={ NortonLogo } alt="norton-logo" />
                </div>
            </nav>
        </>
    )
}
