import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import { Loader2 } from 'lucide-react';

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // New loading state

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
        // Add artificial delay for loading effect
        setTimeout(() => setIsLoading(false), 1500);
      })
      .catch((error) => {
        setError('Failed to load user data');
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-8">
      {error ? (
        <div className="text-red-400 bg-slate-800/90 p-4 rounded-lg shadow-lg border border-red-500/50">
          {error}
        </div>
      ) : !user ? (
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
          <p className="text-blue-400 font-medium animate-pulse">Loading player profile...</p>
        </div>
      ) : (
        <UserCard user={user} isLoading={isLoading} />
      )}
    </div>
  );
};

export default App;