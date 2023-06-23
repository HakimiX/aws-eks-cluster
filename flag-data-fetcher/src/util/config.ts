import * as dotenv from 'dotenv';

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
    case 'local':
        path = `${__dirname}/../../.env.local`;
        break;
    default:
        path = `${__dirname}/../../.env.local`;
        break;
}
dotenv.config({ path });

export const {
    PORT,
    COUNTRY_API_BASE_URL,
    LOG_LEVEL_DEFAULT,
} = process.env;
