const fetchData = async (dna) => {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dna: dna }),
    };
  
    const response = await (
      await fetch("http://localhost:3002", settings)
    ).json();
  
    return response;
  };
  
export { fetchData };