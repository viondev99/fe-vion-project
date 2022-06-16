import { useEffect, useState } from "react";
import { Link, useNavigate,  } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from '../hooks/useAuth'

function Signin() {
    const auth = useAuth()
    const[userInfo, setUserInfo] = useState()
    const navigate = useNavigate()

    const handleOnChange = (name) => (e) => {
        setUserInfo({
            ...userInfo,
            [name]: e.target.value
        })
    }

    const handleSubmit = async (event) => { 
        event.preventDefault();
        const {username, pass} = userInfo
        const data = {user: {
            email: username, pass
        }};
        auth.signin(data, () => navigate('/'))
        toast(`Chào mừng ${username}`)

    }

    useEffect(() => {
        if(!!auth.user.access_token) {
            navigate('/')
        }
    }, [auth.user.access_token, navigate, userInfo])

    return (
        <>
        <div className="mt-10 mb-10 text-primary">

            <form className="box-border border-2 border-orange-200 w-3/5 ml-auto mr-auto">
                <div className="mt-7">
                    <div className="text-center text-2xl font-bold">
                        <p>Điền Thông Tin Đăng Nhập</p>
                    </div>
                </div>
                <div className="box-border border-2 w-96 ml-auto mr-auto mt-10">
                    <label>
                        <input
                            onChange={handleOnChange('username')} name='username' className="w-full" type='text' placeholder="Tên Đăng Nhập..."
                        />
                    </label>
                </div>
                <div className="box-border border-2 w-96 ml-auto mr-auto mt-10">
                    <label>
                        <input 
                           onChange={handleOnChange('pass')} name='password' className="w-full" type='password' placeholder="Mật Khẩu..."
                        />
                    </label>
                </div>

                <div className="text-center mt-5">
                    <p>Quên mật khẩu????????</p>
                </div>

                <div className="w-36 ml-auto mr-auto mt-5 mb-5">
                    <button 
                        onClick={handleSubmit}
                        className="box-border border-2 border-orange-200 w-36 hover:bg-orange-600 hover:text-white"
                    >
                            Đăng Nhập
                    </button>
                    {/* tai sao khi click lai bi reload lai trang */}
                </div>

                <div className="text-center mb-5 underline">
                    <Link to='/signup'>Bạn chưa có tài khoản? Đăng ký ngay</Link>
                </div>
            </form>
        </div>
        </>
    )
}

export default Signin;