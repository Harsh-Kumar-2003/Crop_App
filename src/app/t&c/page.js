export default function TermsAndConditions() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-5xl font-extrabold text-green-800 mb-10 drop-shadow-lg">
          📜 Terms & Conditions
        </h1>
  
        <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg border border-green-300">
          <p className="text-gray-700 text-lg mb-4">
            Welcome to our Crop App! By using this application, you agree to abide by the following terms and conditions.
          </p>
  
          <h2 className="text-2xl font-bold text-green-900 mt-6">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mt-2">
            By accessing and using our services, you acknowledge that you have read, understood, and agreed to these terms.
          </p>
  
          <h2 className="text-2xl font-bold text-green-900 mt-6">2. Use of Services</h2>
          <p className="text-gray-600 mt-2">
            Our services provide crop recommendations, disease detection, weather updates, and other agricultural insights. The information is for guidance only and should be used with proper expert consultation.
          </p>
  
          <h2 className="text-2xl font-bold text-green-900 mt-6">3. User Responsibilities</h2>
          <p className="text-gray-600 mt-2">
            Users are responsible for providing accurate data and ensuring that they follow local farming regulations when applying our recommendations.
          </p>
  
          <h2 className="text-2xl font-bold text-green-900 mt-6">4. Privacy & Data Protection</h2>
          <p className="text-gray-600 mt-2">
            We collect and use user data to improve our services. Your data will not be shared with third parties without your consent.
          </p>
  
          <h2 className="text-2xl font-bold text-green-900 mt-6">5. Limitation of Liability</h2>
          <p className="text-gray-600 mt-2">
            We are not responsible for any direct, indirect, or incidental losses resulting from the use of our services.
          </p>
  
          <h2 className="text-2xl font-bold text-green-900 mt-6">6. Updates & Modifications</h2>
          <p className="text-gray-600 mt-2">
            We reserve the right to update these terms at any time. Continued use of the app after modifications implies acceptance of the new terms.
          </p>
  
          <p className="text-gray-700 mt-6 text-center font-semibold">
            If you have any questions, contact us at support@cropapp.com
          </p>
        </div>
      </div>
    );
  }
  