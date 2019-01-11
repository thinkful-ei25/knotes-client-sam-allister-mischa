## Note Shark

Note Shark is an app to learn music notes. Look at the note, hear what it sounds like, and make your guess! <br/>
Note Shark employs a spaced-repition algorithm to track your progress, showing you notes that you've made a mistake on more frequently, helping you to quickly learn to read sheet music!

### **`Contents`**
- [Tech stack](#tech-stack)
- [Links](#links)
- [Navigating repos](#navigating-repos)
- [Screenshots](#screenshots)

### **`Tech stack`**
#### Front End with *React.js* and *Redux*
**Note Shark combines an array of front-end javascript libraries.**

For rendering and displaying content we use React.js.  
State management is handled with Redux, and login/registration forms with Redux-form.   
Routing is handled with *react-router-dom*.  

#### Back End with *Node.js*, *Express.js*, *MongoDB* and *Mongoose*
Note Shark employs Node.js as the server-side runtime environment.  <br/>
Routing and middleware are handled by express.js <br/>
Authentication is done with passport.js middleware, using JWT tokens in the local storage. Password encryption handled with bcrypt salted and hashed.  <br/>
All persistent data is stored and accessed on Mongodb on mlab.com. Mongoose is used for various CRUD operations on the db, and for organizing data with the use of schemas and models. 

### **`LINKS`**
Note Shark is hosted on heroku

[Application](https://knotes-client-sam.herokuapp.com/) <br/>
[Server](https://knotes-server.herokuapp.com/)



**Github repos here:** 

front-end: https://github.com/thinkful-ei25/knotes-client-sam-allister-mischa

back-end: 
https://github.com/thinkful-ei25/knotes-client-sam-allister-mischa

### **`Navigating repos`**
**Front-end** 

Root-component: src/components/dashboard.js <br/>
All actions in src/actions <br/>

**Back-end** 

*Routes are defined in /routes <br/>*

Routing in /index.js express's app.use() 
 
Data is accessed with models created with Mongoose schemas all in /models<br/>


### **`Screenshots`**

<a href="https://ibb.co/p3wcxGd"><img src="https://i.ibb.co/30d27Gc/Landing-Page.png" alt="Landing-Page"></a>

<a href="https://ibb.co/4Z8BL5N"><img src="https://i.ibb.co/d0PnvzK/Dashboard.png" alt="Dashboard"></a>

<a href="https://ibb.co/34YC1rB"><img src="https://i.ibb.co/MZ5Cn2M/Progress.png" alt="Progress"></a>
<a href="https://ibb.co/xjmpJBp"><img src="https://i.ibb.co/SnQhRMh/Correct-Answer.png" alt="Correct-Answer"></a>