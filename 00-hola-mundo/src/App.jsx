import { TwitterFollowCard } from './TwitterFollowCard';

import './App.css';

const users = [
  {
    username: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true,
  },
  {
    username: 'pheralb',
    name: 'Pablo Hernandez',
    isFollowing: false,
  },
  {
    username: 'clint',
    name: 'Clint Stevens',
    isFollowing: true,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ username, name, isFollowing }) => (
        <TwitterFollowCard key={username} username={username} initialIsFollowing={isFollowing}>
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
