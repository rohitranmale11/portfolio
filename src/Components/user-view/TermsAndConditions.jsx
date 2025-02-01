import React from "react";
import { FileText } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-900">अटी आणि शर्ती</h1>
        <p className="mt-2 text-lg text-gray-600">कृपया खालील अटी आणि शर्ती वाचा.</p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800">संकेतस्थळ वापरण्याचे अधिकार</h2>
          <p className="mt-2 text-lg text-gray-700">
            या संकेतस्थळाचा वापर केल्याने तुम्ही या अटी आणि शर्ती स्वीकारता. या संकेतस्थळावर असलेल्या सर्व सामग्रीचे स्वामित्व आणि अधिकार शबरी आदिवासी वित्त व विकास महामंडळ, महाराष्ट्र कडे आहे.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">वापरकर्ता दायित्व</h2>
          <p className="mt-2 text-lg text-gray-700">
            तुम्हाला या संकेतस्थळाचा वापर करताना कायद्यांचे पालन करणे आवश्यक आहे. तुम्ही कोणत्याही हानीकारक क्रियाकलापांसाठी जबाबदार असाल, ज्यामुळे संकेतस्थळाची कार्यक्षमता कमी होईल किंवा इतर वापरकर्त्यांना त्रास होईल.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">सामग्रीचा वापर</h2>
          <p className="mt-2 text-lg text-gray-700">
            संकेतस्थळावर असलेल्या सर्व माहिती आणि सामग्रीचे स्वामित्व हक्क शबरी आदिवासी वित्त व विकास महामंडळ, महाराष्ट्र कडे आहे. तुम्हाला या सामग्रीचे व्यावसायिक वापर करण्याची परवानगी नाही.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">तांत्रिक सहकार्य</h2>
          <p className="mt-2 text-lg text-gray-700">
            या संकेतस्थळाच्या तांत्रिक बाबींचा वापर व देखरेख शबरी आदिवासी वित्त व विकास महामंडळ, महाराष्ट्र कडे आहे. संकेतस्थळाचा कोणताही भाग तांत्रिक पद्धतीने बदलण्यासाठी तुम्हाला परवानगी नाही.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">लाइफटाइम अॅक्सेस</h2>
          <p className="mt-2 text-lg text-gray-700">
            या संकेतस्थळावर तुम्हाला लाइफटाइम अॅक्सेस दिला जातो. तथापि, शबरी आदिवासी वित्त व विकास महामंडळ, महाराष्ट्र कोणत्याही वेळी सेवा थांबवू शकते.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">वापराच्या अटी</h2>
          <p className="mt-2 text-lg text-gray-700">
            संकेतस्थळाचा वापर करत असताना, तुम्हाला सर्व लागू कायद्यांचे पालन करणे आवश्यक आहे. तुम्ही कोणत्याही प्रकारच्या फसवणूक किंवा असंवेदनशील क्रिया करणाऱ्यांसाठी जबाबदार असाल.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">दुरुस्ती अधिकार</h2>
          <p className="mt-2 text-lg text-gray-700">
            शबरी आदिवासी वित्त व विकास महामंडळ, महाराष्ट्र या अटी आणि शर्ती कोणत्याही वेळी बदलू शकते. कोणत्याही बदलांसाठी तुम्हाला आधी सूचना दिली जाईल.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">कायद्यांचे पालन</h2>
          <p className="mt-2 text-lg text-gray-700">
            या संकेतस्थळाच्या वापरासाठी सर्व कायद्यांचे पालन करणे आवश्यक आहे. या अटी आणि शर्तींशी संबंधित सर्व वाद भारतीय न्यायालयीन अधिकार क्षेत्रात राहतील.
          </p>
        </section>

        <section className="flex justify-center mt-10">
          <a href="https://www.example.com" className="text-blue-600 flex items-center space-x-2">
            <FileText size={20} />
            <span className="text-lg">अधिक वाचा</span>
          </a>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
