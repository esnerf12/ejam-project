import ClarifionLogo from '../images/Clarifion_Logo_1.png'
import McAffeLogo from '../images/McAfee_Secure.png'
import NortonLogo from '../images/norton-antivirus-logo_1.png'
import './Navbar.css'

export function Navbar () {
    return (
        <>
            <nav className='grid grid-cols-2 h-[96px] px-[127px] py-[30px]'>
                <div>
                    <img className='w-[192] h-[36px]' src={ ClarifionLogo } alt="clarifion-logo" />
                </div>
                <div className='flex justify-end items-center gap-[32px]'>
                    <img className='w-[88] h-[32px]' src={ McAffeLogo } alt="macaffe-logo" />
                    <img className='w-[82] h-[32px]' src={ NortonLogo } alt="norton-logo" />
                </div>
            </nav>
        </>
    )
}
