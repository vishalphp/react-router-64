import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div>Home</div>
    <p>Go to <Link to="/products" >Product</Link></p>
    </>
  )
}
