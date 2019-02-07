### Week 1 - Hello API 🐒

## API I have used

The API that I have used is `Ghibliapi` see [here](https://ghibliapi.herokuapp.com/films) the link. This API contains a list a list of some famous anime Japanese movies. The following data can be retrieved: 
* The director
* Producer
* Release date 
* Description

## How to use?
By using this API for my own project I used the titles and descriptions to load into the webpage. See [here](https://github.com/Karinliu/web-app-from-scratch-18-19/tree/master/week1/public). When you go over the cards with your mouse, the descriptions will be shown.

<img width="1000" alt="screenshot 2019-02-07 23 00 09" src="https://user-images.githubusercontent.com/32538678/52446159-76e8c600-2b2d-11e9-8040-b8439e9603e4.png">

#### How it works
By retrieving the data, I used an `XMLHttpRequest`.  

Sending data to the HTML page, I have used an `document.createElement` for creating an element. Also I used an `element.append` for sending the data to the created element.

#### See the project
To see the project you can download or clone this document with the following command: 

```
git clone https://github.com/Karinliu/web-app-from-scratch-18-19.git

cd web-app-from-scratch-18-19/week1
```
