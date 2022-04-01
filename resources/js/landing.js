import React, { Fragment } from 'react'

const index = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 px-5">
        <div className="flex md:w-3/4 justify-center">
          <img
            src="https://static.bmdstatic.com/gk/production/5ded95176dfb3588d9909fafb2a5fdf5.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center gap-2 text-justify">
          <p className="text-4xl">Percetakan Rabbani</p>
          <p className="text-base">
            Cetaklah di sini, murah sekali Ipsum Lorem magna culpa exercitation minim. Sint nostrud
            minim culpa esse laborum magna qui veniam enim incididunt in eiusmod anim. Mollit veniam
            ipsum ullamco nisi amet magna ea. Aliqua veniam qui amet pariatur labore ea sint ea
            commodo et non esse non adipisicing. Ipsum cupidatat dolore minim amet. Esse aliquip est
            ex eiusmod aute enim deserunt voluptate est reprehenderit.
          </p>
          <span className="text-center md:text-left">
            <a className="p-5 rounded bg-purple-800 text-purple-100 inline-block w-fit" href="">
              Cetak Sekarang
            </a>
          </span>
        </div>
      </div>
    </Fragment>
  )
}

export default index
