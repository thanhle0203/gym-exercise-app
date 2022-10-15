export const exerciseOptions = {
    method: 'GET',
    headers: {
          // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Key': '99db9032f2mshb0ea01c4f918384p1acfb6jsnaec49441eafe',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '99db9032f2mshb0ea01c4f918384p1acfb6jsnaec49441eafe',
  },
};

export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};

