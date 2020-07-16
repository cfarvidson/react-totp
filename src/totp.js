import crypto from "crypto";
import base32 from "hi-base32";

export const generateSecret = (length = 20) => {
  const randomBuffer = crypto.randomBytes(length);
  return base32.encode(randomBuffer).replace(/=/g, "");
};

const dynamicTruncationFn = (hmacValue) => {
  const offset = hmacValue[hmacValue.length - 1] & 0xf;

  return (
    ((hmacValue[offset] & 0x7f) << 24) |
    ((hmacValue[offset + 1] & 0xff) << 16) |
    ((hmacValue[offset + 2] & 0xff) << 8) |
    (hmacValue[offset + 3] & 0xff)
  );
};

const generateHOTP = (secret, counter) => {
  const decodedSecret = base32.decode.asBytes(secret);
  const buffer = Buffer.alloc(8);
  for (let i = 0; i < 8; i++) {
    buffer[7 - i] = counter & 0xff;
    counter = counter >> 8;
  }

  // Step 1: Generate an HMAC-SHA-1 value
  const hmac = crypto.createHmac("sha1", Buffer.from(decodedSecret));
  hmac.update(buffer);
  const hmacResult = hmac.digest();

  // Step 2: Generate a 4-byte string (Dynamic Truncation)
  const code = dynamicTruncationFn(hmacResult);

  // Step 3: Compute an HOTP value
  return code % 10 ** 6;
};

export const generateTOTP = (secret, window = 0) => {
  const counter = Math.floor(Date.now() / 30000);
  return generateHOTP(secret, counter + window);
};
