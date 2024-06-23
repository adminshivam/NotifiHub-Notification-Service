import accumulatorRepository from "../models/accumulator.model";

const accumulatorService = {
  getCustomerData: async () => {
   return await accumulatorRepository.accumulatorModel();
 }
} 

export default accumulatorService;
