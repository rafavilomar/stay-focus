import AsyncStorage from "@react-native-async-storage/async-storage";


export const saveKey = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value)
    return getKey(key);
  } catch (e) {
    console.log(`Error saving ${key}`);
  }
};

export const getKey = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value
  } catch (e) {
    console.log(`Error getting ${key}`);
  }
};
