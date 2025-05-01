import log4js from 'log4js';

log4js.configure({
    appenders: {
        out: { type: "stdout" },
        app: {
            type: "file",
            layout: {
                type: "pattern",
                pattern: "[%d{ISO8601_WITH_TZ_OFFSET_FORMAT}] %-5p %f %C %m"
            },
            filename: "logs/console.log",
            compress: true,
            keepFileExt: true,
            pattern: "-yyyy-MM-dd",
            daysToKeep: 30
        }
    },
    categories: {
        default: { appenders: ["out", "app"], level: "all", enableCallStack: true }
    }
});

export default log4js.getLogger();
