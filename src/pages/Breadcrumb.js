import React, { useMemo } from 'react'

function Breadcrumb({ listName }) {
  const renderListData = useMemo(() => {
    return listName.map((it) => {
      if (it.link !== '') {
        return (
          <span style={{ color: 'blue' }}>
            {it.label}
            {'>'}
          </span>
        )
      }
      return <span>{it.label}</span>
    })
  }, [listName])
  return (
    <>
      <div className="mt-10 mb-10 text-primary max-w-screen-2xl ml-auto mr-auto">
        {renderListData}
      </div>
    </>
  )
}

export default Breadcrumb
