const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  services: [],
  singleService: {},
};

const ServicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
    setSingleService: (state, action) => {
      state.singleService = action.payload;
    },
  },
});

export const { setServices, setSingleService } = ServicesSlice.actions;

export const selectServices = (state) => state?.services?.services;

export const selectSingleService = (state) => state?.services?.singleService;

export default ServicesSlice.reducer;
