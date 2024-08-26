// const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec']

// const formatDate = function(dateString) {
//   const date = new Date(dateString);
//   const day = date.getDate();
//   const month = monthNames[date.getMonth()];
//   const year = date.getFullYear();
//   return `${day} ${month} ${year}`;
// }

// export default formatDate;




// import React from 'react';


const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};
export default formatDate;
