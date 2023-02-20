import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export const getServerSideProps = async (context) => {
  const { query } = context;
  return { props: { query } };
}

function ListEvents() {
  const router = useRouter();
  const { zipcode, maxDistance } = router.query;
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const response = await axios.get(process.env.QUEERY_QUERY_API_URL, { params: { zipcode, maxDistance } });

    return response?.data || [];
  }

  useEffect(() => { fetchEvents().then(setEvents); }, []);

  return (
    <>
      <p>Events near {zipcode}</p>
      <ul>
        {events.map((e) => <li key={e._id}>{e.properties.eventName}</li>)}
      </ul>
    </>
  )
}

export default ListEvents;