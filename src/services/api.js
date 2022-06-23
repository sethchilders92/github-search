import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `token ${process.env.REACT_APP_GH}`
      }
});

export const getUserRepos = username => axiosInstance.get(`/users/${username}/repos`)

export const getRecentCommits = (owner, repo) => axiosInstance.get(`/repos/${owner}/${repo}/commits`);
