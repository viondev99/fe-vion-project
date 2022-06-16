import React from "react"
import { Link } from "react-router-dom"

import Becnm from '../assets/img/be-cnm.png'
import Belocvach from '../assets/img/belocvach.png'
import Begiaukeo from '../assets/img/begiaukeo.png'
import Bebancan from '../assets/img/bebancan.png'
import Hokoi from '../assets/img/hokoi.png'
import Vuonnhat from '../assets/img/vuonnhat.jpg'

const data = [
    {id: 1, name: 'Bể Công Nghệ Mới', describle: 'Hệ thống dẫn nước kín qua hộp kỹ thuật xuống bể lọc và bơm trở lại bể tuần hoàn', price: 70000000, img: Becnm },
    {id: 2, name: 'Bể Lọc Vách', describle: 'Hệ thống dẫn nước kín qua vách ngăn sang hệ thống lọc ở ngay bên trong bể',price: 1800000, img: Belocvach },
    {id: 3, name: 'Bể Thủy Sinh Dán Giấu Keo', describle: 'Các đường keo được dán vừa khít với các cạnh của tấm kính giúp tăng thẩm mỹ', price: 500000, img: Begiaukeo },
    {id: 4, name: 'Bể Bán Cạn', describle: 'Kết hợp giữa các thành phần dưới nước và trên cạn để kiến tạo một tiểu cảnh', price: 3000000, img: Bebancan },
    {id: 5, name: 'Hồ Koi', describle: 'Một hồ chứa lớn với hệ thống lọc nước hiệu quả chuyên dụng khi nuôi cá koi', price: 150000000, img: Hokoi },
    {id: 6, name: 'Vườn Kiểu Nhật', describle: 'Cảnh quan trong khuôn viên sân vườn được thiết kế theo phong cách Nhật Bản', price: 400000000, img: Vuonnhat },

]

export function Section2() {
    return(
        <div className="max-w-screen-2xl ml-auto mr-auto text-primary pt-5 pb-16">
          <div className="text-center font-bold text-3xl mt-5">
            <p>Nhận Thi Công Các Hạng Mục Công Trình</p>
          </div>

          <div className="w-5/6 ml-auto mr-auto mt-10 flex flex-wrap">        
                    {
                        data.map(data => (       
                            <div key={data.id} className="w-96 ml-auto mr-auto mt-10 mb-5 border-2 bg-white overflow-hidden rounded-2xl hover:bg-primary hover:text-white">
                                <Link to='contruction' className="overflow-hidden">
                                    <div className="border-2 border-slate-200 rounded-t-2xl bg-white overflow-hidden transition ease-in-out delay-300 transform hover:-translate-y-1 hover:scale-110 duration-300">
                                        <img src={data.img} alt='' className="rounded-t-2xl h-56 w-full"/>
                                    </div>
                                </Link>

                                    <div className='w-full text-center font-bold text-xl border-b-2 border-orange-200 h-10 pt-1 pb-1'>
                                        <p className="break-words"><Link to='contruction'>{(data.name)}</Link></p>
                                    </div>
                                    <div className='w-full text-left font-bold text-lg h-28'>
                                        <div className="w-full pt-1 pb-1 pl-3 pr-3">
                                            <p className="break-words"><Link to='contruction'>{(data.describle)}</Link></p>
                                        </div>
                                        <div className="w-full pt-3 text-center font-normal text-sm border-t-2 border-orange-200">
                                            <p className="break-words"><Link to='contruction'>Design by Vion</Link></p>
                                        </div>
                                    </div>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}