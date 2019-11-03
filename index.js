const express = require('express')
const app = express()
const port = 3000 ;



const arrayphoto = ['https://images-na.ssl-images-amazon.com/images/I/71rNJQ2g-EL._SY606_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/8150KG7y2EL.jpg',
                    'https://cdn.shopify.com/s/files/1/1416/8662/products/titanic_1997_french_grande_original_film_art_2000x.jpg?v=1558250674',
                    'https://cdn11.bigcommerce.com/s-cfnl8/images/stencil/1280x1280/products/810/1474/retro-pulp-fiction-movie-poster-lg__61425.1386572954.jpg?c=2&imbypass=on',
                    'https://cloud10.todocoleccion.online/cine-posters-carteles/tc/2015/07/13/20/50292981.jpg',
                    'http://www.businessinsider.com/image/526de59deab8ea2f3285b2b4-1200-2000/hunger%20games%20catching%20fire%20poster.jpg',
                    'http://cdn.shopify.com/s/files/1/1148/8924/products/MPW-102952-a_1024x1024.jpg?v=1556255275',
                    'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/star-is-born-web.jpg',
                    'https://ih0.redbubble.net/image.28610679.8540/mp,840x830,matte,f8f8f8,t-pad,750x1000,f8f8f8.u1.jpg',
                    'https://images.icanvas.com/3d/vertical-1/1000-750-f4f5f6/CKG482.jpg?t=1568160995',
                    'https://hunterlangston.com/wp-content/uploads/2018/09/tombstone_red_mockup.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPgYN54IVSHJPSlKxHknjNNZ5-KJlarVOgNIv4ULsg3zj4pc4&s',
                    'https://rukminim1.flixcart.com/image/832/832/poster/6/m/k/medium-andathedmov1027-ananyadesigns-the-usual-suspects-quote-original-imaegts2fmfetwmq.jpeg?q=70',
                    'https://homebird.ie/wp-content/uploads/2018/04/Sing-Street.jpg',
                    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/62c6b813642899.5627b01c46811.jpg',
                    'https://thumbs.imagekind.com/4673972_650/No-My-Taxi-Driver-minimal-movie-poster_art.jpg?v=1569349928',
                    'https://images.fineartamerica.com/images-medium-large-5/no330-my-speed-minimal-movie-poster-chungkong-art.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6rLLGY-HajfgciGL9_V6v1C6HCe-ONu8oM0DVYGoUF_c_lIqZrw&s',
                    'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/no997-my-isle-of-dogs-minimal-movie-poster-chungkong-art.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7_-KAr3J5G-n8RrFExN7eMlUxpRRB-h5rghTijt1FOQktCgIdJQ&s',
                    'https://secure.img1-fg.wfcdn.com/im/60929772/resize-h700-p1-w700%5Ecompr-r85/2367/23676621/%2527Back+to+the+Future+Minimal+Movie+Poster-Part+I%2527+Vintage+Advertisement+on+Wrapped+Canvas.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyi9kbgHI-hAm6C28P0Jhdb4w-wLR3sW64Z_kQyMJN1kY5Miq41g&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYnAwAZcQEG0xEp8MlLcOy5IL_305lLN3JqzUf3ELJjHONZ0ev&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8PgAGhJxt5mzFv_bUp4DDT0ruScQV1NVRN0OJt27vRXK0CU5&s',
                    'https://img.posterlounge.co.uk/img/products/630000/622592/622592_poster_l.jpg',
                    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/00b2df5998098.5602596e2f86f.jpg',
                    'https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg',
                    'https://images.fineartamerica.com/images-medium-large-5/no330-my-speed-minimal-movie-poster-chungkong-art.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6rLLGY-HajfgciGL9_V6v1C6HCe-ONu8oM0DVYGoUF_c_lIqZrw&s',
                    'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/no997-my-isle-of-dogs-minimal-movie-poster-chungkong-art.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7_-KAr3J5G-n8RrFExN7eMlUxpRRB-h5rghTijt1FOQktCgIdJQ&s',
                    'https://secure.img1-fg.wfcdn.com/im/60929772/resize-h700-p1-w700%5Ecompr-r85/2367/23676621/%2527Back+to+the+Future+Minimal+Movie+Poster-Part+I%2527+Vintage+Advertisement+on+Wrapped+Canvas.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyi9kbgHI-hAm6C28P0Jhdb4w-wLR3sW64Z_kQyMJN1kY5Miq41g&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYnAwAZcQEG0xEp8MlLcOy5IL_305lLN3JqzUf3ELJjHONZ0ev&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8PgAGhJxt5mzFv_bUp4DDT0ruScQV1NVRN0OJt27vRXK0CU5&s',
                    'https://img.posterlounge.co.uk/img/products/630000/622592/622592_poster_l.jpg',
                    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/00b2df5998098.5602596e2f86f.jpg',
                    'https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg',
                    'https://cdn11.bigcommerce.com/s-cfnl8/images/stencil/1280x1280/products/810/1474/retro-pulp-fiction-movie-poster-lg__61425.1386572954.jpg?c=2&imbypass=on',
                    'https://cloud10.todocoleccion.online/cine-posters-carteles/tc/2015/07/13/20/50292981.jpg',
                    'http://www.businessinsider.com/image/526de59deab8ea2f3285b2b4-1200-2000/hunger%20games%20catching%20fire%20poster.jpg',
                    'http://cdn.shopify.com/s/files/1/1148/8924/products/MPW-102952-a_1024x1024.jpg?v=1556255275',
                    'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/star-is-born-web.jpg',
                    'https://ih0.redbubble.net/image.28610679.8540/mp,840x830,matte,f8f8f8,t-pad,750x1000,f8f8f8.u1.jpg',
                    'https://images.icanvas.com/3d/vertical-1/1000-750-f4f5f6/CKG482.jpg?t=1568160995',
                    'https://hunterlangston.com/wp-content/uploads/2018/09/tombstone_red_mockup.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPgYN54IVSHJPSlKxHknjNNZ5-KJlarVOgNIv4ULsg3zj4pc4&s',
                    'https://rukminim1.flixcart.com/image/832/832/poster/6/m/k/medium-andathedmov1027-ananyadesigns-the-usual-suspects-quote-original-imaegts2fmfetwmq.jpeg?q=70',
                    'https://homebird.ie/wp-content/uploads/2018/04/Sing-Street.jpg',
                    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/62c6b813642899.5627b01c46811.jpg',
                    'https://thumbs.imagekind.com/4673972_650/No-My-Taxi-Driver-minimal-movie-poster_art.jpg?v=1569349928',
                    'https://images.fineartamerica.com/images-medium-large-5/no330-my-speed-minimal-movie-poster-chungkong-art.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6rLLGY-HajfgciGL9_V6v1C6HCe-ONu8oM0DVYGoUF_c_lIqZrw&s',
                    'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/no997-my-isle-of-dogs-minimal-movie-poster-chungkong-art.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7_-KAr3J5G-n8RrFExN7eMlUxpRRB-h5rghTijt1FOQktCgIdJQ&s',
                    'https://secure.img1-fg.wfcdn.com/im/60929772/resize-h700-p1-w700%5Ecompr-r85/2367/23676621/%2527Back+to+the+Future+Minimal+Movie+Poster-Part+I%2527+Vintage+Advertisement+on+Wrapped+Canvas.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyi9kbgHI-hAm6C28P0Jhdb4w-wLR3sW64Z_kQyMJN1kY5Miq41g&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYnAwAZcQEG0xEp8MlLcOy5IL_305lLN3JqzUf3ELJjHONZ0ev&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8PgAGhJxt5mzFv_bUp4DDT0ruScQV1NVRN0OJt27vRXK0CU5&s',
                    'https://img.posterlounge.co.uk/img/products/630000/622592/622592_poster_l.jpg']
                    const pagesize = 20

                    app.get("/photos/:page/", (req, res) =>{
                        res.header("Access-Control-Allow-Origin", "*");
                        res.header("Access-Control-Allow-Headers", "*");
                    const page=req.url.split("/")[2];
                    start=(page-1)*pagesize;
                    end=start+ pagesize;
                    res.send(arrayphoto.slice(start,end));
                    });
                    app.listen(3000);