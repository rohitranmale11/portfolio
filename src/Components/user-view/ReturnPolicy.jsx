import React from 'react'

const ReturnPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto p-6"> 
       {/* Return Policy */}

       <div className="text-center mb-10 mt-20">
        <h1 className="text-4xl font-semibold text-gray-900">Return Policy</h1>
        <p className="mt-2 text-lg text-gray-600">
          Your privacy is important to us. Please read our policy carefully.
        </p>
      </div>
      <div className="space-y-8">
        <section>
         
          <p className="mt-2 text-lg text-gray-700">
          We offer refund / exchange within first 10 days from the date of your purchase. If 10 days have passed
since your purchase, you will not be offered a return, exchange or refund of any kind. In order to become
eligible for a return or an exchange, (i) the purchased item should be unused and in the same condition as
you received it, (ii) the item must have original packaging, (iii) if the item that you purchased on a sale,
then the item may not be eligible for a return / exchange. Further, only such items are replaced by us
(based on an exchange request), if such items are found defective or damaged.

          </p>
        </section>

        <section>
          
          <p className="mt-2 text-lg text-gray-700">
          You agree that there may be a certain category of products / items that are exempted from returns or
refunds. Such categories of the products would be identified to you at the item of purchase. For exchange
/ return accepted request(s) (as applicable), once your returned product / item is received and inspected
by us, we will send you an email to notify you about receipt of the returned / exchanged product. Further.
If the same has been approved after the quality check at our end, your request (i.e. return / exchange) will
be processed in accordance with our policies.
          </p>
        </section>

       
      </div>

    </div>
  )
}

export default ReturnPolicy
