type Condition = { field: string; operator: string; value: any };
type QueryParams = { [key: string]: any };

class QueryBuilder {
  private query: string = '';
  private conditions: Condition[] = [];
  private tableName: string | null = null;

  table(tableName: string): QueryBuilder {
    this.tableName = tableName;
    return this;
  }

  select(fields: string[]): QueryBuilder {
    if (!this.tableName) throw new Error("Table name is not specified");
    const fieldsStr = fields.join(', ');
    this.query = `SELECT ${fieldsStr} FROM ${this.tableName}`;
    return this;
  }

  insert(data: QueryParams): QueryBuilder {
    if (!this.tableName) throw new Error("Table name is not specified");
    const fields = Object.keys(data).join(', ');
    const values = Object.values(data).map(value => this.sanitize(value)).join(', ');
    this.query = `INSERT INTO ${this.tableName} (${fields}) VALUES (${values})`;
    return this;
  }

  update(data: QueryParams): QueryBuilder {
    if (!this.tableName) throw new Error("Table name is not specified");
    const updates = Object.entries(data)
      .map(([key, value]) => `${key} = ${this.sanitize(value)}`)
      .join(', ');
    this.query = `UPDATE ${this.tableName} SET ${updates}`;
    return this;
  }

  delete(): QueryBuilder {
    if (!this.tableName) throw new Error("Table name is not specified");
    this.query = `DELETE FROM ${this.tableName}`;
    return this;
  }

  where(field: string, operator: string, value: any): QueryBuilder {
    if (!field || !operator) throw new Error("Invalid condition");
    this.conditions.push({ field, operator, value });
    return this;
  }

  build(): string {
    if (!this.query) throw new Error("Query is not initialized");

    if (this.conditions.length > 0) {
      const whereClause = this.conditions
        .map(condition => `${condition.field} ${condition.operator} ${this.sanitize(condition.value)}`)
        .join(' AND ');
      this.query += ` WHERE ${whereClause}`;
    }
    return this.query;
  }

  private sanitize(value: any): string {
    if (typeof value === 'string') {
      return `'${value.replace(/'/g, "''")}'`; // Escape single quotes
    }
    return value.toString();
  }
}

// Export the QueryBuilder class
export default QueryBuilder;
