import { loadFromStorage, removeFromStorage, saveToStorage } from 'common/utils'
import React, { useEffect, useState } from 'react'
import { getAuth } from 'services'

export const ProductContext = React.createContext(null)

export function ProductContextProvider({ children }) {
  const [listProduct, setListProduct] = useState()
  const [productInCart, setItemInCart] = useState(
    loadFromStorage('DataItem') || []
  )
  const [selectedItem, setSlectedItem] = useState(
    loadFromStorage('DataItem') || []
  )
  const [totalMoney, setTotalMoney] = useState(0)

  const getListProduct = async (callback) => {
    const response = await getAuth('http://localhost:3000/api/v1/product')
    setListProduct(response.data.data[0])
    console.log('response', response)
    if (callback) {
      callback()
    }
  }

  useEffect(() => {
    const listItemAndCost = (productInCart || []).map(
      (item) => item.price * (item.quantity || 1)
    )
    const totalMoneyFinal = Object.values(listItemAndCost).reduce(
      (accumulator, curr) => accumulator + curr,
      0
    )
    setTotalMoney(totalMoneyFinal)
  }, [productInCart])

  const addToCart = (item) => {
    const dataCart = [
      ...productInCart,
      {
        ...item,
        quantity: 1,
      },
    ]

    setItemInCart(dataCart)
    saveToStorage('DataItem', dataCart)
  }

  const getProductById = async (id) => {
    const response = await getAuth(`http://localhost:3000/api/v1/product/${id}`)
    setSlectedItem(response.data.data)
  }

  const removeFromCart = () => {
    setItemInCart([])
    removeFromStorage('DataItem')
  }

  const onChangeQuantity = (quantity, id) => {
    const updatedProductInCart = productInCart.map((item) => {
      if (item.id === id) {
        item.quantity = quantity
        return item
      }
      return item
    })

    setItemInCart(updatedProductInCart)
    saveToStorage('DataItem', updatedProductInCart)
  }

  const deleteItemInCart = (id) => {
    const updatedProductInCart = productInCart.filter((item) => item.id !== id)

    setItemInCart(updatedProductInCart)
    saveToStorage('DataItem', updatedProductInCart)
  }

  const value = {
    getListProduct,
    listProduct,
    addToCart,
    productInCart,
    removeFromCart,
    getProductById,
    selectedItem,
    totalMoney,
    onChangeQuantity,
    deleteItemInCart,
  }

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}
