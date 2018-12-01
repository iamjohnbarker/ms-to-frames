const msToTimecode = require("ms-to-timecode");
const timecode = require("timecode").Timecode;

module.exports.convert = (ms, fr) => {
	const timecodeString = msToTimecode(ms, fr);
	const tc = timecode.init({ framerate: fr, timecode: timecodeString });
	const converted = tc.frame_count;
	return converted;
};
