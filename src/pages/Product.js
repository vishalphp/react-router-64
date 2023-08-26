import React from 'react'
import { Link } from 'react-router-dom'

const PRODCT = [{
                    name: "Product 1", id: 1
                },
                {
                    name: "Product 2", id: 2
                },
                {
                    name: "Product 3", id: 3
                },
                {
                    name: "Product 4", id: 4
                },
                ];

export default function Product() {
  return (
    <div>
        <h1>Products List</h1>
        <ul>
            {
                PRODCT.map(PRO=>{
                    return <li key={PRO.id}><Link to={`${PRO.id}`}>{PRO.name}</Link></li>
                })
            }
        </ul>
    </div>
  )
}
