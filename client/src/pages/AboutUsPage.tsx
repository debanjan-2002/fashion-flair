import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto py-8">
        <div className="bg-white shadow-md rounded p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:order-1">
              <h1 className="text-3xl font-bold mb-6">Welcome to Fashion Flair</h1>
              <p className="text-gray-700 mb-4">
                At Fashion Flair, we believe that fashion is more than just
                clothing; it's an expression of your personality and a way to
                showcase your unique style. Our app is designed to empower you
                with the latest fashion trends, AI-driven outfit suggestions,
                and a curated collection of top-quality clothing, accessories,
                and footwear.
              </p>
            </div>
            <div className="md:order-2">
              <img
                src="welcome_image.png" // Replace with your image URL
                alt="Welcome to Fashion Flair"
                className="rounded shadow-md"
              />
            </div>
            <div className="md:order-3">
              <img
                src="stylist_chatbot.png" // Replace with your image URL
                alt="AI-Powered Style Assistant"
                className="rounded shadow-md"
              />
            </div>
            <div className="md:order-4">
              <h2 className="text-2xl font-bold mb-6">AI-Powered Style Assistant</h2>
              <p className="text-gray-700 mb-4">
                Our AI-powered chatbot isn't just a virtual assistant; it's
                your personal stylist available 24/7. Whether you're seeking
                advice on the latest trends, planning an outfit for an event, or
                experimenting with new looks, our chatbot is here to guide you.
              </p>
            </div>
            <div className="md:order-5">
              <h2 className="text-2xl font-bold mb-6">Curated Fashion Catalog</h2>
              <p className="text-gray-700 mb-4">
                Discover a world of style in our carefully curated fashion
                catalog. We've partnered with renowned designers and brands to
                bring you a diverse collection of clothing and accessories that
                cater to various tastes and occasions.
              </p>
            </div>
            <div className="md:order-6">
              <img
                src="fashion_catalog.png" // Replace with your image URL
                alt="Curated Fashion Catalog"
                className="rounded shadow-md"
              />
            </div>
            <div className="md:order-7">
              <img
                src="unleash_creativity.png" // Replace with your image URL
                alt="Unleash Your Creativity"
                className="rounded shadow-md"
              />
            </div>
            <div className="md:order-8">
              <h2 className="text-2xl font-bold mb-6">Unleash Your Creativity</h2>
              <p className="text-gray-700 mb-4">
                Fashion is all about expressing your individuality, and we're
                here to help you unleash your creativity. Our AI-powered outfit
                generator takes the guesswork out of styling and empowers you to
                experiment with different combinations and looks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
