import axios from "axios";
import { create } from "zustand";


export const userSubscriptionStore = create((set, get) => ({
  isUserSubscribed: false,
  maxUsage:10000,

  checkIfUserSubscribed: async (email) => {
    try {
      const userSubscription = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/payment/user-subscription`,
        { email }
      );

      console.log(userSubscription);
      
      
      if (userSubscription) {
        set({ isUserSubscribed: true, maxUsage: 100000 });
      }
    } catch (error) {
      set({ isUserSubscribed: false });
    }
  },
}));
