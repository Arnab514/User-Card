// import React from 'react';

// const UserCard = ({ user }) => {
//   const powerLevel = Math.abs(parseFloat(user.location.coordinates.latitude) * 10);
//   const speedLevel = Math.abs(parseFloat(user.location.coordinates.longitude) * 0.8);
  
//   return (
//     <div className="max-w-2xl w-full m-4 relative group">
//       {/* Animated border gradient */}
//       <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
      
//       {/* Main card */}
//       <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl shadow-2xl overflow-hidden border border-blue-500/20 backdrop-blur-xl">
//         <div className="flex flex-col md:flex-row p-8 gap-8 items-center">
//           {/* Image container - made wider than tall */}
//           <div className="relative shrink-0">
//             <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-75"></div>
//             <div className="relative">
//               <img
//                 src={user.picture.large}
//                 alt={`${user.name.first} ${user.name.last}`}
//                 className="w-48 h-48 rounded-lg object-cover shadow-2xl transform group-hover:scale-105 transition-all duration-300"
//               />
//               {/* Level indicator */}
//               <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg border-2 border-blue-400">
//                 LVL {user.dob.age}
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="space-y-6 flex-1">
//             {/* Name and title */}
//             <div>
//               <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
//                 {user.name.first} {user.name.last}
//               </h1>
//               <div className="flex flex-wrap items-center gap-2">
//                 <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
//                   @{user.login.username}
//                 </span>
//                 <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
//                   {user.nat} Server
//                 </span>
//               </div>
//             </div>

//             {/* Location Stats */}
//             <div className="bg-slate-800/50 p-3 rounded-lg border border-blue-500/20 space-y-2">
//               <div className="text-sm text-blue-400">Current Location</div>
//               <div className="grid grid-cols-2 gap-2 text-blue-100">
//                 <div>{user.location.city}</div>
//                 <div>{user.location.country}</div>
//               </div>
//               <div className="text-xs text-cyan-400">
//                 Time Zone: {user.location.timezone.description}
//               </div>
//             </div>

//             {/* Stats */}
//             <div className="space-y-3">
//               {/* Contact Info */}
//               <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-blue-500/20">
//                 <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
//                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 <p className="text-sm text-blue-100">{user.email}</p>
//               </div>

//               {/* Stats bars */}
//               <div className="grid grid-cols-2 gap-3">
//                 <div className="bg-slate-800/50 p-2 rounded-lg border border-blue-500/20">
//                   <div className="text-sm text-blue-400 mb-1">Power</div>
//                   <div className="w-full bg-slate-700 rounded-full h-2">
//                     <div 
//                       className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
//                       style={{ width: `${powerLevel}%` }}
//                     ></div>
//                   </div>
//                 </div>
//                 <div className="bg-slate-800/50 p-2 rounded-lg border border-blue-500/20">
//                   <div className="text-sm text-blue-400 mb-1">Speed</div>
//                   <div className="w-full bg-slate-700 rounded-full h-2">
//                     <div 
//                       className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
//                       style={{ width: `${speedLevel}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Player Stats */}
//               <div className="grid grid-cols-2 gap-3">
//                 <div className="bg-slate-800/50 p-2 rounded-lg border border-blue-500/20">
//                   <div className="text-xs text-blue-400">Account Age</div>
//                   <div className="text-lg text-blue-100">{user.registered.age} years</div>
//                 </div>
//                 <div className="bg-slate-800/50 p-2 rounded-lg border border-blue-500/20">
//                   <div className="text-xs text-blue-400">Player ID</div>
//                   <div className="text-lg text-blue-100">{user.id.value || 'N/A'}</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserCard;


import React from 'react';

const UserCard = ({ user, isLoading }) => {
  const powerLevel = Math.abs(parseFloat(user.location.coordinates.latitude) * 10);
  const speedLevel = Math.abs(parseFloat(user.location.coordinates.longitude) * 0.8);
  
  // Function to get icon for gender
  const GenderIcon = () => (
    user.gender === 'female' ? (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="5" strokeWidth="2"/>
        <path strokeLinecap="round" strokeWidth="2" d="M12 13v8M9 18h6"/>
      </svg>
    ) : (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="5" strokeWidth="2"/>
        <path strokeLinecap="round" strokeWidth="2" d="M12 13v8M12 18l-3-3M12 18l3-3"/>
      </svg>
    )
  );

  const PhoneIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  );

  return (
    <div className="relative p-4 w-full max-w-4xl mx-auto">
      {/* Cyberpunk margin styling remains the same */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-blue-500 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-500 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-500 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-blue-500 animate-pulse"></div>
      
      <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      <div className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      <div className="absolute inset-y-4 left-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50"></div>
      <div className="absolute inset-y-4 right-0 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50"></div>

      <div className={`w-full relative group ${isLoading ? 'animate-pulse opacity-70' : 'animate-fade-in'}`}>
        <div className="absolute inset-0 overflow-hidden rounded-xl group-hover:opacity-0 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/20 to-transparent h-[200%] animate-scan"></div>
        </div>

        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-75 
          group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
        
        <div className={`
          relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl 
          shadow-2xl overflow-hidden border border-blue-500/20 backdrop-blur-xl
          transition-all duration-500 transform
          ${isLoading ? 'blur-sm scale-95' : 'blur-0 scale-100'}
          group-hover:scale-[1.02] group-hover:shadow-blue-500/25
        `}>
          <div className="flex flex-col md:flex-row p-8 gap-8 items-center">
            {/* Image container */}
            <div className="relative shrink-0 w-48">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-75"></div>
              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -translate-x-full animate-shimmer group-hover:animate-none"></div>
                <img
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                  className="w-48 h-48 rounded-lg object-cover shadow-2xl transform group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg border-2 border-blue-400 animate-bounce-slow">
                  LVL {user.dob.age}
                </div>
              </div>
            </div>

            <div className={`space-y-6 flex-1 min-w-0 ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {user.name.first} {user.name.last}
                </h1>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                    @{user.login.username}
                  </span>
                  <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
                    {user.nat} Server
                  </span>
                  {/* Added gender badge */}
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium flex items-center gap-1">
                    <GenderIcon />
                    {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {/* Contact Info Section */}
                <div className="space-y-2">
                  {/* Email */}
                  <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-blue-500/20">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-blue-100 truncate">{user.email}</p>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-blue-500/20">
                    <PhoneIcon />
                    <div className="flex flex-col">
                      <p className="text-sm text-blue-100">{user.phone} (Home)</p>
                      {/* <p className="text-sm text-blue-100">{user.cell} (Cell)</p> */}
                    </div>
                  </div>
                </div>

                {/* Location Stats */}
                <div className="bg-slate-800/50 p-3 rounded-lg border border-blue-500/20 space-y-2">
                  <div className="text-sm text-blue-400">Current Location</div>
                  <div className="grid grid-cols-2 gap-2 text-blue-100">
                    <div>{user.location.city}</div>
                    <div>{user.location.country}</div>
                  </div>
                  <div className="text-xs text-cyan-400">
                    Time Zone: {user.location.timezone.description}
                  </div>
                </div>

                {/* Stats bars */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/50 p-2 rounded-lg border border-blue-500/20">
                    <div className="text-sm text-blue-400 mb-1">Power</div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${powerLevel}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-2 rounded-lg border border-blue-500/20">
                    <div className="text-sm text-blue-400 mb-1">Speed</div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${speedLevel}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Player Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/50 p-2 rounded-lg border border-blue-500/20">
                    <div className="text-xs text-blue-400">Account Age</div>
                    <div className="text-lg text-blue-100">{user.registered.age} years</div>
                  </div>
                  <div className="bg-slate-800/50 p-2 rounded-lg border border-blue-500/20">
                    <div className="text-xs text-blue-400">Player ID</div>
                    <div className="text-lg text-blue-100">{user.id.value || 'N/A'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;