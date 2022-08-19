var busyStudent = function(startTime, endTime, queryTime) {
    var k = 0;
    for(var i = 0; i < startTime.length; i++){
        if(endTime[i] >= queryTime && startTime[i] <= queryTime){
            k++;
        }
    }
    return k;
};