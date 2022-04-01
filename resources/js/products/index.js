import React, { Fragment, useState } from 'react'
function Card(props) {
  return (
    <div className="w-1/2 sm:w-1/3 lg:w-1/4 p-2">
      <div className="p-2 border rounded shadow-md md:hover:shadow-lg cursor-pointer">
        <img className="object-contain h-36" src={props.gambar} />
        <p>{props.title}</p>
        <div className="align-bottom">
          <p className="font-bold">{props.harga}</p>
          <p className="text-right">cart</p>
        </div>
      </div>
    </div>
  )
}
function Index() {
  return (
    <Fragment>
      <div className="flex flex-row flex-wrap px-2 md:px-32 pt-6 sm:pt-0">
        <Card
          gambar="https://img.idxchannel.com/media/700/images/idx/2021/05/19/vanda-dendrobium-0001.jpg"
          title="Print Hitam Putih"
          harga="Rp. 500/lembar"
        />
        <Card
          gambar="https://cdn1-production-images-kly.akamaized.net/0q57pOw2-JsiAPoiMtBLutixvbg=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3394714/original/051063200_1615017427-mobil_mainan.jpg"
          title="Print Warna"
          harga="Rp. 1000/lembar"
        />
      </div>
    </Fragment>
  )
}

export default Index
