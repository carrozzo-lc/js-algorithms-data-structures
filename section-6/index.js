//// PART 1 ////////////////////////////

function sameFrequency(first, second){
  let firstArr = Array.from(String(first), num => Number(num));
  let secondArr = Array.from(String(second), num => Number(num));
  
  if(firstArr.length !== secondArr.length){
      return false;
  }

  const lookup = {};

  for (let i = 0; i < firstArr.length; i++) {
    let letter = firstArr[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < secondArr.length; i++) {
    let letter = secondArr[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// Prof solution
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}

///

function areThereDuplicates() {
  if(arguments.length === 0){
      return false;
  }

  let lookup = {};

  for (let val in arguments) {
    lookup[arguments[val]] ? lookup[arguments[val]] += 1 : lookup[arguments[val]] = 1;
  }

  for (const property in lookup) {
    if (lookup[property] > 1) {
      return true;
    }
  }

  return false;
}

//areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

//areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

//areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}



//// PART 2 ////////////////////////////

// My solution
function averagePair(arr, target){
  if (arr.length === 0) {
    return false;
  }

  let left = 0;
  let right = arr.length - 1;

  while(left <= right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average === target) {
      return true;
    } else {
      if (left === right) {
        left++;
        right = arr.length - 1;
      } else {
        right--;
      }
    }
  }

  return false;
}

// Teacher solution
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}

///

// My solution
function isSubsequence(str1, str2) {
 if (!str1) return true;
  let i = 0;
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      if (str1[str1.length - 1] === str2[j]) {
        return true
      } else {
        i++;
      }
    }
  }
  return false;
}

// Teacher solution
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}


//// PART 3 ////////////////////////////

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}


function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}


function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}