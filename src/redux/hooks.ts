import { useState, useEffect } from "react";
import axios from "axios";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@redux/store";

import { Category, Product } from "@model/types";

export const useFetchItems = (url = "") => {
  const [data, setData] = useState<Product[]>([]);
  const [loadingItems, setLoadingItems] = useState(false);

  useEffect(() => {
    const getCatalog = async () => {
      setLoadingItems(true);
      const resProducts = await axios.get(
        `https://fakestoreapi.com/products${url}`
      );
      setData(await resProducts.data);
      setLoadingItems(false);
    };
    getCatalog();
  }, []);

  return { data, loadingItems };
};

export const useFetchCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);

  useEffect(() => {
    const getCatalog = async () => {
      setLoadingCategories(true);
      const resCategories = await axios.get(
        `https://fakestoreapi.com/products/categories`
      );
      setCategories(await resCategories.data);
      setLoadingCategories(false);
    };
    getCatalog();
  }, []);

  return { categories, loadingCategories };
};

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
