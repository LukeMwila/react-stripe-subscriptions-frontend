export type Product = {
  id: string;
  name: string;
  description: string;
  users: string;
  price: number;
};

/** Stripe publishable key */
export const STRIPE_PUBLISHABLE_KEY = "";

/** Stripe product plan ids */
const STANDARD_PRODUCT_ID = "";
const PREMIUM_PRODUCT_ID = "";
const ENTERPRISE_PRODUCT_ID = "";

/** Stripe product plans */
export const PRODUCT_PLANS: Array<Product> = [
  {
    id: STANDARD_PRODUCT_ID,
    name: "Standard",
    description: "For small teams.",
    users: "4 users",
    price: 10
  },
  {
    id: PREMIUM_PRODUCT_ID,
    name: "Premium",
    description: "For medium sized teams.",
    users: "20 users",
    price: 25
  },
  {
    id: ENTERPRISE_PRODUCT_ID,
    name: "Enterprise",
    description: "For large teams.",
    users: "100+ users",
    price: 50
  }
];
