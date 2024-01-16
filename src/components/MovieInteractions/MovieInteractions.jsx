// import React from "react";
// import { Link, NavLink } from 'react-router-dom';
// import { Cast } from 'components/Cast/Cast';
// import { Reviews } from 'components/Reviews/Reviews';
// import css from './MovieInteractions.module.css';

// export const MovieInteractions = ({ movie }) => {
  
//   return (
//     <div className={css.movieDetails}>
//       <Link className={css.backLink} to='/movies'>Go back</Link>
//       <Reviews movie={movie}/>
//       <Cast movie={movie}/>
//       <ul className={css.navList}>
//         <li className={css.navLinkItem}>
//           <NavLink 
//             className={({ isActive }) =>
//               `${css.navLink} ${isActive ? css.active : ''}`
//             }
//             to="/movies/cast"
//           >
//             Cast
//           </NavLink>
//         </li>
//         <li className={css.navLinkItem}>
//           <NavLink
//             className={({ isActive }) =>
//               `${css.navLink} ${isActive ? css.active : ''}`
//             }
//             to="/movies/reviews"
//           >
//             Reviews
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };