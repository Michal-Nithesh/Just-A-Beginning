const HumanTimer = require("../src/index");

jest.useFakeTimers();

describe("HumanTimer", () => {
    it("returns an object instance", () => {
        const timer = new HumanTimer();
        expect(timer).toBeInstanceOf(HumanTimer);
    });

    it("returns a proper time", () => {
        const timer = new HumanTimer({ seconds: 7198 });
        const time = timer.hours + timer.minutes + timer.seconds;
        expect(time).toEqual("015958");
    });

    it("rounds up the numbers by default", () => {
        const timer = new HumanTimer({ seconds: 5 });
        expect(timer.seconds).toEqual("05");
    });

    it("doesnt round up the numbers with 'zeroes' prop set to false", () => {
        const timer = new HumanTimer({ seconds: 5, zeroes: false });
        expect(timer.seconds).toEqual("5");
    });

    it("correctly advances time", () => {
        const timer = new HumanTimer({ seconds: 10 }).start();

        jest.advanceTimersByTime(5000);
        expect(timer.durationLeft).toEqual(5);
    });

    it("can be stopped", () => {
        const onTick = jest.fn();
        const timer = new HumanTimer({ seconds: 10, onTick }).start();

        jest.advanceTimersByTime(5000);
        timer.stop();
        jest.advanceTimersByTime(2000);

        expect(timer.durationLeft).toEqual(5);
    });

    it("can be restarted", () => {
        const onTick = jest.fn();
        const timer = new HumanTimer({ seconds: 10, onTick }).start();

        jest.advanceTimersByTime(5000);
        timer.restart(7);
        jest.advanceTimersByTime(1000);

        expect(timer.durationLeft).toEqual(6);
    });
});