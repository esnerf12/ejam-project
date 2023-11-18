import Lock from '../images/lock.png'
import './Footer.css'

export function Footer () {
    return (
        <>
            <footer className="footer grid grid-cols-2 bg-[#252F3D] h-[88px] px-[127px]">
                <div className='flex items-center gap-[16px]'>
                    <span className="copyright">Copyright (c) 2023</span>
                    <div className='border-[1px] border-[#FFF] w-[1px] h-[24px]'></div>
                    <span className='support'>Clarifionsupport@clarifion.com</span>
                </div>
                <div className='flex justify-end items-center gap-[16px]'>
                    <img className='w-[16px] h-[16px]' src={ Lock } alt="lock" />
                    <span className='secure'>Secure 256-bit SSL encryption</span>
                </div>
            </footer>
        </>
    )
}