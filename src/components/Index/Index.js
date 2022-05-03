import React, { useEffect } from 'react'

export default function Index(props) {
  useEffect(() => {
    console.log(props)
  })
  return (
    <div>Index</div>
  )
}
