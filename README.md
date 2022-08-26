<!-- PROJECT LOGO -->
<div align="center">
  <img src="https://user-images.githubusercontent.com/68415905/175806255-6da4861b-2f7d-437c-9990-a679f11acdfa.png" alt="Logo" width="80" >
  <h1>Nodeul Market (노들마켓)</h1>
  <p>
    <a href="https://nodeulmarket.netlify.app" target="_blank">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details align="right">
  <summary>Table of Contents</summary>
    <div><a href="#About-The-Project">About The Project</a></div>
    <div><a href="#Built-With">Built With</a></div>
    <div><a href="#Getting-Started">Getting Started</a></div>
    <div><a href="#Main-Features">Main Features</a></div>
</details>

## About The Project

> Anyone living alone or with a small family may experienced throwing away rotten fruits or vegetables from the fridge. If you buy a small amount, it is expensive, and if you buy it in bulk, it will eventually become a troublesome work. So, here is the solution. **An online local market service** designed to help you share fruits, vegetables, frozen foods, dairy products and other food items **to neighbors at a low price.**

💡 What does the 'Nodeul Market' mean? <br/>
I was living in a shared house called 'Nodeul House' when there was zero waste boom in Korea. I made this service from the thought of sharing groceries with housemates effectively to follow the zero wast campaign. That's why I named it as 'Nodeul Market', which means a market in Nodeul House.

- Production Period : 2021.04.01 - 2021.04.21

<br/>

## Built With

<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">&nbsp;&nbsp;<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">&nbsp;&nbsp;<img src="https://img.shields.io/badge/esbuild-FFCF00?style=for-the-badge&logo=esbuild&logoColor=black">&nbsp;&nbsp;<img src="https://img.shields.io/badge/sass-CF649A?style=for-the-badge&logo=sass&logoColor=white">&nbsp;&nbsp;

<br/>

## Getting Started

You are able to start the app by typing the following commands in the command line:

```bash
git clone https://github.com/devjoylee/nodeul-market.git
npm install
npm run dev
```

<br/>

## Main Features

### Q: What products are usually sold?

The main products include 1) fruits and vegetables which cannot keep it long, 2) soy milk and frozen foods that are difficult to purchase in small quantities. You can click the 'ADD TO CART' button if there is something you like.

<div align="center">
<img src="https://user-images.githubusercontent.com/68415905/175806043-b374865f-bcbf-4915-b8fd-f956909e12c3.png" alt="img" width="70%" >
</div><br/>

- Code Preview

```jsx
// App.tsx
// Move to cart when you click 'ADD TO CART'
const handleAddToCart = (clickedItem: iItemDetail) => {
	setCartItems((prevItems) => {
		// Is the item already added in the cart?
		const isItemInCart = prevItems.find((item) => item.id === clickedItem.id);
		if (isItemInCart) {
			alert("It's already in your cart 😋");
			return [...prevItems];
		}

		// First time the item is added
		alert("Successfully added 🎉");
		return [{ ...clickedItem }, ...prevItems];
	});
};
```

<br/>

### Q: How can people buy a item?

Once you have placed the item in your shopping cart, click the **MY CART** button at the top to view your cart history. If you wish to buy it, click **BUY THIS** button to let the seller know. If you don't want to buy it, delete the product with the **DELETE THIS** button.

<div align="center">
<img src="https://user-images.githubusercontent.com/68415905/175806097-aff687d4-6369-42db-9881-9e26ca25dab2.png" alt="img" width="320px">
</div><br/>

- Code Preview

```jsx
// App.tsx
// Delete an item from the cart
const handleRemoveFromCart = (id: number) => {
	if (confirm("Are you sure to delete it from the cart?")) {
		setCartItems((prevItems) => {
			return prevItems.filter((item) => item.id !== id);
		});
	}
};
```

<br/>

### Q: How can people add a item?

Click the **ADD ITEM** button at the top or at the center of the banner to add the item. Fill out the form about the item you want to share, and click the **ADD TO INVENTORY** button to save it.

<div align="center">
<img src="https://user-images.githubusercontent.com/68415905/175806095-d82d7820-2273-4c80-9582-ef87694b5720.png" alt="img" width="320px" >
</div></br>

- Code Preview

```jsx
// components/NewItemModal
// Used react custom hooks (useForm, useImage)
const { values, handleChange, handleResetForm } = useForm();
const [errors, setErrors] = useState({} as ErrorMessage);
const fileImageRef = useRef<HTMLInputElement>(null);
const { preview, handleImageURL, handleRemoveImage } = useImage();

//...

// Check the form validation when you click the submit button.
const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();

  const error = await validate(values);
  const hasInvaild = Object.keys(error).length;
  setErrors(error);

  // store the uploaded image
  if (preview) {
    values.image = preview;
  }

  // if all vaildation is passed, add to inventory
  if (!hasInvaild) {
    addToInventory(values);
    closeModal();
  }
};
```

<br/>

<p align="right">(<a href="#top">back to top</a>)</p>
