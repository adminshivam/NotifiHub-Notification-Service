import { ILooseObject } from "../dtos/common.dto";
import accumulatorRepository from "../repositories/accumulator.repository";
import RedisCacheManager from "../utils/redis.util";

const accumulatorService = {
  getCustomerData: async (): Promise<Array<ILooseObject>> => {
    const value = await RedisCacheManager.getKey("abc");
    if (value) {
      return value;
    }
    const data: Array<ILooseObject> = await accumulatorRepository.accumulatorModel();
    await RedisCacheManager.setKey("abc", data);
    return data;
  },
};

export default accumulatorService;
