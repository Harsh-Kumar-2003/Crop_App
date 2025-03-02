export async function GET() {
    const schemes = [
      {
        title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
        description: "Provides income support to small and marginal farmers in India.",
        link: "https://pmkisan.gov.in/",
      },
      {
        title: "Atmanirbhar Bharat Abhiyan",
        description: "A self-reliance initiative to support small businesses and industries.",
        link: "https://www.mygov.in/aatmanirbhar-bharat-abhiyaan/",
      },
      {
        title: "PM Ujjwala Yojana",
        description: "Provides LPG gas connections to poor households.",
        link: "https://www.pmuy.gov.in/",
      },
      {
        title: "Startup India",
        description: "A flagship initiative to support startups and entrepreneurship.",
        link: "https://www.startupindia.gov.in/",
      },
      {
        title: "PM Awas Yojana",
        description: "Affordable housing scheme for urban and rural poor.",
        link: "https://pmaymis.gov.in/",
      }
    ];
  
    return new Response(JSON.stringify(schemes), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }
  