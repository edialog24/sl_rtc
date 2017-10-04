export declare const levels: string[];
export declare class Logger {
    module: string;
    output: (msg: string) => any;
    consoleLogging: boolean;
    constructor(module: string, output: (msg: string) => any, consoleLogging: boolean);
    static padRight(value: string, length: number): string;
    printToConsole(level: number, messages: string[]): void;
    logImpl(lineStart: string, msg: any, indent: number, currentdepth: number): void;
    log(level: number, args: any[]): void;
    sub(subModule: string, subConsoleLogging?: boolean): Logger;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
}
