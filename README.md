# Shopping Cart

## Requirement

### Login screen 
User should be able to login using the [API](https://xebiascart.herokuapp.com/users?username=amigo ) <br/>
Username: amigo <br/>
Password: delta 

### Product listing page
* User should be able to search the product 
* User should be able to filter the products based on color, brand , price, discount 
* User should be able to see the product list as tiles with it’s details as ProductA, BrandA, discount, colour, price 
* User can see his name once he logs in

### Error messages 
* API can fail so should be handled 
* Login error message for username and password 


## How to Run
### Pre-requisites
1) Node 12+
2) Run *npm install* on root project directory.

### Development environment
```bash
$ npm start
```
### Test
```bash
$ npm test
```

### Debug Test
```bash
$ npm run test:debug
```

### Coverage
```bash
$ npm test -- --coverage
```

### Analyzing the Bundle Size
```bash
$ npm run build
$ npm run analyze
```

### Check type error
```bash
$ npm run flow
```

## Development approaches

### Code conventions
* **folder name**: folder name should be in kebab-case
* **Component File name**: component file name should be in UpperCamelCase
* **Utility function module file**: utility files with multiple exports should be in lowerCamelCase
* **CSS file name** should match the component file name convention.

### Clean code guidelines

* No commented code should should left in code files.
* **Flag Argument** Avoid using boolean flag in function parameters
* **Too Many Arguments** Function parameter should not be more than three
* **Dead Function**: Method or class never called should be deleted.
* **Duplication**: Do not Repeat Yourself
* **Function Names Should Say What They Do**
* **Avoid Negative Conditionals**
* **Function Should Do One Thing**
* **Avoid Long Import List** 
* **Constant vs Symbol** symbol are primitive types to use symbol with fall back in place.
* **Use Long Name for Long Scopes**  

## Server API

API to use 
1. GET Product Listing: https://xebiascart.herokuapp.com/products 

2. Product Search by name: https://xebiascart.herokuapp.com/products?title=provogue 

3. GET Product Filters: https://xebiascart.herokuapp.com/filters 

4. User Login: https://xebiascart.herokuapp.com/users?username=amigo 


## Application Store structure
```JSON
{
  "user": {
    "id": 1,
    "username": "amigo",
    "password": "delta",
    "fullName": "Mr. Amigo"
  },
  "products_searchable_criteria":{
    "brand":{
      "gowell":["SHOERHTCZRH8YGMW"]
    },
    "color":{
      "#FFD700":["SHOERHTCZRH8YGMW"]
    }
  },
  "filterable_products": {
    "SHOERHTCZRH8YGMW": {
      "id": "SHOERHTCZRH8YGMW",
      "colour": {
        "color": "#FFD700",
        "title": "Gold"
      },
      "brand": "gowell",
      "discount": 50,
      "rating": 4,
      "image": "https://rukminim1.flixcart.com/image/312/312/shoe/2/p/r/ar4697-414-8-lotto-414-original-imaes9ebjqy4g8cn.jpeg?q=70",
      "price": {
        "mrp": 2299,
        "final_price": 1149
      },
      "title": "Lotto Running Shoes For Men"
    }
  },
  "cart":["SHOERHTCZRH8YGMW"],
  "products_list":["SHOERHTCZRH8YGMW"],
  "applied_filters":{
    "brand":[], 
    "color":[], 
    "price":[1000, 3000]
  },
  "filter_list":[
    {
      "type": "BRAND",
      "values": [
        {
          "title": "1 Can",
          "value": "1 can"
        }
      ]
    }
    {
      "type": "PRICE",
      "values": [
        {
          "displayValue": "Min",
          "key": "Min"
        }
      ]
    },
    {
      "type": "COLOUR",
      "values": [
        {
          "color": "#F5F5DC",
          "title": "Beige"
        }
      ]
    }
  ]
}
```

## Routes


## NOTES

## Flow Language Support for Visual Studio Code

#### Add extension *Flow Language Support*
Read instruction for [Flow Language Support](https://github.com/flowtype/flow-for-vscode)

####  Remove builtin support for ts in VSCode
1) Go to extensions tab
2) Search for **@builtin TypeScript and JavaScript Language Features**
3) Click on Disable or Disable (workspace)

## References
