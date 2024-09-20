// companyData.js

const mockCompanies: any = [
    {
      id: 1,
      name: "TechNova Solutions",
      email: "info@technova.com",
      registrationDate: "2023-01-15",
      status: "active"
    },
    {
      id: 2,
      name: "GreenLeaf Eco",
      email: "contact@greenleaf.com",
      registrationDate: "2023-02-20",
      status: "active"
    },
    {
      id: 3,
      name: "Quantum Dynamics",
      email: "hello@quantumdynamics.com",
      registrationDate: "2023-03-10",
      status: "active"
    },
    {
      id: 4,
      name: "Swift Logistics",
      email: "support@swiftlogistics.com",
      registrationDate: "2023-04-05",
      status: "pending"
    },
    {
      id: 5,
      name: "Innovate AI",
      email: "info@innovateai.com",
      registrationDate: "2023-05-12",
      status: "pending"
    },
    {
      id: 6,
      name: "Global Health Initiative",
      email: "contact@globalhealth.org",
      registrationDate: "2023-06-18",
      status: "active"
    },
    {
      id: 7,
      name: "CyberShield Security",
      email: "info@cybershield.com",
      registrationDate: "2023-07-22",
      status: "pending"
    },
    {
      id: 8,
      name: "EcoEnergy Solutions",
      email: "support@ecoenergy.com",
      registrationDate: "2023-08-30",
      status: "active"
    },
    {
      id: 9,
      name: "DataStream Analytics",
      email: "info@datastream.com",
      registrationDate: "2023-09-14",
      status: "pending"
    },
    {
      id: 10,
      name: "Blockchain Innovations",
      email: "contact@blockchaininno.com",
      registrationDate: "2023-10-05",
      status: "active"
    }
  ];
  
  // Simulating an asynchronous API call
  export const fetchCompanies = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockCompanies);
      }, 1000); // Simulate a 1-second delay
    });
  };