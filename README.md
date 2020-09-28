# Coffee Shop

[You can visit the site from this link](alghazali-coffee-shop.netlify.app/)

## Summary

Coffee-Shop is a web application that is made for any coffee shop to display the items they have on the menu and show the products available for orders and add it to the cart, if you have any note you can contact with the owner of these coffee shop by email using the contact form.

## Set up the app

- Install the Gatsby CLI using this command `npm install -g gatsby-cli`
- You need to make an account on [contentful](https://www.contentful.com/) for free

  - Create a new space
  - Create two new content type (`CoffeeItem` and `CoffeeProduct`)
  - Add fields for each one like this and add real products

  ![Selection_015](https://user-images.githubusercontent.com/55782435/94466525-3cccac00-01ca-11eb-92c5-23f611aa2998.png)

  ![Selection_014](https://user-images.githubusercontent.com/55782435/94466409-0ee76780-01ca-11eb-8807-73d289fa2500.png)

  - From setting > API Keys get `Space ID` and `Content Delivery API - access token`

- Make an account in [snipcart](https://snipcart.com/)

  - From right menu > API KEYS get `PUBLIC TEST API KEY`

- Clone this repo
- Create `.env.development` file and add api keys into it
  - CONTENTFUL_ACCESS_TOKEN
  - CONTENTFUL_SPACE_ID
  - SNIPCART_API
- Run this command `npm run start`
- Go to http://localhost:8000/ and everything will be done

## Technologies

- Node.js
- Gatsby
- React
- Ant Design
- Netlify for deployment
- contentful for CMS
- snipcart for add to cart and payment

## Working on new features ...
