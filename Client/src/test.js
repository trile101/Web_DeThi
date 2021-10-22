import {useState} from 'react'

const [val, setVal] = useState('trile')

const state = {
    test: [val, setVal]
}

console.log(state)
