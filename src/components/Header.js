/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import { ReactComponent as UserSVG } from '../assets/icon/user.svg'
import { ReactComponent as CartSVG } from '../assets/icon/cart.svg'
import SearchIcon from '../assets/icon/search.png'
import ClockIcon from 'assets/icon/clock.png'
import LocationIcon from 'assets/icon/location.png'
import FbIcon from 'assets/icon/facebook.png'



import Logo from '../assets/img/Nemo-logo.png'

export function Header() {
  let auth = useAuth()

  return (
    <div className="w-full">
      <div className='w-full bg-orange-400'>
        <div className="flex max-w-screen-2xl ml-auto mr-auto h-7 bg-orange-400 text-white relative">
          <div className="w-auto h-full items-center absolute left-2">
            <p className="h-full items-center">Vion Aquarium - Thế Giới Thủy Sinh Của Bạn</p>
          </div>
          
          <div className='absolute w-auto h-full items-center right-2'>
            <div className='flex h-full'>
              <div className='w-40 mr-7 text-center h-full flex border-r-2 border-white'>
                <div className='mt-0.5 w-7 h-full'>
                  <img src={ClockIcon} alt='' className='w-6 h-6'/>
                </div>
                <div className='h-full'>8 a.m - 7 p.m</div>
              </div>

              <div className='w-48 mr-9 text-center h-full flex border-r-2 border-white'>
                <div className='mt-0.5 w-7 h-full'>
                  <a href='https://goo.gl/maps/FZTLeHeWefuafKdK6' rel="noppener noreferrer" target='_blank'>
                    <img src={LocationIcon} alt=''/>
                  </a>
                </div>
                <div className='h-full'>
                  <a href='https://goo.gl/maps/FZTLeHeWefuafKdK6' rel="noppener noreferrer" target='_blank'>
                    Địa chỉ cửa hàng
                  </a>
                </div>
              </div>

              <div className='w-44 text-right h-full flex'>
                <div className='mt-0.5 w-7 h-full'>
                  <a href='https://facebook.com/vion.aquarium' rel="noopener noreferrer" target='_blank'>
                    <img src={FbIcon} alt=''/>
                  </a>
                </div>
                <div className='h-full w-full mt-0.5'>
                  <a href='https://facebook.com/vion.aquarium' rel="noopener noreferrer" target='_blank'>
                    facebook cửa hàng
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-40 w-full relative pt-7 pb-7">
        <div className='absolute bg-banner-top opacity-40 bg-right-top p-0 m-0 bg-repeat-x top-0 left-0 h-full right-0 bottom-0'></div>
        <div className='flex max-w-screen-2xl h-full ml-auto mr-auto relative text-primary'>
          <div className='absolute flex left-2'>
            <div className='flex-none'>
              <Link to='/'><img src={Logo} alt="logo" width="80px" height="80px" className='pt-2.5 pb-2.5'/></Link>
            </div>

            <div className="flex-none text-6xl h-auto font-bold">
              <h1 className="pt-4 pb-4"><Link to='/'>Vion Aquarium</Link></h1>
            </div>
          </div>

          <div className='flex absolute right-2 h-full'>
            <div className='flex h-full'>
              <div className='mt-auto mb-auto'>
                {
                  <div className="flex-none w-60 font-bold underline text-right mr-2">
                    {auth?.isUserLoggedIn ? (
                      <Link to="/profile-user">{auth.user.email}</Link>
                    ) : (
                      <p>
                        <Link to="/signin">Đăng Nhập</Link>
                      </p>
                    )}
                  </div>
                }
              </div>

              <div className="mt-auto mb-auto">
                {!auth?.user?.id ? (
                  <Link to="/signin">
                    <UserSVG className='w-10 h-10'/>
                  </Link>
                ) : (
                  <Link to="/profile-user">
                    <UserSVG className='w-10 h-10'/>
                  </Link>
                )}
              </div>
            </div>

            <div className='flex h-full ml-20'>
              <div className="flex-none mt-auto mb-auto w-auto font-bold underline">
                <Link to="/cart">
                  <p>Giỏ Hàng</p>
                </Link>
              </div>

              <div className="flex-none mt-auto mb-auto w-10 h-10">
                <Link to="/cart">
                  <CartSVG className='w-10 h-10'/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-10 w-full bg-orange-600 text-white">
        <div className='flex max-w-screen-2xl h-full ml-auto mr-auto'>
          <div className="flex-1 h-full w-full hover:bg-primary-dark hover:text-white pt-2 pb-2">
            <Link to="/">
              <p className='text-center font-bold'>
                Trang Chủ
              </p>
            </Link>
          </div>

          <div className="flex-1 h-full w-full hover:bg-primary-dark hover:text-white pt-2 pb-2">
            <Link to="/list-item">
              <p className='text-center font-bold'>Danh Mục Sản Phẩm</p>
            </Link>
          </div>

          <div className="flex-1 h-full w-full hover:bg-primary-dark hover:text-white pt-2 pb-2">
              <Link to='/list-post'>
                <p className='text-center font-bold'>Kiến Thức Thủy Sinh</p>
              </Link>
          </div>

          <div className="flex-1 h-full w-full active:text-white pt-1.5 pb-1.5">
            <div className="flex w-60 ml-auto mr-auto h-full">
              <div className="flex-1 h-full">
                <label className="h-full">
                  <div className="ml-1 flex h-full bg-white rounded-md relative">
                    <input className='pl-1 outline-none rounded-md w-10/12 text-primary' placeholder="Nhập từ khóa?" />
                    <button className='ml-3 absolute right-1 pt-0.5 pb-0.5'>
                      <img src={SearchIcon} alt='' className=''/>
                    </button>
                  </div>
                </label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
