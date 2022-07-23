const fetchAPIData = async () => {
  const response = await fetch('https://api.coincap.io/v2/assets?limit=10');
  const data = await response.json();

  return data.data;
};
