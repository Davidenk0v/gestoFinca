export interface PropertyManagementData {
  title: string;
  description: string;
  services: {
    "property-management": string;
    "rental-management": string;
  };
  contact: string;
  about: string;
  quote: string;
  other: {
    "privacy-policy": string;
    "terms-and-conditions": string;
    "cookie-policy": string;
  };
  form: {
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
  };
  paragraphs: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  buttons: {
    "learn-more": string;
    contact: string;
  };
}
