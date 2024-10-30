import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import TopWithArrow from "../Common/TopWithArrow";
import './PersonalData.css';
import InputMask from "react-input-mask";
import universities from "../../../../src/moscow-universities.json";

interface University {
    title: string;
    shortTitle: string;
};

interface PersonalDataType {
    name: string;
    surname: string;
    birthDate: string;
    city: string;
    status: string;
    course: string;
    university: string;
    hobbies: string;
};

const statusOptions = ['Учусь', 'Поступаю', 'Работаю'];
const courseOptions = ['1 курс бакалавриата', '2 курс бакалавриата', '3 курс бакалавриата', '4 курс бакалавриата', '1 курс магистратуры', '2 курс магистратуры'];

export default function PersonalData() {
    const [statusOpen, setStatusOpen] = useState(false);
    const [courseOpen, setCourseOpen] = useState(false);
    const [universityOpen, setUniversityOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [personalData, setPersonalData] = useState<PersonalDataType>({
        name: '',
        surname: '',
        birthDate: '',
        city: '',
        status: '',
        course: '',
        university: '',
        hobbies: '',
    });

    const dropdownStatusRef = useRef<HTMLDivElement>(null);
    const dropdownCourseRef = useRef<HTMLDivElement>(null);
    const universityDropdownRef = useRef<HTMLDivElement>(null);

    const universitiesArray: University[] = Object.values(universities);
    const filteredUniversities = universitiesArray.filter((university) =>
        university.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        university.shortTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleStatusDropdown = () => setStatusOpen(!statusOpen);
    const toggleCourseDropdown = () => setCourseOpen(!courseOpen);
    const toggleUniversityDropdown = () => setUniversityOpen(!universityOpen);

    const handleStatusClick = (status: string) => {
        setPersonalData({ ...personalData, status });
        setStatusOpen(false);
    };

    const handleCourseClick = (course: string) => {
        setPersonalData({ ...personalData, course });
        setCourseOpen(false);
    };

    const handleUniversityClick = (universityShortTitle: string) => {
        setPersonalData({ ...personalData, university: universityShortTitle });
        setSearchTerm(universityShortTitle);
        setUniversityOpen(false);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPersonalData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownStatusRef.current && !dropdownStatusRef.current.contains(event.target as Node)) {
            setStatusOpen(false);
        }
        if (dropdownCourseRef.current && !dropdownCourseRef.current.contains(event.target as Node)) {
            setCourseOpen(false);
        }
        if (universityDropdownRef.current && !universityDropdownRef.current.contains(event.target as Node)) {
            setUniversityOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const save = async () => {
        // Функция для сохранения персональных данных
        console.log(personalData);
    };

    return (
        <div className="personalDataMain">
            <TopWithArrow link="/profile" />
            <div className="personalDataContent">
                <p className="personalDataTitle">Личные данные</p>

                <div className="personalDataLilColumn">
                    <p className="personalDataSubtitle">Имя</p>
                    <input
                        className="persondalDataInput"
                        name="name"
                        value={personalData.name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="personalDataLilColumn">
                    <p className="personalDataSubtitle">Фамилия</p>
                    <input
                        className="persondalDataInput"
                        name="surname"
                        value={personalData.surname}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="personalDataLilColumn">
                    <p className="personalDataSubtitle">Дата рождения</p>
                    <InputMask
                        mask="99.99.9999"
                        className="persondalDataInput"
                        name="birthDate"
                        value={personalData.birthDate}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="personalDataLilColumn">
                    <p className="personalDataSubtitle">Город</p>
                    <input
                        className="persondalDataInput"
                        name="city"
                        value={personalData.city}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="personalDataLilColumn">
                    <p className="personalDataSubtitle">Статус</p>
                    <div className="personalDataDropdown" ref={dropdownStatusRef}>
                        <button className="personalDataDropdownButton" onClick={toggleStatusDropdown}>
                            <p className="personalDataDropdownButtonText">{personalData.status || ''}</p>
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L13 1" stroke="#4B2D10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        {statusOpen && (
                            <ul className="personalDataDropdownMenu">
                                {statusOptions.map((status, index) => (
                                    <div key={index} className="personalDataDropdownMenuBox">
                                        <li className="personalDataDropdownMenuItem" onClick={() => handleStatusClick(status)}>{status}</li>
                                        {statusOptions.length - 1 !== index && <hr className="personalDataDropdownMenuItemHr" />}
                                    </div>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <div className="personalDataLilColumn">
                    <p className="personalDataSubtitle">Наименование вуза</p>
                    <div className="personalDataDropdown" ref={universityDropdownRef}>
                        <div className="personalDataDropdownLine">
                            <input
                                className="persondalDataInput"
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onClick={toggleUniversityDropdown}
                            />
                            <svg className="persondalDataInputIcon" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L13 1" stroke="#4B2D10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {universityOpen && (
                            <ul className="personalDataDropdownMenu">
                                {filteredUniversities.map((university, index) => (
                                    <div key={index} className="personalDataDropdownMenuBox">
                                        <li className="personalDataDropdownMenuItem" onClick={() => handleUniversityClick(university.shortTitle)}>
                                            {university.shortTitle} - {university.title}
                                        </li>
                                        {filteredUniversities.length - 1 !== index && <hr className="personalDataDropdownMenuItemHr" />}
                                    </div>
                                ))}
                                {filteredUniversities.length === 0 && (
                                    <div className="personalDataDropdownMenuBox">
                                        <li className="personalDataDropdownMenuItem">Ничего не найдено</li>
                                    </div>
                                )}
                            </ul>
                        )}
                    </div>
                </div>

                <div className="personalDataLilColumn">
                    <p className="personalDataSubtitle">Курс обучения</p>
                    <div className="personalDataDropdown" ref={dropdownCourseRef}>
                        <button className="personalDataDropdownButton" onClick={toggleCourseDropdown}>
                            <p className="personalDataDropdownButtonText">{personalData.course || ''}</p>
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L13 1" stroke="#4B2D10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        {courseOpen && (
                            <ul className="personalDataDropdownMenu">
                                {courseOptions.map((course, index) => (
                                    <div key={index} className="personalDataDropdownMenuBox">
                                        <li className="personalDataDropdownMenuItem" onClick={() => handleCourseClick(course)}>{course}</li>
                                        {courseOptions.length - 1 !== index && <hr className="personalDataDropdownMenuItemHr" />}
                                    </div>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <div className="personalDataLilColumn">
                    <p className="personalDataSubtitle">Хобби</p>
                    <textarea
                        className="persondalDataTextArea"
                        name="hobbies"
                        value={personalData.hobbies}
                        onChange={handleInputChange}
                    />
                </div>

                <button className="personalDataButton" onClick={save} >Сохранить изменения</button>
            </div>
        </div>
    );
}
