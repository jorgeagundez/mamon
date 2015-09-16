$(document).ready(function () {
    $('.guess').on('click', function (e) {
        e.preventDefault();
        var urlChallenge = 'http://aerial-valor-93012.appspot.com/challenge';
        $.getJSON(urlChallenge, function (challenge) {
            var sum = challenge.values.reduce(function (prev, current) {
                return prev + current;
            });

            var urlSolution = urlChallenge + '/' + challenge.token + '/' + sum;
            $.getJSON(urlSolution, function (solution) {
                var solutionBox = $('.solution-wrap').find('.solution');
                solutionBox.empty();
                solutionBox.append(solution.answer);
                $('.solution-wrap').fadeTo('slow', 1);
            });
        });
    });
});
