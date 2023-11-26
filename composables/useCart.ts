import type { Product } from "@/types/api";
import { keys } from "@/lib/constants";

const useCart = () => {
  const storage = useBrowserStorage();
  const cart = ref(storage.get(keys.CART));
  const addItem = (item: Product) => {
    console.warn(`Add item`, item);
  };
  const removeItem = (item: Product) => {
    console.warn(`Remove item`, item);
  };

  return {
    cart,
    addItem,
    removeItem,
  };
};
