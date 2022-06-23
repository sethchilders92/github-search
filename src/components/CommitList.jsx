import React from 'react';
import { useQuery } from 'react-query';
import List from '@mui/material/List';
import { getRecentCommits } from '../services/api';
import { formatCommits } from '../utils/app-utils';
import { Typography } from '@mui/material';
import CommitItem from './CommitItem';

const CommitList = ({ owner, repo }) => {
  	const { isLoading, isError, error, data: response } = useQuery('commits', () => getRecentCommits(owner, repo))
	
	if (isLoading) {
        return <Typography variant="h5" component="p">Loading...</Typography>;
    }

    if (isError) {
        return <Typography variant="h5" component="p">Error: {error.message}</Typography>;
    }

    const commits = formatCommits(response.data);

	if (commits.length === 0) {
        return <Typography variant="h5" component="p">No commits have been made</Typography>;
	}

	return (
		<List>
			{commits.map(({ commit, committer }, i) => (
				<CommitItem key={i} commit={commit} committer={committer} />
			))}
		</List>
	)
};

export default CommitList;
