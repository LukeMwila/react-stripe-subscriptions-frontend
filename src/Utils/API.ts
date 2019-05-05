/**
 * API Request
 * @param endPoint - api endpoint
 * @param httpMethod - the http method defining the type of request (POST/GET/PUT/PATCH)
 * @param bodyParams - object with properties being passed with the request
 */

export const apiRequest = async (
  endPoint: string,
  httpMethod: string,
  bodyParams?: object
): Promise<any> => {
  const response = await fetch(endPoint, {
    method: httpMethod,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyParams)
  });

  return await response.json();
};
