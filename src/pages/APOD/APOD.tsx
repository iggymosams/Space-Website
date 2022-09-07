import React, { useEffect, useState } from 'react';
import { APODData } from '../../types';
import { useNavigate } from 'react-router-dom';
import './APOD.css';
import Navbar from '../../components/navbar/navbar';
import DatePicker from 'react-date-picker';
import Stars from '../../components/stars/stars';

const API_URL = `https://apod.ellanan.com/api`;
// const API_URL = `https://apod.ellanan.com/api?date=2022-02-28`;

const APOD = ({ queryDate }: any) => {
    console.log('QUERY: ', queryDate);

    const navigate = useNavigate();

    const [apodData, setApodData] = useState<APODData>();
    const [apodDate, setApodDate] = useState<Date>(
        queryDate ? new Date(queryDate) : new Date()
    );

    useEffect(() => {
        updateDate();
    }, []);

    function updateDate() {
        console.log(apodDate.toISOString());
        navigate(`/apod?date=${apodDate.toISOString().substring(0, 10)}`);
        document.title = `${apodDate.toLocaleDateString()} APOD | IGGYMOSAMS SPACE WEBSITE`;
        var url = `${API_URL}?date=${apodDate.toISOString().substring(0, 10)}`;
        getAPOD(url);
    }

    const getAPOD = (URL: string) => {
        fetch(URL)
            .then((resp) => resp.json())
            .then((data) => setApodData(data))
            .catch((e) => {});
    };

    return (
        <div className="apod">
            <Navbar />
            <div className="apod__container">
                <div className="apod__card">
                    {apodData !== undefined ? (
                        <img
                            src={apodData.url}
                            alt={`Error Loading: ${apodData.title}`}
                            className="apod__image"
                        ></img>
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
                        updateDate();

                        var oldest = new Date(2000, 0, 1);
                        var date = new Date(apodDate);
                        if (date > oldest) {
                            apodDate.setDate(apodDate.getDate() - 1);
                            setApodDate(apodDate);
                            updateDate();
                        } else {
                            console.log('past');
                        }
                    }}
                >
                    Previous Day
                </button>
                <div className="apod__datepick">
                    <DatePicker
                        onChange={setApodDate}
                        value={apodDate}
                        maxDate={new Date()}
                        minDate={new Date(2000, 0, 1)}
                        format={'y-MM-dd'}
                        clearIcon={<></>}
                        calendarType="US"
                        disabled
                    />
                </div>
                <button
                    className="apod__btn"
                    onClick={(e) => {
                        var today = new Date();
                        var date = new Date(apodDate);
                        if (date < today) {
                            apodDate.setDate(apodDate.getDate() + 1);
                            setApodDate(apodDate);
                            updateDate();
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
