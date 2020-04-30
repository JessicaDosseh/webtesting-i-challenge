const enhancer = require('./enhancer.js');
// test away!
// test/it(name, fn, timeout); 

describe('enhanceer', () => {

  describe('test validation', () => {
    test('tests that true is true', () => {
      expect(true).toBe(true);
    })
  });

// ----- DESCRIBE REPAIR ---------------------------------------------------

  describe('repair', () => {

    it('restores item durability to 100', () => {
      // given item 
      const item = {
          name: 'fork',
          durability: 40,
          enhancement: 12,
      };

      // after calling .repair(item)
      const expectedOutcome = {
          name: 'fork',
          durability: 100,
          enhancement: 12,
      };

      const actualOutcome = enhancer.repair(item);

      expect(actualOutcome.durability).toEqual(
          expectedOutcome.durability
      );
    });

    // ******************************************** //

    it('returns a new item object', () => {
      const item = {
          name: 'fork',
          durability: 40,
          enhancement: 12,
      };

      const expectedOutcome = {
          name: 'fork',
          durability: 100,
          enhancement: 12,
      };

      const actualOutcome = enhancer.repair(item);

      expect(actualOutcome).toEqual(expectedOutcome);
    });

    // ******************************************** //

    it('item durability is a positive number', () => {
      const item = {
          name: 'fork',
          durability: 40,
          enhancement: 12,
      };

      const actualOutcome = enhancer.repair(item);

      expect(actualOutcome.durability).toBeGreaterThanOrEqual(0);
    });

    // ******************************************** //

    it('after repair, item durability is not greater than 100', () => {
      const item = {
          name: 'fork',
          durability: 40,
          enhancement: 12,
      };

      const actualOutcome = enhancer.repair(item);

      expect(actualOutcome.durability).toBeLessThanOrEqual(100);
    });

    // ******************************************** //

    it('item enhancement is not changed', () => {
      const item = {
          name: 'fork',
          durability: 60,
          enhancement: 12,
      };

      const expectedOutcome = {
          name: 'fork',
          durability: 100,
          enhancement: 12,
      };

      const actualOutcome = enhancer.repair(item);

      expect(actualOutcome.enhancement).toEqual(
          expectedOutcome.enhancement
      );
    });

    // ******************************************** //
  });

// ----- DESCRIBE SUCCEED ---------------------------------------------------

  describe('succeed', () => {

    it('returns a new item object', () => {
      const item = {
          name: 'pen',
          durability: 40,
          enhancement: 10,
      };

      const expectedOutcome = {
          name: 'pen',
          durability: 40,
          enhancement: 11,
      };

      const actualOutcome = enhancer.succeed(item);

      expect(actualOutcome).toEqual(expectedOutcome);
    });

    // ******************************************** //

    it('item enhancement is a positive number', () => {
      const item = {
          name: 'pen',
          durability: 40,
          enhancement: 10,
      };

      const actualOutcome = enhancer.succeed(item);

      expect(actualOutcome.enhancement).toBeGreaterThanOrEqual(0);
    });

    // ******************************************** //

    it('item enhancement is not greater than 20', () => {
        const item = {
            name: 'pen',
            durability: 40,
            enhancement: 10,
        };

        const actualOutcome = enhancer.succeed(item);

        expect(actualOutcome.enhancement).toBeLessThanOrEqual(20);
    });

    // ******************************************** //

    it('item enhancement increases by 1', () => {
        const item = {
            name: 'pen',
            durability: 40,
            enhancement: 10,
        };

        const expectedOutcome = {
            name: 'pen',
            durability: 40,
            enhancement: 11,
        };

        const actualOutcome = enhancer.succeed(item);

        expect(actualOutcome.enhancement).toBe(expectedOutcome.enhancement);
    });

    // ******************************************** //

    it('item enhancement remains 20 if it was initially 20', () => {
        const item = {
            name: 'pen',
            durability: 40,
            enhancement: 20,
        };

        const expectedOutcome = {
            name: 'pen',
            durability: 40,
            enhancement: 20,
        };

        const actualOutcome = enhancer.succeed(item);

        expect(actualOutcome.enhancement).toBe(expectedOutcome.enhancement);
    });

    // ******************************************** //

    it('item durability is a positive number', () => {
        const item = {
            name: 'pen',
            durability: 40,
            enhancement: 12,
        };

        const actualOutcome = enhancer.succeed(item);

        expect(actualOutcome.durability).toBeGreaterThanOrEqual(0);
    });

    // ******************************************** //

    it('item durability is not changed', () => {
        const item = {
            name: 'pen',
            durability: 40,
            enhancement: 12,
        };

        const expectedOutcome = {
            name: 'pen',
            durability: 40,
            enhancement: 13,
        };

        const actualOutcome = enhancer.succeed(item);

        expect(actualOutcome.durability).toEqual(
            expectedOutcome.durability
        );
    });

    // ******************************************** //
  });

// ----- DESCRIBE FAIL ---------------------------------------------------

  describe('fail', () => {

    it('returns a new item object', () => {
      const item = {
          name: 'cup',
          durability: 60,
          enhancement: 12,
      };

      const expectedOutcome = {
          name: 'cup',
          durability: 55,
          enhancement: 12,
      };

      const actualOutcome = enhancer.fail(item);

      expect(actualOutcome).toEqual(expectedOutcome);
    });

    // ******************************************** //


    it('decrease item durability by 5 if enhancement was less than 15', () => {
      const item = {
          name: 'cup',
          durability: 60,
          enhancement: 12,
      };

      const actualOutcome = enhancer.fail(item);

      expect(actualOutcome.durability).toBe(55);
  });

  // ******************************************** //

  it('decrease item durability by 10 if enhancement was 15 or higher', () => {
      const item = {
          name: 'cup',
          durability: 60,
          enhancement: 15,
      };

      const actualOutcome = enhancer.fail(item);

      expect(actualOutcome.durability).toBe(50);
  });

  // ******************************************** //

  it('decrease item enhancement by 1 if it was greater than 16', () => {
      const item = {
          name: 'cup',
          durability: 60,
          enhancement: 17,
      };

      const actualOutcome = enhancer.fail(item);

      expect(actualOutcome.enhancement).toBe(16);
  });

  // ******************************************** //

    it('item enhancement is a positive number', () => {
        const item = {
            name: 'cup',
            durability: 60,
            enhancement: 12,
        };

        const actualOutcome = enhancer.fail(item);

        expect(actualOutcome.enhancement).toBeGreaterThanOrEqual(0);
    });

    // ******************************************** //

    it('item enhancement is not greater than 20', () => {
        const item = {
            name: 'cup',
            durability: 60,
            enhancement: 12,
        };

        const actualOutcome = enhancer.fail(item);

        expect(actualOutcome.enhancement).toBeLessThanOrEqual(20);
    });

    // ******************************************** //

    it('item durability is a positive number', () => {
        const item = {
            name: 'cup',
            durability: 60,
            enhancement: 12,
        };

        const actualOutcome = enhancer.fail(item);

        expect(actualOutcome.durability).toBeGreaterThanOrEqual(0);
    });

    // ******************************************** //

    it('item durability is not greater than 100', () => {
        const item = {
            name: 'cup',
            durability: 60,
            enhancement: 12,
        };

        const actualOutcome = enhancer.fail(item);

        expect(actualOutcome.durability).toBeLessThanOrEqual(100);
    });

    // ******************************************** //
  });

// ----- DESCRIBE GET ITEM ---------------------------------------------------

  describe('get item', () => {

    it('returns the item provided', () => {
      const item = {
          name: 'cup',
          durability: 40,
          enhancement: 10,
      };

      const actualOutcome = enhancer.get(item);

      expect(actualOutcome).toEqual(item);
    });
    
  });
});