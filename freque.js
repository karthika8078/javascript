function mostFrequentItem(array) {
    // Create an object to store frequency of each item
    const frequencyMap = {};
    
    // Fill the frequency map with the counts
    array.forEach(item => {
        // If item is not a number, convert it to a string
        const key = typeof item === 'number' ? item : item.toString();
        frequencyMap[key] = (frequencyMap[key] || 0) + 1;
    });

    // Find the most frequent item
    let mostFrequent = null;
    let maxCount = 0;

    for (const [item, count] of Object.entries(frequencyMap)) {
        if (count > maxCount) {
            maxCount = count;
            mostFrequent = item;
        }
    }

    // Return the most frequent item (convert it back to its original type if necessary)
    return typeof mostFrequent === 'number' ? +mostFrequent : mostFrequent;
}

// Example usage
const array = [1, 2, 3, 1, 2, 1, 4, 2, 1];
console.log(mostFrequentItem(array)); // Output: 1
