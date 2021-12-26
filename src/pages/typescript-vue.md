---
title: TypeScript in Vue
description: How to use Typescript in Vue
---

<div class="text-center">
  <!-- You can use Vue components inside markdown -->
  <carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>How to use Typescript in Vue</h3>
</div>

## Typescript Type Fundamentals

### What is a type?

```typescript
//javascript
let food = 'sushi'
let code = ['js','python'']
let music = {
    year: 1996
    mood: 'happy',
    genres: ['country', 'blues', 'jazz'],
}

// typescript
let food: string = 'sushi'
let code: string[] = ['js','python'']
let music: {
    year: number; // semicolon ended
    mood: string; // small cap, e.g string not String
    genres: string[];
} = {
    year: 1996,
    mood: 'happy',
    genres: ['country', 'blues', 'jazz'],
} 
```

For typing object, better use `interface`

### What is interface?


```typescript
interface Music {
    year: number
    mood: string
    genres: string[]
}
            👇
let music: Music = {
    year: 2022
    mood: 'energetic',
    genres: ['electronic', 'classical'],
}

```

or use together mixing with `type`


```typescript
type moodType = 'happy' | 'energetic'

interface {
    year: number
    mood: moodType 👈 // 'happy' or 'energetic'
    genres: string[]
}
```

Type `param` or `return value` for Function (computed property or method in Vue)

```typescript
// js
function sum(num1, num2){
    return num1 + num2
}

//ts, accept number, return number
function sum(n1: number, n2: number): number{
    return n1 + n2
}

```

### How to use Typescript in Vue?

change

```javascript
<script>
export default {
    name: 'BaseButton',
    .
    .
}
</script>
```
to
```typescript
           👇
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({ 👈
    name: 'BaseButton',
    .
    .
})
</script>
```

### Props Typing
Use [Generic](https://www.typescriptlang.org/docs/handbook/2/generics.html) in Typescript and vue helper method `PropType`
```typescript
import { defineComponent, PropType } from 'vue'
import { EventItem } from '../types'

export default defineComponent({
    props: {
        event: {
            type: PropType<EventItem>, 👈
            required: true
        }
    }
})
```

That's it. ✨

