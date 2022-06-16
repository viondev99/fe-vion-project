/* eslint-disable jsx-a11y/iframe-has-title */
// import ScrollToTop from "react-scroll-to-top";

import Cre from '../assets/icon/copyright.png'
import Fb from '../assets/icon/fb-bot.png'
import Twitter from '../assets/icon/twitter.png'
import Youtube from '../assets/icon/youtube.png'
import Linkedin from '../assets/icon/linkedin.png'
import Phone from '../assets/icon/phone.png'
import Logo from '../assets/img/Nemo-logo.png'
import LocationIcon from '../assets/icon/location-bot.png'

export function Footer() {
    return (
        <div className="border-t-2 border-orange-600 bg-slate-900 w-full text-primary">
            <div className='max-w-screen-2xl ml-auto mr-auto pt-10 pb-10 pl-2 pr-2'>
                <div className='text-primary'>
                    <div className="font-bold text-5xl text-center">
                        <h2>Vion Aquarium</h2>
                    </div>
                    <div className='flex mt-3 content-center items-center justify-center'>
                        <div className='pr-2'>
                            <img src={Cre} alt='copyright'/>
                        </div>
                        <div className='font-bold text-base'>
                            <p>Bản quyền thuộc về Vion Aquarium</p>
                        </div>
                    </div>
                </div>

                <div className='w-full flex pt-10'>
                    <div className='w-1/3 flex-1 text-center'>
                        <div className='text-2xl font-bold'>
                            <p>Theo dõi chúng tôi tại</p>
                        </div>
                        <div className='flex mt-3 content-center items-center justify-center'>
                            <div className='w-1/6 content-center items-center justify-center'>
                                <img src={Fb} alt=''width='30px' className='ml-auto mr-auto'/>
                            </div>
                            <div className='w-1/6 content-center items-center justify-center'>
                                <img src={Youtube} alt=''width='30px' className='ml-auto mr-auto'/>
                            </div>
                            <div className='w-1/6 content-center items-center justify-center'>
                                <img src={Twitter} alt=''width='30px' className='ml-auto mr-auto'/>
                            </div>
                            <div className='w-1/6 content-center items-center justify-center'>
                                <img src={Linkedin} alt=''width='30px' className='ml-auto mr-auto'/>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <div className='font-bold text-2xl'>
                                <p>Điện thoại liên hệ</p>
                            </div>
                            <div className='flex pt-3 content-center items-center justify-center'>
                                <div>
                                    <img src={Phone} alt='phone' width='50px'/>
                                </div>
                                <div className='ml-5 font-bold'>
                                    <div>
                                        <p>0902 208 900</p>
                                    </div>
                                    <div>
                                        <p>0988 865 745</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-1/3 flex-1'>
                        <div className='flex-none content-center items-center justify-center'>
                            <img src={Logo} alt='' width='90px' className='ml-auto mr-auto'/>
                        </div>
                        <div className='text-2xl font-bold text-center pt-6'>
                                <p className=''>Địa chỉ cửa hàng</p>
                            </div>
                        <div className='pt-3 w-full flex content-center items-center justify-center'>
                            <div className='mb-auto mt-auto'>
                                {/* <ScrollToTop smooth color="#6f00ff"/> */}
                                <img src={LocationIcon} alt='' width='60px'/>
                            </div>
                            <div className='text-lg font-bold text-center'>
                                <p className=''>số 18, đường Thân Nhân Trung, thị trấn Sóc Sơn, Hà Nội</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-1/3 flex-1'>
                        <div className='text-2xl text-center font-bold'>
                            <p>Địa chỉ trên bản đồ</p>
                        </div>
                        <div className='pt-10 content-center items-center justify-center'>
                            <iframe
                                className='content-center items-center justify-center w-8/12 ml-auto mr-auto'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14873.718594274687!2d105.8438625756841!3d21.25445397223845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135036cccd19b77%3A0x56d3e66202efb9d7!2zdHQuIFPDs2MgU8ahbiwgU8OzYyBTxqFuLCBIYW5vaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1653387577504!5m2!1sen!2s"
                                // width=""
                                height="150"
                                style={{border:0}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}