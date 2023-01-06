const API_URL = 'http://localhost:3001/events/';

export const get = async () => {
  const response = await fetch(API_URL, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  return await response.json();
};

export const post = async (eventObject) => {
  const response = fetch(API_URL, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(eventObject),
  });
  return response;
};

export const put = async (eventObject) => {
  const response = fetch(API_URL + eventObject.id, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(eventObject),
  });
  return response;
};

export const remove = async (id) => {
  const response = await fetch(API_URL + id, {
    method: 'DELETE',
  });
  return response;
};
