
// console.log('state', document.readyState);

document.addEventListener('readystatechange', (event) => {
   console.log('readystatechange', document.readyState);

});

document.addEventListener('DOMContentLoaded', (event) => {
   console.log('DOMContentLoaded', document.readyState);
});


// :: 1.0 Preloader Active Code
// var browserWindow = $(window);
// console.log('browserWindow', browserWindow);
// browserWindow.on('load', function () {
//    $('#preloader').fadeOut('slow', function () {
//       $(this).remove();
//    });
// });


// _renderPlaceholder = async () => {
//    console.log('woi');

//    let placeholderLeftTopDataFirstSection = `
//       <div class="placeholder-left-container shimmer"></div>
//    `;
//    leftTopFirstSection.innerHTML = placeholderLeftTopDataFirstSection;
// }

// _renderPlaceholder();


window.addEventListener("load", async function () {
   // $('#preloader').fadeOut('slow', function () {
      // window.addEventListener(this).remove();
   // });

   _renderFirstSection();
   _renderSecondSection();
   _renderThirdSection();
   _renderFourthSection();
   _renderFifthSection();
   _renderSixthSection();
   _renderSeventhSection();
});


_renderFirstSection = async () => {
   const result = await _handlerGetTopHeadlinesGeneral();
   const { articles } = result;

   if (!result.isError) {

      const leftTopData = articles[0];
      const rightTopData = articles.slice(1, 4);
      const bottomData = articles.slice(4, 9);

      if (leftTopData) {
         const {
            url,
            urlToImage,
            source,
            title,
            description,
            content,
            publishedAt
         } = leftTopData;

         let elementLeftTopDataFirstSection = `
            <a target="_blank" href="${url}" class="left-content">
               <section class="content-card">
                  <section class="top-content-card">
                     <h2>${source.name}</h2>
                     <p>${moment(publishedAt)}</p>
                  </section>
   
                  <section class="bottom-content-card">
                     <h1>${title || ""}</h1>
                     <h2>${isContent(content, description)}</h2>
                  </section>
               </section>
               <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
            </a>
         `;
         leftTopFirstSection.innerHTML = elementLeftTopDataFirstSection;
      }

      if (rightTopData) {
         rightTopData.map((items, index) => {
            const {
               url,
               source,
               title,
               publishedAt
            } = items;

            let elementRightTopDataFirstSection = `
               <a target="_blank" href="${url}" class="right-content">
                  <section class="right-content-card">
                     <h1>${title}</h1>
   
                     <section class="source">
                        <p>${source.name}</p>
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;

            rightTopFirstSection.innerHTML += elementRightTopDataFirstSection;
         });
      }

      if (bottomData) {
         bottomData.map((items, index) => {
            const {
               url,
               urlToImage,
               source,
               title,
               author,
               publishedAt
            } = items;

            let elementBottomDataFirstSection = `
               <a target="_blank" href="${url}" class="bottom-card">
                  <div class="image-wrapper">
                     <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
                  </div>
   
                  <section class="content-card">
                     <h2>${source.name}</h2>
                     <h1>${title}</h1>
                     <section class="source">
                        <p>${popString(author)}</p>
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;

            bottomFirstSection.innerHTML += elementBottomDataFirstSection;
         });
      }

   }
}

_renderSecondSection = async () => {
   const result = await _handlerGetTopHeadlinesBusiness();
   const { articles } = result;

   if (!result.isError) {

      const leftData = articles.slice(0, 3);
      const middleData = articles[3];
      const rightData = articles.slice(4, 7);

      if (leftData) {
         leftData.map((items, index) => {
            const {
               source,
               title,
               publishedAt,
               url
            } = items;

            let elementLeftDataSecondSection = `
               <a target="_blank" href="${url}" class="left-content-card">
                  <h2>${source.name}</h2>
                  <h1>${title}</h1>
                  <p>${moment(publishedAt)}</p>
               </a>
            `;

            leftSecondSection.innerHTML += elementLeftDataSecondSection;
         })
      }

      if (middleData) {
         const {
            url,
            source,
            title,
            content,
            description,
            publishedAt
         } = middleData;

         let elementMiddleDataSecondSection = `
            <a target="_blank" href="${url}" class="middle-content-card">
               <section class="text-content">
                  <p>${source.name}</p>
                  <h1>${title}</h1>
                  <h2>${isContent(content, description)}</h2>
               </section>
               <p>${moment(publishedAt)}</p>
            </a>
         `;

         middleSecondSection.innerHTML += elementMiddleDataSecondSection;
      }

      if (rightData) {
         rightData.map((items, index) => {
            const {
               urlToImage,
               source,
               title,
               publishedAt,
               url
            } = items;

            let elementRightDataSecondSection = `
               <a target="_blank" href="${url}" class="right-content-card">
                  <div class="image-wrapper">
                     <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
                  </div>
                  <section class="content-card">
                     <p>${source.name}</p>
                     <h1>${title}</h1>
                     <section class="source">
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;
            rightSecondSection.innerHTML += elementRightDataSecondSection;
         })
      }
   }
}

_renderThirdSection = async () => {
   const result = await _handlerGetTopHeadlinesSports();
   const { articles } = result;

   if (!result.isError) {

      const topData = articles.slice(0, 4);
      const midData = articles.slice(4, 8);
      const leftBottomData = articles.slice(8, 12);
      const rightBottomData = articles[12];

      if (topData) {
         topData.map((items, index) => {
            const {
               source,
               title,
               url,
               urlToImage,
               author,
               publishedAt
            } = items;

            let elementTopDataThirdSection = `
               <a target="_blank" href="${url}" class="top-card">
                  <div class="image-wrapper">
                     <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
                  </div>
                  <section class="content-card">
                     <h2>${source.name}</h2>
                     <h1>${title}</h1>
                     <section class="source">
                        <p>${popString(author)}</p>
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;

            topThirdSection.innerHTML += elementTopDataThirdSection;
         })
      }

      if (midData) {
         midData.map((items, index) => {
            const {
               source,
               title,
               url,
               urlToImage,
               author,
               publishedAt
            } = items;

            let elementMiddleDataThirdSection = `
               <a target="_blank" href="${url}" class="top-card">
                  <div class="image-wrapper">
                     <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
                  </div>
                  <section class="content-card">
                     <h2>${source.name}</h2>
                     <h1>${title}</h1>
                     <section class="source">
                        <p>${popString(author)}</p>
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;

            middleThirdSection.innerHTML += elementMiddleDataThirdSection;
         })
      }


      if (leftBottomData) {
         leftBottomData.map((items, index) => {
            const {
               author,
               title,
               source,
               publishedAt,
               url,
               urlToImage
            } = items;

            let elementLeftBottomDataThirdSection = `
               <a target="_blank" href="${url}" class="left-card">
                  <div class="image-wrapper">
                     <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
                  </div>
                  <section class="content-card">
                     <h2>${source.name}</h2>
                     <h1>${title}</h1>
                     <section class="source">
                        <p>${popString(author)}</p>
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;
            leftBottomThirdSection.innerHTML += elementLeftBottomDataThirdSection;
         })
      }

      if (rightBottomData) {
         const {
            author,
            url,
            urlToImage,
            source,
            title,
            publishedAt
         } = rightBottomData;

         let elementRightBottomDataThirdSection = `
            <a target="_blank" href="${url}" class="right-card">
               <div class="image-wrapper">
                  <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
               </div>
               <section class="content-card">
                  <h2>${source.name}</h2>
                  <h1>${title}</h1>
                  <section class="source">
                     <p>${author}</p>
                     <p>${moment(publishedAt)}</p>
                  </section>
               </section>
            </a>
         `;

         rightBottomThirdSection.innerHTML += elementRightBottomDataThirdSection;
      }

   }
}

_renderFourthSection = async () => {
   const result = await _handlerGetTopHeadlinesTechnology();
   const { articles } = result;

   if (!result.isError) {

      const topData = articles.slice(0, 4);
      const midData = articles.slice(4, 8);
      const leftBottomData = articles.slice(8, 12);
      const rightBottomData = articles[12];

      if (topData) {
         topData.map((items, index) => {
            const {
               source,
               title,
               url,
               urlToImage,
               author,
               publishedAt
            } = items;

            let elementTopDataFourthSection = `
               <a target="_blank" href="${url}" class="top-card">
                  <div class="image-wrapper">
                     <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
                  </div>
                  <section class="content-card">
                     <h2>${source.name}</h2>
                     <h1>${title}</h1>
                     <section class="source">
                        <p>${popString(author)}</p>
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;

            topFourthSection.innerHTML += elementTopDataFourthSection;
         })
      }

      if (midData) {
         midData.map((items, index) => {
            const {
               source,
               title,
               url,
               urlToImage,
               author,
               publishedAt
            } = items;

            let elementMiddleDataFourthSection = `
               <a target="_blank" href="${url}" class="top-card">
                  <div class="image-wrapper">
                     <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'"  alt="">
                  </div>
                  <section class="content-card">
                     <h2>${source.name}</h2>
                     <h1>${title}</h1>
                     <section class="source">
                        <p>${popString(author)}</p>
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;

            middleFourthSection.innerHTML += elementMiddleDataFourthSection;
         })
      }


      if (leftBottomData) {
         leftBottomData.map((items, index) => {
            const {
               author,
               title,
               source,
               publishedAt,
               url,
               urlToImage
            } = items;

            let elementLeftBottomDataFourthSection = `
               <a target="_blank" href="${url}" class="left-card">
                  <div class="image-wrapper">
                     <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
                  </div>
                  <section class="content-card">
                     <h2>${source.name}</h2>
                     <h1>${title}</h1>
                     <section class="source">
                        <p>${popString(author)}</p>
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;
            leftBottomFourthSection.innerHTML += elementLeftBottomDataFourthSection;
         })
      }

      if (rightBottomData) {
         const {
            author,
            url,
            urlToImage,
            source,
            title,
            publishedAt
         } = rightBottomData;

         let elementRightBottomDataFourthSection = `
            <a target="_blank" href="${url}" class="right-card">
               <div class="image-wrapper">
                  <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
               </div>
               <section class="content-card">
                  <h2>${source.name}</h2>
                  <h1>${title}</h1>
                  <section class="source">
                     <p>${popString(author)}</p>
                     <p>${moment(publishedAt)}</p>
                  </section>
               </section>
            </a>
         `;

         rightBottomFourthSection.innerHTML += elementRightBottomDataFourthSection;
      }

   }
}

_renderFifthSection = async () => {
   const result = await _handlerGetTopHeadlinesEntertainment();
   const { articles } = result;

   if (!result.isError) {

      const topData = articles.slice(0, 4);
      const midData = articles.slice(4, 8);
      const leftBottomData = articles.slice(8, 12);
      const rightBottomData = articles[12];

      if (topData) {
         topData.map((items, index) => {
            const {
               source,
               title,
               url,
               urlToImage,
               author,
               publishedAt
            } = items;

            let elementTopDataFifthSection = `
               <a target="_blank" href="${url}" class="top-card">
                  <div class="image-wrapper">
                     <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
                  </div>
                  <section class="content-card">
                     <h2>${source.name}</h2>
                     <h1>${title}</h1>
                     <section class="source">
                        <p>${popString(author)}</p>
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;

            topFifthSection.innerHTML += elementTopDataFifthSection;
         })
      }

      if (midData) {
         midData.map((items, index) => {
            const {
               source,
               title,
               url,
               urlToImage,
               author,
               publishedAt
            } = items;

            let elementMiddleDataFifthSection = `
               <a target="_blank" href="${url}" class="top-card">
                  <div class="image-wrapper">
                     <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
                  </div>
                  <section class="content-card">
                     <h2>${source.name}</h2>
                     <h1>${title}</h1>
                     <section class="source">
                        <p>${popString(author)}</p>
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;

            middleFifthSection.innerHTML += elementMiddleDataFifthSection;
         })
      }


      if (leftBottomData) {
         leftBottomData.map((items, index) => {
            const {
               author,
               title,
               source,
               publishedAt,
               url,
               urlToImage
            } = items;

            let elementLeftBottomDataFifthSection = `
               <a target="_blank" href="${url}" class="left-card">
                  <div class="image-wrapper">
                     <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
                  </div>
                  <section class="content-card">
                     <h2>${source.name}</h2>
                     <h1>${title}</h1>
                     <section class="source">
                        <p>${popString(author)}</p>
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;
            leftBottomFifthSection.innerHTML += elementLeftBottomDataFifthSection;
         })
      }

      if (rightBottomData) {
         const {
            author,
            url,
            urlToImage,
            source,
            title,
            publishedAt
         } = rightBottomData;

         let elementRightBottomDataFifthSection = `
            <a target="_blank" href="${url}" class="right-card">
               <div class="image-wrapper">
                  <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
               </div>
               <section class="content-card">
                  <h2>${source.name}</h2>
                  <h1>${title}</h1>
                  <section class="source">
                     <p>${author}</p>
                     <p>${moment(publishedAt)}</p>
                  </section>
               </section>
            </a>
         `;

         rightBottomFifthSection.innerHTML += elementRightBottomDataFifthSection;
      }

   }
}

_renderSixthSection = async () => {
   const result = await _handlerGetTopHeadlinesHealth();
   const { articles } = result;

   if (!result.isError) {

      const topData = articles.slice(0, 4);
      const midData = articles.slice(4, 8);
      const leftBottomData = articles.slice(8, 12);
      const rightBottomData = articles[12];

      if (topData) {
         topData.map((items, index) => {
            const {
               source,
               title,
               url,
               urlToImage,
               author,
               publishedAt
            } = items;

            let elementTopDataSixthSection = `
               <a target="_blank" href="${url}" class="top-card">
                  <div class="image-wrapper">
                     <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
                  </div>
                  <section class="content-card">
                     <h2>${source.name}</h2>
                     <h1>${title}</h1>
                     <section class="source">
                        <p>${popString(author)}</p>
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;

            topSixthSection.innerHTML += elementTopDataSixthSection;
         })
      }

      if (midData) {
         midData.map((items, index) => {
            const {
               source,
               title,
               url,
               urlToImage,
               author,
               publishedAt
            } = items;

            let elementMiddleDataSixthSection = `
               <a target="_blank" href="${url}" class="top-card">
                  <div class="image-wrapper">
                     <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
                  </div>
                  <section class="content-card">
                     <h2>${source.name}</h2>
                     <h1>${title}</h1>
                     <section class="source">
                        <p>${popString(author)}</p>
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;

            middleSixthSection.innerHTML += elementMiddleDataSixthSection;
         })
      }


      if (leftBottomData) {
         leftBottomData.map((items, index) => {
            const {
               author,
               title,
               source,
               publishedAt,
               url,
               urlToImage
            } = items;

            let elementLeftBottomDataSixthSection = `
               <a target="_blank" href="${url}" class="left-card">
                  <div class="image-wrapper">
                     <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
                  </div>
                  <section class="content-card">
                     <h2>${source.name}</h2>
                     <h1>${title}</h1>
                     <section class="source">
                        <p>${popString(author)}</p>
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;
            leftBottomSixthSection.innerHTML += elementLeftBottomDataSixthSection;
         })
      }

      if (rightBottomData) {
         const {
            author,
            url,
            urlToImage,
            source,
            title,
            publishedAt
         } = rightBottomData;

         let elementRightBottomDataSixthSection = `
            <a target="_blank" href="${url}" class="right-card">
               <div class="image-wrapper">
                  <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
               </div>
               <section class="content-card">
                  <h2>${source.name}</h2>
                  <h1>${title}</h1>
                  <section class="source">
                     <p>${popString(author)}</p>
                     <p>${moment(publishedAt)}</p>
                  </section>
               </section>
            </a>
         `;

         rightBottomSixthSection.innerHTML += elementRightBottomDataSixthSection;
      }

   }
}

_renderSeventhSection = async () => {
   const result = await _handlerGetTopHeadlinesScience();
   const { articles } = result;

   if (!result.isError) {

      const topData = articles.slice(0, 4);
      const midData = articles.slice(4, 8);
      const leftBottomData = articles.slice(8, 12);
      const rightBottomData = articles[12];

      if (topData) {
         topData.map((items, index) => {
            const {
               source,
               title,
               url,
               urlToImage,
               author,
               publishedAt
            } = items;

            let elementTopDataSeventhSection = `
               <a target="_blank" href="${url}" class="top-card">
                  <div class="image-wrapper">
                     <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
                  </div>
                  <section class="content-card">
                     <h2>${source.name}</h2>
                     <h1>${title}</h1>
                     <section class="source">
                        <p>${popString(author)}</p>
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;

            topSeventhSection.innerHTML += elementTopDataSeventhSection;
         })
      }

      if (midData) {
         midData.map((items, index) => {
            const {
               source,
               title,
               url,
               urlToImage,
               author,
               publishedAt
            } = items;

            let elementMiddleDataSeventhSection = `
               <a target="_blank" href="${url}" class="top-card">
                  <div class="image-wrapper">
                     <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
                  </div>
                  <section class="content-card">
                     <h2>${source.name}</h2>
                     <h1>${title}</h1>
                     <section class="source">
                        <p>${popString(author)}</p>
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;

            middleSeventhSection.innerHTML += elementMiddleDataSeventhSection;
         })
      }


      if (leftBottomData) {
         leftBottomData.map((items, index) => {
            const {
               author,
               title,
               source,
               publishedAt,
               url,
               urlToImage
            } = items;

            let elementLeftBottomDataSeventhSection = `
               <a target="_blank" href="${url}" class="left-card">
                  <div class="image-wrapper">
                     <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
                  </div>
                  <section class="content-card">
                     <h2>${source.name}</h2>
                     <h1>${title}</h1>
                     <section class="source">
                        <p>${popString(author)}</p>
                        <p>${moment(publishedAt)}</p>
                     </section>
                  </section>
               </a>
            `;
            leftBottomSeventhSection.innerHTML += elementLeftBottomDataSeventhSection;
         })
      }

      if (rightBottomData) {
         const {
            author,
            url,
            urlToImage,
            source,
            title,
            publishedAt
         } = rightBottomData;

         let elementRightBottomDataSeventhSection = `
            <a target="_blank" href="${url}" class="right-card">
               <div class="image-wrapper">
                  <img src="${isImage(urlToImage)}" onerror="this.onerror=null; this.src='${alter}'" alt="">
               </div>
               <section class="content-card">
                  <h2>${source.name}</h2>
                  <h1>${title}</h1>
                  <section class="source">
                     <p>${author}</p>
                     <p>${moment(publishedAt)}</p>
                  </section>
               </section>
            </a>
         `;

         rightBottomSeventhSection.innerHTML += elementRightBottomDataSeventhSection;
      }

   }
}