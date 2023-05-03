import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setItemStorage(key, value) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
        return true;
    } catch (e) {
        return console.log(e.message);
    }
}

export async function getItemStorage(key) {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        return console.log(e.message);
    }
}

export async function clearStorage() {
    try {
        await AsyncStorage.clear()
        return true;
    } catch (e) {
        return console.log(e.message);
    }
}