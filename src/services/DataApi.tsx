import axios from 'axios';
import type { Post } from '../components/Dashboard/Cards/post';


const backendUrl: string | undefined = `https://jsonplaceholder.typicode.com/posts`


const fetchdataAPI = async (): Promise<Post[]> => {
      if (!backendUrl) {
    throw new Error('API endpoint is not defined');
  }
  try{
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
  } catch (error) {
    console.error('Error in fetching details', error);
    throw error;
  }
};

export default fetchdataAPI;
