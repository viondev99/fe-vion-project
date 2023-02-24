import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useAuth } from 'hooks/useAuth'
import { useProductCtx } from 'hooks/useProduct'

export function ProfileUser() {
  const auth = useAuth()
  const productCtx = useProductCtx()

  const [state, _setState] = useState({
    isUpdate: false,
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
  })
  const setState = (data) => {
    _setState({
      ...state,
      ...data,
    })
  }

  useEffect(() => {
    _setState(auth.user)
  }, [auth?.user])

  const handleOnChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
    })
  }

  const handleEdit = () => {
    setState({
      isUpdate: true,
    })
  }

  const handleUpdate = async (event) => {
    event.preventDefault()
    auth.changeProfile(state, () => {
      toast('Cập Nhật Thành Công!')
      auth.getUserInfor()
    })
  }

  function signout() {
    auth.signout()
    productCtx.removeFromCart()
  }

  return (
    <>
      <div className="w-full">
        <div className="pt-10 pb-10 text-primary max-w-screen-2xl ml-auto mr-auto">
          <div className="text-center font-bold text-2xl">
            <h1>Thông Tin Cá Nhân</h1>
          </div>

          <div className="text-center font-bold text-2xl">
            <p>Bạn đang đăng nhập với {auth.user.email}</p>
          </div>

          <div className="max-w-screen-2xl relative">
            <table className="w-8/12 ml-auto mr-auto mt-5 border-2 border-orange-200">
              <thead>
                <tr className="">
                  <th className="w-2/12 text-center border-2 border-orange-200">
                    <div className="m-5 font-bold text-xl">Họ</div>
                  </th>
                  <td className="border-2 border-orange-200">
                    <label>
                      <input
                        className="w-full text-xl h-16 pl-5 outline-none"
                        type="text"
                        value={state.firstName}
                        disabled={!state.isUpdate}
                        onChange={handleOnChange('firstName')}
                      />
                    </label>
                  </td>
                </tr>

                <tr>
                  <th className="w-2/12 text-center border-2 border-orange-200">
                    <div className="m-5 font-bold text-xl">Tên</div>
                  </th>
                  <td className="border-2 border-orange-200">
                    <label>
                      <input
                        className="w-full h-16 text-xl pl-5 outline-none"
                        type="text"
                        value={state.lastName}
                        disabled={!state.isUpdate}
                        onChange={handleOnChange('lastName')}
                      />
                    </label>
                  </td>
                </tr>

                <tr>
                  <th className="w-2/12 text-center border-2 border-orange-200">
                    <div className="m-5 font-bold text-xl">Địa chỉ 1</div>
                  </th>
                  <td className="border-2 border-orange-200">
                    <label>
                      <input
                        className="w-full text-xl h-16 pl-5 outline-none"
                        type="text"
                        value={state.address1}
                        disabled={!state.isUpdate}
                        onChange={handleOnChange('address1')}
                      />
                    </label>
                  </td>
                </tr>

                <tr>
                  <th className="w-2/12 text-center border-2 border-orange-200">
                    <div className="m-5 text-xl font-bold">Địa chỉ 2</div>
                  </th>
                  <td className="border-2 border-orange-200">
                    <label>
                      <input
                        className="w-full h-16 text-xl pl-5 outline-none"
                        type="text"
                        value={state.address2}
                        disabled={!state.isUpdate}
                        onChange={handleOnChange('address2')}
                      />
                    </label>
                  </td>
                </tr>
              </thead>
            </table>

            <div className="relative ml-auto mr-auto w-8/12 mt-10">
              <div className="w-32 ml-auto mr-auto">
                {state.isUpdate ? (
                  <button
                    className="w-full h-10 font-bold border-2 border-orange-600 hover:bg-orange-600 hover:text-white"
                    onClick={handleUpdate}
                  >
                    Cập Nhật
                  </button>
                ) : (
                  <button
                    className="w-full h-10 font-bold border-2 border-orange-600 hover:bg-orange-600 hover:text-white"
                    onClick={handleEdit}
                  >
                    Chỉnh Sửa
                  </button>
                )}
              </div>

              <Link to="/">
                <div className="absolute w-32 right-0 bottom-0.5">
                  <button
                    className="w-full h-10 font-bold border-2 border-orange-600 text-white bg-orange-600 hover:bg-white hover:text-orange-600"
                    onClick={signout}
                  >
                    Đăng Xuất
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
