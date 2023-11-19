import Lock from '../images/lock.png'
import './Footer.css'

export function Footer () {
    return (
        <>
            <footer className="footer flex flex-col gap-[16px] md:grid md:grid-cols-2 bg-[#252F3D] h-[88px] p-[20px] md:px-[127px]">
                <div className='flex justify-center md:justify-start items-center gap-[12px] md:gap-[16px]'>
                    <span className="copyright text-[12px] md:text-[16px]">Copyright (c) 2023</span>
                    <div className='border-[1px] border-[#FFF] w-[1px] h-[14px] md:h-[24px]'></div>
                    <span className='support text-[12px] md:text-[16px]'>Clarifionsupport@clarifion.com</span>
                </div>
                <div className='flex justify-center md:justify-end items-center gap-[16px]'>
                    <img className='w-[16px] h-[16px]' src={ Lock } alt="lock" />
                    <span className='secure-footer text-[12px] md:text-[16px]'>Secure 256-bit SSL encryption</span>
                </div>
            </footer>
        </>
    )
}