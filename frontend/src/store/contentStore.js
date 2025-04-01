import axios from "axios";
import { create } from "zustand";
import { errorMessage, successMessage } from "../Utils/HandleToast";
import { totalWords } from "../Utils/TotalWords";

export const useContentStore = create((set, get)=> ({
    totalUsage: 0,
    isLoading: false,

    getTotalUsage: (result)=> {
        let totalWordsNum = 0
        if (result) {
            result.forEach(element => {
                totalWordsNum = totalWordsNum + totalWords(element.aiOutput)
            });
            set({totalUsage: totalWordsNum})
        }
    },

    // Fetch History for calculating words
    fetchHistoryApi: async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/show-history`
        );
        get().getTotalUsage(res.data.history);
      } catch (error) {
        errorMessage("Something went wrong!");
        console.log(error);
        
      }
    },

    // Creating subscription id
  handleCreateSubscription: async (name, email)=> {
    try {
      set({isLoading: true})
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/payment/create-plan`,
        {}
      );
      console.log(res.data);
      get().handleOnPayment(res.data.id, name, email)
      set({ isLoading: false });

    } catch (error) {
      errorMessage("Something went wrong!")
      set({ isLoading: false });
    } 
  },

  handleOnPayment: (subscriptionId, name, email)=> {
    const options = {
      "key": import.meta.env.VITE_RAZORPAY_KEY_ID,
      "subscription_id": subscriptionId,
      "name": "AIWriterly",
      "description": "Monthly Premium Plan",
      "image": '/logo.webp',
      theme: { color: "#3399cc" },
      handler: (response) => {
        if (response) {
          // on payment successful saving payment data in db
          savePaymentDetail(name, email, response.razorpay_payment_id);
        }
      },
    }
    const rzp1 = new window.Razorpay(options);
    rzp1.open();

  }
}))

const savePaymentDetail = async(name, email, paymentId) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/payment/save-payment`,
      {
        name,
        email,
        active: true,
        paymentId
      }
    );

    successMessage(res.data.message)
  } catch (error) {
    errorMessage("Something went wrong!")
  }

}