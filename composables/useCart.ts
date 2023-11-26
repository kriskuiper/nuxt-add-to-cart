import type { Product } from "@/types/api";
import { keys } from "@/lib/constants";

// TODO: ideally move localStorage things to a seperate composable
const useCart = () => {
  const cart = ref<Product[]>([]);

  const addItem = (item: Product) => {
    const updatedItems = [...cart.value, item];

    cart.value = updatedItems;
    window.localStorage.setItem(keys.CART, JSON.stringify(updatedItems));
  };

  const removeItem = (item: Product) => {
    const filteredItems = cart.value.filter(
      (cartItem) => cartItem.id !== item.id
    );

    cart.value = filteredItems;
    window.localStorage.setItem(keys.CART, JSON.stringify(filteredItems));
  };

  onMounted(() => {
    const cartFromStorage = window.localStorage.getItem(keys.CART);

    if (!cartFromStorage) return;

    cart.value = JSON.parse(cartFromStorage);
  });

  return {
    cart,
    addItem,
    removeItem,
  };
};

export default useCart;
