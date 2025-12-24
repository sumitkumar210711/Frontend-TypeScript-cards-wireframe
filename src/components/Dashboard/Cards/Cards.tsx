import { useEffect, useState } from 'react';
import type { JSX } from 'react';
import fetchdataAPI from '../../../services/DataApi';
import type { Post } from './post';
import './cards.css'

const ITEMS_PER_PAGE = 6;

const Cards = (): JSX.Element => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response: Post[] = await fetchdataAPI();
        setPosts(response);
      } catch (error: unknown) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

 const truncateBody = (body?: string, maxWords = 7): string => {
  if (!body) return '';   

  const words = body.split(' ');
  return words.length > maxWords
    ? words.slice(0, maxWords).join(' ') + '...'
    : body;
};

const truncateTitle = (title?: string, maxWords = 8): string => {
  if (!title) return '';   

  const words = title.split(' ');
  return words.length > maxWords
    ? words.slice(0, maxWords).join(' ') + '...'
    : title;
};

const handleCancel = (id: number): void => {
  setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
};



  return (
    <div className="">
      {/* Cards */}
      <div className="ml-36 flex flex-col gap-4 mt-8 mb-10 mr-36">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className=" flex flex-row items-center"
          >
            <div className='rounded-lg w-[100%] p-4 h-24 shadow shadow-xl bg-white'>
                <div className="flex flex-row items-center">
                              <img src="data:image/jpeg;base64,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" 
            className='h-14 w-14 img mr-4'
            />

                        <div className='font-bold text-xl'>
                            {truncateTitle(post.title,6)}
                            <p className="text-gray-600 text-lg font-normal">{truncateBody(post.body, 7)}</p>
                        </div>
                </div>

            </div>
            
            <div>
                <button className='cancel text-red-600 bg-white text-2xl h-14 w-14 ml-6'
                

                onClick={()=>handleCancel(post.id)}
                >X </button>

                </div>
          </div>

         
        ))}
      </div>

 
      <div className="flex gap-2 justify-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Cards;
