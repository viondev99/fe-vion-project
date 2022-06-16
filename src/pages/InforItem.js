import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import Cart from 'assets/icon/cart.png'

import { useProductCtx } from '../hooks/useProduct'

export function InforItem() {

    const auth = useAuth()
    const {id} = useParams()
    const productCtx = useProductCtx()

    useEffect(() => {
        productCtx.getProductById(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    function addToCart() {
        productCtx.addToCart(productCtx.selectedItem)
        toast("Đã thêm vào giỏ hàng!")
    }

    return (
        <>
        <section>
            <div className="pt-10 pb-10 w-full text-primary">
                <div className="text-center font-bold text-4xl">
                    <p>Thông Tin Sản Phẩm</p>
                </div>

                <div className="flex mt-16 mb-16" id='form-img'>
                    <div className="flex-1 border-r-2">
                        <div className="border-2 border-orange-200 pt-10 pb-10 w-10/12 ml-auto mr-auto">
                            <img src={productCtx.selectedItem.photos} alt='' width='400' className="block ml-auto mr-auto h-full"/>
                        </div>
                    </div>

                    <div className="w-5/12 flex-1" id='form-content'>
                        <div className="w-10/12 ml-auto mr-auto">
                            <div className="font-bold text-2xl">
                                <p>Tên Sản Phẩm: {productCtx.selectedItem.name}</p>
                            </div>
                            <div className="">
                                <p>Loại: {productCtx.selectedItem.type}</p>
                            </div>
                            <div className="mt-5 border-b-slate-600 border-b-2">
                                <div className="">
                                    <p>
                                        Mô tả sản phẩm:
                                    </p>
                                </div>
                                <div className="w-full h-72 border-2 mb-5">
                                   <p className="break-words m-3">{productCtx.selectedItem.description}</p>
                                </div>
                            </div>
                            <div className="flex mt-5 text-2xl">
                                <div className="font-bold">
                                    <p>Giá: {Number(productCtx.selectedItem.price).toLocaleString()} ₫</p>
                                </div>
                            </div>

                            <div className="mt-7">
                                {
                                    auth.user?.access_token?
                                    <button
                                        className="border-2 border-orange-600 h-12 w-6/12 active:bg-white active:text-orange-600 font-bold bg-orange-600 text-white text-xl"
                                        onClick={addToCart}
                                    >
                                        <div className="flex">
                                            <img src={Cart} alt='' className="h-8 block ml-auto mr-auto"/>
                                            <div className="w-8/12 ml-auto mr-auto">
                                                Thêm vào giỏ hàng
                                            </div>
                                        </div>
                                    </button>
                                    :
                                    <button
                                        className="border-2 border-orange-600 h-12 w-6/12 active:bg-white active:text-orange-600 font-bold bg-orange-600 text-white text-xl"
                                    >
                                        <Link to='/signin'>
                                            <div className="flex">
                                                <img src={Cart} alt='' className="h-8 block ml-auto mr-auto"/>
                                                <div className="w-8/12 ml-auto mr-auto">
                                                    Thêm vào giỏ hàng
                                                </div>
                                            </div>
                                        </Link>
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}