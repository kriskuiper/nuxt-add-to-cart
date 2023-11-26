import type { Product } from "@/types/api";
import { keys } from "@/lib/constants";

const useCart = () => {
  const cart = ref();
  const addItem = (item: Product) => {
    console.warn(`Add item`, item);
  };
  const removeItem = (item: Product) => {
    console.warn(`Remove item`, item);
  };

  onMounted(() => {
    // TODO: ideally move storage things to a seperate composable
    cart.value = window.localStorage.getItem(keys.CART);
  });

  return {
    cart,
    addItem,
    removeItem,
  };
};

export default useCart;
