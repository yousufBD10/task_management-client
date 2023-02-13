import { useQuery } from '@tanstack/react-query';
import React from 'react';

const WorkspaceDashboard = () => {
  
      const { data: allWorkspace = [] } = useQuery({
        queryKey: ['allworkspace'],
        queryFn: async () => {
          const res = await fetch(process.env.REACT_APP_SERVER_URL + `/allworkspace`,{
              method: "GET",
              headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              }},
          );
          const data = await res.json();
          return data;
        },
      });
    return (
        <div>
            
        </div>
    );
};

export default WorkspaceDashboard;