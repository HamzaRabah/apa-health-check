import {default as Redis} from "ioredis"

export class StoreService {

  private static readonly redisPassword = process.env["REDIS_PASSWORD"];
  private static readonly redisHost = process.env["REDIS_HOST"];
  private static readonly redisPort = process.env["REDIS_PORT"];

  public static async set(key: string, value: string, secondsToExpire: number | undefined = undefined) {
    if (secondsToExpire) {
      await this._redisInstance().setex(key, secondsToExpire, value);
    } else {
      await this._redisInstance().set(key, value);
    }
  }

  public static get(key: string) {
    return this._redisInstance().get(key);
  }

  private static _redisInstance() {
    return new Redis(`rediss://:${this.redisPassword}@${this.redisHost}:${this.redisPort}`);
  }
}
