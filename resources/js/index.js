import React, { Fragment, useState } from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import Landing from './landing'
import Login from './auth/login'
import Product from './products/index'
import ProductDetail from './products/detail'
import Dashboard from './dashboard/index'

function Navbar() {
  const [showNav, setshowNav] = useState(false)
  const isMediumScreen = useMediaQuery({ minWidth: 768 })
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row m-2 bg-purple-100 rounded-md">
        <div className="flex flex-row justify-between">
          <Link to="/" className="p-4 md:hover:bg-purple-200 rounded-md flex-auto">
            Home
          </Link>
          <span
            className="p-4 md:hidden float-right flex-none cursor-pointer select-none"
            onClick={() => setshowNav(!showNav)}
          >
            {showNav ? 'X' : 'O'}
          </span>
        </div>
        {(isMediumScreen || showNav) && (
          <div className="flex flex-col md:flex-row">
            <Link to="/product" className="p-4 md:hover:bg-purple-200 rounded-md">
              Produk
            </Link>
            <Link to="/login" className="p-4 md:hover:bg-purple-200 rounded-md">
              Login
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  )
}

const Index = () => (
  <Fragment>
    <Navbar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetail />} />

      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  </Fragment>
)

export default Index
