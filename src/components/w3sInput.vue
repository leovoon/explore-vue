<template>
    <div class="rounded-lg sm:border sm:border-gray-400 sm:p-4 space-y-2 max-w-md">
        <p class="form-title text-lg font-bold">Sign Up</p>

        <div class="flex items-center justify-between">
            <label for="Password">Password</label>
            <button class="password-toggle" @click="togglePassword()">
                <div v-show="isShow" class="space-x-1">
                    <akar-icons:eye-slashed class="inline-block" />
                    <span>Hidden</span>
                </div>
                <div v-show="!isShow" class="space-x-1">
                    <akar-icons:eye-open class="inline-block" />
                    <span>Show</span>
                </div>
            </button>
        </div>
        <input
            :type="inputType"
            @input="validateForm('password')"
            v-model="password"
            name="password"
        />
        <div class="pass-validate">
            <li v-for="test in tests" :class="checkPassed(res.getErrors('password'), test)">
                <akar-icons:circle-fill :class="checkPassedIcon(res.getErrors('password'), test)" />
                {{ test }}
            </li>
        </div>

        <button :disabled="!res.isValid()" class="sign-up">Sign up for free</button>
    </div>
</template>

<script lang='ts' setup>
import { create, test, enforce, only } from 'vest';

const suite = create((formData, changedField) => {
    only(changedField)
    test('password', 'One lowercase character', () => {
        enforce(formData.password)
            .matches(/(?=.*?[a-z])/);
    });

    test('password', 'One uppercase character', () => {
        enforce(formData.password)
            .matches(/(?=.*?[A-Z])/);
    });

    test('password', 'One number', () => {
        enforce(formData.password)
            .matches(/(?=.*?[0-9])/);
    });

    test('password', 'One special character', () => {
        enforce(formData.password)
            .matches(/(?=.*?[#?!@$ %^&*-])/);
    });

    test('password', '8 characters minimum', () => {
        enforce(formData.password)
            .matches(/.{8,}/);
    });
});

const isShow = ref(false)
const inputType = ref('')
const formData = reactive({ password: '', res: suite.get() })
const { password, res } = toRefs(formData)
const validateForm = (field: string) => res.value = suite({ password: password.value }, field)
const tests = ['One lowercase character', 'One uppercase character', 'One number', 'One special character', '8 characters minimum']

const checkPassed = (errors: string[], test: string) => !errors.includes(test) && '!text-gray-800 dark:!text-green-500'
const checkPassedIcon = (errors: string[], test: string) => !errors.includes(test) && '!text-green-500'

const togglePassword = () => {
    isShow.value = !isShow.value
    if (isShow.value) {
        inputType.value = 'text'
    } else {
        inputType.value = 'password'
    }
}


</script>

<style scoped>
* {
    @apply focus:outline-transparent;
}

input {
    @apply w-full  rounded px-3 py-2 border-[0.5px] border-gray-300 focus:(border-blue-300 ring-blue-400 ring-opacity-50 ring-2) dark:text-gray-800;
}

label {
    @apply text-xs font-bold;
}

.password-toggle {
    @apply inline-flex items-center space-x-1 text-xs font-semibold px-2;
}

.pass-validate {
    @apply block list-none;
    column-count: 2;
}

.pass-validate li {
    @apply text-xs inline-flex items-center text-gray-300 dark:text-gray-400;
}
.pass-validate li svg {
    @apply inline-block w-2 mr-2 text-gray-300;
}
.sign-up {
    @apply p-3 text-center w-full bg-green-500 font-semibold text-lg rounded-full text-white;
}

.sign-up:disabled,
.sign-up[disabled] {
    @apply bg-gray-400 pointer-events-none;
}
</style>