export default function greeter(person: Person) {
  return `Hello ${person}`
}

interface Person {
  firstName: string
  lastName: string
}

const user = {
  firstName: 'Jane',
  lastName: 'Air',
}

// const user = [1, 2, 3]
greeter(user)
