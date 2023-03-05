const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the key when given event", () => {
    const event = {
      "partitionKey": "mock key"
    }
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe("mock key");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns a new key when given event with no partition key", () => {
    const event = {}
    const newKey = deterministicPartitionKey(event);
    expect(newKey).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns a new partition key when partition key is not a string", () => {
    const event = {
      "partitionKey": false
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("51a5f43b933ce152103a4789a17f1cf958e0b5e1c793082db6a6c74dd3f04c69ad8f558e28cf7c3eac61af4e484741f095129e815c4de4fdd30e3cd6c4e3c00f");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns a new partition key when partition key length is over the limit", () => {
    const event = {
      "partitionKey": "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a86251a5f43b933ce152103a4789a17f1cf958e0b5e1c793082db6a6c74dd3f04c69ad8f558e28cf7c3eac61af4e484741f095129e815c4de4fdd30e3cd6c4e3c00fA"
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("687c1bbe7dc212d9a354b956cfa9672e6b1fbc812d89a43b1e344f1bdcc273d9a91f317cec58a1f13465f97d497f31f9fb33fbe5aeebaa7881fa8b41cff19428");
  });
});