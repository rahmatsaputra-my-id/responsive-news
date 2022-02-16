_handlerGetTopHeadlinesGeneral = async () => {
   try {
      // const config = {
      //    headers: {
      //       Authorization: `Bearer ${accessToken}`,
      //       'x-api-Key': baseUrlContentApiKey,
      //       'Channel': 'mobile',
      //       'X-localization': language,
      //       'Content-Type': 'application/json',
      //    }
      // };

      const url = `${baseURL}/top-headlines?country=${country}&category=general&apiKey=${apiKey}&pageSize=8`;
      const result = await axios.get(url);

      return result.data;
   } catch (err) {
      console.log('Action.js@_handlerGetTopHeadlinesGeneral', err);

      let errorResponse = {
         isError: true
      };
      return errorResponse;
   }
}

_handlerGetTopHeadlinesBusiness = async () => {
   try {
      const url = `${baseURL}/top-headlines?country=${country}&category=business&apiKey=${apiKey}&pageSize=7`;
      const result = await axios.get(url);

      return result.data;
   } catch (err) {
      console.log('Action.js@_handlerGetTopHeadlinesBusiness', err);

      let errorResponse = {
         isError: true
      };
      return errorResponse;
   }
}

_handlerGetTopHeadlinesSports = async () => {
   try {
      const url = `${baseURL}/top-headlines?country=${country}&category=sports&apiKey=${apiKey}&pageSize=13`;
      const result = await axios.get(url);

      return result.data;
   } catch (err) {
      console.log('Action.js@_handlerGetTopHeadlinesSports', err);

      let errorResponse = {
         isError: true
      };
      return errorResponse;
   }
}

_handlerGetTopHeadlinesTechnology = async () => {
   try {
      const url = `${baseURL}/top-headlines?country=${country}&category=technology&apiKey=${apiKey}&pageSize=13`;
      const result = await axios.get(url);

      return result.data;
   } catch (err) {
      console.log('Action.js@_handlerGetTopHeadlinesSports', err);

      let errorResponse = {
         isError: true
      };
      return errorResponse;
   }
}

_handlerGetTopHeadlinesEntertainment = async () => {
   try {
      const url = `${baseURL}/top-headlines?country=${country}&category=entertainment&apiKey=${apiKey}&pageSize=13`;
      const result = await axios.get(url);

      return result.data;
   } catch (err) {
      console.log('Action.js@_handlerGetTopHeadlinesEntertainment', err);

      let errorResponse = {
         isError: true
      };
      return errorResponse;
   }
}

_handlerGetTopHeadlinesHealth = async () => {
   try {
      const url = `${baseURL}/top-headlines?country=${country}&category=health&apiKey=${apiKey}&pageSize=13`;
      const result = await axios.get(url);

      return result.data;
   } catch (err) {
      console.log('Action.js@_handlerGetTopHeadlinesHealth', err);

      let errorResponse = {
         isError: true
      };
      return errorResponse;
   }
}

_handlerGetTopHeadlinesScience = async () => {
   try {
      const url = `${baseURL}/top-headlines?country=${country}&category=science&apiKey=${apiKey}&pageSize=13`;
      const result = await axios.get(url);

      return result.data;
   } catch (err) {
      console.log('Action.js@_handlerGetTopHeadlinesScience', err);

      let errorResponse = {
         isError: true
      };
      return errorResponse;
   }
}
