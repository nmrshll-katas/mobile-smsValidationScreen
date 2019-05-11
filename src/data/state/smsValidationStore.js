import { createStore, createEvent, createApi, createEffect } from 'effector';
import { Keyboard } from 'react-native';

// stores
export const validationCodeStore = createStore({ a: -1, b: -1, c: -1, d: -1 })
export const codeValidationErrorStore = createStore({ isError: false, errorMessage: '' })

// actions
export const setCodeNumber = createEvent()
export const resetCodeNumbers = createEvent()
export const setCodeValidationError = createEvent()
export const resetCodeValidationError = createEvent()

// reducers
validationCodeStore.on(setCodeNumber, (state, { key, value }) => ({ ...state, [key]: value }))
validationCodeStore.reset(resetCodeNumbers)
codeValidationErrorStore.on(setCodeValidationError, (state, { errorMessage }) => ({ isError: true, errorMessage }))
codeValidationErrorStore.reset(resetCodeValidationError)


// side effects
const enterErrorState = () => {
    setCodeValidationError({ errorMessage: 'invalid code' })

    // empty fields
    Keyboard.dismiss();
    setTimeout(resetCodeNumbers, 200);

    // make error message disappear after 3 seconds
    setTimeout(resetCodeValidationError, 4000)
}
const hardCodedValidCode = [1, 2, 3, 4]
const containsSomething = x => x !== -1 && (!!x !== false || x === 0)
const allTrue = (acc, val) => !(!acc || !val)
validationCodeStore.watch(state => {
    if (Object.values(state).map(containsSomething).reduce(allTrue)) /** if all contain something */ {
        if (Object.values(state).map((val, key) => val == hardCodedValidCode[key]).reduce(allTrue)) /** if it's the correct code */ {
            console.warn("entered the correct code. App should navigate to next screen.")
        } else {
            enterErrorState()
        }
    }
})

// refs store
export const codeInputRefsStore = createStore({ a: null, b: null, c: null, d: null })
export const setCodeInputRef = createEvent()
export const focusNextRef = createEvent()
codeInputRefsStore.on(setCodeInputRef, (state, { key, ref }) => ({ ...state, [key]: ref }))
codeInputRefsStore.on(focusNextRef, ({ a, b, c, d }, { currentInputKey }) => {
    switch (currentInputKey) {
        case 'a': b.focus(); break;
        case 'b': c.focus(); break;
        case 'c': d.focus(); break;
    }
    return { a, b, c, d }
})