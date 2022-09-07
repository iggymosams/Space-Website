import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Stars from '../../components/stars/stars';
import Countdown from 'react-countdown';
import './launches.css';
import { Launch as LaunchType, LaunchData, LaunchPadType } from '../../types';

const API_URL = `https://api.spacexdata.com/v4/launches/upcoming`;

const Launches = () => {
    const [launchData, setLaunchData] = useState<LaunchData[]>();

    useEffect(() => {
        var url = `${API_URL}`;
        console.log(url);
        document.title = 'Launches | IGGYMOSAMS SPACE WEBSITE';

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setLaunchData(data);
            });
    }, []);
    // var launch = launchData?.results[1];

    return (
        <div className="launches">
            <Navbar />
            {launchData?.map((launch, i) => {
                if (launch.links.patch.small != null) {
                    var today = new Date();
                    var date = new Date(launch.date_utc);
                    if (date > today) {
                        return (
                            <Launch
                                img={launch.links.patch.small}
                                title={launch.name}
                                provider={launch.payloads[1]}
                                pad={launch.launchpad}
                                date={new Date(launch.date_utc)}
                            />
                        );
                    }
                } else {
                    return (
                        <Launch
                            img="https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg"
                            title={launch.name}
                            provider={launch.payloads[1]}
                            pad={launch.launchpad}
                            date={new Date(launch.date_utc)}
                        />
                    );
                }
            })}
            {/* {launch && (

            )} */}
            {/* <Launch /> */}
            <Stars />
        </div>
    );
};

function Launch(props: LaunchType) {
    // var PadData: LaunchPadType;
    const [padData, setPadData] = useState<LaunchPadType>();
    useEffect(() => {
        var pad = props.pad;
        var url = `https://api.spacexdata.com/v4/launchpads/${pad}`;
        fetch(url)
            .then((resp) => resp.json())
            .then(async (data: any) => {
                setPadData(data);
            });
    }, []);
    return (
        <div className="launch">
            <img
                className="launch__img"
                src={props.img}
                alt={`Error Loading: ${props.title}`}
            />
            <div className="launch__details">
                <div className="launch__title">{props.title}</div>
                <div className="launch__providerStatus">
                    {/* <span className="launch__provider">{props.provider}</span> */}
                    {/* <span className="launch__status">{props.status}</span> */}
                </div>
                <div className="launch__pad">
                    {padData?.name}, {padData?.locality}, {padData?.region}
                </div>
                <div className="launch__countdown">
                    T- <Countdown date={props.date} />
                    <div className="launch__date">
                        {props.date.toLocaleDateString()}{' '}
                        {props.date.toLocaleTimeString()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Launches;
