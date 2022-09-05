import React, { useCallback, useEffect, useRef, useState } from 'react';
import { APODData } from '../../types';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Container, Engine } from 'tsparticles-engine';
import './APOD.css';
import Navbar from '../../components/navbar/navbar';
import DatePicker from 'react-date-picker';
import Stars from '../../components/stars/stars';

const API_URL = `https://apod.ellanan.com/api`;
// const API_URL = `https://apod.ellanan.com/api?date=2022-02-28`;

const APOD = () => {
    const [apodData, setApodData] = useState<APODData>();
    const [apodDate, setApodDate] = useState<Date>(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const image = useRef<HTMLDivElement>(null);

    useEffect(() => {
        var url = `${API_URL}?date=${apodDate.toISOString().substring(0, 10)}`;
        getAPOD(url);
    }, [apodData]);

    useEffect(() => {
        if (image.current) {
            let height = image.current.clientHeight;
            let width = image.current.clientWidth;
            setHeight(height);
            setWidth(width);
        }
    }, []);
    React.useEffect(() => {
        function handleResize() {
            if (image.current) {
                let height = image.current.clientHeight;
                let width = image.current.clientWidth;
                setHeight(height);
                setWidth(width);
            }
        }

        window.addEventListener('resize', handleResize);
    });
    const getAPOD = (URL: string) => {
        fetch(URL)
            .then((resp) => resp.json())
            .then((data) => setApodData(data));
    };

    const handleChange = (e: any) => {
        setIsOpen(!isOpen);
        setApodDate(e);
        console.log(apodDate);
    };
    const handleClick = (e: any) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };
    const handleDateClick = (e: any) => {
        if (apodDate === null) {
            return;
        }
        var url = `${API_URL}?date=${apodDate.toISOString().substring(0, 10)}`;
        getAPOD(url);
    };

    // if (apodData === undefined) {
    //     return <div>Loading APOD data...</div>;
    // }
    return (
        <div className="apod">
            <Navbar />
            <div className="apod__container">
                <div className="apod__card">
                    {apodData !== undefined ? (
                        <img
                            src={apodData.url}
                            alt={`Error Loading Image: ${apodData.title}`}
                            className="apod__image"
                        />
                    ) : (
                        <span>Loading Image</span>
                    )}
                </div>
                <div className="apod__card fill">
                    {apodData !== undefined ? (
                        <div className="apod__title">{apodData.title}</div>
                    ) : (
                        <div className="apod__title">Loading Title</div>
                    )}
                    {apodData !== undefined ? (
                        <div className="apod__date">{apodData.date}</div>
                    ) : (
                        <div className="apod__date">Loading Date</div>
                    )}
                    {apodData !== undefined ? (
                        <div className="apod__explanation">
                            {apodData.explanation}
                        </div>
                    ) : (
                        <div className="apod__explanation">
                            Loading Explanation
                        </div>
                    )}
                    {apodData?.copyright && (
                        <footer className="apod__copyright">
                            © {apodData.copyright}
                        </footer>
                    )}
                </div>
            </div>
            <div className="apod__controls">
                <button
                    className="apod__btn"
                    onClick={(e) => {
                        var first = new Date(1995, 5, 21);
                        var date = new Date(apodDate);
                        date.setDate(date.getDate() - 1);
                        if (date < first) {
                            apodDate.setDate(apodDate.getDate() + 1);
                            setApodDate(apodDate);
                        } else {
                            console.log('future');
                        }
                        apodDate.setDate(apodDate.getDate() - 1);
                        setApodDate(apodDate);
                    }}
                >
                    Previous Day
                </button>
                <div className="apod__datepick">
                    <DatePicker
                        onChange={(v: React.SetStateAction<Date>) => {
                            if (v) {
                                setApodDate(v);
                            }
                        }}
                        value={apodDate}
                        maxDate={new Date()}
                        minDate={new Date(1995, 5, 21)}
                        clearIcon={<></>}
                    />
                </div>
                <button
                    className="apod__btn"
                    onClick={(e) => {
                        var today = new Date();
                        today.setHours(23, 59, 59, 998);
                        var date = new Date(apodDate);
                        date.setDate(date.getDate() + 1);
                        if (date < today) {
                            apodDate.setDate(apodDate.getDate() + 1);
                            setApodDate(apodDate);
                        } else {
                            console.log('future');
                        }
                    }}
                >
                    Next Day
                </button>
            </div>
            <Stars />
        </div>
    );
};

export default APOD;
