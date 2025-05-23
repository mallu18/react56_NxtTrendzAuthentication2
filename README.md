In this project, let's build **Nxt Trendz** app with authentication by applying the concepts we have learned till now.



### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px), and Medium (Size >= 768px) - Login, Login Error, Home](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-sm-outputs.png)
- [Extra Small (Size < 576px), Small (Size >= 576px), and Medium (Size >= 768px) - Products, Cart](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-sm-products-cart-outputs.png)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px) - Login](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-login-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-lg-home-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Products](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authorisation-lg-products-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Cart](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authorisation-lg-cart-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When an unauthenticated user tries to access the Home Route, Products Route or Cart Route, then the page should be redirected to the Login Route
- When an authenticated user tries to access the Home Route, Products Route or Cart Route, then the page should be navigated to the respective route
- When an authenticated user tries to access the Login Route, then the page should be redirected to the Home Route
- When the Logout button is clicked, then the page should be navigated to the Login Route

</details>

<details>

<summary>API Requests & Responses</summary>
<br/>

**loginApiUrl**

#### API: `https://apis.ccbp.in/login`

#### Method: `POST`

#### Description:

Returns a response based on the credentials provided

#### Sample Success Response

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-login-home-component-structure-breakdown.png" alt="nxt trendz authentication login and home component structure breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authentication-products-cart-component-structure-breakdown.png" alt="nxt trendz authentication products and cart component structure breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>
</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/App.js`
- `src/components/LoginForm/index.js`
- `src/components/Header/index.js`
- `src/components/Header/index.css`
- `src/components/Products/index.js`
- `src/components/Products/index.css`
- `src/components/Cart/index.js`
- `src/components/Cart/index.css`
</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- You can use the `box-shadow` CSS property to apply the box-shadow effect to containers

  ```
    box-shadow: 0px 4px 16px 0px #bfbfbf;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/box-shadow-img.png" alt="box shadow" style="width:200px" />

- You can use the `cursor` CSS property to specify the mouse cursor to be displayed when pointing over an element

  ```
    cursor: pointer;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/cursor-pointer-img.png" alt="cursor pointer" style="width:100px" />

- You can use the below `outline` CSS property for buttons and input elements to remove the highlighting when the elements are clicked

  ```
    outline: none;
  ```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- `Home` route should consist of `/` in the URL path
- `Login` route should consist of `/login` in the URL path
- `Products` route should consist of `/products` in the URL path
- `Cart` route should consist of `/cart` in the URL path
- No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js`
- User credentials

  ```text
   username: rahul
   password: rahul@2021
  ```

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png) alt should be **products**
- [https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png) alt should be **cart**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #e6f6ff; width: 150px; padding: 10px; color: black">Hex: #e6f6ff</div>
<div style="background-color: #d7dfe9; width: 150px; padding: 10px; color: black">Hex: #d7dfe9</div>
<div style="background-color: #e2e8f0; width: 150px; padding: 10px; color: black">Hex: #e2e8f0</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: black">Hex: #64748b</div>
<div style="background-color: #0b69ff; width: 150px; padding: 10px; color: white">Hex: #0b69ff</div>
<div style="background-color: #ff0b37; width: 150px; padding: 10px; color: white">Hex: #ff0b37</div>
<div style="background-color: #0967d2; width: 150px; padding: 10px; color: white">Hex: #0967d2</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.




"https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authorisation-output-v2.gif" alt="nxt trendz authentication desktop output"
