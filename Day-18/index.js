async function getData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const finalResponse = await response.json();
       console.log(finalResponse, "response");
    } catch (error) {
      console.log(error);
    }
  }
  getData();