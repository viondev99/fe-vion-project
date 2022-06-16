import { Link } from 'react-router-dom'

import { IteminCart } from './ItemInCart'

import { useProductCtx } from '../hooks/useProduct'

function Cart() {
  const productCtx = useProductCtx()
  const listItemInCart = productCtx.productInCart
  return (
    <>
      <div className="mt-10 mb-10 w-full text-primary">
        <div className="text-center font-bold text-2xl">
          <h1>Giỏ Hàng Của Bạn</h1>
        </div>

        {!listItemInCart.length?
          <div className="mt-5 h-20 w-10/12 ml-auto mr-auto border-2 rounded-md border-orange-100">
            <div className='w-4/12 mr-auto ml-auto mt-auto mb-auto pt-6 pb-6 text-center font-bold'>
              <p className=''>Bạn chưa thêm sản phẩm nào</p>
            </div>
          </div>

            :
        
        <div className="mt-5 w-10/12 ml-auto mr-auto border-2 rounded-md border-orange-100">
          <div className='w-full h-9 flex border-b-2 border-orange-100 pl-5 pr-5 relative'>
            <div className='absolute left-5 w-5/12 pt-1 pb-1'>
              <p className='text-center font-bold'>Sản Phẩm</p>
            </div>

            <div className=''>

            </div>

            <div className=''>

            </div>

            <div className=''>
              
            </div>
          </div>
          <ul>
            {listItemInCart.map(item => {
              return(
                <IteminCart key={item.id} product={item} />
              )})}
          </ul>
        </div>
        }

        <div className="mt-5 w-10/12 ml-auto mr-auto">
          <div className="w-5/12 ml-auto mr-auto font-bold p-3 text-3xl text-center m-3">
            <p>Tổng tiền: {productCtx.totalMoney.toLocaleString()} ₫</p>
          </div>

          <div className="w-3/12 ml-auto mr-auto">
            <Link to='/pay'>
              <button
                className="w-full border-2 rounded-md text-xl border-orange-600 h-16 text-white font-bold bg-orange-600 hover:bg-white hover:text-orange-600"
                
              >
                Tiến Hành Thanh Toán
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
