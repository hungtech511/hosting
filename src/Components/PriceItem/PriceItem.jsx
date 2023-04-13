import React from 'react'
import CustomButton from "@components/Button/Button";
import '@components/PriceItem/PriceItem.scss'

export default function PriceItem() {
    return (
        <div className='list-item'>
            <div className='list-item_icon'>
                <img src="https://themexriver.com/wp/hostix/wp-content/uploads/2022/11/price-28.png" />
            </div>
            <h3 className='list-item_title'>Cloud Hosting</h3>
            <p className='list-item_desc'>Ideal for web designers & developers manage multiple projects.</p>
            <span className='list-item_text'>Starting At</span>
            <div className='list-item_price'>
                <div className='list-item_price-detail'>
                    <span>$</span>
                    <h2>49.99</h2>
                </div>
                <span>/</span>
                <span>Monthly</span>
            </div>
            <div className='list-item_discount'>
                <span>30% Discount</span>
                <span>$169.99</span>
            </div>
            <CustomButton />
            <p className='list-item_renew'>$ 69.99 / Mo When You Renew</p>
        </div>
    )
}
