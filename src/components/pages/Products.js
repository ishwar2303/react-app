import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
    return (
        <div className='products flex-col'>
            <div>Products</div>
            <br />
            <Link className='btn btn--red btn--medium br-5' to='/'><i className='fab fa-youtube' /> Watch Now</Link>
        </div>
    )
}

export default Products
