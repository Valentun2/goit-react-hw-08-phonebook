import { useSelector } from "react-redux";

export const getContacts = state => {
  return state.contacts ?? [];
};

export const filterContactArr = state => {
  return state.filter.value;
};

export const getUser = state =>{
  return state.user
}