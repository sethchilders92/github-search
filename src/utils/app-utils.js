export const sortByStarCount = (a, b) => b.stargazers_count - a.stargazers_count;
export const formatCommits = commits => commits.slice(0, 5).map(commit => ({ commit: commit.commit, committer: commit.committer }));
