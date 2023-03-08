export const getLocalStorageData = (key: any) => {
  try {
    let data = typeof window !== "undefined" ? localStorage.getItem(key) : null;
    data = JSON.parse(data!);
    return data;
  } catch (error) {
    console.log(error);
  }
};
