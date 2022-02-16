
moment = (time) => {
   const fromTime = new Date(time);

   const daysUS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   const daysID = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   const shortMonthsID = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   const shortMonthsUS = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];


   const minutes = (fromTime.getMinutes() < 10 ? '0' : '') + fromTime.getMinutes();
   const hours = fromTime.getHours();
   const date = fromTime.getDate();
   const day = daysID[fromTime.getDay()];
   const month = shortMonthsUS[fromTime.getMonth()];
   const year = fromTime.getFullYear();

   const result = `${day}, ${date} ${month} ${year} ${hours}:${minutes} WIB`;

   return result;
}

const d = new Date();
document.querySelector('#date').innerHTML = moment(d);

popChars = (content) => {
   let data;

   if (content) {
      const openTagPosition = content.search('…');
      data = `${content.substring(0, openTagPosition)}...`
   } else {
      data = '';
   }
   return data;
}

popString = (author) => {
   let temp;

   if (author) {
      if (author.length >= 15) {
         temp = `${author.substring(0, 15)}...`;
      } else {
         temp = author;
      }
   } else {
      temp = '';
   }

   return temp;
}

isImage = (urlToImage) => {
   const temp = urlToImage ? urlToImage : alter;

   return temp;
}

isContent = (content, description) => {
   const temp = content ? popChars(content) : description;

   return temp;
}