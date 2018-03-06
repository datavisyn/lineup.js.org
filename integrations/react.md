---
title: React
layout: page
---


A [React](https://reactjs.org/) wrapper is located at [lineupjsx](https://github.com/sgratzl/lineupjsx). 


Installation
------------

```bash
npm install --save lineupjsx
```

```html
<link href="https://unpkg.com/lineupjsx/build/LineUpJSx.min.css" rel="stylesheet">
<script src="https://unpkg.com/lineupjsx/build/LineUpJSx.min.js"></script>
```

Minimal Usage Example
---------------------

```javascript
// generate some data
const arr = [];
const cats = ['c1', 'c2', 'c3'];
for (let i = 0; i < 100; ++i) {
  arr.push({
    a: Math.random() * 10,
    d: 'Row ' + i,
    cat: cats[Math.floor(Math.random() * 3)],
    cat2: cats[Math.floor(Math.random() * 3)]
  })
}
```
```jsx
<LineUp data={arr}/>
```

[CodePen](https://codepen.io/sgratzl/pen/mXEpMP)

[![Minimal Result](https://user-images.githubusercontent.com/4129778/34654173-32180ff8-f3f8-11e7-8469-229fa34a65dc.png)](https://codepen.io/sgratzl/pen/Ozzbqp)


Advanced Usage Example
----------------------

```jsx
// arr from before
<LineUp data={arr} defaultRanking>
  <LineUpStringColumnDesc column="d" label="Label" width={100} />
  <LineUpCategoricalColumnDesc column="cat" categories={cats} color="green" />
  <LineUpCategoricalColumnDesc column="cat2" categories={cats} color="blue" />
  <LineUpNumberColumnDesc column="a" domain={[0, 10]} color="blue" />

  <LineUpRanking groupBy="cat" sortBy="a:desc">
    <LineUpSupportColumn type="*" />
    <LineUpColumn column="*" />
    <LineUpImposeColumn label="a+cat" column="a" categeoricalColumn="cat2" />
  </LineUpRanking>
</LineUp>;
```

[CodePen](https://codepen.io/sgratzl/pen/yvJpWQ)

[![Advanced Result](https://user-images.githubusercontent.com/4129778/34654174-3235f784-f3f8-11e7-9361-44f5fa068bb9.png)](https://codepen.io/sgratzl/pen/vppyML)