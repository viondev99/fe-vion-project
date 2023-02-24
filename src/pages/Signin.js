import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useAuth } from '../hooks/useAuth'

function Signin() {
  const auth = useAuth()
  const [userInfo, setUserInfo] = useState()
  const navigate = useNavigate()

  const handleOnChange = (name) => (e) => {
    setUserInfo({
      ...userInfo,
      [name]: e.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { username, pass } = userInfo
    const data = {
      user: {
        email: username,
        pass,
      },
    }
    auth.signin(data, () => navigate('/'))
    if (!auth.user) toast('Email không tồn tại, vui lòng đăng ký')
    else toast(`Chào mừng ${username}`)
  }

  useEffect(() => {
    if (!!auth.user) {
      navigate('/')
    }
  }, [auth.user, navigate, userInfo])

  return (
    <>
      <div className="mt-10 mb-10 text-primary">
        <form className="box-border border-2 border-orange-200 w-3/5 ml-auto mr-auto">
          <div className="mt-7">
            <div className="text-center text-2xl font-bold">
              <p>Điền Thông Tin Đăng Nhập</p>
            </div>
          </div>
          <div className="box-border border-2 border-orange-200 w-3/6 h-12 pt-2 pb-2 pl-2 ml-auto mr-auto mt-10">
            <label>
              <input
                onChange={handleOnChange('username')}
                name="username"
                className="w-full outline-none text-xl"
                type="text"
                placeholder="Tên Đăng Nhập..."
              />
            </label>
          </div>
          <div className="box-border border-2 w-3/6 border-orange-200 h-12 pt-2 pb-2 pl-2 ml-auto mr-auto mt-10">
            <label>
              <input
                onChange={handleOnChange('pass')}
                name="password"
                className="w-full outline-none text-xl"
                type="password"
                placeholder="Mật Khẩu..."
              />
            </label>
          </div>

          <div className="text-center mt-5">
            <p>Quên mật khẩu????????</p>
          </div>

          <div className="w-40 ml-auto mr-auto mt-5 mb-5">
            <button
              onClick={handleSubmit}
              className="box-border border-2 border-orange-200 w-36 h-11 font-bold text-xl hover:bg-orange-600 hover:text-white"
            >
              Đăng Nhập
            </button>
            {/* tai sao khi click lai bi reload lai trang */}
          </div>

          <div className="text-center mb-5 underline">
            <Link to="/signup">Bạn chưa có tài khoản? Đăng ký ngay</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signin
