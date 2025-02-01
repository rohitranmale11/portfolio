import React from 'react'

const ShippingPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Shipping Policy */}
      <div className="text-center mb-10 mt-20">
        <h1 className="text-4xl font-semibold text-gray-900">Shipping Policy</h1>
        <p className="mt-2 text-lg text-gray-600">
          Your privacy is important to us. Please read our policy carefully.
        </p>
      </div>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
          <p className="mt-2 text-lg text-gray-700">
          The orders for the user are shipped through registered domestic courier companies and/or speed post
only. Orders are shipped within 10 days from the date of the order and/or payment or as per the delivery
date agreed at the time of order confirmation and delivering of the shipment, subject to courier company /
post office norms. Platform Owner shall not be liable for any delay in delivery by the courier company /
postal authority. Delivery of all orders will be made to the address provided by the buyer at the time of
purchase. Delivery of our services will be confirmed on your email ID as specified at the time of
registration. If there are any shipping cost(s) levied by the seller or the Platform Owner (as the case be),
the same is not refundable.
          </p>
        </section>

     
      </div>

    </div>
  )
}

export default ShippingPolicy
