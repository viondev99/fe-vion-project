import { useState, useEffect } from "react"
import { useProductCtx } from "hooks/useProduct"

export function IteminCart({product}) {
    const [count, setCount] = useState(product.quantity || 1)
    const [totalMoney, setTotalMoney] = useState(0)
    const productCtx = useProductCtx()

    useEffect(() => {
        const updateTotalMoney = count*product.price
        setTotalMoney(updateTotalMoney)
        productCtx.onChangeQuantity(count, product.id)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [count]);
    
    const handleDelete = () => productCtx.deleteItemInCart(product.id)

    return(
        <>
        <div className="text-primary">
            <li
              className="m-5 border-b-2 border-b-orange-100"
              key={product.id}
            >
              <div className="flex">
                <div className="ml-auto mb-auto mt-auto mr-auto border-r-2 border-orange-100">
                  <div className="m-3">
                    <input
                      className="h-8 w-8"
                      type="checkbox"
                    />
                  </div>
                  <div className="m-3">
                    <button
                      className="h-8 w-8 border-2 border-orange-600 text-sm font-bold rounded-md text-white bg-orange-600"
                      onClick={handleDelete}
                    >
                      Xóa
                    </button>
                  </div>
                </div>

                <div className="ml-auto mr-auto">
                  <img src={product.photos} alt='' className="w-full h-28"/>
                </div>

                <div className="ml-auto mr-auto mt-auto mb-auto w-3/12">
                  <div className="w-full text-left p-1 m-1">
                    <p className="break-words text-sm">
                      {product.name}
                    </p>
                  </div>

                  <div className="w-full text-left p-1 m-1">
                    <p className="break-words text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="w-2/12 ml-auto mr-auto mt-auto mb-auto">
                  <div className="ml-auto mr-auto text-center font-bold text-xl">
                    <p>{product.price.toLocaleString()} ₫</p>
                  </div>
                </div>

                <div className="w-1.5/12 ml-auto mr-auto mt-auto mb-auto">
                  <div className="flex justify-center">
                    <button
                      className="border-2 border-orange-600 w-7 h-7"
                      onClick={() => {
                        if(count > 1) {
                          setCount(count - 1)
                        }
                      }}
                    >
                      -
                    </button>

                    <div className="ml-5 mr-5 w-7 h-7 border-2 border-orange-600 text-center">
                      <div
                        className=""
                        
                      >
                        {count}
                      </div>
                    </div>

                    <button
                      className="border-2 border-orange-600 w-7 h-7"
                      onClick={() => setCount(count + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="w-2/12 ml-auto mr-auto mb-auto mt-auto font-bold text-2xl">
                  <p className="text-center">{totalMoney.toLocaleString()} ₫</p>
                </div>
              </div>
            </li>
        </div>
        </>
    )
}