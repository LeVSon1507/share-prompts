'use client';

import Profile from '@components/Profile';
import React from 'react';

const UserProfile = ({ params }) => {
   const searchParams = useSearchParams();
   const userName = searchParams.get('name');

   const [userPosts, setUserPosts] = useState([]);

   useEffect(() => {
      if (params?.id)
         (async () => {
            const response = await fetch(`/api/users/${params?.id}/posts`);
            const data = await response.json();

            setUserPosts(data);
         })();
   }, [params.id]);

   return (
      <Profile
         name={userName}
         desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
         data={userPosts}
      />
   );
};

export default UserProfile;
