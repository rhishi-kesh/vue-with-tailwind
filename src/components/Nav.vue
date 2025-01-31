<template>
    <nav class="flex items-center justify-between px-5 py-4 text-white bg-gray-800 md:px-20">
        <div>
            <a href="">
                <h2 class="text-2xl font-bold uppercase">Logo</h2>
            </a>
        </div>
        <div>
            <ul class="flex space-x-4">
                <li>
                    <!-- <a href="">Home</a> -->
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <!-- <a href="">About</a> -->
                    <router-link to="/about">About</router-link>
                </li>
                <li>
                    <!-- <a href="">Contact</a> -->
                    <router-link to="/contact">Contact</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>