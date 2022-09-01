PORT : 5000



1 → add Product

post : http://localhost:5000/products

2 → read All Products

get : http://localhost:5000/products

3 → read Product by Id

get : http://localhost:5000/products/id

4 → Update Products

patch : http://localhost:5000/products/id

5 → Delete Product

delete : http://localhost:5000/products/id

5→ Create Review

post : http://localhost:5000/reviews

6 → Delete Riview

delete :http://localhost:5000/reviews/id

7 → Virtual populating the reviews (all the reviews on a single Product with user Details)

get : http://localhost:5000/reviews/product/63106c965361152fff0d8064
