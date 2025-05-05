import { Star, Truck } from 'lucide-react'
import React from 'react'

const ProductsCard = ({ part }) => {
    return (
        <div key={part.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
            {/* Product Image */}
            <div className="flex items-center justify-center bg-gray-50 h-48 max-h-[250px] min-h-[250px] overflow-hidden">
                <img src={part.image} alt="" className='w-full h-full object-cover hover:scale-110 transition-all duration-300'/>
            </div>

            {/* Product Info */}
            <div className="p-4 flex justify-between items-center">
                <div>
                    <span className="text-sm text-blue-600 font-medium">{part.category}</span>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{part.name}</h3>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between mt-4 ">
                    <span className="text-xl font-bold text-secondary">${part.price.toFixed(2)}</span>
                </div>

            </div>
        </div>
    )
}

export default ProductsCard
