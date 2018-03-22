export default function getBaseUrl() {
  /**
   * http://localhost:3000/ is for dev environment : yarn start P.S if /?useMockApi=true return data json-server /users which is from port 3001
   * for more info look at terminal when json server runs
   * https://floating-basin-12302.herokuapp.com/ is for prod environment : yarn run build
   */
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://floating-basin-12302.herokuapp.com/';
}

// NOTE: this will look at browser url
function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
