
const { codeLetter } = require("./index")

test("fails if same letter as the input is returned when encoding", () => {
    expect(codeLetter("a", 1, true)).toBe("b");
    expect(codeLetter("a", 5, true)).toBe("f");
});

test("fails if same letter is returned when decoding as when encoding", () => {
    expect(codeLetter("a", 1, false)).toBe("z")
});

test("fails if non-letter symbols or spaces are not ignored", () => {
    expect(codeLetter("!", 1, true)).toBe("!")
    expect(codeLetter("1", 1, true)).toBe("1")
});

//=============================

const { calculateNewIndex } = require("./index")

test("fails if same index number is returned", () =>{
    expect(calculateNewIndex("a", 1, true)).toBe(1);
    expect(calculateNewIndex("c", 1, true)).toBe(3);
    expect(calculateNewIndex("c", 1, false)).toBe(1);
    expect(calculateNewIndex("a", 20, true)).toBe(20);
});

test("fails if new index number is less than 0 or more than 25", () =>{
    expect(calculateNewIndex("f", 23, true)).toBe(2);
    expect(calculateNewIndex("f", 23, false)).toBe(8);
});
 

