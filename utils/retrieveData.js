const retrieveData = async (parameters) => {
  let address = "https://taskforce-cms.vercel.app/api/" + parameters;
  const res = await fetch(address);
  const result = await res.json();
  return result;
};

export default retrieveData;
