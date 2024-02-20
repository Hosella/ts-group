"use strict";
const movies = [
    { id: 1, contry: 'Ukraine', genre: 'Drama' },
    { id: 2, contry: 'Ukraine', genre: 'Comedy' },
    { id: 3, contry: 'Sweden', genre: 'Comedy' },
    { id: 4, contry: 'Poland', genre: 'Fantasy' },
    { id: 5, contry: 'Italy', genre: 'Drama' },
    { id: 6, contry: 'Italy', genre: 'Horror' },
    { id: 7, contry: 'Poland', genre: 'Drama' },
    { id: 8, contry: 'German', genre: 'Horror' },
    { id: 9, contry: 'Sweden', genre: 'Drama' },
    { id: 10, contry: 'German', genre: 'Drama' },
];
function groupByKey(arr, key) {
    const values = [];
    const result = {};
    for (const item of arr) {
        if (!values.includes(item[key])) {
            values.push(item[key]);
        }
    }
    for (const value of values) {
        const objects = [];
        for (const item of arr) {
            if (item[key] === value) {
                objects.push(item);
            }
        }
        result[value] = objects;
    }
    return result;
}
console.log(groupByKey(movies, 'contry'));
