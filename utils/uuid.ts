import { randomBytes } from "crypto";

const UUID = (size: number = 4, encoding: BufferEncoding | undefined = "hex") =>
  randomBytes(size).toString(encoding);

export default UUID;
