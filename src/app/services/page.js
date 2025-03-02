"use client";

export default function Services() {
    const services = [
      {
        title: "🌾 Crop Recommendation",
        description: "Get AI-based crop suggestions based on soil, climate, and season for optimal yield.",
      },
      {
        title: "🌱 Crop Disease Detection",
        description: "Upload images of crops and detect diseases using advanced AI models.",
      },
      {
        title: "⛅ Weather Updates",
        description: "Get real-time weather forecasts to plan your farming activities efficiently.",
      },
      {
        title: "🚜 Smart Irrigation Advice",
        description: "Receive customized irrigation guidance to save water and improve crop health.",
      },
      {
        title: "📊 Market Price Prediction",
        description: "Stay updated with real-time market prices and predicted trends for crops.",
      }
    ];
  
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-200 to-yellow-100 p-6">
        <h1 className="text-5xl font-extrabold text-green-800 mb-10 drop-shadow-lg">🚜 Our Agricultural Services 🌿</h1>
        
        <div className="w-full max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-3xl shadow-2xl border-l-8 border-green-600 hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-green-900">{service.title}</h2>
              <p className="text-gray-700 mt-3">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  