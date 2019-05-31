module.exports = function main(inputs) {
    var fee1 = dfee(inputs['distance']);
    var fee2 = wfee(inputs['parkTime']);

    return Math.round(fee1+fee2);
};

function dfee (distance) {
	var fee = 6;
	fee += distance > 2 ? (distance-2)*0.8 : 0;
	fee += distance > 8 ? (distance-8)*0.4 : 0;
	return fee;
};

function wfee (time) {
	return 0.25*time;
};
