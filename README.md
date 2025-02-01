# fetch-pokemon
This project is about fetching pokemon using PokeAPI
It sends a HTTPS request to the API and it receives the Pokemon's image, name, and type
Using promise is necessary to make a request and I changed it to an asynchronous to simplify it into a function and it can be triggered easily
I added a condition where the fetched Pokemon does not stack and it can only show the latest fetched Pokemon
.join adds a letter or symbol between the two objects, for example, without .join the type would be Fire, Flying but with .join, it seperates the two objects with assigned symbol or later and in my case it will be Fire/Flying
