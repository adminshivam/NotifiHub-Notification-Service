import accumulatorRepository from "../repositories/accumulator.repository";
import RedisCacheManager from "../utils/redis.util";

const accumulatorService = {
  getCustomerData: async () => {
    await RedisCacheManager.deleteKey("abc");
    const value = await RedisCacheManager.getKey("abc");
    if (value) {
      console.log(JSON.stringify(value));
    } else {
      const data = await accumulatorRepository.accumulatorModel();
      console.log("Data to set in redis cache ", data);
      await RedisCacheManager.setKey("abc", data);
      const value = await RedisCacheManager.getKey("abc");
      console.log(value);
    }
    return await accumulatorRepository.accumulatorModel();
  },
};

export default accumulatorService;
