const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let keyCandidate;

if (!event) return TRIVIAL_PARTITION_KEY;

  if (event.partitionKey) {
    keyCandidate = event.partitionKey;
  } else {
    const data = JSON.stringify(event);
    keyCandidate = hashKey(data);
  }
  
  return  validatePartitionKey(keyCandidate, MAX_PARTITION_KEY_LENGTH);
};

function validatePartitionKey(keyCandidate, MAX_PARTITION_KEY_LENGTH) {
  if (typeof keyCandidate !== "string") {
    keyCandidate = JSON.stringify(keyCandidate);
  }

  if (keyCandidate.length > MAX_PARTITION_KEY_LENGTH) {
    keyCandidate = hashKey(keyCandidate);
  }
  return keyCandidate;
}

function hashKey(keyCandidate) {
  return crypto.createHash("sha3-512").update(keyCandidate).digest("hex");
}
