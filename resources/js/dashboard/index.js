import React, { Fragment } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import DashboardProduct from './product'
import DashboardTransaction from './transaction'
import DashboardUser from './user'

function SideNav() {
  return (
    <Fragment>
      <div className="bg-purple-200 w-1/5 h-screen flex flex-col rounded-xl gap-2">
        <Link to="/dashboard" className="p-2 md:hover:translate-x-2 ease-in duration-100">
          Home
        </Link>
        <Link to="/dashboard/product" className="p-2 md:hover:translate-x-2 ease-in duration-100">
          Product
        </Link>
        <Link
          to="/dashboard/transaction"
          className="p-2 md:hover:translate-x-2 ease-in duration-100"
        >
          Transaction
        </Link>
        <Link to="/dashboard/user" className="p-2 md:hover:translate-x-2 ease-in duration-100">
          User
        </Link>
      </div>
    </Fragment>
  )
}

function DashboardIndex() {
  return (
    <Fragment>
      <p className="text-xl font-bold">Antrian Transaksi</p>
      <Card />
    </Fragment>
  )
}

function Card() {
  return (
    <Fragment>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex flex-row bg-white rounded-xl overflow-hidden shadow-md p-4 undefined border border-3">
          <div className="p-1 w-4/5 flex flex-row gap-2">
            <h1 className="text-gray-900 text-xl font-serif font-bold w-1/4">Print Hitam Putih</h1>
            <div className="flex flex-col gap-2 w-3/4">
              <p className="text-gray-700 text-sm">QTY: 20 Lembar</p>
              <p className="text-gray-700 text-sm">Total: Rp. 10000</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="p-1 undefined">
              <button className="false flex items-center justify-center font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-1 px-2 text-xs leading-relaxed text-white bg-purple-500 hover:bg-purple-700 focus:bg-purple-400 active:bg-purple-800 shadow-md-purple hover:shadow-lg-purple undefined">
                Cek
              </button>
            </div>
            <div className="p-1 undefined">
              <button className="false flex items-center justify-center font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-1 px-2 text-xs leading-relaxed text-white bg-purple-500 hover:bg-purple-700 focus:bg-purple-400 active:bg-purple-800 shadow-md-purple hover:shadow-lg-purple undefined">
                Print
              </button>
            </div>
            <div className="p-1 undefined">
              <button className="false flex items-center justify-center font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-1 px-2 text-xs leading-relaxed text-white bg-purple-500 hover:bg-purple-700 focus:bg-purple-400 active:bg-purple-800 shadow-md-purple hover:shadow-lg-purple undefined">
                Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
function Index() {
  return (
    <Fragment>
      <div className="flex flex-row p-2 gap-2">
        <SideNav />
        <div className="bg-purple-200 w-4/5 h-screen rounded-xl p-2">
          <Routes>
            <Route path="/" element={<DashboardIndex />} />
            <Route path="/product" element={<DashboardProduct />} />
            <Route path="/transaction" element={<DashboardTransaction />} />
            <Route path="/user" element={<DashboardUser />} />
          </Routes>
        </div>
      </div>
    </Fragment>
  )
}

export default Index
