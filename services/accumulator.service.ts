import { getMySQLConnection } from "../utils/mysql.util";

export const accumulator = async () => {
  const connection = await getMySQLConnection();
    
};
