// Types
export type Category = {
  category: string;
};

export type Product = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  qty: number;
  rating: {
    rate: number;
    count: number;
  };
};

export type User = {
  isAuthenticated: boolean;
};
