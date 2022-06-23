import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Typography } from '@mui/material';
import RepoCard from './RepoCard';
import { getUserRepos } from '../services/api';
import { sortByStarCount } from '../utils/app-utils';

const RepoList = ({ searchText }) => {
    const [selectedRepo, setSelectedRepo] = useState(null);
    const { isLoading, isError, error, data: response } = useQuery(searchText, () => getUserRepos(searchText))

    if (isLoading) {
        return <Typography variant="h5" component="p">Loading...</Typography>;
    }

    if (isError) {
        return <Typography variant="h5" component="p">Error: {error.message}</Typography>;
    }

    if (response.data.length === 0) {
        return <Typography variant="h5" component="p">Sorry, no users were found</Typography>;
    }

    const sortedRepos = response.data.sort(sortByStarCount);

    return (
        <>
            {sortedRepos.map(({ name, description, stargazers_count, owner }, i) => (
              <RepoCard
                key={i}
                name={name} 
                description={description} 
                stars={stargazers_count}
                accountDetails={owner}
                selectedRepo={selectedRepo}
                setSelectedRepo={setSelectedRepo}
              />
          ))}
        </>
    )
}

export default RepoList;
