import { getMySQLConnection } from "../utils/mysql.util";
import QueryBuilder from "../utils/queryBuilder";

const accumulatorRepository = {
  accumulatorModel: async () => {
    const connection = await getMySQLConnection();
    const qb = new QueryBuilder();

    // SELECT query
    const selectQuery = qb
      .table("customer_data")
      .select(["id", "name"])
      .build();
    console.log("SELECT Query:", selectQuery);

    const [rows, fields] = await connection.execute(selectQuery);
    return rows;
  },
};

export default accumulatorRepository;
