import { useState } from 'react';
import { useRouter } from 'next/router';
import valZip from 'val-zip';

function FindEvents() {
  const router = useRouter();
  const [zipcode, setZipcode] = useState('');
  const [maxDistance, setMaxDistance] = useState(100);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (valZip(zipcode, 'US')) {
      router.push('/events/' + zipcode + '/' + maxDistance + '/');
    } else {
      alert('Must enter valid 5-digit zipcode');
    }
  }

  const handleZipcodeEntry = (e) => { setZipcode(e.target.value); }
  const handleMaxDistanceEntry = (e) => { setMaxDistance(e.target.value); }

  return (
    <>
      <h1>Queery Query</h1>
      <form onSubmit={handleSubmit}>
        <input id='zipcode' name='zipcode' title='zipcode' type='text' placeholder='zipcode' required onChange={handleZipcodeEntry} />
        <p>Max Distance</p>

        <input type="radio" id="15" name="max-distance" value="15" onClick={handleMaxDistanceEntry} />
        <label htmlFor="15">15 miles</label>
        <input type="radio" id="50" name="max-distance" value="50" onClick={handleMaxDistanceEntry} />
        <label htmlFor="50">50 miles</label>
        <input type="radio" id="100" name="max-distance" value="100" onClick={handleMaxDistanceEntry} />
        <label htmlFor="100">100 miles</label>

        {/* <input type="radio" id="weekly" name="fav_language" value="weekly" />
        <label for="weekly">Weekly</label>
        <input type="radio" id="monthly" name="fav_language" value="monthly" />
        <label for="monthly">Monthly</label> */}

        {/* <label htmlFor="start">Start date:</label>

        <input type="date" id="start" name="start"
          min={new Date()} />

        <label htmlFor="end">End date:</label>

        <input type="date" id="end" name="end"
          min={new Date()} /> */}

        <button type='submit'>Find Events</button>
      </form>
    </>
  );
}

export default FindEvents;