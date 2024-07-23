function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation (e.g., an API call)
      setTimeout(() => {
        resolve('API response');
      }, 1000);
    });
  }
  
  export default getResponseFromAPI;
  