const getUSDExchangeRate = async () => {
  const response = await fetch('https://stormy-spire-77504.herokuapp.com/https://api.hnb.hr/tecajn/v1?valuta=USD&format=json', { mode: 'cors' });
  const data = await response.json();
  return data[0]['Srednji za devize'];
};
const fetchAPIData = async () => {
  const response = await fetch('https://api.coincap.io/v2/assets?limit=10');
  const data = await response.json();

  return data.data;
};
