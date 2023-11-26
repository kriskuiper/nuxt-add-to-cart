import type { Product } from "@/types/api";
import { keys } from "@/lib/constants";

type UpdateCartHandler = (items: Product[]) => void;
type CartItemHandler = (item: Product) => void;

// TODO: ideally move localStorage things to a seperate composable
const useCart = () => {
  const cart = ref<Product[]>([]);

  const updateCart: UpdateCartHandler = (items) => {
    cart.value = items;
    window.localStorage.setItem(keys.CART, JSON.stringify(items));
  };

  const addItem: CartItemHandler = (item) => {
    const updatedItems = [...cart.value, item];
    updateCart(updatedItems);
  };

  const removeItem: CartItemHandler = (item) => {
    const filteredItems = cart.value.filter(
      (cartItem) => cartItem.id !== item.id
    );
    updateCart(filteredItems);
  };

  onMounted(() => {
    const cartFromStorage = window.localStorage.getItem(keys.CART);

    if (!cartFromStorage) {
      return;
    }

    cart.value = JSON.parse(cartFromStorage);
  });

  return {
    cart,
    addItem,
    removeItem,
  };
};

export default useCart;
