import React from 'react'

export const Small = React.memo(({ value}) => {
  console.log("Me volví a llmar :(")
  return (
    <small>{value}</small>
  )
})
