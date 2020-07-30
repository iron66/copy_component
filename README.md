### Installation

Using npm: 
```sh
$ npm install copy-component -S
```

Using yarn: 
```sh
$ yarn add copy-component
```

### Usage with React

(Sandbox link)[https://codesandbox.io/s/busy-hoover-miqdw?file=/src/Rating.jsx]

```js
<Copy amount={5}>
    {idx => (
        <input
            type="checkbox"
            checked={isHighlighted(idx)}
            onMouseOver={() => setRating(idx + 1)}
            onMouseLeave={() => setRating(value)}
            onClick={() => set(idx + 1)}
        />
    )}
</Copy>
```