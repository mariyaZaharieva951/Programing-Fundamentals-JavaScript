function attachEvents() {
    let input = document.getElementById('location');
    let button = document.getElementById('submit');
    let divDisplay = document.getElementById('forecast');
    let divCurrent = document.getElementById('current');
    let divForecast = document.createElement('div');
    divForecast.classList = 'forecast';
    let divUpComing = document.getElementById('upcoming');
    let divForecastInfo = document.createElement('div');
    divForecastInfo.classList = 'forecast-info';
    let sunny = "&#x2600";
    let partlySunny = "&#x26C5";
    let overcast = "&#x2601";
    let rain = "&#x2614";
    let degrees = "&#176";
    let code = '';

    button.addEventListener('click', weather);

    function weather(event) {

        divDisplay.style.display = 'inline';

        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            .then((response) => response.json())
            .then((data) => {
                data.forEach(location => {
                    if (location.name === input.value) {     //ако името на получения обект съвпада с въведеното
                        code = location.code;
                    }
                });
                fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
                    .then((response) => response.json())
                    .then((data) => {
                        let condition = data.forecast.condition;

                        let spanSymbol = document.createElement('span');
                        spanSymbol.classList = 'condition symbol';
                        let span = document.createElement('span');
                        span.classList = 'condition';

                        let spanCity = document.createElement('span');
                        spanCity.classList = 'forecast-data';
                        spanCity.textContent = data.name;
                        let spanTemperature = document.createElement('span');
                        spanTemperature.classList = 'forecast-data';
                        spanTemperature.innerHTML = `${data.forecast.low}${degrees}/${data.forecast.high}${degrees}`;
                        let spanCondition = document.createElement('span');
                        spanCondition.classList = 'forecast-data';
                        spanCondition.textContent = condition;

                        if (condition === 'Sunny') {
                            spanSymbol.innerHTML = sunny;
                        } else if (condition === 'Partly  sunny') {
                            spanSymbol.innerHTML = partlySunny;
                        } else if (condition === "Overcast") {
                            spanSymbol.innerHTML = overcast;
                        } else if (condition === 'Rain') {
                            spanSymbol.innerHTML = rain;
                        }
                        span.appendChild(spanCity);
                        span.appendChild(spanTemperature);
                        span.appendChild(spanCondition);

                        divForecast.appendChild(spanSymbol);
                        divForecast.appendChild(span);

                        divCurrent.appendChild(divForecast);

                    })
                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
                    .then((response) => response.json())
                    .then((data) => {
                        let days = data.forecast;

                        days.forEach((day) => {
                            let condition = day.condition;

                            let span = document.createElement('span');
                            span.classList = 'upcoming'

                            let spanSymbol = document.createElement('span');
                            spanSymbol.classList = 'symbol';
                            if (condition === 'Sunny') {
                                spanSymbol.innerHTML = sunny;
                            } else if (condition === 'Partly  sunny') {
                                spanSymbol.innerHTML = partlySunny;
                            } else if (condition === "Overcast") {
                                spanSymbol.innerHTML = overcast;
                            } else if (condition === 'Rain') {
                                spanSymbol.innerHTML = rain;
                            }

                            let spanTemperature = document.createElement('span');
                            spanTemperature.classList = 'forecast-data';
                            spanTemperature.innerHTML = `${day.low}${degrees}/${day.high}${degrees}`;
                            let spanCondition = document.createElement('span');
                            spanCondition.classList = 'forecast-data';
                            spanCondition.textContent = day.condition;

                            let span2 = document.createElement('span');
                            span.classList = 'upcoming';
                            let span3 = document.createElement('span');
                            span.classList = 'upcoming';

                            span.appendChild(spanSymbol);
                            span.appendChild(spanTemperature);
                            span.appendChild(spanCondition);

                            divForecastInfo.appendChild(span);
                            divForecastInfo.appendChild(span2);
                            divForecastInfo.appendChild(span3);

                            divUpComing.appendChild(divForecastInfo);

                        })
                    })
            });
    }
}

attachEvents();