import { jwtVerify, SignJWT } from "jose";

export const getJetSecretKey = () => {
  const secret = process.env.ACCESS_TOKEN_KEY;

  if (!secret || secret.length === 0) {
    throw new Error("Secret Key not Found");
  }

  return secret;
};

export const VerifyToken = async (token) => {
  try {
    const verify = await jwtVerify(
      token,
      new TextEncoder().encode(getJetSecretKey())
    );

    return verify.payload;
  } catch (error) {
    throw new Error("Your token has expired");
  }
};
