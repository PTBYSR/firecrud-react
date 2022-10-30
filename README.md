<p align="center">
  <img src="https://raw.githubusercontent.com/PTBYSR/firecrud-react/master/github-firecrud%20(1).png" width="600" alt="Logo for T3" />
</p>
<h1 align="center">
  Firecrud-react
</h1>

<p align="center">
  A React API library for Firestore with CRUD-like syntax
</p>
<p align="center">
  Get started by running <code>npm i firecrud-react</code>
</p>

<div align="center">

</div>

## Table of contents

- <a href="#about">What is Firecrud?</a>
- <a href="#getting-started">Getting Started</a>

<h2 id="about">What is Firecrud?</h2>
Firecrud provides an API layer on top of your Firestore Instance. It provides everything you need from a basic CRUD API to access your <a href="https://firebase.google.com/docs/firestore">Cloud Firestore</a>:

- <a href="#createdoc">CREATE</a>
- <a href="#readdoc">READ</a>
- <a href="#updatedoc">UPDATE</a>
- <a href="#deletedoc">DELETE</a>


<h2 id="getting-started">Getting Started</h2>

To get started with `firecrud-react`, run the following command:

#### npm

```bash
npm i firecrud-react
```

### Initialize Firecrud

imports
```javascript
import { useFirestore } from 'firebase-react'
import db from '../firebase'

```
initialize your db
```javascript
const { fireStore } = useFirestore(db)
```

<h2 id="createdoc">Add data (CREATE)</h2> ( equivalent to <a href="https://firebase.google.com/docs/firestore/manage-data/add-data">setDoc</a> )

To create or overwrite a single document, use the `fireStore.get()` method:
&nbsp;

```javascript
const { fireStore } = useFirestore(db)
const data = fireStore.get({
  name: "Los Angeles",
  state: "CA",
  country: "USA"
}, "cities", "LA")

```


If the document does not exist, it will be created. If the document does exist, its contents will be overwritten with the newly provided data, unless you use the `fireStore.post` method, as follows:
```javascript

const data = firestore.post( null, 'cities', 'BJ' ) 
```
For a better alternative, check out <a href="#updatedoc">Update doc</a>




<h2 id="readdoc">Get data (READ)</h2> ( equivalent to <a href="https://firebase.google.com/docs/firestore/query-data/get-data">getDoc</a> )

### Example data
To get started, write some data about cities so we can look at different ways to read it back:
&nbsp;


```javascript

const data = fireStore.post({
  name: "Los Angeles",
  state: "CA",
  country: "USA"
}, "cities", "LA")
 console.log(data) 
 
```



&nbsp;

```javascript

const data = fireStore.get("cities", "LA")
console.log(data)


 //output:
 //{
 //  name: "Los Angeles",
 // state: "CA",
 // country: "USA"
 //}
```


<h2 id="updatedoc">Update data (UPDATE)</h2> ( equivalent to <a href="https://firebase.google.com/docs/firestore/manage-data/add-data#update-data">updateDoc</a> )

To update some fields of a document without overwriting the entire document, use the `fireStore.update` method:
&nbsp;

```javascript
const data = fireStore.update({
  state: "California",
  country: "United States"
}, "cities", "LA")

```


<h2 id="deletedoc">Delete data (DELETE)</h2> ( equivalent to <a href="https://firebase.google.com/docs/firestore/manage-data/delete-data">setDoc</a> )

To delete a document, use the `fireStore.delete` method:
&nbsp;

```javascript
const data = fireStore.delete("cities", "LA")

```


