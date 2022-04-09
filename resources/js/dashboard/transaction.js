import React, { Fragment } from 'react'

function DashboardTransaction() {
  return (
    <Fragment>
      <p className="text-xl font-bold">Daftar Transaksi</p>
      <Card />
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
              <p className="text-gray-700 text-sm">Status: Pending</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="p-1 undefined">
              <button className="false flex items-center justify-center font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-1 px-2 text-xs leading-relaxed text-white bg-purple-500 hover:bg-purple-700 focus:bg-purple-400 active:bg-purple-800 shadow-md-purple hover:shadow-lg-purple undefined">
                Cek
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default DashboardTransaction
