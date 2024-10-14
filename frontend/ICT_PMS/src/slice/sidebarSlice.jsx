import { createSlice } from "@reduxjs/toolkit"

const getInitialIndex = () => {
  const savedIndex = localStorage.getItem("selectedIndex");
  return savedIndex !== null ? JSON.parse(savedIndex) : 0;
}

const sidebarSlice = createSlice({
  name: 'sidebar',  // Slice의 이름 정의

  initialState:{
    open:true,
    selectedIndex: getInitialIndex(),
  }, // 초기값

  reducers:{    // reducer 복수형!
    setOpen:(state) => {
      state.open = !state.open;
    },
    setSelectedIndex:(state, action) => {
      state.selectedIndex = action.payload;
      localStorage.setItem("selectedIndex", JSON.stringify(action.payload));
    }
  }
});

export const {setSelectedIndex, setOpen} = sidebarSlice.actions;
export default sidebarSlice;