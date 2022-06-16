import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductCtx } from "hooks/useProduct";

export function Section1() {

    const productCtx = useProductCtx()

    useEffect(() => {
        productCtx.getListProduct()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return(
        <div className="max-w-screen-2xl ml-auto mr-auto text-primary">
            <div className="text-center font-bold text-3xl mt-5">
                <p>Các Sản Phẩm Nổi Bật</p>
            </div>

            <div className="w-5/6 ml-auto mr-auto mt-16 flex flex-wrap">        
                {
                    (productCtx.listProduct || []).map(data => (       
                        <div key={data.id} className="w-60 ml-auto mr-auto mb-10 border-2 bg-white border-orange-200 rounded-2xl hover:bg-primary hover:text-white">
                            <Link to={`/infor-item/${data.id}`} className='scale-125'>
                                <div className='m-3 border-2 border-slate-200 rounded-2xl bg-white transition-transform hover:scale-125'>
                                    <img src={(data.photos)} alt='' className="w-36 h-40 ml-auto mr-auto" />
                                </div>
                            </Link>
                            <div className='w-auto text-center h-10 pt-2 pb-2 text-base border-t-2 border-orange-200 mt-2 mb-2 font-bold'>
                                <p className="break-words"><Link to={`/infor-item/${data.id}`}>{(data.description)}</Link></p>
                            </div>
                            <div className='text-center border-t-2 h-10 pt-2 pb-2 items-center border-orange-200 font-bold'>
                                <p className="break-words"><Link to={`/infor-item/${data.id}`}>{(data.price.toLocaleString())} ₫</Link></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}