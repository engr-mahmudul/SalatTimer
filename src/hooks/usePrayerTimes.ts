import { useEffect, useState } from 'react';


const usePrayerTimes = (latitude: number | null, longitude: number | null) => {
  const [prayerTimes, setPrayerTimes] = useState(null);

  useEffect(() => {
    if (latitude && longitude) {
      const method = 3;
      const apiUrl = `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=${method}`;
      
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          console.log('Fetched Prayer Times:', data?.data?.timings);
          setPrayerTimes(data?.data?.timings);
        })
        .catch(error => {
          console.error('Error fetching prayer times:', error);
        });
    }
  }, [latitude, longitude]);

  return prayerTimes;
};

export default usePrayerTimes;