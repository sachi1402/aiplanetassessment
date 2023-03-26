import {  configureStore } from '@reduxjs/toolkit';
import { addElement, deleteElement, editElement,reducers } from '../features/hackthons/hackthonSlice'

const store = configureStore({
  reducer: reducers
});

export default store;
  