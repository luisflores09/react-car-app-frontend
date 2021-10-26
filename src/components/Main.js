import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';

const Main = (props) => {
    const [car, setCar] = useState(null);

    const URL = 'https://react-car-app-backend.herokuapp.com/cars/'

    const getCar = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setCar(data);
    };

    const createCar = async (car) => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(car),
        });
        getCar();
    };

    useEffect(() => getCar(), []);


    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Index car={car} createCar={createCar} />
                </Route>
                <Route path='/cars/:id' render={(rp) => <Show {...rp} />} />
            </Switch>
        </main>
    );
}


export default Main;