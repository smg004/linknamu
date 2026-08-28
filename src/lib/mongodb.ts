import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI 환경 변수가 설정되어 있지 않습니다.");
}

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // 개발 모드의 HMR로 인해 커넥션이 여러 번 생성되지 않도록 전역에 캐싱한다.
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = new MongoClient(uri).connect();
}

export default clientPromise;

export async function getClicksCollection() {
  const client = await clientPromise;
  return client.db("linknamu").collection<{ linkId: string; count: number }>("clicks");
}
