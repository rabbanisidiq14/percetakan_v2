import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'

function detail() {
  let { id } = useParams()
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row flex-wrap px-2 md:px-32 pt-6 gap-2 md:gap-0">
        <div className="md:w-1/3 px-2">
          <img src="https://img.idxchannel.com/media/700/images/idx/2021/05/19/vanda-dendrobium-0001.jpg" />
        </div>
        <div className="md:w-1/3 px-2">
          {/* detail */}
          <p className="font-bold text-3xl">Print Hitam Putih</p>
          <p>Print hitam putih kertas A4</p>
          <p className="text-lg font-bold">Rp. 500/lembar</p>
        </div>
        <div className="md:w-1/3 px-2 flex flex-col gap-2">
          {/* tombol beli */}
          <div>
            <p>
              SubTotal: <span className="font-bold">Rp. 500</span>
            </p>
            <label htmlFor="quantity">Berapa lembar</label>
            <br />
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="0"
              className="border border-purple-300 active:border-purple-500 rounded p-2"
              defaultValue={1}
            />
          </div>

          <button className="border border-purple-400  rounded p-2 font-bold text-purple-400 active:bg-gray-100">
            Beli
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default detail
