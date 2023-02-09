export default async function getCountries() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
  } catch (error) {
    console.log(error);
  }
}