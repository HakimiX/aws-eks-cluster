import * as log4js from 'log4js';
import { LOG_LEVEL_DEFAULT } from './config';

log4js.configure({
    appenders: {
        out: { type: 'stdout' },
    },
    categories: {
        default: { appenders: ['out'], level: LOG_LEVEL_DEFAULT || 'info' },
    },
});

const logger = log4js.getLogger();
logger.info(`Default log level: ${logger.level}`);
export default logger;
