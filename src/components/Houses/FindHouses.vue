<template>
    <div class="p-4 bg-slate-100 border border-slate-300 rounded-lg">
        <div class="text-3xl text-center mb-2">অনুসন্ধান করুন</div>
        <hr>
        <div class="searchBar mt-4">
            <div class="grid grid-cols-1 sm:grid-cols-5 gap-4">
                <div class="item">                
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Division</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Dhaka</option>
                        <option>Chatttagrm</option>
                        <option>Sylhet</option>
                        <option>Barishal</option>
                    </select>
                </div>
                <div class="item">                
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">District</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Gazipur</option>
                        <option>Narshindi</option>
                        <option>Maymanshing</option>
                    </select>
                </div>
                <div class="item">                
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local Area</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Badda</option>
                        <option>Banani</option>
                        <option>Mohakhali</option>
                    </select>
                </div>
                <div class="item">                
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requirement</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Office</option>
                        <option>Bacholor</option>
                        <option>Family</option>
                    </select>
                </div>
                <div class="item">
                    <button type="button" class="w-full mt-7 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Search</button>
                </div>
            </div>
        </div>
    </div>

</template>