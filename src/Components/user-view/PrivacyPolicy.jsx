import React from "react";
import { ExternalLink } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-900">गोपनीयता धोरण</h1>
        <p className="mt-2 text-lg text-gray-600">तुमच्या गोपनीयतेचा आम्हाला आदर आहे. खालील धोरणे वाचा.</p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800">धोरणे आणि अस्वीकार</h2>
          <p className="mt-2 text-lg text-gray-700">
            हायपरलिंकिंग बाबतचे धोरण, बाह्य संकेतस्थळे / पोर्टल्सशी असलेल्या जोडण्या. या पोर्टलवर अनेक ठिकाणी तुम्हाला अन्य संकेतस्थळांच्या / पोर्टलच्या इतर शासकीय, अशासकीय / खाजगी संस्थांनी निर्माण व परिरक्षित केलेल्या जोडण्या आढळून येतील.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">गोपनीयता धोरण</h2>
          <p className="mt-2 text-lg text-gray-700">
            सर्वसाधारण नियमानुसार, हे पोर्टल तुमच्याकडून (जसे की, नाव, दूरध्वनी क्रमांक किंवा ई-टपालाचा पत्ता) अशी कोणतीही विनिर्दिष्ट वैयक्तिक माहिती आपोआप ग्रहण करू शकत नाही.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">स्वामित्व हक्क धोरण</h2>
          <p className="mt-2 text-lg text-gray-700">
            या पोर्टलवरील वैशिष्ट्यपूर्ण साहित्य विनाशुल्काने, कोणत्याही स्वरूपात किंवा माध्यमात विनिर्दिष्ट परवानगीच्या आवश्यकतेशिवाय उद्धृत करता येईल.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">अटी आणि शर्ती</h2>
          <p className="mt-2 text-lg text-gray-700">
            या संकेतस्थळाची रचना, विकसन आणि देखभाल स्वामित्व हक्क शबरी आदिवासी वित्त व विकास महामंडळ, महाराष्ट्र विभागाकडे केली जाते.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">वेब मजकूर आढावा धोरण</h2>
          <p className="mt-2 text-lg text-gray-700">मजकूर विभागाच्या मान्यतेअधीन</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">संकेतस्थळ सुरक्षा धोरण</h2>
          <p className="mt-2 text-lg text-gray-700">मजकूर विभागाच्या मान्यतेअधीन</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">संकेतस्थळ संनियंत्रण धोरण</h2>
          <p className="mt-2 text-lg text-gray-700">मजकूर विभागाच्या मान्यतेअधीन</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">आकस्मिकता व्यवस्थापन</h2>
          <p className="mt-2 text-lg text-gray-700">मजकूर विभागाच्या मान्यतेअधीन</p>
        </section>

        <section className="flex justify-center mt-10">
          <a href="https://www.example.com" className="text-blue-600 flex items-center space-x-2">
            <ExternalLink size={20} />
            <span className="text-lg">अधिक वाचा</span>
          </a>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
