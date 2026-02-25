'use client'
import { Merch } from '../../types/merch';
import Button from '../ui/Button';
import { useEffect, useState } from 'react';
import Badge from '../ui/Badge';

interface MerchCardProps {
    merch: Merch
}

export default function MerchCard({merch}: MerchCardProps) {
    // TODO: HANDLE PAYMENT, ADD TO CART, ADD MERCH IMAGES
    return (
        <div className="px-6 py-3 flex flex-column justify-between bg-niteharts-grey">
            <image></image>
            <h3>{merch.merchName}</h3>
            <p>{merch.merchCategory}</p>
            <div className="flex flex-row justify-between">
                {merch.merchSize} | {merch.merchCost}
            </div>
            <Badge intent="lowTix" label="LOW STOCK"/>
            <Button intent="primary" size="sm">Buy Now</Button>
            <Button intent="secondary" size="sm">Add To Cart</Button>
        </div>
    )
}