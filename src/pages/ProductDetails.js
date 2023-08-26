import React from 'react'
import {Link, useParams} from 'react-router-dom';

export default function ProductDetails() {

    const param = useParams();

    //relative=route to move top level not just one back
  return (
    <>
    <div>ProductDetails</div>
    <div>{param.productId}</div>
    <div><Link to=".." relative='path'>Back</Link></div>
    </>
  )
}
