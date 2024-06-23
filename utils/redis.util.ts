import Redis from "ioredis";

// Create a Redis client
const redis = new Redis({
  host: "redis-14882.c330.asia-south1-1.gce.redns.redis-cloud.com", // Redis server hostname
  port: 14882, // Redis server port
  username: "adminshivam", // Password (if needed)
  password: "MKshivam@99", // Password (if needed)
  db: 0, // Default DB number
});

redis.on("connect", () => {
  console.log("Connected to Redis");
});

redis.on("error", (err) => {
  console.error("Redis error: ", err);
});

const RedisCacheManager = {
  setKey: async (key: string, value: any) => {
    try {
      // Set a value
      await redis.set(key, JSON.stringify(value));
      console.log("Key set", { key, value });
    } catch (err) {
      console.error("Error during Redis operations:", err);
    }
  },
  getKey: async (key: string) => {
    try {
      // Get a value
      const value = await redis.get(key);
      return value ? JSON.parse(value) : null;
    } catch (err) {
      console.error("Error during Redis operations:", err);
    }
  },
  deleteKey: async (key: string) => {
    try {
      // Delete a value
      await redis.del(key);
      console.log("Key deleted ", key);
    } catch (err) {
      console.error("Error during Redis operations:", err);
    }
  },
};

export default RedisCacheManager;
