module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// *** Set item structure perameters *** //  
// Items have name, durability and enhancement.
// The item's enhancement it's a number from 0 to 20.
// The item's durability it's a number from 0 to 100.
function itemStructure(item) {
  if (item.name && item.durability && item.enhancement) {
    if (
        item.durability >= 0 &&
        item.durability <= 100 &&
        item.enhancement >= 0 &&
        item.enhancement <= 20
    ) {
        return true;
    } else {
        throw 'durability or enhancement are not within correct range.';
    }
  } else {
      throw 'item must be an object with name, durability, and enhancement';
  }
}

// success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.
function succeed(item) {
  if (itemStructure(item)) {
    const newItem = { ...item };

    // The item's enhancement it's a number from 0 to 20.
    // If the item enhancement level is 20, the enhancement level is not changed.
    // The durability of the item is not changed.
    if (newItem.enhancement < 20) 
        newItem.enhancement++; // The item's enhancement increases by 1.
    return newItem;
  }
  return;
}

// fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.
function fail(item) {
  if (itemStructure(item)) {
    const newItem = { ...item };

    // If the item's enhancement is less than 15, the durability of the item is decreased by 5.
    if (newItem.enhancement < 15) {
        newItem.durability -= 5;
    // If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
    } else if (newItem.enhancement >= 15) {
        newItem.durability -= 10;

        // If the item's enhancement level is greater than 16, the enhancement level decreases by 1
        if (newItem.enhancement > 16) {
            newItem.enhancement -= 1;
        }
    }
    return newItem;
  }
  return;
}

// repair(item) method that accepts an item object and returns a new item with the durability restored to 100.
function repair(item) {
  if (itemStructure(item)) {
    return { ...item, durability: 100 };
  }
  return;
}

// get() method for use when working on the stretch problem.
function get(item) {
  return { ...item };
}
