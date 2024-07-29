export const setStorageToken = (token)=>{
  localStorage.setItem("GW-Token",token)
}

export const getStorageToken  = (token)=>{
  return localStorage.getItem("GW-Token") || ''
}