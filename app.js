document.querySelector('#evaluate').addEventListener('click', function() {
    const arr1 = document.querySelector('#arr1').value;
    const arr2 = document.querySelector('#arr2').value;
    const warning = document.querySelector('#warning');
    const result = document.querySelector('#result');
    const regex = /^(\d+\s*,\s*)*\d+$/;

    if (!arr1 && !arr2) {
        warning.textContent = 'Please fill out both fields.';
    } else if (!arr1) {
        warning.textContent = 'Please fill out the Array 1 field.';
    } else if (!arr2) {
        warning.textContent = 'Please fill out the Array 2 field.';
    } else if (!regex.test(arr1) && !regex.test(arr2)) {
        warning.textContent = 'Please enter integers separated by commas in both fields.';
    } else if (!regex.test(arr1)) {
        warning.textContent = 'Please enter integers separated by commas in the Array 1 field.';
    } else if (!regex.test(arr2)) {
        warning.textContent = 'Please enter integers separated by commas in the Array 2 field.';
    } else {
        warning.textContent = '';
        // Convert the input strings to arrays of numbers
        const nums1 = arr1.split(',').map(Number);
        const nums2 = arr2.split(',').map(Number);

        // Count the frequency of each number in both arrs
        const count1 = nums1.reduce((acc, num) => (acc[num] = (acc[num] || 0) + 1, acc), {});
        const count2 = nums2.reduce((acc, num) => (acc[num] = (acc[num] || 0) + 1, acc), {});

        // Find the numbers that are missing in the first array
        const missing = [];
        for (let num in count2) {
            if (!count1[num] || count1[num] < count2[num]) {
                missing.push(Number(num));
            }
        }

        // Sort the missing numbers in ascending order
        missing.sort((a, b) => a - b);

        // Display the missing numbers
        result.textContent = 'Missing numbers: ' + missing.join(', ');
    }
});

document.querySelector('#clear').addEventListener('click', function() {
    document.querySelector('#arr1').value = '';
    document.querySelector('#arr2').value = '';
    document.querySelector('#warning').textContent = '';
    document.querySelector('#result').textContent = '';
});