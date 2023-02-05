class Tree { 
    constructor(root, left, right) {
        this.root = root;
        this.left = left;
        this.right = right;
    }

    buildTree(arr) {
        let start = 0;
        let end = arr.length - 1;

        if(start > end) {
            return null;
        }

        let mid = Math.floor((start + end) / 2);

        if(this.setLeft(arr, start, mid - 1)) {
            return this.setLeft(arr, start, mid - 1);
        } else if(this.setRight(arr, end, mid + 1)) {
            return this.setRight(arr, end, mid + 1);
        }

        return this.root;
    }

    setLeft(arr, start, mid) {
        let left = this.left;


    }

    setRight(arr, start, mid) {

    }
}

class Nodes {
    constructor(root, left, right) {
        this.root = root;
        this.left = left;
        this.right = right;
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    let half = Math.floor(arr.length / 2);
    // Recursively divide left and right half of the array
    let left = mergeSort(arr.slice(0, half));
    let right = mergeSort(arr.slice(half));

    // Evaluate each half on split
    return merge(left, right);
}

function merge(left, right) {
    const resultArr = [];

    while (left.length > 0 && right.length > 0) {
        console.log(resultArr, left, right);
        const minValue = left[0] < right[0] ? left : right;
        const getValue = minValue.shift();
        resultArr.push(getValue);
    }

    return resultArr.concat(left, right);
}