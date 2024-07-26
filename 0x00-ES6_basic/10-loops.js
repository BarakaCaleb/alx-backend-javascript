export default function appendToEachArrayValue(array, appendString) {
    const newArray = [];
    for (const element of array) {
      newArray.push(appendString + element);
    }
  
    return newArray;
  }