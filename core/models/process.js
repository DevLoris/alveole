class Process {
    constructor(delay = 5, duration = 10, callback = () => {}, autostart = false) {
        this.delay = delay;
        this.duration = duration;
        this.processId = null;
        this.t = 0;

        this.callback = callback;

        if (autostart)
            this.exec();
    }

    callback() { }

    cancel() {
    }

    exec() {
        this.processId = setInterval(() => {
            this.callback();

            this.t++;
            if(this.t >= this.duration)
                this._finished();
        }, this.delay);
    }

    _finished() {
        clearInterval(this.processId);
        this.processId = null;
        this.cancel();
    }
}

module.exports.Process = Process;