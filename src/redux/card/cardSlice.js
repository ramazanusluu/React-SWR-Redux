import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cardItems: localStorage.getItem("cardItems")
    ? JSON.parse(localStorage.getItem("cardItems"))
    : [],
  cardTotalQuantity: 0,
  cardTotalAmount: 0,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard(state, action) {
      const itemIndex = state.cardItems.findIndex(
        (item) => item.ID === action.payload.ID
      );

      if (itemIndex >= 0) {
        state.cardItems[itemIndex].cardQuantity += 1;
        toast.info(
          `increased ${state.cardItems[itemIndex].DisplayName} card quantitiy`,
          {
            position: "bottom-left",
          }
        );
      } else {
        const tempProduct = { ...action.payload, cardQuantity: 1 };
        state.cardItems.push(tempProduct);
        toast.success(`${action.payload.DisplayName} sepete eklendi`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
    },
    removeFromCard(state, action) {
      const nextCardItems = state.cardItems.filter(
        (cardItem) => cardItem.ID !== action.payload.ID
      );
      state.cardItems = nextCardItems;
      localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
      toast.error(`${action.payload.DisplayName} sepetten çıkarıldı`, {
        position: "bottom-left",
      });
    },
    decreaseCard(state, action) {
      const itemIndex = state.cardItems.findIndex(
        (cardItem) => cardItem.ID === action.payload.ID
      );
      if (state.cardItems[itemIndex].cardQuantity > 1) {
        state.cardItems[itemIndex].cardQuantity -= 1;

        toast.info(`${action.payload.DisplayName} sayısı 1 azaltıldı`, {
          position: "bottom-left",
        });
      } else if (state.cardItems[itemIndex].cardQuantity === 1) {
        const nextCardItems = state.cardItems.filter(
          (cardItem) => cardItem.ID !== action.payload.ID
        );
        state.cardItems = nextCardItems;

        toast.error(`${action.payload.DisplayName} sepetten çıkarıldı`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
    },
  },
});

export const { addToCard, removeFromCard, decreaseCard } = cardSlice.actions;

export default cardSlice.reducer;
